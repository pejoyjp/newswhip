import React from 'react';
import {Box,IconButton} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = ({setOpen,open}) => {
    return (
        <Box sx={{height:'98px',width:'100%',backgroundColor:'rgb(35,31,32)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{display:'flex',height:'48px',alignItems:'center',justifyContent:'space-between',width:'1280px'}}>
                <Box margin={'10px'}>
                    <img src={logo} width={'150px'}/>
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