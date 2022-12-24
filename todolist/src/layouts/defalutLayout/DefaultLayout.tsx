import React from 'react'
import { ContainerLayout, RightSideBarLayout, SideBarLayout,MainComponent } from './DefalutLayout.styled';
import Sidebar from '../sidebar/Sidebar';
import HeaderComponent from '../Header/Header';
import ToolList from '../toolList/ToolList';
import Filter from '../../components/filter/Filter';

interface Props {
    children:JSX.Element|JSX.Element[];
}

const DefaultLayout:React.FC<Props> = ({children})=> {
    return (
        <ContainerLayout>
            <SideBarLayout><Sidebar /></SideBarLayout>
            <RightSideBarLayout>
                <HeaderComponent/>
                <ToolList />
                <Filter/>
                <MainComponent>{children}</MainComponent>
            </RightSideBarLayout>
        </ContainerLayout>
    )
}

export default DefaultLayout