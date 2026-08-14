export const Sidebar2 = () => {
  return (
    <aside className="sidebar col-md-3 col-lg-2 p-0 bg-body-tertiary border-start">
      <div className="p-3">
        <h2 className="h6 text-uppercase text-body-secondary mb-3">
          Navigation
        </h2>

        <div className="list-group list-group-flush">
          <a
            className="list-group-item list-group-item-action bg-transparent px-0"
            href="#"
          >
            Overview
          </a>

          <a
            className="list-group-item list-group-item-action bg-transparent px-0"
            href="#"
          >
            Reports
          </a>

          <a
            className="list-group-item list-group-item-action bg-transparent px-0"
            href="#"
          >
            Analytics
          </a>

          <a
            className="list-group-item list-group-item-action bg-transparent px-0"
            href="#"
          >
            Settings
          </a>
        </div>
      </div>
    </aside>
  );
};
