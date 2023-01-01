import React from 'react';
import {Box} from "@mui/material";

import Animation from "../animation/Animation";
import CardCom from "./CardCom";
import Location from "./Location";
import Job from "./Job";


const Container = () => {
    return (

        <Box sx={{width:"100%",display:'flex',justifyContent:'center',marginTop:'30px'}}>
            <Box sx={{maxWidth:'1280px'}}>
                <Animation/>
                <Box sx={{display:'flex',justifyContent:'center',fontSize:'35px',gap:'1rem',fontWeight:'bold',marginTop:'30px'}}>
                        <Box>
                            Why Work At
                        </Box>
                        <Box color={'rgb(90,30,229)'}>
                             Newswhip
                        </Box>
                </Box>

                <Box sx={{display:'flex',justifyContent:'center',marginTop:'15px',maxWidth:'1000px'}}>
                    <Box textAlign={'center'}>
                        With NewsWhip, you can track the spread of any content within seconds of its publication. Use our products to predict what will make an impact every day on social media. NewsWhip is designed to put professionals ahead of the news cycle.
                    </Box>
                </Box>
                <CardCom/>
                <Location/>
                <Job/>

            </Box>

        </Box>



    );
};

export default Container;