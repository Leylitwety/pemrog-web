import Layout from '../component/layout'
export default function Home() {
  return (
    <div>
      <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section className="login-clean">
              <h2 className="text-center" style={{ textAlign: "center" }}>
                Login Akun Administrator
              </h2>
              <form method="post">
                <h2 className="visually-hidden">Login Form</h2>
                <div className="illustration">
                  <ion-icon name="person" style={{ color: "var(--bs-blue)" }}/>
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group mb-3">
                  <a href="/indexAdmin"
                    className="btn btn-primary d-block w-100"
                    type="submit"
                    style={{ background: "var(--bs-blue)" }}
                  >
                    Log In
                  </a>
                </div>
                <a className="forgot" href="#">
                  Forgot your password?
                </a>
              </form>
            </section>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      </Layout>
    </div>
  );
}
