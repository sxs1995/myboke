import React, { Component } from "react";
import { Layout } from "antd";
import SiderCustom from "./components/common/SiderCustom";
import HeaderCustom from "./components/common/HeaderCustom";
import { receiveData } from "./action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Routes from "./routes";

const { Content, Footer } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  componentWillMount() {
    const { receiveData } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    user && receiveData(user, "auth");

    this.getClientWidth();
    window.onresize = () => {
      this.getClientWidth();
    };
  }
  componentDidMount() {}
  getClientWidth = () => {
    // 获取当前浏览器宽度并设置responsive管理响应式
    const { receiveData } = this.props;
    const clientWidth = window.innerWidth;
    console.log(clientWidth);
    receiveData({ isMobile: clientWidth <= 992 }, "responsive");
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { auth, responsive } = this.props;
    return (
      <Layout>
        {!responsive.data.isMobile && (
          <SiderCustom collapsed={this.state.collapsed} />
        )}
        <Layout style={{ flexDirection: "column" }}>
          <HeaderCustom
            toggle={this.toggle}
            collapsed={this.state.collapsed}
            user={auth.data || {}}
          />
          <Content
            style={{ margin: "0 16px", overflow: "initial", flex: "1 1 0" }}
          >
            <Routes auth={auth} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React-Admin ©{new Date().getFullYear()} Created by 991956448@qq.com
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { auth = { data: {} }, responsive = { data: {} } } = state.httpData;
  return { auth, responsive };
};
const mapDispatchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
