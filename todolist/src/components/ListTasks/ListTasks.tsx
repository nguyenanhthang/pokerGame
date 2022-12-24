import React from 'react'
import { ListTaskContainer, Container, TaskList, TaskColumnStyles, Title } from './ListTasks.styled';
import { Divider, List, Typography } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { columnsFromBackend } from './KanbanData';
import TaskCard from './TaskCard';
interface Props { }


const ListTasks: React.FC<Props> = () => {
    const [columns, setColumns] = useState(columnsFromBackend);

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };

    return (
        <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
            <Container>
                <TaskColumnStyles>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => (
                                    <TaskList style={{overflow:'auto',height:'400px'}}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    >
                                        <Title style={{color:'#ffff'}}>{column.title}</Title>
                                        {column.items.map((item:any, index) => (
                                            <TaskCard key={item} item={item} index={index} />
                                        ))}
                                        {provided.placeholder}
                                    </TaskList>
                                )}  
                            </Droppable>
                        );
                    })}
                </TaskColumnStyles>
            </Container>
        </DragDropContext>
    )
}

export default ListTasks