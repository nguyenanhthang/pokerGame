import React,{useState} from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown,Modal } from 'antd';
import { ContainerFilter,ActionFilter } from './Filter.styled';
import {
    FolderAddOutlined
} from '@ant-design/icons';
import PopUp from '../popup/PopUp';
import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { setInputAddTitle,setInputAddProgress,setPushList } from '../../features/list/ListSlice';
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
interface Props {

}

const Filter: React.FC<Props> = () => {
    const dispatch = useAppDispatch()
    const title:string = useAppSelector((state)=> state.list.inputList.title)
    const progress:number = useAppSelector((state)=> state.list.inputList.progress)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        dispatch(setPushList({title,progress}))
        
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <ContainerFilter>
            <ActionFilter>
                <svg className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon CheckCircleMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill='#a2a0a2' d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z"></path></svg>
                <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <Button>AllTask</Button>
                </Dropdown>
            </ActionFilter>
            <ActionFilter>
            <svg className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon FilterMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill='#a2a0a2' d="M20,8H4C3.4,8,3,7.6,3,7s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,8,20,8z M18,13c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10C17.6,14,18,13.6,18,13z M15,19c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4C14.6,20,15,19.6,15,19z"></path></svg>
                <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <Button>Filter</Button>
                </Dropdown>
            </ActionFilter>
            <ActionFilter>
            <svg className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon SortMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill='#a2a0a2' d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z"></path></svg>
                <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                    <Button>Sort</Button>
                </Dropdown>
            </ActionFilter>
            <ActionFilter>
                <Button onClick={showModal}>AddLists <span style={{fontSize:'1.4rem'}}><FolderAddOutlined /></span></Button>
                <Modal footer={[<Button key="back" onClick={handleCancel}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
                Add List
            </Button>]} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <PopUp/>
                </Modal>
            </ActionFilter>
        </ContainerFilter>
    )
}

export default Filter