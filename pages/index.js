import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
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
