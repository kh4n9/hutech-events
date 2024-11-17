import HomePage from '../pages/HomePage';
import DssvPage from '../pages/Admin/DssvPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import UserProfilePage from '../pages/UserProfilePage';
import EventsPage from '../pages/Admin/EventsPage';
import AboutPage from '../pages/Admin/AboutPage';
import ContactPage from '../pages/Admin/ContactPage';
import DSChungNhanPage from '../pages/DSChungNhanPage';
import ChungNhanPage from '../pages/ChungNhanPage';
import SettingPage from '../pages/Admin/SettingPage';
import CertificateTemplatePage from '../pages/Admin/CertificateTemplatePage';

const routes = [
    { path: '/', element: HomePage, isHeader: true, isAdmin: false },
    { path: '/about', element: AboutPage, isHeader: true, isAdmin: false },
    { path: '/contact', element: ContactPage, isHeader: true, isAdmin: false },
    { path: '/admin/userProfile', element: UserProfilePage, isHeader: true, isAdmin: true },
    { path: '/login', element: LoginPage, isHeader: false, isAdmin: true },
    { path: '/admin/events', element: EventsPage, isHeader: true, isAdmin: true },
    { path: '/admin/sinhvien', element: DssvPage, isHeader: true, isAdmin: true },
    { path: '/sinhvien/:mssv', element: DSChungNhanPage, isHeader: true, isAdmin: false },
    { path: '/chungnhan/:id', element: ChungNhanPage, isHeader: true, isAdmin: false },
    { path: '/admin/bancansu', element: DssvPage, isHeader: true, isAdmin: true },
    { path: '/admin/setting', element: SettingPage, isHeader: true, isAdmin: true },
    { path: '/admin/certificateTemplate', element: CertificateTemplatePage, isHeader: true, isAdmin: true },
    { path: '*', element: NotFoundPage, isHeader: false, isAdmin: false }
  ];

export {routes};