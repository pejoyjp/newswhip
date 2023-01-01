import React from 'react';
import {Box, Button} from "@mui/material";
import people from '../assert/people.png'




const Head = () => {
    return (
        <Box sx={{width:"100%",display:'flex',justifyContent:'center'}} >
            <Box sx={{display:'flex',maxWidth:'1280px',justifyContent:'space-between',alignItems:'center',gap:'50px',margin:'10px'}}>
                <Box>
                    <Box sx={{fontFamily:'Archivo',fontWeight:'bold',fontSize:'60px'}}>
                        Work at
                    </Box>
                    <Box sx={{fontFamily:'Archivo',fontWeight:'bold',fontSize:'60px',color:'white',borderRadius:'10px',
                        width:'300px',background:'linear-gradient(-135deg, transparent 10px, rgb(90,30,229) 0) top right',
                        textAlign:'center'
                    }}>
                        Newswhip
                    </Box>
                    <Box sx={{fontFamily:'Archivo',fontWeight:'bold',fontSize:'60px'}}>
                        Enjoy Your Life
                    </Box>
                    <Box width={'300px'}>
                        We pride ourselves on our vibrant, diverse, unique culture with outstanding people from across the globe. NewsWhip provides you with reward, compensation, respect, and fulfilment.
                    </Box>

                    <Button variant={'contained'} sx={{bgcolor:'rgb(90,30,229)',width:'150px',borderRadius:'15px',margin:'10px',boxShadow:'5px 10px rgb(224,214,247)'}}>
                        Join us
                    </Button>
                </Box>

                <Box sx={{display:{md:'block', xs:'none'},

                }}>
                    <img src={people} width={'400px'} alt={'people'}/>
                </Box>
            </Box>

        </Box>
    );
};

export default Head;