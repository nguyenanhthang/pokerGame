import React, { useEffect, useState } from 'react'
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    FolderAddOutlined
} from '@ant-design/icons';
const { Header } = Layout;


type Props = {}

const ToolList: React.FC<Props> = () => {
    let Navigate = useNavigate()
    return (
        <Header style={{cursor:'pointer',background:'#000c17',color:'#a2a0a2'}}>
            
            <span onClick={()=> Navigate('/home/list')} style={{margin:'0 10px'}}>List</span>
            <span onClick={()=> Navigate('/home/board')}>Board</span>
        </Header>
    )
}

export default ToolList