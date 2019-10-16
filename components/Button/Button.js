import './Button.scss';

const Button = props => {
    const link = props.link ? props.link : '';
    const type = props.type ? props.type : 'primary';
    const result = props.title ? (
        <a href={link}>
            <button type='button' className={`btn btn-${type}`}>
                {props.title}
            </button>
        </a>
    ) : (
        'Submit'
    );

    return result;
};

export default Button;
