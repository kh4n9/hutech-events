import dayjs from "dayjs";

export const users = [
    {
        id: 1,
        fullname: 'John Doe',
        username: 'johndoe',
        phonenumber: '1234567890',
        email: 'johndoe@gmail.com',
        password: 'password',
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    },
    {
        id: 2,
        fullname: 'Jane Doe',
        username: 'janedoe',
        phonenumber: '1234567890',
        email: 'janedoe@gmail.com',
        password: 'password',
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    },
    {
        id: 3,
        fullname: 'John Smith',
        username: 'johnsmith',
        phonenumber: '1234567890',
        email: 'johnsmith@gmail.com',
        password: 'password',
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    }
];

export const sinhviens = [
    { mssv: '2180603432', fullname: 'Hoàng Minh Khang', classId: 1,},
    { mssv: '2180603433', fullname: 'Nguyễn Văn A', classId: 1, },
    { mssv: '2180603434', fullname: 'Nguyễn Văn B', classId: 1, },
    { mssv: '2180601133', fullname: 'Nguyễn Thành Phú', classId: 1, }
];

export const chungnhans = [
    { id: 1, mssv: '2180603432', eventId: 1 },
    { id: 2, mssv: '2180603432', eventId: 2 },
    { id: 3, mssv: '2180603433', eventId: 1 },
    { id: 4, mssv: '2180603433', eventId: 2 },
    { id: 5, mssv: '2180603434', eventId: 1 },
    { id: 6, mssv: '2180603434', eventId: 2 },
    { id: 7, mssv: '2180601133', eventId: 1 },
    { id: 8, mssv: '2180601133', eventId: 2 },
    { id: 9, mssv: '2180603432', eventId: 3 },
    { id: 10, mssv: '2180603433', eventId: 3 },
    { id: 11, mssv: '2180603434', eventId: 3 },
    { id: 12, mssv: '2180601133', eventId: 3 }
]

export const events = [
    {
        id: 1,
        title: 'Event 1',
        description: 'Description 1',
        time: dayjs('2024-04-13 19:18'),
        location: 'Khu E',
        createBy: 'khoa công nghệ thông tin',
    },
    {
        id: 2,
        title: 'Event 2',
        description: 'Description 2',
        time: dayjs('2024-04-14 19:18'),
        location: 'Khu AB',
        createBy: 'khoa công nghệ thông tin',
    },
    {
        id: 3,
        title: 'Event 3',
        description: 'Description 3',
        time: dayjs('2024-04-12 19:18'),
        location: 'Khu E',
        createBy: 'khoa công nghệ thông tin',
    }
];

export const khoas = [
    { id: 1, title: 'Công nghệ thông tin', description: 'Description 1' },
    { id: 2, title: 'Kinh tế', description: 'Description 2' },
    { id: 3, title: 'Ngoại ngữ', description: 'Description 3' }
];

export const lops = [
    { id: 1, title: '21DTHB1', khoaId: 1 },
    { id: 2, title: '21DTHB2', khoaId: 1 },
    { id: 3, title: '21DTHB3', khoaId: 1 }
];
