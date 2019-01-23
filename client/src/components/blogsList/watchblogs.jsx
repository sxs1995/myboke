import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/index';
import { Row, Col } from 'antd';
import Style from './style.css';
class WatchBlogs extends React.Component {
	constructor() {
		super();
		this.state = {
			blog: {},
			category: {},
		};
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		let _this = this;
		axios
			.post(BASE_URL + '/blogs/getDetail', { id: id })
			.then(res => {
				console.log(res.data);
				if (res.data.code === '00000') {
					_this.setState({
						blog: res.data.rows,
						category: res.data.rows.category,
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div> 
				<Row className={Style.mgtop}>
					<Col span={18} offset={3} className={Style.bgColor}>
						<h1 className={Style.title}>{this.state.blog.title}</h1>
						<div className={Style.intro}>
							<span>{this.state.category.createAt}</span>
							<span className={Style.mgleft}>{this.state.category.name}</span>
							<span className={Style.mgleft}>阅读数{this.state.blog.pgview}</span>
						</div>
					</Col>
				</Row>
				<Row >
					<Col
						span={18}
						offset={3}
						className={Style.MinHeight}
						dangerouslySetInnerHTML={{ __html: this.state.blog.blogs }}
					/>
				</Row>
			</div>
		);
	}
}

export default WatchBlogs;
