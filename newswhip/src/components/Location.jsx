import React from 'react';
import {Card, CardContent, CardMedia, CardActionArea, Typography, Box, Button, CardActions} from "@mui/material";
import {cardData} from "../data/card";
const Location = () => {
    return (
        <Box sx={{display:"flex",justifyContent:'center',marginTop:'30px',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{display:'flex',justifyContent:'center',fontSize:'35px',gap:'1rem',fontWeight:'bold',marginTop:'30px'}}>
                <Box>
                    Our
                </Box>
                <Box color={'rgb(90,30,229)'}>
                    Location
                </Box>
            </Box>
            <Box sx={{display:'flex',gap:'40px',flexDirection:{
                    md:'row',
                    xs:'column'

                }}}>
                {
                    cardData.map((item)=>(
                        <Card sx={{ maxWidth: 345,borderRadius:'10px',marginTop:'15px'}} key={item.id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Work should enrich your life, not consume it. Your job should support you – and give you the freedom and flexibility to enjoy life outside of work. As a Remote-First company, we ensure we provide that flexibility daily.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color={'secondary'}>
                                        Work here
                                    </Button>
                                </CardActions>
                            </CardActionArea>

                        </Card>
                    ))
                }
            </Box>
        </Box>
    );
};

export default Location;