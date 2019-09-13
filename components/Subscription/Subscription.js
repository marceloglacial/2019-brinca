import siteConfig from '../Global/Global';

const Subscription = props => {
    return (
        <div className='subscription-form'>
            <iframe src={`${siteConfig.subscription}/viewform?embedded=true`} width='100%' height='720' frameBorder='0' marginHeight='0' marginWidth='0'>
                Loading…
            </iframe>
        </div>
    );
};

export default Subscription;
