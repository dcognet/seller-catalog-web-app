import { useDarkLightMode } from "@/hooks";
import "./header.css";
import clsx from "clsx";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ dark }) => (dark ? "#0d293f" : "white")};
`;

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();
  return (
    <header className={clsx({ light: currentMode })}>
      <h1 className={clsx("logo", { light: currentMode })}>Seller Catalog</h1>
      <nav>
        <ol className="navList">
          <li className="navListItem">
            <NavLink href="/page1" dark={currentMode}>
              Page 1
            </NavLink>
          </li>
          <li>
            <NavLink href="/page2" dark={currentMode}>
              Page 2
            </NavLink>
          </li>
        </ol>
      </nav>
      <Button variant="outlined" onClick={toggleMode}>
        Use {currentMode ? "Dark" : "Light"} mode
      </Button>
    </header>
  );
}
