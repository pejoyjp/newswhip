import React, {useEffect, useState} from 'react';
import {Box, IconButton, styled, Typography,keyframes} from "@mui/material";
import Navbar from "./Navbar.jsx";


const textShadowPopBr = keyframes`
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
`;

const rollInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }

`;

const Holder = styled(Box)(({ roll }) => ({
    width: "400px",
    height: "100px",
    background: "#00adb5",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: !roll && "hidden",
    animation: roll && `${rollInLeft} 0.6s ease-out both`
}));


const Title = styled(Typography)(() => ({
    color: "#eee",
    "&:hover": {
        animation: `${textShadowPopBr} 0.6s both`
    }
}));

const Drawer = () => {
    const [roll, setRoll] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            // animation
            setRoll(true);
        }, 500);
    }, []);

    return (
        <Box sx={{height:'calc(100vh - 98px)',width:'100%',backgroundColor:'rgb(35,31,32)',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column',maxWidth:'1280px',gap:'20px',paddingTop:'80px'}}>
                <Holder roll={roll}>
                    <Title variant="h3">Product</Title>
                </Holder>
                <Holder roll={roll}>
                    <Title variant="h3">Pricing</Title>
                </Holder>
                <Holder roll={roll}>
                    <Title variant="h3">Resources</Title>
                </Holder>
                <Holder roll={roll}>
                    <Title variant="h3">Book a demo</Title>
                </Holder>
            </Box>
        </Box>

    );
};

export default Drawer;