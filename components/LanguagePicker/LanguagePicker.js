import './LanguagePicker.scss';

const LanguagePicker = props => {
    const language = props.language;
    const isEnglish = language === 'english' ? 'active' : '';
    const isFrench = language === 'french' ? 'active' : '';

    return (
        <div className='language-picker'>
            <p>
                <a href='/'>
                    <img src='../../static/flag-brazil.svg' alt='Flag of Brazil' />
                    Português
                </a>
            </p>
            <p>
                <a href='/english' className={isEnglish}>
                    <img src='../../static/flag-canada.svg' alt='Flag of Canada' />
                    English
                </a>
            </p>
            <p>
                <a href='/french/' className={isFrench}>
                    <img src='../../static/flag-france.svg' alt='Flag of France' />
                    French
                </a>
            </p>
        </div>
    );
};

export default LanguagePicker;
