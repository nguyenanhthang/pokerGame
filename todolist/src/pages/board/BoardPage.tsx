import React from 'react'
import { BoardPageContainer, BoardPageContainerParent } from './BoardPage.styled'
import ListTasks from '../../components/ListTasks/ListTasks'

type Props = {}

const BoardPage = (props: Props) => {
    return (
        <BoardPageContainerParent>
            <BoardPageContainer>
                <ListTasks/>
            </BoardPageContainer>
        </BoardPageContainerParent>
    )
}

export default BoardPage