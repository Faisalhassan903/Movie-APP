
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types'; 
const Layout = ({ children }) => {
  return (
    <>
      <Header /> {/* Header is always shown */}
      <main className="container mt-4">{children}</main> {/* Main content */}
      <Footer /> {/* Footer is always shown */}
    </>
  );
};



export default Layout;
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  


