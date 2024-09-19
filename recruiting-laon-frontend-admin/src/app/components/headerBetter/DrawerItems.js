import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';
import Logo from "../../img/Logo.png";
import { useNavigate } from "react-router-dom";

export default function DrawerItems() {
    const navigate = useNavigate();
    return (
        <List
            sx={{
                height: "100%",
                backgroundColor: "var(--gray-200)",
                color: "var(--white)",
                width: "15vw"
            }}>

            <ListItem>
                <ListItemButton onClick={() => navigate("/dashboard")}>
                    <img src={Logo} alt="Logo LaonLabs" style={{ margin: "auto" }} />
                </ListItemButton>
            </ListItem>
            <Divider sx={{ backgroundColor: "var(--gray-200)", borderWidth: "1px" }} />
            <ListItem>
                <ListItemButton onClick={() => navigate("/users")}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuários" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sobre" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <MiscellaneousServicesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Serviços" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                        <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}