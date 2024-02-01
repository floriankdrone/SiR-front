import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { AccountCircle } from "@mui/icons-material";

function MenuBar({ profileData, handleLogout }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountCircle />
            </Avatar>
            <Typography variant="h6" component="div">
              {profileData?.username}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MenuBar;
