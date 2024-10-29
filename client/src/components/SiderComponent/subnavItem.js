import { BookOutlined, CalendarOutlined, CloudServerOutlined, DatabaseOutlined, IdcardOutlined, OrderedListOutlined, SearchOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const subnavItem = [
    {
        label: 'Hệ thống',
        children: [
            {
                label: (
                    <Link to='/userProfile'>Tài khoản</Link>
                ),
                icon: <UserOutlined />
            },
            {
                label: 'Thiết lập',
                icon: <SettingOutlined />
            },
            {
                label: 'Mẫu chứng nhận',
                icon: <IdcardOutlined />
            },
            {
                label: 'Chủ đề',
                icon: <BookOutlined />
            }
        ],
        icon: <CloudServerOutlined />
    },
    {
        label: 'Dữ liệu',
        children: [
            {
                label: 'Sự kiện',
                icon: <CalendarOutlined />
            },
            {
                label: 'Sinh viên',
                icon: <UserOutlined />
            },
            {
                label: 'Ban cán sự',
                icon: <TeamOutlined />
            },
            {
                label: 'Chứng nhận',
                icon: <IdcardOutlined />
            }
        ],
        icon: <DatabaseOutlined />
    },
    {
        label: 'Tra cứu',
        children: [
            {
                label: 'Danh sách SV tham gia',
                icon: <OrderedListOutlined />
            },
            {
                label: 'Danh sách BCS tham gia',
                icon: <OrderedListOutlined />
            },
            {
                label: 'Danh sách lớp tham gia',
                icon: <OrderedListOutlined />
            }
        ],
        icon: <SearchOutlined />
    }
];