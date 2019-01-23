/**
 * 登录模块
 */
import React from 'react';
import { Form, Icon, Input, message, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
	componentWillMount() {
		const { receiveData } = this.props;
		receiveData(null, 'auth');
	}
	componentDidUpdate() {
		const { auth: nextAuth = {}, history } = this.props;
		if (nextAuth.data && nextAuth.data.uid) {
			// 判断是否登陆
			localStorage.setItem('user', JSON.stringify(nextAuth.data));
			history.push('/app/dashboard/index');
		}
	}
	// 登录
	handleSubmit = e => {
		console.log(this.props);
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const { fetchData } = this.props;
				axios
					.post('http://localhost:3000/users/login', {
						username: values.userName,
						password: values.password,
					})
					.then(res => {
						console.log(res.data);
						if (res.data.code === '00000') {
							fetchData({
								funcName: res.data.userInfo.username,
								stateName: 'auth',
							});
						} else {
							message.error(res.data.message);
						}
					})
					.catch(err => {
						console.log(err);
					});
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login">
				<div className="login-form">
					<div className="login-logo">
						<span>React Admin</span>
					</div>
					<Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
						<FormItem>
							{getFieldDecorator('userName', {
								rules: [{ required: true, message: '请输入用户名!' }],
							})(
								<Input
									prefix={<Icon type="user" style={{ fontSize: 13 }} />}
									placeholder="管理员输入admin, 游客输入guest"
								/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码!' }],
							})(
								<Input
									prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
									type="password"
									placeholder="管理员输入admin, 游客输入guest"
								/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(<Checkbox>记住我</Checkbox>)}
							<span className="login-form-forgot" href="" style={{ float: 'right' }}>
								忘记密码
							</span>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
								style={{ width: '100%' }}
							>
								登录
							</Button>
							<p style={{ display: 'flex', justifyContent: 'space-between' }}>
								{/* <span >或 现在就去注册!</span> */}
							</p>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToPorps = state => {
	const { auth } = state.httpData;
	return { auth };
};
const mapDispatchToProps = dispatch => ({
	fetchData: bindActionCreators(fetchData, dispatch),
	receiveData: bindActionCreators(receiveData, dispatch),
});

export default connect(
	mapStateToPorps,
	mapDispatchToProps
)(Form.create()(Login));
