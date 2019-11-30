import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>#{router.query.id}</h1>
      <p>This is a collection for the {router.query.id} label.</p>
    </Layout>
  );
}
