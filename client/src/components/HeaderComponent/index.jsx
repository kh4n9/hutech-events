import React from 'react';
import { Menu } from 'antd';
import { navItem } from './navItem';

const items1 = navItem;

const HeaderComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </div>
  );
};

export default HeaderComponent;
