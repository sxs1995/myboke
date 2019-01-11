import React from "react";
import { Row, Col, Card, Table, Icon, Button } from "antd";
import BreadcrumbCustom from '../common/BreadcrumbCustom';
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <span>{text}</span>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "性别",
    dataIndex: "sex",
    key: "sex"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Button>Action 一 {record.name}</Button>
        <span className="ant-divider" />
        <Button>Delete</Button>
        <span className="ant-divider" />
        <Button className="ant-dropdown-link">
          More actions <Icon type="down" />
        </Button>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    sex:"男",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

const BasicTable = () => (
  <div className="gutter-example">
    <BreadcrumbCustom first="用户管理" second="微信用户" />
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <Card title="基础表格" bordered={false}>
            <Table columns={columns} dataSource={data} />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
);

export default BasicTable;
