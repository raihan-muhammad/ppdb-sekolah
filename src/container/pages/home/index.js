import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "../../../assets/css/style.css";
import heroIllustrator from "../../../assets/img/hero_illustrator.svg";
import logoSekolah from "../../../assets/img/logo_sekolah.svg";
import ilustratorFront from "../../../assets/img/IllustratorFront.png";
import registerIlustrator from "../../../assets/img/IllustratorRegister.svg";
import ilustratorSeleksi from "../../../assets/img/IlustratorSeleksi.svg";
import ilustratorBiodata from "../../../assets/img/IllustratorBiodata.svg";
import ilustratorPengumuman from "../../../assets/img/IllustratorPengumuman.png";
import Button from "../../../components/button.js";
import Card from "../../../components/card";
import Register from "../register";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFpaGFubXVoYW1tYWQiLCJhIjoiY2s4c2JsNnFxMGwzYjNocTVmanB6enZxaCJ9.o8UUzrOGDYjKQ7tvF5Kxtw";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 113.9213257,
      lat: -0.789275,
      zoom: 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/register" component={Register} />
        </Router>
        <header>
          <nav>
            <div className="logo">
              <img src={logoSekolah} alt="logo" />
            </div>
            <div className="menu-nav">
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">Beranda</a>
                </li>
                <li className="menu-item">
                  <a href="#">Tata Cara</a>
                </li>
                <li className="menu-item">
                  <a href="#">Tentang</a>
                </li>
                <li className="menu-item">
                  <a href="#">Kontak</a>
                </li>
              </ul>
              <Link to="/register">
                <Button title="Daftar" link="/register" />
              </Link>
            </div>
          </nav>
        </header>

        <div className="container">
          <section id="header">
            <div className="title-main-header">
              <h3 className="text-school">SMK Negeri 2 Karanganyar</h3>
              <div className="divider"></div>
              <p className="text-description">
                Website ini digunakan sebagai fasilitas untuk memudahkan calon
                peserta didik baru guna mendaftarkan diri sebagai peserta didik
                baru. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, suscipit?
              </p>
              <Button title="Selengkapnya" />
            </div>
            <div className="img-header">
              <img
                src={heroIllustrator}
                alt="Illustrator"
                className="img-header"
              />
            </div>
          </section>
          <section id="tata-cara">
            <div className="title-header">
              <h4 className="text-title">Tata Cara</h4>
              <span>
                Berikut adalah tata cara pendaftaran seabgai calon peserta didik
                baru.
              </span>
            </div>
            <div className="content">
              <Card
                title="Pendaftaran"
                description="Siswa melakukan pendaftaran di website PPDB Sekolah yang diinginkan. Kemudian melakukan input data sesuai dengan biodata dan data asli dari calon pendaftar. Data akan digunakan sebagai validasi seleksi kelengkapan data-data siswa."
                image={registerIlustrator}
                alt="Pendaftaran"
              />
              <Card
                title="Seleksi Peserta"
                description="SSekolah melakukan analisa data dari calon peserta yang mendaftar dan melakuka rekap data sesuai dengan proses seleksi yang dilakukan oleh sistem. Jika peserta telah menyelesaikan unggah dan melengkapi data maka hanya tinggal menunggu saja."
                image={ilustratorSeleksi}
                alt="Seleksi Peserta"
              />

              <Card
                title="Pengumuman"
                description="Peserta dapat melakukan pengecekan hasil pengumuman pada website maupun melakukan kunjungan ke sekolah untuk melihat hasil apakah dinyatakan loloss dan sesuai dengan syarat guna melanjutkan ke tahap selanjutnya yaitu proses pendaftaran ulang peserta didik baru."
                image={ilustratorPengumuman}
                alt="Pengumaman"
              />
              <Card
                title="Daftar Ulang"
                description="Siswa dapat melakukan daftar ulang guna memverifikasi bahwa telah diterima disekolah tersebut. Daftar ulang ini bersifat wajib, apabila siswa lolos namun tidak mendaftarkan ulang maka akan dinyatakan gugur dan tidak dapat menjadi calon peserta didik baru di sekolah tempat siswa mendaftar."
                image={ilustratorBiodata}
                alt="Daftar Ulang"
              />
            </div>
          </section>
          <section id="cta-website">
            <div className="left-side">
              <h4 className="text-attention">
                Untuk melihat informasi PPDB lebih lengkap, Yuk kunjungi website
                sekolah kita !
              </h4>
            </div>
            <div className="right-side">
              <Button title="Selengkapnya" />
            </div>
          </section>
          <section id="tentang-kami">
            <div className="title-header">
              <h4 className="text-title">Tentang Kami</h4>
              <span>Berikut adalah informasi mengenai sekolah kami.</span>
            </div>
          </section>
          <section className="about">
            <figure>
              <img src={ilustratorFront} alt="About Ilustrator" />
            </figure>
            <article>
              <p>
                SMAN 1 Prabumulih melaksanakan seleksi PPDB TA 2020-2021 melalui
                4 jalur, yaitu, Jalur Penelusuran Minat dan Prestasi Akademik
                (PMPA), Jalur Mutasi Orang Tua, Jalur Zonasi, dan Jalur Tes
                Potensi Akademik. Proses pendaftaran semua jalur PPDB 2020
                dilakukan secara mandiri danonline melalui web SMAN 1
                Prabumulih.
              </p>
              <p>
                Pengisian form PPDB Online mohon diperhatikan data yang
                dibutuhkan yang nantinya akan dipakai dalam proses PPDB. Setelah
                proses pengisian form PPDB secara online berhasil dilakukan,
                calon siswa akan mendapat bukti daftar dengan nomor pendaftaran
                dan harus disimpan yang akan digunakan untuk proses selanjutnya.
              </p>
            </article>
          </section>
          <section className="contact">
            <div className="contact-us">
              <p className="judul-contact">Contact Us</p>
              <p className="text-description">
                Info lebih lanjut bisa di tanyakan langsung contact di bawah
              </p>

              <p className="nomer-text">Wa : 08920202020 (Budi)</p>
              <p className="nomer-text">Telp : 08920202020 (Raihan)</p>
              <p className="nomer-text">Email : smk2kra@gmail.com </p>
            </div>
            <div className="maps">
              {/* <div className="sidebarStyle">
                <div>
                  Longitude: {this.state.lng} | Latitude: {this.state.lat} |
                  Zoom: {this.state.zoom}
                </div>
              </div> */}
              <div
                ref={(el) => (this.mapContainer = el)}
                className="mapContainer"
              />
            </div>
          </section>
          <footer>
            <p>&copy; 2020 Smk N 2 Karanganyar</p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Home;
