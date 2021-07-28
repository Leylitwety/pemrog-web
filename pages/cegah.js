import Layout from '../component/layout'
export default function Home() {
  return (
    <div>
      <Layout>
  <div className="container">
    <h2 className="text-center">Cara Mencegah Penyebaran Virus Covid-19</h2>
  </div>
  <hr />
  <div className="container">
    <div className="row">
      <div className="col-xl-4">
        <div className="card">
          <div className="card-body"><img className="img-fluid" src="2.jpg" />
            <h4 className="text-center card-title">Mencuci Tangan</h4>
            <p className="text-justify card-text">Dengan rajin mencuci tangan dapat mengurangi resiko terkena virus covid-19 karena dapat membersihkan virus yang ada ditangan karena kontak dengan orang lain maupun benda. dan alangkah lebih baik memakai handsanitizer.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div classname="card-body"><img classname="img-fluid" src="3.png" style={{width: 380, height: 380, marginLeft: 12}} />
            <h4 className="text-center card-title">Memakai Masker</h4>
            <p className="text-justify card-text">Dengan memakai masker meminimalisir penyebaran virus, karena virus dengan mudah menyebar melalui udara, dan interaksi terhadap sesama.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-body"><img className="img-fluid" src="4.jpg" />
            <h4 className="text-center card-title">Menjaga Jarak</h4>
            <p className="text-justify card-text">Dengan menjaga jarak juga lebih mengecilkan kemungkinan kita terkena virus covid-19. dan akan lebih jika kita dirumah saja.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Layout>
</div>
  );
}
