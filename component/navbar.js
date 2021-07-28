export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-button fixed-top"
        style={{ background: "var(--bs-blue)", color: "var(--bs-light)" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "var(--bs-light)" }}
          >
            WEBSEHAT
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item" style={{ color: "var(--light)" }}>
                <a
                  className="nav-link"
                  href="../"
                  style={{ color: "var(--bs-light)" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../update"
                  style={{ color: "var(--bs-light)" }}
                >
                  Update
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../cegah"
                  style={{ color: "var(--bs-light)" }}
                >
                  Cara Pencegahan
                </a>
              </li>
            </ul>
            <span className="navbar-text actions">
              {" "}
              <a
                className="btn btn-light action-button"
                role="button"
                href="../login"
                style={{
                  color: "var(--bs-dark)",
                  background: "var(--bs-light)",
                }}
              >
                Login
              </a>
            </span>
          </div>
        </div>
      </nav><hr/><hr/><hr/>
    </div>
  );
}
