import Link from 'next/link';
const PostLink = props => (
  <>
    <Link href={`/label?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    {' | '}
  </>
);
const LabelLinks = () => {
  return (
    <>
      <PostLink title='Dev stuff'/>
      <PostLink title='Jw' />
      <PostLink title='School stuff' />
    </>
  );
};
export default LabelLinks;
