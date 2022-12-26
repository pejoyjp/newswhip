import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = ({setOpen,open}) => {
    return (
        <Box sx={{height:'98px',width:'100%',backgroundColor:'rgb(35,31,32)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{display:'flex',height:'48px',alignItems:'center',justifyContent:'space-between',width:'1280px'}}>
                <Box margin={'10px'} display={'flex'}>
                    <img src={logo} width={'70px'} alt={'logo'}/>
                    <Typography color={'white'} variant={'h4'} pt={'20px'}>Smart</Typography>
                    <Typography color={'rgb(0,164,154)'} variant={'h4'} pt={'20px'} fontWeight={'bold'}>Routes</Typography>
                </Box>
                <Box margin={'10px'}>
                <IconButton
                    onClick={()=>setOpen(!open)}
                    sx={{background:'rgb(4,251,252)','&:hover': {
                        background: "rgb(4,251,252)",
                        transform: "scale(1.1)"
                    },}} size="large">
                    {open? <CloseIcon /> :<MenuIcon />}
                </IconButton>
                </Box>
            </Box>

        </Box>
    );
};

export default Navbar;