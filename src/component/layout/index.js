import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import HeaderLayout from "./layoutHeader";
import "./layout.css";
const { Header, Footer, Sider, Content } = Layout;

function LayoutMain() {
  const items = [
    {
      key: "/",
      icon: <AppstoreOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/action",
      icon: <BarChartOutlined />,
      label: <Link to="/action">Phim Hành Động</Link>,
    },
    {
      key: "/romance",
      icon: <CloudOutlined />,
      label: <Link to="/romance">Phim Tình Cảm</Link>,
    },
    {
      key: "/anime",
      icon: <TeamOutlined />,
      label: <Link to="/anime">Phim Hoạt Hình</Link>,
    },
  ];
  return (
    <div>
      <Layout>
        <Sider
          className="slider"
          breakpoint="xs"
          collapsedWidth="0"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            background: "white",
            borderRight: "1px solid #ccc",
          }}
        >
          <div className=" text-center text-2xl font-bold py-5">Movie 2022</div>
          <Menu items={items} defaultSelectedKeys={["/"]} mode="inline" />
        </Sider>
        <Layout
          className="layoutContent"
          style={{
            marginLeft: 320,
          }}
        >
          <Header
            className="bg-white"
            style={{
              padding: 0,
              background: "white",
              width: "80%",
            }}
          >
            <HeaderLayout />
          </Header>
          <Content
            style={{
              width: "80%",
              marginTop: 50,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default LayoutMain;
