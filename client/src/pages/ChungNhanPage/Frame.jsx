import React from "react";
import backgroundHutechRemovebgPreview1 from "./background-hutech-removebg-preview-1.png";
import bghoavan from "./bg-hoa-van.png";
import chuky from "./chuky.png";
import { events, sinhviens } from "../../app/data";

export const Frame = ({ chungnhan }) => {
    const event = events.find((e) => e.id === chungnhan.eventId);
    const sinhVien = sinhviens.find((sv) => sv.mssv === chungnhan.mssv);

    return (
        <div style={{ justifyContent: 'center', width: '100%', backgroundColor: '#ffffff' }}>
            <div
                style={{
                    backgroundColor: '#ffffff',
                    width: '1920px',
                    height: '1370px',
                    backgroundImage: `url(${bghoavan})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                }}
            >
                <div style={{ position: 'absolute', top: '250px', width: '1920px', textAlign: 'center' }}>
                    <div style={{ position: 'absolute', width: '100%' }}>
                        <div
                            style={{
                                color: '#000000',
                                fontSize: '42px',
                                fontWeight: '500',
                                marginBottom: '20px',
                            }}
                        >
                            {event.createBy.toUpperCase()}
                        </div>
                        <div
                            style={{
                                color: '#0c00ff',
                                fontSize: '55px',
                                fontWeight: '500',
                                marginBottom: '20px',
                            }}
                        >
                            Trao
                        </div>

                        <div
                            style={{
                                color: '#ff0000',
                                fontSize: '55px',
                                fontWeight: '900',
                                marginBottom: '20px',
                            }}
                        >
                            Giấy chứng nhận
                        </div>
                        <div
                            style={{
                                color: '#0008ff',
                                fontSize: '47px',
                                fontWeight: '500',
                                marginBottom: '20px',
                            }}
                        >
                            {sinhVien.fullname}
                        </div>
                        <div
                            style={{
                                color: '#010101',
                                fontSize: '43px',
                                fontWeight: '500',
                                marginBottom: '20px',
                            }}
                        >
                            MSSV: {chungnhan.mssv}
                        </div>
                        <div
                            style={{
                                color: '#000000',
                                fontSize: '40px',
                                fontWeight: '500',
                                marginBottom: '20px',
                            }}
                        >
                            Đã tham gia chương trình
                        </div>
                        <div
                            style={{
                                color: '#000000',
                                fontSize: '48px',
                                fontWeight: '500',
                                marginInline: 'auto',
                                width: '85%',
                            }}
                        >
                            {event.title.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '150px', right: '100px', width: '582px', height: '340px' }}>
                    <div
                        style={{
                            color: '#111010',
                            fontSize: '32px',
                            fontWeight: '800',
                            position: 'absolute',
                            top: '350px',
                            left: '100px',
                        }}
                    >
                        Th.S Dương Thành Phết
                    </div>

                    <img
                        alt="Hutech logo removebg"
                        src={chuky}
                        style={{
                            height: '150px',
                            position: 'absolute',
                            top: '150px',
                            left: '213px',
                            objectFit: 'cover',
                        }}
                    />

                    <div
                        style={{
                            color: '#100f0f',
                            fontSize: '27px',
                            fontWeight: '400',
                            position: 'absolute',
                            top: '70px',
                            left: '172px',
                            textAlign: 'center',
                        }}
                    >
                        P. TRƯỞNG KHOA
                    </div>

                    <p
                        style={{
                            color: '#000000',
                            fontSize: '27px',
                            fontStyle: 'italic',
                            fontWeight: '400',
                            position: 'absolute',
                            textAlign: 'center',
                            top: '0',
                            left: '0',
                        }}
                    >
                        TP. Hồ Chí Minh, ngày {event.time.date()} tháng {event.time.month()} năm {event.time.year()}
                    </p>
                </div>
                <div style={{ position: 'absolute', top: '1241px', left: '114px', height: '29px', width: '257px' }}>
                    <div
                        style={{
                            color: '#000000',
                            fontSize: '24px',
                            fontWeight: '400',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                        }}
                    >
                        Số: {chungnhan.id}/CNCNTT
                    </div>
                </div>

                <img
                    alt="Background"
                    src={backgroundHutechRemovebgPreview1}
                    style={{
                        height: '176px',
                        position: 'absolute',
                        top: '94px',
                        left: '114px',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};

export default Frame;
