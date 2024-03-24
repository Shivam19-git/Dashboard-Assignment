import React, { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  HomeOutlined,
  SettingOutlined,
  SearchOutlined,
  CalendarOutlined,
  ToolOutlined,
  BuildOutlined,
  AreaChartOutlined,
  BookOutlined,
  PlusOutlined,
  DeleteOutlined,
  ShopOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { TextArea } = Input;

const MenuList = ({ darkTheme }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState('');

  const handleOpenChange = (keys) => {
    const latestOpenKey = keys[keys.length - 1];
    const rootSubmenuKeys = ['research', 'planning', 'designing', 'manufacturing', 'marketing'];
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleAddTask = () => {
    const newTask = taskInputValue.trim();
    if (newTask !== '') {
      setTaskList(prevTasks => [...prevTasks, newTask]);
      setTaskInputValue(''); // Clear the text area after adding the task
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div>
        <Menu
          theme={darkTheme ? 'dark' : 'light'}
          mode="inline"
          className='menu-bar'
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu key="tasks" icon={<BookOutlined />} title="Tasks">
            <TextArea
              rows={1}
              placeholder="Enter task"
              value={taskInputValue}
              onChange={(e) => setTaskInputValue(e.target.value)}
            />
            <Button type="primary" onClick={handleAddTask} icon={<PlusOutlined />}>Add Task</Button>
            {taskList.map((task, index) => (
              <Menu.Item key={`task-${index}`} icon={<DeleteOutlined />} onClick={() => handleDeleteTask(index)}>
                {task}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="research" icon={<SearchOutlined />} title="Research" className="sub-menu-item">
            <SubMenu key="external" title="External">
              <SubMenu key="b2c" title="B2B">
                <Menu.Item key="b2c-1">
                  <Link to="/online">Online</Link>
                </Menu.Item>
                <Menu.Item key="b2c-2">
                  <Link to="/interview">Interview</Link>
                </Menu.Item>
                <Menu.Item key="b2c-3">
                  <Link to="/publicdata">Public Data</Link>
                </Menu.Item>
                <Menu.Item key="b2c-4">
                  <Link to="/health">Health</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="b2b" title="B2C" className="sub-menu-item">
                <Menu.Item key="b2b-retailstore">Retail Stores</Menu.Item>
                <Menu.Item key="b2b-traditionalretail">Traditional Retail</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="internal" title="Internal">
              <Menu.Item key="Task-1">Strategy Deployment</Menu.Item>
              <Menu.Item key="Task-2">Employee Training</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="planning" icon={<CalendarOutlined />} title="Planning" className="sub-menu-item">
            <Menu.Item key="prd">
              <Link to="/prd">PRD</Link>
            </Menu.Item>
            <Menu.Item key="specs">
              <Link to="/specs">Specs</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="designing" icon={<ToolOutlined />} title="Designing" className="sub-menu-item">
            <Menu.Item key="hardware">
              <Link to="/hardware">Hardware</Link>
            </Menu.Item>
            <Menu.Item key="software">
              <Link to="/software">Software</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="manufacturing" icon={<BuildOutlined />} title="Manufacturing" className="sub-menu-item">
            <Menu.Item key="material">Material</Menu.Item>
            <Menu.Item key="production">Production</Menu.Item>
          </SubMenu>
          <SubMenu key="marketing" icon={<AreaChartOutlined />} title="Marketing" >
            <SubMenu key="online" title="Online">
              <Menu.Item key="online1">Website</Menu.Item>
              <Menu.Item key="online2">Social Media</Menu.Item>
            </SubMenu>
            <SubMenu key="dealership" title="Dealership">
              <Menu.Item key="dealership1">Direct Dealers</Menu.Item>
              <Menu.Item key="dealership2">Reseller Networks</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="sales" icon={<ShopOutlined />}>
            Sales
          </Menu.Item>
          <Menu.Item key="setting" icon={<SettingOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </div>
    </Router>
  );
};

export default MenuList;

