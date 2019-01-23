import React from 'react';
import { Row, Col, Input, Select, Upload, Icon, Button } from 'antd';
import Style from './style.css';
import Editor from 'for-editor';
import marked from '../../utils/marked';
import axios from 'axios';
import { BASE_URL } from '../../utils/index';
class WriteBlog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '', //markdown
			title: '', //标题
			currency: '', //类别
			filepath: '', // 图片
			category: [],
		};
	}

	componentDidMount() {
		var _this = this;
		axios
			.post(BASE_URL + '/category/list', { pagesize: 20, page: 1 })
			.then(res => {
				if (res.data.code === '00000') {
					console.log(res.data.rows);
					_this.setState({
						category: res.data.rows,
					});
				}
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.post(BASE_URL + '/blogs/getDetail', { id:'5c46d5cf3dd22750dcdc2709' })
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				console.log(err);
			});
	}

	/**
	 * @param {*} value  markdown 文本内容
	 * @memberof WriteBlog
	 */
	handleChange2(value) {
		this.setState({
			value,
		});
	}

	/**
	 * 图片预览
	 */
	getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};
	/**
	 * 定义图片上传要求
	 */
	beforeUpload = file => {
		const isJPG = file.type === 'image/jpeg';
	};

	/**
	 * 图片上传
	 */
	handleChange = info => {
		var _this = this;
		if (info.file.status === 'uploading') {
			_this.setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			_this.getBase64(info.file.originFileObj, imageUrl =>
				_this.setState({
					imageUrl,
					loading: false,
					filepath: info.file.response.file.path,
				})
			);
		}
	};

	/**
	 * title
	 */
	handleNumberChange = e => {
		const title = e.target.value;
		this.setState({ title });
	};

	/**
	 * 类别
	 */
	handleCurrencyChange = currency => {
		this.setState({ currency });
	};

	/**
	 * 发布文章
	 */
	public = () => {
		axios
			.post(BASE_URL + '/blogs/addblogs', {
				title: this.state.title,
				category: this.state.currency,
				imgs: this.state.filepath,
				blogs: marked(this.state.value),
			})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;
		const { value } = this.state;
		return (
			<div>
				<h1 className={Style.title}>
					发布博客
					<Button className={Style.publish} type="primary" onClick={this.public}>
						发布文章
					</Button>
				</h1>
				<Row className={Style.rows}>
					<Col span={2} offset={2} className={Style.labels}>
						标题
					</Col>
					<Col span={16}>
						<Input
							type="text"
							placeholder="请输入文章标题"
							value={this.state.title}
							onChange={this.handleNumberChange}
						/>
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={2} className={Style.labels}>
						分类
					</Col>
					<Col span={16}>
						<Select
							style={{ width: '30%' }}
							value={this.state.currency}
							onChange={this.handleCurrencyChange}
						>
							{this.state.category.map((e, index) => {
								return (
									<Select.Option value={e._id} key={e._id}>
										{e.name}
									</Select.Option>
								);
							})}
						</Select>
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={2} className={Style.labels}>
						预览图
					</Col>
					<Col span={16}>
						<Upload
							name="file"
							listType="picture-card"
							className="avatar-uploader"
							showUploadList={false}
							action="http://localhost:3000/upload/upload"
							beforeUpload={this.beforeUpload}
							onChange={this.handleChange}
						>
							{imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
						</Upload>
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={2} className={Style.labels}>
						博客
					</Col>
					<Col span={16}>
						<Editor value={value} onChange={this.handleChange2.bind(this)} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default WriteBlog;
