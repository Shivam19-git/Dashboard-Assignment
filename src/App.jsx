import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd'; // Import Button from antd
import Logo from './Components/Logo';
import './App.css';
import MenuList from './Components/MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Heading from './Components/Heading';
import ToggleThemeButton from './Components/ToggleThemeButton';

const { Header, Sider } = Layout;

function App() {
  

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [darkTheme,setDarkTheme] = useState(true);
  const toggleTheme = ()=>{
    setDarkTheme(!darkTheme);
  }
  return (
    <>
      <Layout>
        <Sider 
          theme={darkTheme ? 'dark' : 'light'}
          className='sidebar' 
          width={300} 
          collapsible 
          collapsed={collapsed} 
          trigger={null}>
          <Logo collapsed={collapsed} darkTheme={darkTheme} />
         
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="header-content">
              <div className="collapse-button">
                <Button type='text' icon={collapsed ?
                  <MenuUnfoldOutlined /> :
                  <MenuFoldOutlined />} onClick={toggleCollapsed} />
                  <Heading />
              </div>
            </div>
            
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default App;
