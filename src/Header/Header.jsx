import { useDarkLightMode } from "@/hooks";
import "./header.css";
import clsx from "clsx";
import { Button } from "@mui/material";

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();
  return (
    <header className={clsx({ light: currentMode })}>
      <h1 className={clsx("logo", { light: currentMode })}>Seller Catalog</h1>
      <nav>
        <ol className="navList">
          <li className="navListItem">
            <a
              className={clsx("navLink", { light: currentMode })}
              href="/page1"
            >
              Page 1
            </a>
          </li>
          <li>
            <a
              className={clsx("navLink", { light: currentMode })}
              href="/page2"
            >
              Page 2
            </a>
          </li>
        </ol>
      </nav>
      <Button variant="outlined" onClick={toggleMode}>
        Use {currentMode ? "Dark" : "Light"} mode
      </Button>
    </header>
  );
}
