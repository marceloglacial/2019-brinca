import './LanguagePicker.scss';

const LanguagePicker = props => {
    const language = props.language;
    const isEnglish = language === 'english' ? 'active' : '';
    const isFrench = language === 'francais' ? 'active' : '';

    return (
        <div className='language-picker'>
            <p>
                <a href='/'>
                    <img src='../../static/flag-brazil.svg' alt='Flag of Brazil' />
                    Português
                </a>
            </p>
            <p className={isEnglish}>
                <a href='/english' className={isEnglish}>
                    <img src='../../static/flag-canada.svg' alt='Flag of Canada' />
                    English
                </a>
            </p>
            <p className={isFrench}>
                <a href='/francais' className={isFrench}>
                    <img src='../../static/flag-france.svg' alt='Flag of France' />
                    Français
                </a>
            </p>
        </div>
    );
};

export default LanguagePicker;
