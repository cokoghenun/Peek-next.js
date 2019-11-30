import Link from 'next/link';

const PostLink = props => (
  <>
    <Link href='/label/[id]' as={`/label/${props.id}`}>
      <a>#{props.id}</a>
    </Link>
    {' | '}
  </>
);
const LabelLinks = ({ labels }) => {
  return (
    <>
      {labels.map((l,m) => (
        <PostLink id={l} key={m} />
      ))}
    </>
  );
};

export default LabelLinks;
