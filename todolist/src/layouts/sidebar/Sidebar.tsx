import React, { useState } from 'react'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    UnorderedListOutlined,
    HomeOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { SideBarContainer } from './Sidebar.styled';
type MenuItem = Required<MenuProps>['items'][number];
interface Props { }
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home 1', '1', <HomeOutlined />),
    getItem('List 2', '2', <UnorderedListOutlined />),
    getItem('Option 3', '3', <PieChartOutlined />),
    getItem('Option 4', '4', <DesktopOutlined />),
    getItem('Option 5', '5', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Submenu', 'sub3', null, [getItem('Option 12', '12'), getItem('Option 13', '13')]),
    ]),
];

const Sidebar: React.FC<Props> = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }
    return (
        <SideBarContainer>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </SideBarContainer>
    )
}

export default Sidebar