import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ClassIcon from '@mui/icons-material/Class';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
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
                <ListItemButton onClick={() => navigate("/contents")}>
                    <ListItemIcon>
                        <LocalMoviesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Séries e Filmes" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={() => navigate("/categories")}>
                    <ListItemIcon>
                        <ClassIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categorias" />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton onClick={() => navigate("/awards")}>
                    <ListItemIcon>
                        <EmojiEventsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Prêmios" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={() => navigate("/actors")}>
                    <ListItemIcon>
                        <RecentActorsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atores" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}