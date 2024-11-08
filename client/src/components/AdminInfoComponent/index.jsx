import { Col, Image, Row, Typography, Input, Flex } from 'antd';

const { Link, Title, Text } = Typography;

const AdminInfoComponent = (prop) => {
    return (
        <div>
            <Flex>
                <Col span={6}>
                    <Row><Image style={{ borderRadius: 24}} width={200} src={prop.avatarUrl} /></Row>
                    <Row style={{marginTop:20}}><Link href="#">Change Avatar</Link></Row>
                    <Row style={{marginTop:20}}><Link href="#">Change Password</Link></Row>
                    <Row style={{marginTop:20}}><Link href="#">Edit Profile</Link></Row>
                </Col>
                <Col span={18}>
                    <Row><Title style={{marginTop: 0}}>Thông tin tài khoản</Title></Row>
                    <Row><Text>Họ tên</Text></Row>
                    <Row><Input value={prop.fullname} /></Row>
                    <Row style={{marginTop:20}}><Text>Tài khoản</Text></Row>
                    <Row><Input value={prop.username}></Input></Row>
                    <Row style={{marginTop:20}}><Text>Email</Text></Row>
                    <Row><Input value={prop.email}></Input></Row>
                    <Row style={{marginTop:20}}><Text>Số điện thoại</Text></Row>
                    <Row><Input value={prop.phonenumber}></Input></Row>
                </Col>
            </Flex>
        </div>
    );
}

export default AdminInfoComponent;