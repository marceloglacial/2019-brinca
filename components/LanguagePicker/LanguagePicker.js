import './LanguagePicker.scss';

const LanguagePicker = props => {
    return (
        <div className='language-picker is-open'>
            <p>
                <a href='/'>
                    <img src='../../static/flag-brazil.svg' />
                    Português
                </a>
            </p>
            <p>
                <a href='/en/'>
                    <img src='../../static/flag-canada.svg' />
                    English
                </a>
            </p>
            <p>
                <a href='/fr/'>
                    <img src='../../static/flag-france.svg' />
                    French
                </a>
            </p>
        </div>
    );
};

export default LanguagePicker;
