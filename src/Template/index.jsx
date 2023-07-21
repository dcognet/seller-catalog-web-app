import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const mainMenu = [
  {
    name: "Produit",
    url: "/",
  },
  {
    name: "Commandes",
    url: "/orders",
  },
  {
    name: "Finance",
    url: "/financial",
  },
  {
    name: "Rapports",
    url: "/reports",
  },
  {
    name: "Messages",
    url: "/messages",
  },
  {
    name: "Marketplaces",
    url: "/marketplaces",
  },
];

// #3778B3
//#8BABC4
export default function Template() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Seller Catalog
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {mainMenu.map(({ name, url }) => (
                <Button
                  key={url}
                  component={Link}
                  to={url}
                  variant="navigation"
                  color={pathname === url ? "active" : undefined}
                >
                  {name}
                </Button>
              ))}
            </Box>

            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="debbie-molle-6DSID8Ey9-U-unsplash.jpg"
                />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
