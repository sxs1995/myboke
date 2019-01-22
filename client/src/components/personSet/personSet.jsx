import React from 'react';
import { Form, Tabs, Row, Col, Card, Table, Button, Modal, Input } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import Introduce from './introduce';
const TabPane = Tabs.TabPane;

class PersonSet extends React.Component {
	callback = () => {};
	render() {
		return (
			<Row>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
					<TabPane tab="个人简介" key="1">
						<Introduce />
					</TabPane>
					<TabPane tab="工作技能" key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="工作经验" key="3">
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
			</Row>
		);
	}
}

export default PersonSet;
