import React, {useEffect, useState} from 'react';
import {
    Box,
    IconButton,
    Toolbar,
    Tabs,
    Tab, Button, useMediaQuery, useTheme, Typography
} from "@mui/material";

import {pages} from "../data/pages";
import bigLogo from '../assert/bigLogo.png'
import logo from '../assert/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerCom from "./DrawerCom";

import useScrollListener from "../hooks/useScrollListener";

const Navbar = () => {
    const [value,setValue] = useState(0)
    const [state,setState] = useState(false)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.up('md'))
    const [navClassList, setNavClassList] = useState(true);
    const scroll = useScrollListener();

    useEffect(() => {
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
            setNavClassList(false)
            console.log('t')
        }else {
            setNavClassList(true)
            console.log('f')
        }

    }, [scroll.y, scroll.lastY])

    return (
                <Box
                    sx={{bgcolor:'white',height:'130px',
                        display:'flex',alignItems:'center',position:'sticky',
                        transform:navClassList?'':'translate(-100%)',top:0,
                        transition:'transform 300ms ease-in-out',zIndex:999
                }}>
                    <DrawerCom state={state} setState={setState}/>
                    <Toolbar sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        {
                            isMatch?(
                                <>
                                    <img src={bigLogo} width={'170px'} alt={'bigLogo'}/>
                                    <Tabs value={value} onChange={() => setValue(value)}>
                                        {pages.map((item, index) => (
                                            <Tab label={item}
                                                 key={index}
                                                 onClick={()=>setValue(index)}
                                            />
                                        ))}
                                    </Tabs>

                                    <Button variant="outlined" sx={{borderRadius:'30px',color:'black'}}>
                                        Request a demo
                                    </Button>
                                </>

                            ):(
                                <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                                    <img src={logo} width={'70px'} alt={'logo'}/>
                                    <Typography variant={'h5'} fontWeight={'bold'}>
                                        NEWSWHIP
                                    </Typography>
                                    <IconButton onClick={()=>setState(true)}>
                                        <MenuIcon/>
                                    </IconButton>
                                </Box>

                            )
                        }
                    </Toolbar>

            </Box>
    );
};

export default Navbar;