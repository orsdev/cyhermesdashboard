import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Sidebar from '../components/sidebar';
import Main from '../components/main';

const { Header, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      setCollapsed(true);
    }
  }, []);

  function toggleSidebar() {
    setCollapsed(!collapsed);
  }

  return (
    <section className="home">
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              background: 'white',
            }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggleSidebar,
              },
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              background: 'white',
            }}>
            <Main />
          </Content>
        </Layout>
      </Layout>
    </section>
  );
}

export default Home;
