import React from 'react';
import {Box, IconButton, Link,styled} from "@mui/material";
import logo from '../assert/jin.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const MyIconButton = styled(IconButton)({
    color:'white',
    '&:hover': {
        transform:'scale(1.3)'
    }
});
const Footer = () => {
    return (
        <Box sx={{
            marginTop:'100px',
            width:'100%',
            height:'300px',
            background:'linear-gradient(to right, #434343, #000000)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Box sx={{maxWidth:'1000px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'2px solid #ccc',gap:'500px'}}>
                <Box sx={{display:{md:'block',xs:'none'}}}>
                    <img src={logo} width={'120px'} alt={'logo'}/>
                </Box>
                <Box display={'flex'} gap={'30px'} >
                    <Link sx={{color:'white'}}>
                        Products
                    </Link>
                    <Link sx={{color:'white'}}>
                        Company
                    </Link>
                    <Link sx={{color:'white'}}>
                        Login
                    </Link>
                    <Link sx={{color:'white'}}>
                        Learn
                    </Link>
                </Box>
            </Box>

            <Box sx={{maxWidth:'1000px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'500px',flexDirection:'row-reverse'}}>
                <Box>
                    <MyIconButton >
                        <FacebookIcon sx={{color:'white'}}/>
                    </MyIconButton>

                    <MyIconButton>
                        <InstagramIcon sx={{color:'white'}}/>
                    </MyIconButton>

                    <MyIconButton>
                        <TwitterIcon sx={{color:'white'}}/>
                    </MyIconButton>

                    <MyIconButton>
                        <LinkedInIcon sx={{color:'white'}}/>
                    </MyIconButton>
                </Box>

                <Box color={'white'} sx={{display:{md:'block',xs:'none'}}}>
                    Made by Jin, 01 Jan 2023
                </Box>
            </Box>


        </Box>
    );
};

export default Footer;