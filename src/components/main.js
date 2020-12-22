import { Layout } from 'antd';
import AddUsers from './addUsers';
import Modules from './modules';
import Buttons from './buttons';
import Plan from './plan';

function Main() {
  return (
    <main className="main">
      <Layout
        style={{
          padding: 0,
          paddingLeft: 80,
          paddingRight: 80,
          background: 'white',
        }}>
        <header className="main-header">
          <div className="main-header-info">
            <h5 className="main-header-info-name">HEY, TERRY</h5>
            <h2 className="main-header-info-text">
              Start your <em>30 days</em> Trial
            </h2>
          </div>
          <div className="main-header-balance">
            <h5 className="main-header-balance-sign">NGN</h5>
            <h2 className="main-header-balance-price">1,999,999</h2>
            <p className="main-header-balance-footer">
              Total
              <span> (EXCLUDES VAT)</span>
            </p>
          </div>
        </header>
        <Plan />
        <AddUsers />
        <Modules />
        <Buttons />
      </Layout>
    </main>
  );
}

export default Main;
