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
    { mssv: '2180603434', fullname: 'Nguyễn Văn B', classId: 1, }
];

export const events = [
    {
        id: 1,
        title: 'Event 1',
        description: 'Description 1',
        date: '2021-10-01',
        location: 'Location 1',
        createBy: 'Khoa cntt',
        mssvs: ['2180603432', '2180603433']
    },
    {
        id: 2,
        title: 'Event 2',
        description: 'Description 2',
        date: '2021-11-01',
        location: 'Location 2',
        createBy: 'Khoa cntt',
        mssvs: ['2180603432', '2180603433']
    },
    {
        id: 3,
        title: 'Event 3',
        description: 'Description 3',
        date: '2021-12-01',
        location: 'Location 3',
        createBy: 'Khoa cntt',
        mssvs: ['2180603432', '2180603433', '2180603434']
    }
];

export const khoa = [
    { id: 1, title: 'Công nghệ thông tin', description: 'Description 1' },
    { id: 2, title: 'Kinh tế', description: 'Description 2' },
    { id: 3, title: 'Ngoại ngữ', description: 'Description 3' }
];

export const lop = [
    { id: 1, title: '21DTHB1', khoaId: 1 },
    { id: 2, title: '21DTHB2', khoaId: 1 },
    { id: 3, title: '21DTHB3', khoaId: 1 }
];
