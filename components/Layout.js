import NavBar from './NavBar';

const layoutStyle = {
  margin: 20,
  padding: 20,
  borderRadius: 1,
  border: '1px solid #DDD'
};

const Layout = ({children, labels}) => {
  return (
    <div style={layoutStyle}>
      <NavBar labels={labels} />
      {children}
    </div>
  );
};
export default Layout;
