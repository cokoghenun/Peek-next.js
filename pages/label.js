import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Lable = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>#{router.query.title}</h1>
      <p>This is a collection for the {router.query.title} label.</p>
    </Layout>
  );
};

export default Lable;
