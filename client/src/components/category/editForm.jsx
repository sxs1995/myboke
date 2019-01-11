import React from "react";
import { Form, Button, Modal, Input } from "antd";
import { connect } from "react-redux";
const FormItem = Form.Item;
class EditForm extends React.Component {
  //  编辑表单提交

  handleSubmit = () => {
    var _this = this;
    _this.props.form.validateFields((err, values) => {
      _this.props.editSave(values.editCode, values.editName);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        visible={this.props.visible2}
        title="编辑分类"
        onOk={this.handleSubmit}
        onCancel={this.props.handleCancel2}
        footer={[
          <Button key="back" onClick={this.props.handleCancel2}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.props.loading3}
            onClick={this.handleSubmit}
          >
            提交
          </Button>
        ]}
      >
        <Form onSubmit={this.props.handleSubmit2}>
          <FormItem
            label="序号"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("editCode", {
              initialValue: this.props.code,
              rules: [{ required: true, message: "请输入序号!" }]
            })(<Input type="number" placeholder="请输入序号!" />)}
          </FormItem>
          <FormItem
            label="分类名称"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator("editName", {
              initialValue: this.props.name,
              rules: [{ required: true, message: "请输入分类名称!" }]
            })(<Input placeholder="请输入分类名称" />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default connect()(Form.create()(EditForm));
