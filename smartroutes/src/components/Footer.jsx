import React from 'react';
import {Box, IconButton, Link, styled, Typography} from "@mui/material";
import logo from "../assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter.js";
import FacebookIcon from "@mui/icons-material/Facebook.js";
import LinkedInIcon from "@mui/icons-material/LinkedIn.js";

import berlin from "../assets/berlin.jpg"


const MyIconButton = styled(IconButton)({
    color:'white',
    '&:hover': {
        color: "rgb(4,251,252)",
    }
});


const Footer = () => {
    return (
        <Box sx={{width:'100%',height:'488px',backgroundColor:'rgb(35,31,32)',marginTop:'100px',display:'flex',justifyContent:'center'}}>
        <Box width={'1220px'} margin={'20px'}>
            <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
                    <Box >
                        <img src={logo} width={'150px'}/>
                    </Box>

                    <Box sx={{display:{lg:'flex', xs:'none'},gap:'30px'
                    }}>
                        <Typography color={'white'} variant={'h5'}>Company</Typography>
                        <Typography color={'white'} variant={'h5'}>Resources</Typography>
                        <Typography color={'white'} variant={'h5'}>Product</Typography>
                            <Typography color={'white'} variant={'h5'}>Compare</Typography>

                    </Box>

                    <Link onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} underline="none" color={'white'}>
                        Back To Top
                    </Link>
            </Box>


            <Box ml={'10px'}>
                <MyIconButton>
                    <TwitterIcon/>
                </MyIconButton>

                <MyIconButton >
                    <FacebookIcon/>
                </MyIconButton>

                <MyIconButton >
                    <LinkedInIcon/>
                </MyIconButton>

            </Box>

        </Box>
        </Box>




    );
};

export default Footer;