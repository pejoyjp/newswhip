import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Feed from "./components/Feed.jsx";
import {Box} from "@mui/material";
import Footer from "./components/Footer.jsx";
import AnimatedCursor from "react-animated-cursor";


function App() {
    const [open,setOpen] = useState(false)



  return (
    <div className="App">
        <AnimatedCursor />
        <Navbar open={open} setOpen={setOpen}/>

        {
            open? (<Drawer />) :
                (
                   <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Header/>
                        <Feed />
                        <Footer/>
                   </Box>
                )
        }

    </div>
  )
}

export default App
