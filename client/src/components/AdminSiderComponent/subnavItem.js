import { BookOutlined, CalendarOutlined, CloudServerOutlined, DatabaseOutlined, IdcardOutlined, OrderedListOutlined, SearchOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const subnavItem = [
    {
        key: 'system',
        label: 'Hệ thống',
        icon: <CloudServerOutlined />,
        children: [
            {
                key: 'userProfile',
                label: (
                    <Link to='/admin/userProfile'>Tài khoản</Link>
                ),
                icon: <UserOutlined />
            },
            {
                key: 'settings',
                label: (
                    <Link to='/admin/settings'>Cài đặt</Link>
                ),
                icon: <SettingOutlined />
            },
            {
                key: 'certificateTemplate',
                label: (
                    <Link to='/admin/certificateTemplate'>Mẫu chứng nhận</Link>
                ),
                icon: <IdcardOutlined />
            },
            {
                key: 'theme',
                label: 'Chủ đề',
                icon: <BookOutlined />
            }
        ]
    },
    {
        key: 'data',
        label: 'Dữ liệu',
        icon: <DatabaseOutlined />,
        children: [
            {
                key: 'events',
                label: (
                    <Link to='/admin/events'>Sự kiện</Link>
                ),
                icon: <CalendarOutlined />
            },
            {
                key: 'students',
                label: (
                    <Link to='/admin/sinhvien'>Sinh viên</Link>
                ),
                icon: <UserOutlined />
            },
            {
                key: 'classLeader',
                label: (
                    <Link to='/admin/bancansu'>Ban cán sự</Link>
                ),
                icon: <TeamOutlined />
            },
            {
                key: 'certificates',
                label: (
                    <Link to='/admin/chungnhan'>Chứng nhận</Link>
                ),
                icon: <IdcardOutlined />
            }
        ]
    },
    {
        key: 'search',
        label: 'Tra cứu',
        icon: <SearchOutlined />,
        children: [
            {
                key: 'studentList',
                label: 'Danh sách SV tham gia',
                icon: <OrderedListOutlined />
            },
            {
                key: 'classLeaderList',
                label: 'Danh sách BCS tham gia',
                icon: <OrderedListOutlined />
            },
            {
                key: 'classList',
                label: 'Danh sách lớp tham gia',
                icon: <OrderedListOutlined />
            }
        ]
    }
];
