import React from 'react'
import { ProFormRadio, ProFormSwitch, ProList } from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';
import { useState } from 'react';
import { ListPageParent } from './ListPage.styled';
import { useAppSelector,useAppDispatch } from '../../app/hooks';
import { setDeleteList } from '../../features/list/ListSlice';

type Props = {}

const ListPage: React.FC<Props> = () => {
    const dispatch = useAppDispatch()
    const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>('extra');
    const data = useAppSelector((state)=> state.list.ListData)
    const handleDelete = (id:number)=>{
        dispatch(setDeleteList(id))
        console.log(id);
    }
    let list = data.map((item,index) =>({
        key:index,
        title: item.title,
        subTitle: <Tag color="#5BD8A6">Language</Tag>,
        actions: [<a key="run">Invite</a>, <a  onClick={() => handleDelete(index)} key="delete">Delete</a>],
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
        content: (
            <div
                style={{
                    flex: 1,
                }}
            >
                <div
                    style={{
                        width: 200,
                    }}
                >
                    <div>Announcing</div>
                    <Progress percent={item.progress} />
                </div>
            </div>
        ),
    }))
    const [ghost, setGhost] = useState<boolean>(true);
    return (
        <ListPageParent>
        <div
            style={{
                backgroundColor: '#111d2c',
                padding: 24,
                color:'#ffff'
            }}
        >
            
            <ProFormRadio.Group
                label="actions"
                options={[
                    {
                        label: 'action',
                        value: 'actions',
                    },
                    {
                        label: 'extra',
                        value: 'extra',
                    },
                ]}
                fieldProps={{
                    value: cardActionProps,
                    onChange: (e:any) => setCardActionProps(e.target.value),
                }}
            />
            <ProFormSwitch
                label="ghost mode"
                style={{color:'#ffff'}}
                fieldProps={{
                    checked: ghost,
                    onChange: (e:any) => setGhost(e),
                }}
            />
            <ProList<any>
                ghost={ghost}
                itemCardProps={{
                    ghost,
                }}
                showActions="hover"
                rowSelection={{}}
                grid={{ gutter: 16, column: 2 }}
                onItem={(record: any) => {
                    return {
                        onMouseEnter: () => {
                            console.log(record);
                        },
                        onClick: () => {
                            console.log(record);
                        },
                    };
                }}
                metas={{
                    title: {},
                    subTitle: {},
                    type: {},
                    avatar: {},
                    content: {},
                    actions: {
                        cardActionProps,
                    },
                }}
                headerTitle="Card list display"
                dataSource={list}
            />
        </div>
        </ListPageParent>
    );
}

export default ListPage