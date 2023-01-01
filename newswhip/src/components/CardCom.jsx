import React from 'react';
import {Accordion,AccordionSummary,Typography,AccordionDetails,Box} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {profitData} from "../data/profitData";

function CardCom(props) {
    return (
        <Box mt={'50px'}>
            {
                profitData.map((item)=>(
                    <Accordion sx={{background:'transparent',margin:'15px'}} key={item.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant={'h5'}>{item.name}</Typography>
                            <Box ml={'20px'}>
                                {item.icon}
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                {item.des}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))
            }

        </Box>
    );
}

export default CardCom;