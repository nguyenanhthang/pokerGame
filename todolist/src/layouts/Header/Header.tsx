import React from 'react'
import {Layout} from 'antd';
import { Box ,BoxParent,HeaderUser} from './Header.styled';
import Input from '../../components/Input/Input';
const { Header } = Layout;
interface Props {

}

const HeaderComponent: React.FC<Props> = () => {
    return (
        <BoxParent>
            <Box>
                <img style={{height:'35px',width:'88px'}} className="NavigationAsanaLogo-img" src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6622ad572b5223bcb1ad696eae8f988e5dd04631/Asana-Logo-Horizontal-Coral-White.svg"alt=''/>
            </Box>
            <Box>
                <Input size={35} type='search' placeHolder='Search...'/>
            </Box>
            <div style={{display:'flex',alignItems:'center'}}><span style={{color:'#fff'}}>nguyen thang</span> <HeaderUser></HeaderUser></div>
        </BoxParent>
    )
}

export default HeaderComponent