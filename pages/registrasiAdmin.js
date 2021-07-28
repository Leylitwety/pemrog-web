import LayoutAdmin from "../component/layoutAdmin";
import { useState } from "react";

export default function Home() {
  
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambahUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          username,
          password,
          email,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("User Berhasil Di Tambahkan");
      window.location.href='/registrasiAdmin';
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <LayoutAdmin>
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid">
                <button
                  className="btn btn-link d-md-none rounded-circle me-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i className="fas fa-bars" />
                </button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow">
                    <a
                      className="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <i className="fas fa-search" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="me-auto navbar-search w-100" >
                        <div className="input-group">
                          <input
                            className="bg-light form-control border-0 small"
                            type="text"
                            placeholder="Search for ..."
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary py-0"
                              type="button"
                            >
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1" />
                  <li className="nav-item dropdown no-arrow mx-1">
                    <div
                      className="shadow dropdown-list dropdown-menu dropdown-menu-end"
                      aria-labelledby="alertsDropdown"
                    />
                  </li>
                  <div className="d-none d-sm-block topbar-divider" />
                  <li className="nav-item dropdown no-arrow">
                    <div className="nav-item dropdown no-arrow">
                      <a
                        className="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <span className="d-none d-lg-inline me-2 text-gray-600 small">
                          Valerie Luna
                        </span>
                        <img
                          className="border rounded-circle img-profile"
                          src="assets/img/avatars/avatar1.jpeg"
                        />
                      </a>
                      <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />
                          &nbsp;Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />
                          &nbsp;Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />
                          &nbsp;Activity log
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />
                          &nbsp;Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row mb-3">
                <div className="col-lg-8 col-xl-12">
                  <div className="row mb-3 d-none">
                    <div className="col">
                      <div className="card textwhite bg-primary text-white shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0">
                                <strong>65.2%</strong>
                              </p>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-rocket fa-2x" />
                            </div>
                          </div>
                          <p className="text-white-50 small m-0">
                            <i className="fas fa-arrow-up" />
                            &nbsp;5% since last month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card textwhite bg-success text-white shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0">
                                <strong>65.2%</strong>
                              </p>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-rocket fa-2x" />
                            </div>
                          </div>
                          <p className="text-white-50 small m-0">
                            <i className="fas fa-arrow-up" />
                            &nbsp;5% since last month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="card shadow mb-3">
                        <div className="card-header py-3">
                          <p className="text-primary m-0 fw-bold" />
                          <h3 style={{ color: "var(--blue)" }}>Add Account</h3>
                        </div>
                        <div className="card-body">
                          <form onSubmit={submitHandler}>
                            <div className="row">
                              <div className="col">
                                <div className="form-group mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Username</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    name="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group mb-3">
                                  <label className="form-label" htmlFor="email">
                                    <strong>Email Address</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="email"
                                    id="email"
                                    placeholder="user@example.com"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="first_name"
                                  >
                                    <strong>Nama</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="first_name"
                                    placeholder="Masukan Nama"
                                    name="first_name"
                                    onChange={(e) => setNama(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="first_name"
                                  >
                                    <strong>Password</strong>
                                    <br />
                                  </label>
                                  <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Masukan Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <button
                                className="btn btn-primary btn-sm"
                                type="submit"
                              >
                                Create Account
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
}
