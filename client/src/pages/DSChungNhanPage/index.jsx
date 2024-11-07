import { Row, Col, Image, Button } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useParams, useNavigate } from "react-router-dom";
import { events, chungnhans } from "../../app/data";
import iconEventImage from "./icon_event.png";

const DSChungNhanPage = () => {
    const { mssv } = useParams();
    const navigate = useNavigate();

    // Lọc danh sách chứng nhận theo MSSV
    const chungnhanList = chungnhans.filter((cn) => cn.mssv === mssv);

    const handleClick = (id) => {
        navigate(`/chungnhan/${id}`);
    }

    return (
        <div style={{ padding: '20px' }}>
            <Button type="primary" onClick={() => navigate(-1)}>Quay lại</Button>
            <Title level={3}>Danh sách chứng nhận</Title>
            {chungnhanList.length > 0 ? (
                <Row gutter={[16, 16]} justify="center">
                    {chungnhanList.map((chungnhan) => {
                        // lấy thông tin event tương ứng với chứng nhận
                        const event = events.find((e) => e.id === chungnhan.eventId);
                        return (
                            <button
                                onClick={() => handleClick(chungnhan.id)}
                                key={chungnhan.id}
                                style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
                                <Image
                                    src={iconEventImage}
                                    width={200}
                                    height={150}
                                    preview={false}
                                    style={{ borderRadius: '8px' }}
                                />
                                <Title level={4}>{event.title}</Title>
                                <Row justify="space-between">
                                    <Col span={12}>
                                        <Text>
                                            {event.time.daysInMonth()}/{event.time.month() + 1}/{event.time.year()}
                                        </Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text>{event.location}</Text>
                                    </Col>
                                </Row>
                                <Text>
                                    {event.createBy}
                                </Text>
                            </button>
                        )
                    })}
                </Row>
            ) : (
                <p>Không tìm thấy chứng nhận nào cho sinh viên với MSSV: {mssv}</p>
            )}
        </div>
    );
};

export default DSChungNhanPage;
