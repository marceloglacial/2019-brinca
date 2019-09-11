import siteConfig from '../Global/Global';

const Subscription = props => {
    return (
        <div className='subscription-form'>
            <iframe src={`${siteConfig.subscription}/viewform?embedded=true`} width='640' height='740' frameborder='0' marginheight='0' marginwidth='0'>
                Loading…
            </iframe>
        </div>
    );
};

export default Subscription;
