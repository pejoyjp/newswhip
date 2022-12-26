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

                    <Link onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} underline="none" color={'white'}>
                        Back To Top
                    </Link>
            </Box>

            <Box sx={{display:'flex',marginTop:'30px',flexDirection:'row-reverse'}}>
                <Box sx={{width:'240px',height:'185px',display:{
                        lg:'flex',
                        xs:'none'
                }
                }}>
                    <img src={berlin} width={'60px'} height={'73px'}/>
                    <Box>
                        <Typography color={'white'} variant={'body1'}>
                            Berlin Office
                        </Typography>
                        <Typography color={'white'} variant={'body2'} marginTop={'10px'}>
                            Wattstraße 11, 13355,
                            Berlin, Germany
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{width:'240px',height:'185px',display:'flex'}}>
                    <img src={berlin} width={'60px'} height={'73px'}/>
                    <Box>
                        <Typography color={'white'} variant={'body1'}>
                            Dublin HQ
                        </Typography>
                        <Typography color={'white'} variant={'body2'} marginTop={'10px'}>
                            The Daintree Building,
                            62 Pleasants Place,
                            Dublin, Ireland
                        </Typography>
                    </Box>
                </Box>

            </Box>

            <Box>
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