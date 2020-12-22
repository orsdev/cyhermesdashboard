import { Layout } from 'antd';
import Header from './header';
import AddUsers from './addUsers';
import Modules from './modules';
import Buttons from './buttons';
import Plan from './plan';

function Main() {
  return (
    <main className="main">
      <Layout
        style={{
          background: 'white',
        }}>
        <Header />
        <Plan />
        <AddUsers />
        <Modules />
        <Buttons />
      </Layout>
    </main>
  );
}

export default Main;
