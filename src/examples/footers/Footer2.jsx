export const Footer2 = () => {
  return (
    <footer className="border-top bg-body-tertiary">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
        <span className="text-body-secondary">© 2026 Company, Inc.</span>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="#">
              Privacy
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="#">
              Terms
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-2 text-body-secondary" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
