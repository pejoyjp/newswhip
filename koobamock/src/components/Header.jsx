import React from 'react';
import {Box, Link, Typography, Button, IconButton,styled} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Navbar from "./Navbar.jsx";


const MyIconButton = styled(IconButton)({
    color:'rgb(4,251,252)',
    '&:hover': {
        color: "white",
    }
});




const Header = () => {
    return (
        <Box sx={{height:{xs:'442px',lg:'522px'},width:'100%',display:'flex',backgroundColor:'rgb(35,31,32)',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
            <Box sx={{maxWidth:'780px',height:'357px',margin:'10px'}}>
                <Box sx={{display:'flex',alignItems:'center',color:'rgb(4,251,252)',marginBottom: {
                        xs:'0px',
                        lg:'50px'
                    }}}>
                    <ArrowBackIcon/>
                    <Link href="#" underline="none" color={'rgb(4,251,252)'}>Back</Link>
                </Box>
                <Box  sx={{marginBottom:{
                        xs:'20px',
                        lg:'60px'}
                }}>
                    <Typography sx={{color:'white',fontWeight:'bold',marginBottom:'50px',fontSize:{xs:'45px', lg:'58px'}}}
                    >
                        Graduate Frontend Developer
                    </Typography>
                    <Box display={'flex'}>
                        <Box sx={{backgroundColor:'white',height:'30px',width:'100px',borderRadius:'10px'}}>
                            <Typography variant={'body2'} textAlign={'center'} paddingTop={'5px'}>
                                Jin
                            </Typography>
                        </Box>
                        <Typography variant={'body2'} paddingLeft={'30px'} paddingTop={'5px'} color={'#ccc'}>
                            2022-10-13
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:{
                        xs:'column',
                        lg:'row'
                }
                }}>
                    <Button variant="contained" color={'success'} sx={{width:'200px'}}> Apply Today</Button>
                    <Box marginLeft={'20px'} display={'flex'} alignItems={'center'}>
                        <Typography  variant={'body2'} color={'white'}>
                            Share this
                        </Typography>
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

        </Box>
    );
};

export default Header;