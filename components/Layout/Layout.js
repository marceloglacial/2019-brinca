import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = props => (
    <>
        <Header {...props} />
        <main className='site-layout'>{props.children}</main>
        <Footer />
    </>
);

export default Layout;
