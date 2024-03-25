import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd';
import Logo from './Components/Logo';
import './App.css';
import MenuList from './Components/MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Heading from './Components/Heading';
import ToggleThemeButton from './Components/ToggleThemeButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExternalB2BOnline from './Routes/ExternalB2BOnline';
import Home from './Routes/Home';
import ExternalB2BInterview from './Routes/ExternalB2BInterview';
import PublicData from './Routes/PublicData';
import Health from './Routes/Health';
import Retail from './Routes/Retail';
import Reseller from './Routes/Reseller';
import StrategyDeployment from './Routes/StrategyDeployment';
import EmployeeTraining from './Routes/EmployeeTraining';
import PRD from './Routes/PRD';
import Specs from './Routes/Specs';
import Hardware from './Routes/Hardware';
import Software from './Routes/Software';
import Material from './Routes/Material';
import SupplyChain from './Routes/SupplyChain';
import Sales from './Routes/Sales';
import Settings from './Routes/Settings';

const { Header, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const { token: { colorBgContainer } } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <Layout>
        <Sider
          theme={darkTheme ? 'dark' : 'light'}
          className='sidebar'
          width={300}
          collapsible
          collapsed={collapsed}
          trigger={null}
        >
          <Logo collapsed={collapsed} darkTheme={darkTheme} />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="header-content">
              <div className="collapse-button">
                <Button
                  type='text'
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={toggleCollapsed}
                />
                <Heading />
              </div>
            </div>
          </Header>
          
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/external/b2b/online' element={<ExternalB2BOnline />} />
            <Route path='/external/b2b/interview' element = {<ExternalB2BInterview/>}/>
            <Route path='/external/b2b/publicdata' element = {<PublicData/>}/>
            <Route path='/external/b2b/health' element={<Health/>}/>
            <Route path='/external/b2c/retailer' element= {<Retail/>}/>
            <Route path='/external/b2c/reseller' element={<Reseller/>}/>
            <Route path='/internal/strategydeployment' element={<StrategyDeployment/>} />
            <Route path='/internal/employeetraining' element={<EmployeeTraining/>}/>
            <Route path='/prd' element={<PRD/>}/>
            <Route path='/specs' element= {<Specs/>}/>
            <Route path='/hardware' element={<Hardware/>}/>
            <Route path='/manufacturing/material' element={<Material/>}/>
            <Route path='/manufacturing/supplychain' element={<SupplyChain/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/settings' element={<Settings/>}/>
            
           
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
