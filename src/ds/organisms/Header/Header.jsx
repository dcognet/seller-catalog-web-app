import { useDarkLightMode } from "@/hooks";
import "./header.css";
import clsx from "clsx";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ dark }) => (dark == "true" ? "#0d293f" : "white")};
`;

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

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();
  return (
    <header className={clsx({ light: currentMode })}>
      <h1 className={clsx("logo", { light: currentMode })}>Seller Catalog</h1>
      <nav>
        <ol className="navList">
          {mainMenu.map(({ name, url }) => (
            <li key={url} className="navListItem">
              <NavLink to={url} dark={`${currentMode}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
      <Button variant="outlined" onClick={toggleMode}>
        Use {currentMode ? "Dark" : "Light"} mode
      </Button>
    </header>
  );
}
