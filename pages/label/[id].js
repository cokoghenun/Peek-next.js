import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import DataProvider from '../../public/js/dataprovider';
const Post = ({ label }) => {
  const router = useRouter();

  return (
    <Layout labels={label}>
      <h1>#{router.query.id}</h1>
      <p>This is a collection for the {router.query.id} label.</p>
    </Layout>
  );
};

Post.getInitialProps = DataProvider;

export default Post;
