import React from 'react';
import {Box, styled, Typography} from "@mui/material";


const MyTypo = styled(Typography)(() => ({
    color: "black",
    paddingTop:'40px',
    fontSize:'18px',

}));

const MyTypoP = styled(Typography)(() => ({
    color: "black",
    paddingTop:'20px',
    fontSize:'17px',

}));

const Feed = () => {
    return (

        <Box sx={{maxWidth:'780px',margin:'10px'}}>
          <MyTypo>
              Kooba is growing! We are looking to recruit a Graduate Frontend Developer to join our team in Dublin or Berlin.
          </MyTypo>

            <MyTypo>
                As a Front-End developer, you will use your knowledge of coding standards, accessible HTML, SCSS, and functional javascript to build the highest quality websites that work across every device and browser. We're looking for someone whose creativity and extreme attention is clear to see in everything they build.
            </MyTypo>
            <MyTypo>
                You'll join a team of passionate colleagues who work hard to deliver the best results for our clients, and exceptional experiences for their users.
            </MyTypo>

            <MyTypo fontWeight={'bold'}>
                In this role, you will:
            </MyTypo>

            <MyTypoP>
                · Take designs (Sketch, Photoshop) and assist the frontend team intro taking them into pixel perfect interfaces, enhanced by your creativity
            </MyTypoP>
            <MyTypoP>
                · Build responsive, mobile-first layouts without the use of a grid
            </MyTypoP>
            <MyTypoP>
                · Work closely alongside our designers and backend developers, take and give direction, and contribute your ideas
            </MyTypoP>

            <MyTypoP>
                · Build websites that are fast, accessible and deliver great user experiences on all devices
            </MyTypoP>

            <MyTypo fontWeight={'bold'}>
                We want to find someone who:
            </MyTypo>

            <MyTypoP>· Has recently graduated</MyTypoP>
            <MyTypoP>· Has some sample/project work that you're proud to show off</MyTypoP>
            <MyTypoP>· Has knowledge of HTML, CSS (SCSS & BEM) and JavaScript (ES6+)</MyTypoP>
            <MyTypoP>· Has experience using build tools, like Webpack and Gulp</MyTypoP>
            <MyTypoP>· Takes a component-based approach when building websites, and knows the benefits of doing so</MyTypoP>
            <MyTypoP>· Knows when and how to use Flexbox and CSS Grid, and doesn't depend on third-party toolkits like Bootstrap</MyTypoP>
            <MyTypoP>· Can work to deadlines and manage their own time</MyTypoP>
            <MyTypoP>· Keeps up to date with the latest web technologies and standards</MyTypoP>
            <MyTypoP>·  fluent in English</MyTypoP>
            <MyTypoP>· Above all, is passionate about building the very best web experiences</MyTypoP>

            <MyTypo fontWeight={'bold'}>
                Bonus points for:
            </MyTypo>
            <MyTypoP>· Agency experience</MyTypoP>
            <MyTypoP>· Experience creating detailed but performant animations with code</MyTypoP>
            <MyTypoP>· WebGL and/or Three.js skills</MyTypoP>
            <MyTypoP>· Knowledge of atomic design principles</MyTypoP>

            <MyTypo fontWeight={'bold'}>
                In return for your great work, we promise you:
            </MyTypo>
            <MyTypoP>· A full time position in a small and passionate team of 25 award-winning creators and builders.</MyTypoP>
            <MyTypoP>· A beautiful working space (in Berlin or Dublin) with the requirement to work onsite 2 days a week</MyTypoP>
            <MyTypoP>· The very best equipment</MyTypoP>
            <MyTypoP>· Competitive salary, based on experience</MyTypoP>
            <MyTypoP>· An environment where you are supported to develop your own talents and push your career forward, right from the day you start</MyTypoP>
            <MyTypoP>· Great music</MyTypoP>
            <MyTypoP>· Excellent local lunch options & the occasional beer and/or G&T</MyTypoP>

            <MyTypo fontWeight={'bold'}>
                Interested?
            </MyTypo>
            <MyTypo>
                If you are interested - email us with your CV along with links of what you feel is your best work. We look forward to hearing from you.
            </MyTypo>
        </Box>





    );
};

export default Feed;