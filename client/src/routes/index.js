import HomePage from '../pages/HomePage';
import DSSVPage from '../pages/DSSVPage';
import NotFoundPage from '../pages/NotFoundPage';

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
        path: '*',
        element: NotFoundPage,
        isHeader: false
    }
]

export {routes};