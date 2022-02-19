import React, { useState } from "react";
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Switch } from 'antd';
import {
   UserOutlined,
   PieChartOutlined,
   DesktopOutlined,
   TeamOutlined,
   FileOutlined
} from '@ant-design/icons';
import Home from './pages/Home/Home';
import Users from "./pages/Users/Users";
import CreateUser from "./pages/Users/CreateUser";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
   const [collapsed, setcollapsed] = useState(false)
   const [theme, settheme] = useState('dark')

   const changeTheme = (value) => {
      settheme(value ? 'dark' : 'light')
   }

   const onCollapse = (collapsed) => {
      // console.log(collapsed);
      setcollapsed(collapsed)
   }
   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            theme={theme}
         >
            <Link to='/'>
               <div className="logo" />
            </Link>
            <Menu theme={theme} mode="inline" defaultOpenKeys={['1']}>
               <Menu.Item key="1" icon={<PieChartOutlined />}>
                  statistic
               </Menu.Item>
               <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option
               </Menu.Item>
               <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">
                     <Link to='/user/list'>List user</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                     <Link to='/user/create'>Create user</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                     <Link to='/user/edit/4'>Edit profile</Link>
                  </Menu.Item>
               </SubMenu>
               <SubMenu key="sub2" icon={<TeamOutlined />} title="Product">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
               </SubMenu>
               <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
               </Menu.Item>
            </Menu>
         </Sider>
         <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: '0 16px' }} >
               <Switch
                  checked={theme === 'dark'}
                  onChange={changeTheme}
                  checkedChildren="dark"
                  unCheckedChildren="light"
               />
            </Header>
            <Content style={{ margin: '0 16px' }}>
               <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
               </Breadcrumb>
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/user/list' element={<Users />} />
                     <Route path='/user/create' element={<CreateUser />} />
                     {/* <Route path='/edit/:id' element={<Users />} /> */}
                  </Routes>
               </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
         </Layout>
      </Layout>
   );
}

export default App;
