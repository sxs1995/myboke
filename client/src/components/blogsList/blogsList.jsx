import React from 'react';
import { Form, Row, Col, Card, Table, Button, Modal, Input } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../../utils/index';
import history from '../../routes/history';
const confirm = Modal.confirm;
class BlogsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			visible: false,
			visible2: false,
			data: [],
			pagination: {},
			loading2: false,
			loading3: false,
			editId: '',
			name: '',
			code: '',
			selectedRowKeys: [],
			selectedRows: [],
		};
	}

	componentDidMount() {
		this.fetch({ page: 1 });
	}

	/**
	 * 去写博客
	 */
	writeblogs = () => {
		history.push('/app/writeblogs');
	};

	// 编辑
	showEditModal = record => {
		console.log(record);
		this.setState({
			visible2: true,
			code: record.code,
			name: record.name,
			editId: record._id,
		});
	};

	// 显示modal
	showModal = () => {
		this.setState({
			visible: true,
		});
	};
	// 取消modal
	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};
	handleCancel2 = () => {
		this.setState({
			visible2: false,
		});
	};
	// 添加点击提交触发表单提交
	handleOk = () => {
		this.handleSubmit();
	};

	//   分页
	handleTableChange = (pagination, filters, sorter) => {
		const pager = { ...this.state.pagination };
		pager.current = pagination.current;
		this.setState({
			pagination: pager,
		});
		this.fetch({
			pagesize: pagination.pageSize,
			page: pagination.current,
		});
	};

	//   查询分类列表
	fetch = (params = {}) => {
		var _this = this;
		_this.setState({ loading2: true });
		axios
			.post(BASE_URL + '/blogs/getBlogsList', { pagesize: 10, ...params })
			.then(res => {
				if (res.data.code === '00000') {
					let pagination = { ..._this.state.pagination };
					pagination.total = res.data.total;
					res.data.rows.forEach((element, index) => {
						element.key = index;
					});
					_this.setState({
						loading2: false,
						data: res.data.rows,
						pagination,
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
	};
	/**
	 * 删除提示
	 */
	showDeleteConfirm = onOk => {
		confirm({
			title: '提示',
			content: '你确定要删除这些提示吗?',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk: onOk,
			onCancel() {
				console.log('Cancel');
			},
		});
	};
	// 删除
	deleteRow = record => {
		console.log(record);
		var _this = this,
			pagination = _this.state.pagination;
		_this.showDeleteConfirm(() => {
			axios
				.post(BASE_URL + '/category/delete', { id: [record._id] })
				.then(res => {
					if (res.data.code === '00000') {
						_this.fetch({
							pagesize: pagination.pageSize,
							page: pagination.current,
						});
						_this.delSuccess('删除成功');
					}
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	/**
	 * 成功提示
	 * */

	delSuccess = msg => {
		const modal = Modal.success({ title: '提示', content: msg });
		setTimeout(() => {
			modal.destroy();
		}, 1 * 1000);
	};

	// 批量删除
	deletes = () => {
		console.log();
		var rows = this.state.selectedRows;
		var _this = this,
			data = [],
			pagination = _this.state.pagination;
		for (let i = 0; i < rows.length; i++) {
			data.push(rows[i]._id);
		}

		_this.showDeleteConfirm(() => {
			if (rows && rows.length > 0) {
				axios
					.post(BASE_URL + '/category/delete', { id: [data] })
					.then(res => {
						if (res.data.code === '00000') {
							_this.fetch({
								pagesize: pagination.pageSize,
								page: pagination.current,
							});
							_this.setState({ selectedRowKeys: [], selectedRows: [] });
							_this.delSuccess('删除成功');
						}
					})
					.catch(err => {
						console.log(err);
					});
			}
		});
	};

	selectRow = record => {
		const selectedRowKeys = [...this.state.selectedRowKeys];
		const selectedRows = [...this.state.selectedRows];
		console.log(selectedRowKeys.indexOf(record.key));
		if (selectedRowKeys.indexOf(record.key) >= 0) {
			selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
			selectedRows.forEach((e, i) => {
				if (e._id === record._id) {
					selectedRows.splice(i, 1);
				}
			});
		} else {
			selectedRowKeys.push(record.key);
			selectedRows.push(record);
		}

		console.log(selectedRowKeys);
		console.log(selectedRows);
		this.setState({ selectedRowKeys });
		this.setState({ selectedRows });
	};

	onSelectedRowKeysChange = (selectedRowKeys, selectedRows) => {
		console.log(selectedRowKeys);
		this.setState({ selectedRowKeys });
		this.setState({ selectedRows });
	};
	render() {
		const columns = [
			{
				title: '标题',
				dataIndex: 'title',
				align: 'center',
				key: 'title',
			},
			{
				title: '类别',
				dataIndex: 'category.name',
				align: 'center',
				key: 'category.name',
			},
			{
				title: '缩略图',
				dataIndex: 'imgs',
				align: 'center',
				key: 'imgs',
			},
			{
				title: '操作',
				align: 'center',
				key: 'action',
				render: (text, record, index) => (
					<span>
						<Button type="primary">
							编辑
						</Button>
						<Button type="danger" onClick={() => this.deleteRow(record)}>
							删除
						</Button>
					</span>
				),
			},
		];
		const { selectedRowKeys, selectedRows } = this.state;
		const rowSelection = {
			selectedRowKeys,
			selectedRows,
			onChange: this.onSelectedRowKeysChange,
		};

		return (
			<div className="gutter-example">
				<Row gutter={16}>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card title="博客管理" bordered={false}>
								<div className="table-operations">
									<Button onClick={this.writeblogs} >写博客</Button>
									<Button onClick={this.deletes}>删除</Button>
								</div>
								<Table
									columns={columns}
									rowSelection={rowSelection}
									dataSource={this.state.data}
									loading={this.state.loading2}
									pagination={this.state.pagination}
									onChange={this.handleTableChange}
									onRow={record => ({
										onClick: () => {
											this.selectRow(record);
										},
									})}
								/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BlogsList;
