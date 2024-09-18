import { Button, Drawer} from '@mui/material';
import React from 'react';
import DrawerItems from './DrawerItems';

export default function SideBar() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <div>
            <Button onClick={toggleDrawer}>Open Drawer</Button>
            <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
                <DrawerItems />
            </Drawer>
        </div>
    )
}