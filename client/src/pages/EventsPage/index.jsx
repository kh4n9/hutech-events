import { Button, Col, DatePicker, Flex, Space, Table } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import dayjs from "dayjs";

import { events } from "../../app/data";
import { useState } from "react";
import Search from "antd/es/input/Search";
import Link from "antd/es/typography/Link";

const EventsPage = () => {
    const eventList = events;
    const columns = [
        {
            title: 'Tên sự kiện',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Ngày tổ chức',
            dataIndex: 'date',
            key: 'date',
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


    const [searchText, setSearchText] = useState('');
    const [fillterEvent, setFillterEvent] = useState(eventList);

    console.log(searchText);

    const handleSearch = (value) => {
        setSearchText(value);
        if (value === '') {
            setFillterEvent(eventList);
        } else {
            const fillterEvent = eventList.filter((event) => {
                return event.title.toLowerCase().includes(value.toLowerCase());
            });
            setFillterEvent(fillterEvent);
        }
    }


    return (
        <div>
            <Title>Sự kiện</Title>
            <Flex>
                <Col span={3}><Button type="primary">Thêm sự kiện</Button></Col>
                <Col span={6}>
                    <Search placeholder="Tìm kiếm sự kiện" onSearch={handleSearch} enterButton />
                </Col>
                <Col span={5}>
                    <Text style={{ margin: 5 }}>Từ ngày:</Text>
                    <DatePicker defaultValue={dayjs().subtract(1, 'month')} />
                </Col>
                <Col span={5}>
                    <Text style={{ margin: 5 }}>Đến ngày:</Text>
                    <DatePicker defaultValue={dayjs()} />
                </Col>
            </Flex>
            <Table columns={columns} dataSource={fillterEvent} />
        </div >
    );
}

export default EventsPage;