import './LanguagePicker.scss';
import Link from 'next/link';

const LanguagePicker = props => {
    const langNav = [
        ['Português', ''],
        ['English', 'english'],
        ['Francais', 'francais']
    ];

    return (
        <div className='language-picker'>
            {langNav.map(langNavItem => {
                let isActive = props.language === langNavItem[1] ? 'active' : '';
                return (
                    <p key={langNavItem[1]} className={isActive}>
                        <Link href={`/${langNavItem[1]}`} as={langNavItem[1]}>
                            <a>
                                <img src={`../../static/flag-${langNavItem[1]}.svg`} alt='Flag of Brazil' />
                                {langNavItem[0]}
                            </a>
                        </Link>
                    </p>
                );
            })}
        </div>
    );
};

export default LanguagePicker;
