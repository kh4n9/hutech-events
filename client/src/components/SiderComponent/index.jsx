import React from 'react';
import { Menu } from 'antd';
import { subnavItem } from './subnavItem';

const items2 = subnavItem.map((item, index) => {
  item.key=index;
  return item;
});

const SiderComponent = ({ colorBgContainer }) => {
  return (
    <Menu
      mode="inline"
      // defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      style={{
        height: '100%',
        borderRight: 0,
        background: colorBgContainer,
      }}
      items={items2}
    />
  );
};

export default SiderComponent;
