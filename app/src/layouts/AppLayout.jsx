import CSSBaseLine from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Navbar from "../components/navigation/navbar"


function AppLayout({ children }) {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
        <CSSBaseLine />
        <Navbar />
        <Box sx={{ flexGrow: 1, p: 5.5 }}>
            {children}
        </Box>
    </Box>
  )
}

export default AppLayout