import React from 'react';
import {Box, styled, Typography} from "@mui/material";


const MyTypo = styled(Typography)(() => ({
    color: "black",
    paddingTop:'40px',
    fontSize:'20px',

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
              SmartRoutes is a delivery management software platform that has developed leading edge technology for the rapidly expanding last mile logistics sector.
          </MyTypo>

            <MyTypo>
                Based in the middle of Cork City, we have experienced 5x growth in the previous year alone and are now searching for a Web App developer to join our growing team and help build the next evolution of our software product.
            </MyTypo>
            <MyTypo>
                We're hiring for a software developer position on our product team at SmartRoutes.
            </MyTypo>

            <MyTypo fontWeight={'bold'}>
                What we are looking for:
            </MyTypo>

            <MyTypoP>
                · A Computer Science degree or similar education.
            </MyTypoP>
            <MyTypoP>
                · Experience with Nodejs and the wider Javascript Ecosystem.
            </MyTypoP>
            <MyTypoP>
                · Experience with Express.js.
            </MyTypoP>

            <MyTypoP>
                · Good knowledge of building scalable REST APIs.
            </MyTypoP>

            <MyTypoP>
                · Have a good understanding of RESTful technologies and familiar REST best practices
            </MyTypoP>

            <MyTypoP>
                · Familiar with software design patterns and ability to apply them practically.
            </MyTypoP>

            <MyTypoP>
                · Knowledge of the core Front End technologies of JavaScript, HTML and CSS.
            </MyTypoP>

            <MyTypoP>
                · Experience delivering UIs using modern frontend frameworks and technologies such as Vue.js, React, Angular etc.
            </MyTypoP>

            <MyTypoP>
                · Good communication skills.
            </MyTypoP>

            <MyTypoP>
                · Experience converting Figma (or similar design UI tools) designs to functional apps and components.
            </MyTypoP>

            <MyTypoP>
                · Comfortable using a Git workflow
            </MyTypoP>

            <MyTypoP>
                · You’re familiar with utilising development tools, debug tools. API Testing and API performance.
            </MyTypoP>

            <MyTypoP>
                · You’ve worked with SQL relational databases.
            </MyTypoP>





            <MyTypo fontWeight={'bold'}>
                Useful skills:
            </MyTypo>

            <MyTypoP>· Comfortable or familiar with Linux systems.</MyTypoP>
            <MyTypoP>· AWS or similar experience.</MyTypoP>
            <MyTypoP>· Experience with PHP.</MyTypoP>

            <MyTypo>
                With this role, you will get the opportunity to join a growing company at an early stage and have a major input into shaping its future. You will get to develop with the latest technology and help us grow our product and development team into the future. We have a proven business model and are looking to scale aggressively over the next few years.
            </MyTypo>

            <MyTypo fontWeight={'bold'}>
                How to apply:
            </MyTypo>
            <MyTypoP>
                To apply, please email a copy of your CV to
            </MyTypoP>

        </Box>





    );
};

export default Feed;