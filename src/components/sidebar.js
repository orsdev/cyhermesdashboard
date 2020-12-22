import React from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo.png';

const { Sider } = Layout;

function Sidebar({ collapsed }) {
  return (
    <Sider
      trigger={null}
      breakpoint="md"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      width="350px"
      style={{
        minHeight: '100vh',
        padding: '50px 0',
      }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          background: '#222021',
        }}>
        <header className="ant-layout-sider-main">
          <img src={Logo} alt="Logo" />
        </header>
        <Menu.Item key="1">
          <span>Trial & Pricing</span>
          <i className="fa fa-arrow-right" aria-hidden="true" />
        </Menu.Item>
        <Menu.Item key="2">Payment Method</Menu.Item>
        <hr />
        <Menu.Item key="3">Get started...</Menu.Item>
      </Menu>
      <div className="quote">
        <blockquote>
          <span>&ldquo;</span>
          <p>
            Sucess is not final; failure is not fatal: it is the
            courage to continue that counts.
            <strong> -Wiston Churchill</strong>
          </p>
        </blockquote>
      </div>
    </Sider>
  );
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};

export default Sidebar;
