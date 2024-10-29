import HomePage from '../pages/HomePage';
import DSSVPage from '../pages/DSSVPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import UserProfilePage from '../pages/UserProfilePage';

const routes = [
    {
        path: '/',
        element: HomePage,
        isHeader: true
    },
    {
        path: '/dssv',
        element: DSSVPage,
        isHeader: true
    },
    {
        path: '/userProfile',
        element: UserProfilePage,
        isHeader: true
    },
    {
        path: '/login',
        element: LoginPage,
        isHeader: false
    },
    {
        path: '*',
        element: NotFoundPage,
        isHeader: false
    }
]

export {routes};