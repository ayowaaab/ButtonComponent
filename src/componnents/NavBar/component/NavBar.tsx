import "./NavBar.css";

function NavBar() {
  return (
    <div className="col-2">
      <nav className="px-2 pt-2">
        <h5>
          <span>Dev</span>Challenges.io
        </h5>
        <ul className="MyList">
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
