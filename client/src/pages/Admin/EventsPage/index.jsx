import { Button, Col, DatePicker, Input, Space, Table } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import dayjs from "dayjs";

import { events } from "../../../app/data";
import { useState } from "react";
import Link from "antd/es/typography/Link";

const EventsPage = () => {
    const eventList = events;
    const [searchValue, setSearchValue] = useState('');
    const [fromTime, setFromTime] = useState(dayjs().subtract(1, 'month'));
    const [toTime, setToTime] = useState(dayjs());
    const [filteredEvent, setFilteredEvent] = useState(eventList);

    console.log(dayjs('13-04-2024').unix());

    const columns = [
        {
            title: 'Tên sự kiện',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            render: (time) => dayjs(time).format('DD/MM/YYYY HH:mm'),
            // xếp theo thời gian giảm dần
            sorter: (a, b) => dayjs(a.time).unix() - dayjs(b.time).unix(),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Địa điểm',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link>Chỉnh sửa</Link>
                    <Link>Xóa</Link>
                </Space>
            ),
        },
    ];

    const handleSearch = (searchValue, fromTime, toTime) => {
        let filtered = eventList.filter((event) => {
            return event.title.toLowerCase().includes(searchValue.toLowerCase()) &&
                dayjs(event.time).isAfter(fromTime) &&
                dayjs(event.time).isBefore(toTime);
        });
        setFilteredEvent(filtered);
    };

    return (
        <div>
            <Title>Sự kiện</Title>
            <div style={{ display: 'flex', marginBottom: '16px' }}>
                <Col span={3}><Button type="primary">Thêm sự kiện</Button></Col>
                <Col span={4} style={{ marginRight: '20px' }}>
                    <Input placeholder="Tìm kiếm sự kiện" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </Col>
                <Col span={5}>
                    <Text>Từ ngày:</Text>
                    <DatePicker onChange={(date) => setFromTime(date)} value={fromTime} />
                </Col>
                <Col span={5}>
                    <Text>Đến ngày:</Text>
                    <DatePicker onChange={(date) => setToTime(date)} value={toTime} />
                </Col>
                <Col span={3}>
                    <Button type="primary" onClick={() => handleSearch(searchValue, fromTime, toTime)}>Tìm kiếm</Button>
                </Col>
            </div>
            <Table columns={columns} dataSource={filteredEvent} rowKey="id" 
                pagination={{ pageSize: 10, showSizeChanger: false }}
            />
        </div>
    );
}

export default EventsPage;
