import Title from "antd/es/typography/Title";
import { Table } from "antd";
import { sinhviens, lop } from '../../../app/data';
import Search from "antd/es/input/Search";
import { useState, useEffect } from "react";

function SinhvienPage() {
  const columns = [
    {
      title: 'MSSV',
      dataIndex: 'mssv',
      key: 'mssv',
    },
    {
      title: 'Họ tên',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Lớp',
      dataIndex: 'lopItem',
      key: 'lopItem',
    },
  ];

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const dataWithLop = sinhviens.map((item, index) => {
      const lopItem = lop.find((lop) => lop.id === item.classId);
      return { ...item, key: index, lopItem: lopItem ? lopItem.title : '' };
    });
    setData(dataWithLop);
    setOriginalData(dataWithLop);
  }, []);

  const handleSearch = (value) => {
    if (value === '') {
      setData(originalData);
    } else {
      const filteredData = originalData.filter((sinhvien) =>
        sinhvien.fullname.toLowerCase().includes(value.toLowerCase()) ||
        sinhvien.mssv.toLowerCase().includes(value.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <div>
      <Title>Danh sách sinh viên</Title>
      <Search
        placeholder="Tìm kiếm"
        enterButton
        onSearch={handleSearch}
        style={{ width: '30%' }}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Table 
        dataSource={data}
        columns={columns} 
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}

export default SinhvienPage;
