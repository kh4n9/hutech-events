import React from 'react';
import { Menu } from 'antd';
import { subnavItem } from './subnavItem';

const items2 = subnavItem.map((item, index) => {
  item.key=index;
  return item;
});

const AdminSiderComponent = ({ colorBgContainer }) => {
  return (
    <Menu
      mode="inline"
      style={{
        height: '100%',
        borderRight: 0,
        background: colorBgContainer,
      }}
      items={items2}
    />
  );
};

export default AdminSiderComponent;
