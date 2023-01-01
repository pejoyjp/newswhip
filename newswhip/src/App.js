import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import bg from './assert/bg.png'
import appTheme,{palette} from "./theme/theme";

import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Container from "./components/Container";
import Footer from "./components/Footer";


const theme = createTheme({
    palette,
    ...appTheme
})





function App() {


  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box
              sx={{backgroundImage:`url(${bg})`,width:'100%',fontFamily: 'Urbanist',
                    backgroundAttachment:'fixed',backgroundRepeat:'no-repeated'}}>
              <Navbar />
              <Head/>
              <Container/>
              <Footer/>
          </Box>
      </ThemeProvider>
  );
}

export default App;
