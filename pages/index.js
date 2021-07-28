import Layout from '../component/layout'
export default function Home() {
  return (
    <div>
      <Layout>
      <div>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <img
                className="rounded img-fluid shadow-lg"
                width={300}
                height={200}
                src="1.jpg"
              />
            </div>
            <div className="col-md-6 col-lg-8">
              <p>
                Penyakit virus corona (COVID-19) adalah penyakit menular yang
                disebabkan oleh virus corona yang baru-baru ini ditemukan.
                Sebagian besar orang yang tertular COVID-19 akan mengalami
                gejala ringan hingga sedang, dan akan pulih tanpa penanganan
                khusus.
                <br />
              </p>
              <strong>
                <br />
                CARA&nbsp;PENYEBARAN&nbsp;VIRUS&nbsp;INI
                <br />
                <br />
              </strong>
              <p>
                Virus yang menyebabkan COVID-19 terutama ditransmisikan melalui
                droplet (percikan air liur) yang&nbsp;
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                dihasilkan saat orang yang terinfeksi batuk, bersin, atau
                mengembuskan nafas. Droplet ini terlalu berat dan tidak bisa
                bertahan di udara, sehingga dengan cepat jatuh dan menempel pada
                lantai atau permukaan lainnya. Anda dapat tertular saat
                menghirup udara yang mengandung virus jika Anda berada terlalu
                dekat dengan orang yang sudah terinfeksi COVID-19. Anda juga
                dapat tertular jika menyentuh permukaan benda yang
                terkontaminasi lalu menyentuh mata, hidung, atau mulut Anda.
                <br />
                <br />
              </p>
              <h5>Gejala Terkena Covid-19</h5>
              <p>
                Gejala-gejala COVID-19 yang paling umum adalah demam, batuk
                kering, dan rasa lelah. Gejala lainnya yang lebih jarang dan
                mungkin dialami beberapa pasien meliputi rasa nyeri dan sakit,
                hidung tersumbat, sakit kepala, konjungtivitis, sakit
                tenggorokan, diare, kehilangan indera rasa atau penciuman, ruam
                pada kulit, atau perubahan warna jari tangan atau kaki.
                Gejala-gejala yang dialami biasanya bersifat ringan dan muncul
                secara bertahap. Beberapa orang menjadi terinfeksi tetapi hanya
                memiliki gejala ringan.
                <br />
                Sebagian besar (sekitar 80%) orang yang terinfeksi berhasil
                pulih tanpa perlu perawatan khusus. Sekitar 1 dari 5 orang yang
                terinfeksi COVID-19 menderita sakit parah dan kesulitan
                bernapas. Orang-orang lanjut usia (lansia) dan orang-orang
                dengan kondisi medis penyerta seperti tekanan darah tinggi,
                gangguan jantung dan paru-paru, diabetes, atau kanker memiliki
                kemungkinan lebih besar mengalami sakit lebih serius.
                <br />
                <br />
              </p>
              <h5>Kenapa Covid-19 Disebut Corona?</h5>
              <p>
                Virus ini disebut Corona yang dalam Bahasa Latin memiliki arti
                mahkota. Ini karena bila dilihat menggunakan mikroskop, virusnya
                seperti dilingkari mahkota. Corona Virus Disease-19 ( Covid-19)
                adalah nama penyakit yang disebabkan oleh jenis virus Corona
                yang paling baru.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
}
