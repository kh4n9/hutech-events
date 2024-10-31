import HomePage from '../pages/HomePage';
import DSSVPage from '../pages/SinhvienPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import UserProfilePage from '../pages/UserProfilePage';
import EventsPage from '../pages/EventsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

const routes = [
    {
        path: '/',
        element: HomePage,
        isHeader: true
    },
    {
        path: '/about',
        element: AboutPage,
        isHeader: true
    },
    {
        path: '/contact',
        element: ContactPage,
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
        path: '/events',
        element: EventsPage,
        isHeader: true
    },
    {
        path: '/sinhvien',
        element: DSSVPage,
        isHeader: true
    },
    {
        path: '/bancansu',
        element: DSSVPage,
        isHeader: true
    },
    {
        path: '/chungnhan',
        element: DSSVPage,
        isHeader: true
    },
    {
        path: '*',
        element: NotFoundPage,
        isHeader: false
    }
]

export {routes};