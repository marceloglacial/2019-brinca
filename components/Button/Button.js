import Link from 'next/link';
import './Button.scss';

const Button = props => {
    const link = props.link ? props.link : '';
    const type = props.type ? props.type : 'primary';
    const result = props.title ? (
        <Link href='[id]' as={`${link}`}>
            <button type='button' className={`btn btn-${type}`}>
                {props.title}
            </button>
        </Link>
    ) : (
        'Submit'
    );

    return result;
};

export default Button;
