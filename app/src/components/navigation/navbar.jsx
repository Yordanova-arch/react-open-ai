import { Link } from "react-router-dom"

import Drawer from "@mui/material/Drawer"
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import AssistantIcon from '@mui/icons-material/Assistant'
import BackupTableIcon from '@mui/icons-material/BackupTable'


const navigationList = [
    {
        text: "Home",
        to: "/",
        icon: "home"
    },
    {
        text: "Assistants",
        to: "/assistants",
        icon: "assistants"
    },
    {
        text: "Files",
        to: "/files",
        icon: "files"
    }
]

const iconList = {
    "home": <HomeIcon />,
    "assistants": <AssistantIcon />,
    "files": <BackupTableIcon />
}

function Navbar() {
    return (
        <Drawer sx={{
            "& .MuiDrawer-paper": {
                position: "relative", boxSizing: "border-box", p: 3, width: "300px"
            }
        }} variant="permanent">
            <List component="nav">
                {navigationList.map((link, index) => {
                    return (
                        <Link key={index} to={link.to} style={{ textDecoration: "none", color: "black" }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {iconList[link.icon]}
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItemButton>
                        </Link>
                    )
                })}
            </List>
        </Drawer>
    )
}

export default Navbar