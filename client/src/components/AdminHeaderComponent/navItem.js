import { Link } from 'react-router-dom';

export const navItem = [
    {
        key: '1',
        label: (
            <Link to='/'>Home</Link>
        )
    },
    {
        key: '2',
        label: (
            <Link to='/about'>About</Link>
        )
    },
    {
        key: '3',
        label: (
            <Link to='/contact'>Contact</Link>
        )
    }
]