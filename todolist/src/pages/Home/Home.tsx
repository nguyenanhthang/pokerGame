import React from 'react'
import { HomePageContainer,HomePageContainerParent } from './Home.styled'
import ListTasks from '../../components/ListTasks/ListTasks'

interface Props {}

const Home:React.FC<Props> = ( ) => {
  return (
      <HomePageContainerParent>
        <HomePageContainer>
          <ListTasks />
        </HomePageContainer>
      </HomePageContainerParent>
  )
}

export default Home