import siteConfig from '../../components/Global/Global';
import Link from 'next/link';
import './Button.scss';

const Button = props => (
    <Link href='[id]' as={`${props.link}`}>
        <button type="button" className="btn btn-primary">{props.title}</button>
    </Link>
);

export default Button;
