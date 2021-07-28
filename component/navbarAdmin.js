export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="icon ion-android-settings" />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>administrator</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profileAdmin">
                <i className="fas fa-user" />
                <span>Profile</span>
              </a>
              <a className="nav-link" href="/registrasiAdmin">
                <i className="icon ion-android-person-add" />
                <span>Add Account</span>
              </a>
            </li>
            <li className="nav-item" />
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            />
          </div>
        </div>
      </nav>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
