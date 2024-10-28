import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledMenu = styled(Menu)`
    theme="dark";
    mode="horizontal";
    defaultSelectedKeys={['2']};
    items={items1};
    style={{
        flex: 1,
        minWidth: 0,
    }}
`;