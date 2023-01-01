import React, {useState} from 'react';
import {pages} from "../data/pages";
import {Drawer, List,Tabs,Tab} from "@mui/material";
const DrawerCom = ({state,setState}) => {

    const [value,setValue] = useState(0)
    return (
        <>
            <Drawer open={state} onClose={()=>setState(false)}>
                <List>
                    {

                        <Tabs
                            value={value}
                            onChange={() => setValue(value)}
                            orientation="vertical"
                            indicatorColor="none">
                            {pages.map((item, index) => (
                                <Tab label={item} key={index} onClick={()=>setState(false)}/>
                            ))}
                        </Tabs>
                    }

                </List>

            </Drawer>

        </>
    );
};

export default DrawerCom;