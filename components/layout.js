import NavBar from '../components/navbar';

const layoutStyle = {
  margin: 20,
  padding: 20,
  borderRadius: 1,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;
