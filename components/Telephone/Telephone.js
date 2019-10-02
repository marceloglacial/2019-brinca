import siteConfig from '../../components/Global/Global';
import './Telephone.scss';

const Telephone = props => {
    const nav = props.data;

    // const telephone = <div className={`site-nav--header__items container ${isOpen ? 'is-open' : ''}`} dangerouslySetInnerHTML={{ __html: nav.content.rendered }} />;
    const telephone = '(999) 9999.9999';

    return (
        <>
            <a className='c-telephone' href={`tel:${telephone}`}>
                {telephone}
            </a>
        </>
    );
};

export default Telephone;
