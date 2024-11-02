import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";


const HeaderComponent = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Link to="/" style={{ textDecoration: 'none', margin: 20 }}>
                <Flex>
                    <img src="https://www.hutechcheckin.com/img/hutech_logo.png" alt="logo" style={{ width: 50, height: 50 }} />
                    <Title level={2} style={{ margin: 5 }}>Hutech Events</Title>
                </Flex>
            </Link>
        </div>
    );
};

export default HeaderComponent;