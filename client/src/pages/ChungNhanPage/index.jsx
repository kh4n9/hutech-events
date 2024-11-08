import { Button, Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import Frame from "./Frame";
import { chungnhans } from "../../app/data";

const ChungNhanPage = () => {
    const navigate = useNavigate();
    const certificateRef = useRef();
    const [imgData, setImgData] = useState(null);
    const { id } = useParams();
    const chungnhan = chungnhans.find((cn) => cn.id === parseInt(id, 10));


    useEffect(() => {
        const generateCertificateImage = async () => {
            if (certificateRef.current) {
                const canvas = await html2canvas(certificateRef.current);
                setImgData(canvas.toDataURL("image/png"));
            }
        };
        generateCertificateImage();
    }, []);

    return (
        <Row direction="column">
            <Button type="primary" onClick={() => navigate(-1)} style={{ margin: '20px' }}>
                Quay lại
            </Button>
            {!chungnhan ? (
                <p>Không tìm thấy chứng nhận</p>
            ) : (
                imgData ? (
                    <Col>
                        <Row justify="center">
                            <img src={imgData} alt="Giấy chứng nhận" style={{ borderRadius: "16px", width: '40%' }} />
                        </Row>
                        <Row justify="center">
                            <Button type="primary" style={{ marginTop: '10px' }}>
                                <a href={imgData} download={`chungnhan_${chungnhan.id}.png`}>Tải xuống giấy chứng nhận</a>
                            </Button>
                        </Row>
                    </Col>
                ) : (
                    <div ref={certificateRef} style={{ width: "1920px", background: "#fff", margin: "0 auto" }}>
                        <Frame chungnhan={chungnhan} />
                    </div>
                )
            )}
        </Row>
    );
};

export default ChungNhanPage;
