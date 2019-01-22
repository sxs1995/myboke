import React from 'react';
import { Row, Col, Input, Select, Upload, Icon } from 'antd';
import Style from './style.css';

class WriteBlog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};
	beforeUpload = file => {
		const isJPG = file.type === 'image/jpeg';
	};
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
				})
			);
		}
	};

	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;
		return (
			<div>
				<h1 className={Style.title}>发布博客</h1>
				<Row className={Style.rows}>
					<Col span={2} offset={3} className={Style.labels}>
						标题
					</Col>
					<Col span={15}>
						<Input type="text" placeholder="请输入文章标题" />
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={3} className={Style.labels}>
						分类
					</Col>
					<Col span={15}>
						<Select style={{ width: '30%' }} onChange={this.handleCurrencyChange}>
							<option value="js">javascript</option>
							<option value="js">javascript</option>
							<option value="js">javascript</option>
						</Select>
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={3} className={Style.labels}>
						预览图
					</Col>
					<Col span={15}>
						<Upload
							name="avatar"
							listType="picture-card"
							className="avatar-uploader"
							showUploadList={false}
							action="//jsonplaceholder.typicode.com/posts/"
							beforeUpload={this.beforeUpload}
							onChange={this.handleChange}
						>
							{imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
						</Upload>
					</Col>
				</Row>
				<Row className={Style.rows}>
					<Col span={2} offset={3} className={Style.labels}>
						博客
					</Col>
					<Col span={15}>
						<textarea id="editor" />
					</Col>
				</Row>
			</div>
		);
	}
}

export default WriteBlog;
