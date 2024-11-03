import { Card } from "antd"
import Title from "antd/es/typography/Title"


const ChungNhanComponent = (prop) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Title level={4}>{prop.title}</Title>
            
        </Card>

    )
}