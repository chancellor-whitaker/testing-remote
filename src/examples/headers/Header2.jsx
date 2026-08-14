export const Header2 = () => {
  return (
    <header className="border-bottom bg-body">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
        <a className="navbar-brand fw-semibold mb-0" href="/">
          Brand
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
