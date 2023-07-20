import "./header.css";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Seller Catalog</h1>
      <nav>
        <ol className="navList">
          <li className="navListItem">
            <a className="navLink" href="/page1">
              Page 1
            </a>
          </li>
          <li>
            <a className="navLink" href="/page2">
              Page 2
            </a>
          </li>
        </ol>
      </nav>
      <button>Change mode</button>
    </header>
  );
}
