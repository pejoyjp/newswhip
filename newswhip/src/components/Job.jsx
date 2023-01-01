import React from 'react';
import {jobs} from "../data/job";
import {Box, IconButton, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
const Job = () => {
    return (
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'10px'}}>

            <Box sx={{display:'flex',justifyContent:'center',fontSize:'35px',gap:'1rem',fontWeight:'bold',marginTop:'50px'}}>
                <Box>
                    Our
                </Box>
                <Box color={'rgb(90,30,229)'}>
                    Jobs
                </Box>
                <Box>
                    Openings
                </Box>
            </Box>
            {
                jobs.map((item)=>(
                    <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',
                        position:'relative', marginTop:'15px',alignItems:'center',borderBottom:'1px solid #aaa'}} key={item.id}>
                        <Box>
                            <Typography sx={{fontSize:{
                                    md:'1.5rem',
                                    xs:'1rem',
                            }
                            }}>
                                {item.name}
                            </Typography>
                            <Box sx={{fontSize:{
                                    md:'1.3rem',
                                    xs:'1rem'
                            }
                            }}>
                                {item.date}
                            </Box>
                        </Box>
                        <Box sx={{position:'absolute',right:'20%'}}>
                            {item.location}
                        </Box>
                        <Box>
                            <IconButton>
                                <StarBorderIcon/>
                            </IconButton>

                            <IconButton>
                                <AddIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                ))
            }


        </Box>
    );
};

export default Job;