import LayoutAdmin from "../component/layoutAdmin";
import { useState } from "react";

export default function Home() {
  const [confirm, setConfirm] = useState("");
  const [dirawat, setDirawat] = useState("");
  const [sembuh, setSembuh] = useState("");
  const [meninggal, setMeninggal] = useState("");
  const [suspect, setSuspect] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/simpanData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confirm,
          dirawat,
          sembuh,
          meninggal,
          suspect,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert(" Berhasil Di Tambahkan");
      window.location.href = "/indexAdmin";
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <LayoutAdmin>
        <form onSubmit={submitHandler}>
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">UPDATE DATA</h3>
                </div>
                <div className="row">
                  <div
                    className="col-md-6 col-xl-3 offset-xl-5 text-center mb-4"
                    style={{
                      textAlign: "center",
                      color: "var(--bs-red)",
                      background: "var(--bs-red)",
                    }}
                  >
                    <div className="card shadow border-start-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col">
                            <h4 style={{ color: "var(--red)" }}>CONFIRM</h4>
                            <input
                              type="number"
                              onChange={(e) => setConfirm(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-6 col-xl-3 mb-4"
                    style={{ background: "var(--bs-red)" }}
                  >
                    <div className="card shadow border-start-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col">
                            <h4 style={{ color: "var(--bs-red)" }}>DIRAWAT</h4>
                            <input
                              type="number"
                              onChange={(e) => setDirawat(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-xl-3 mb-4"
                    style={{ background: "var(--bs-red)" }}
                  >
                    <div className="card shadow border-start-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col">
                            <h4 style={{ color: "var(--bs-red)" }}>SEMBUH</h4>
                            <input
                              type="number"
                              onChange={(e) => setSembuh(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-xl-3 mb-4"
                    style={{ background: "var(--bs-red)" }}
                  >
                    <div className="card shadow border-start-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col">
                            <h4 style={{ color: "var(--bs-red)" }}>
                              MENINGGAL
                            </h4>
                            <input
                              type="number"
                              onChange={(e) => setMeninggal(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-xl-3 mb-4"
                    style={{ background: "var(--bs-green)" }}
                  >
                    <div
                      className="card shadow border-start-primary py-2"
                      style={{ color: "var(--gray)" }}
                    >
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col">
                            <h4 style={{ color: "var(--bs-green)" }}>
                              SUSPECT
                            </h4>
                            <input
                              type="number"
                              onChange={(e) => setSuspect(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary d-block w-100"
                  type="submit"
                  style={{ background: "var(--bs-blue)" }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </LayoutAdmin>
    </div>
  );
}
