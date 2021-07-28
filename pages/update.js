import Layout from "../component/layout";
import { useCovid } from "../lib/swr-fetch";
export default function Home() {
  const { data, error } = useCovid();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <Layout>
        <div>
          <div className="container">
            <h2 className="text-center">
              Update Jumlah Penyebaran Virus Covid-19 Di Banyuwangi
            </h2>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-7">
                <h5>Update tgl 19 juli 2021</h5>
                <div className="col" style={{ textAlign: "center" }}>
                  <div className="row">
                    <div className="col">
                      <div className="table-responsive">
                        <table className="table">
                          <thead
                            style={{
                              background: "var(--bs-primary)",
                              color: "var(--bs-light)",
                            }}
                          >
                            <tr>
                              <th>confirm</th>
                              <th>dirawat</th>
                              <th>sembuh</th>
                              <th>meninggal</th>
                              <th>suspect</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              color: "var(--white)",
                              background: "#636161",
                            }}
                          >
                            {data.map((covid, idx) => (
                              <tr style={{ color: "var(--bs-light)" }}>
                                <td>{covid.confirm}</td>
                                <td>{covid.dirawat}</td>
                                <td>{covid.sembuh}</td>
                                <td>{covid.meninggal}</td>
                                <td>{covid.suspect}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-md-6 col-xl-5">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Keterangan</h4>
                    <p className="card-text">
                      Berikut adalah update data perkembangan mengenai covid-19
                      di Banyuwangi. Dengan jumlah yang terkonfirmasi 6516
                      orang, Dengan orang dalam perawatan 105 orang, Jumlah yang
                      sembuh 5741, Jumlah yang meninggal 670 orang, dan 15 orang
                      tersangka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
