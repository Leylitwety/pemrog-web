import LayoutAdmin from "../component/layoutAdmin";
import Router from "next/router";
import { mutate } from "swr";
import { useUser } from "../lib/swr-fetch";
export default function Home() {
  const { data, error } = useUser();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }
  // console.log(data);

  async function hapusUser(id_user) {
    //setDeleting (true)
    let res = await fetch(`/api/hapusUser?id_user=${id_user}`, {
      method: "DELETE",
    });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate(`/api/hapusUser`);
    //setDeleting (false)
    alert("User telah dihapus");
    Router.push("/profileAdmin");
  }
  return (
    <div>
      <LayoutAdmin>
      <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>KONFIRMASI</h1>
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead
                    style={{
                      background: "var(--bs-dark)",
                      color: "var(--bs-light)",
                    }}
                  >
                    <tr>
                      <th>Nama</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody
                    style={{ color: "var(--white)", background: "#636161" }}
                  >
                    {data.map((user, idx) => (
                      <tr style={{ color: "var(--bs-light)" }}>
                        <td>{user.nama}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td style={{ width: 278 }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ background: "var(--bs-red)" }}
                            value={user.id_user}
                            onClick={(e) => hapusUser(e.target.value)}
                          >
                            TOLAK
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
}
