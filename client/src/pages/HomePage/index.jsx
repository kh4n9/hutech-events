import { Button, Col, Flex } from "antd";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { FacebookOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
    const [searchText, setSearchText] = useState('');

    const handleChanged = (e) => {
        const value = Number(e.target.value);
        if (Number.isFinite(value)) {
            setSearchText(e.target.value);
        }
    }

    const navigate = useNavigate();

    const handleSearch = (value) => {
        if (value !== '') {
            navigate(`/sinhvien/${value}`);
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Title>TRANG CHỦ</Title>
            <Title level={2}>
                Bạn có thể tra cứu và in giấy chứng nhận tham gia sự kiện tại đây!
            </Title>
            <Flex style={{ marginInline: 100, marginTop: 50 }}>
                <Col span={16}>
                    <Search
                        placeholder="Nhập mã số sinh viên"
                        allowClear
                        enterButton="Tìm kiếm"
                        size="large"
                        value={searchText}
                        onChange={handleChanged}
                        onSearch={handleSearch}
                    />
                </Col>
                <Col span={8}>
                    <Button type="primary" size="large">
                        <FacebookOutlined />
                        Đăng nhập với facebook
                    </Button>
                </Col>
            </Flex>
        </div>
    );
}

export default HomePage;