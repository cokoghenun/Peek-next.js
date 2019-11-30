import Layout from '../components/Layout';
import DataProvider from '../public/js/dataprovider';

const Index = ({ label }) => {
  return (
    <Layout labels={label}>
      <div>
        <p>Welcome to Peek</p>
      </div>
    </Layout>
  );
};

Index.getInitialProps = DataProvider;

export default Index;
