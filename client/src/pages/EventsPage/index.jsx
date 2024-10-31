import { Button, Col, Flex, Select, Space } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import { khoa, lop, events } from "../../app/data";

const EventsPage = () => {
    const khoaList = khoa;
    const lopList = lop;
    const eventList = events;

    console.log(khoaList);
    console.log(lopList);
    console.log(eventList);

    return (
        <div>
            <Title>Sự kiện</Title>
            <Flex>
                <Col span={3}><Button type="primary">Thêm sự kiện</Button></Col>
                <Col span={6}>
                    <Flex>
                        <Text style={{ margin: 5 }}>Theo khoa:</Text>
                        <Space.Compact>
                            <Select defaultValue={1}>
                                {khoaList.map((item) => (
                                    <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
                                ))}
                            </Select>
                        </Space.Compact>
                    </Flex>
                </Col>
                <Col span={4}>
                    <Flex>
                        <Text style={{ margin: 5 }}>Theo lớp:</Text>
                        <Space.Compact>
                            <Select defaultValue={1}>
                                {lopList.map((item) => (
                                    <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
                                ))}
                            </Select>
                        </Space.Compact>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Text style={{ margin: 5 }}>Từ ngày:</Text>
                </Col>
                <Col span={6}>
                    <Text style={{ margin: 5 }}>Đến ngày:</Text>
                </Col>
            </Flex>
        </div >
    );
}

export default EventsPage;