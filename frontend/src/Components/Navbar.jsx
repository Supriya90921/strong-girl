// components/Navbar.jsx
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    
    <AppBar position="static" color="#c1163c" sx={{ backgroundColor: "#f12855" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Strong Girl
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/tips">Tips</Button>
        <Button color="inherit" component={Link} to="/recipes">Recipes</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/login">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
