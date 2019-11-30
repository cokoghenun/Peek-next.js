import Link from 'next/link';
const PostLink = props => (
  <>
    <Link href="/label/[id]" as={`/label/${props.id}`}>
      <a>#{props.id}</a>
    </Link>
    {' | '}
  </>
);
const LabelLinks = () => {
  return (
    <>
      <PostLink id='Dev-stuff'/>
      <PostLink id='Jw' />
      <PostLink id='School stuff' />
    </>
  );
};
export default LabelLinks;
