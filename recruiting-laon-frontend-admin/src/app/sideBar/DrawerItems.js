import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function DrawerItems() {
    return (
        <List>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MiscellaneousServicesIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    )
}