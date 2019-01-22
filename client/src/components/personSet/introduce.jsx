import React from 'react';
import { Row, Col,Input} from 'antd';
const Css = require('./introduce.css')

class Introduce extends React.Component {
	render() {
		return (
			<Row>
				<Col span={2} />
				<Col span={20}>
					<div className={Css.fromrow}>
						<div className="left">姓名</div>
						<div className="right">
							<Input type="text" />
						</div>
					</div>
				</Col>
				<Col span={2} />
			</Row>
		);
	}
}

export default Introduce;
