import { Col, Row, Typography } from 'antd';
const { Text } = Typography;

const InfoComponent = (prop) => {
    return (
        <div>
            <div>
                <Row>
                    <Col span={12}><Text>Họ tên: {prop.fullname}</Text></Col>
                    <Col span={12}><Text>Mã số sinh viên: {prop.mssv}</Text></Col>
                </Row>
                <Row>
                    <Col span={12}><Text>Khoa: {prop.department}</Text></Col>
                    <Col span={12}><Text>Lớp: {prop.class}</Text></Col>
                </Row>
                <Row>
                    <Col span={24}><Text>Niên khóa: {prop.schoolYear}</Text></Col>
                </Row>
            </div>
        </div>
    );
}

export default InfoComponent;