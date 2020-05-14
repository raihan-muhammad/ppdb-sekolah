import React, { Fragment } from "react";
import "../../../assets/css/style.css";
import heroIllustrator from "../../../assets/img/hero_illustrator.svg";
import logoSekolah from "../../../assets/img/logo_sekolah.svg";
import ilustratorFront from "../../../assets/img/IllustratorFront.png";
import registerIlustrator from "../../../assets/img/register_illustrator.svg";
import ilustratorSeleksi from "../../../assets/img/IlustratorSeleksi.svg";
import ilustratorBiodata from "../../../assets/img/IllustratorBiodata.svg";
import ilustratorPengumuman from "../../../assets/img/IllustratorPengumuman.png";
import Button from "../../../components/button.js";
import Card from "../../../components/card";

function Home() {
  return (
    <Fragment>
      <header>
        <nav>
          <div class="logo">
            <img src={logoSekolah} alt="logo" />
          </div>
          <div class="menu-nav">
            <ul class="menu-list">
              <li class="menu-item">
                <a href="#">Beranda</a>
              </li>
              <li class="menu-item">
                <a href="#">Tata Cara</a>
              </li>
              <li class="menu-item">
                <a href="#">Tentang</a>
              </li>
              <li class="menu-item">
                <a href="#">Kontak</a>
              </li>
            </ul>
            <Button title="Daftar" />
          </div>
        </nav>
      </header>

      <div class="container">
        <section id="header">
          <div class="title-main-header">
            <h3 class="text-school">SMK Negeri 2 Karanganyar</h3>
            <div class="divider"></div>
            <p class="text-description">
              Website ini digunakan sebagai fasilitas untuk memudahkan calon
              peserta didik baru guna mendaftarkan diri sebagai peserta didik
              baru. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, suscipit?
            </p>
            <Button title="Selengkapnya" />
          </div>
          <div class="img-header">
            <img src={heroIllustrator} alt="Illustrator" class="img-header" />
          </div>
        </section>
        <section id="tata-cara">
          <div class="title-header">
            <h4 class="text-title">Tata Cara</h4>
            <span>
              Berikut adalah tata cara pendaftaran seabgai calon peserta didik
              baru.
            </span>
          </div>
          <div class="content">
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
          <div class="left-side">
            <h4 class="text-attention">
              Untuk melihat informasi PPDB lebih lengkap, Yuk kunjungi website
              sekolah kita !
            </h4>
          </div>
          <div class="right-side">
            <Button title="Selengkapnya" />
          </div>
        </section>
        <section id="tentang-kami">
          <div class="title-header">
            <h4 class="text-title">Tentang Kami</h4>
            <span>Berikut adalah informasi mengenai sekolah kami.</span>
          </div>
        </section>
        <section className="about">
          <figure>
            <img src={ilustratorFront} alt="About Ilustrator" />
          </figure>
          <article>
            <p>
              SMAN 1 Prabumulih melaksanakan seleksi PPDB TA 2020-2021 melalui 4
              jalur, yaitu, Jalur Penelusuran Minat dan Prestasi Akademik
              (PMPA), Jalur Mutasi Orang Tua, Jalur Zonasi, dan Jalur Tes
              Potensi Akademik. Proses pendaftaran semua jalur PPDB 2020
              dilakukan secara mandiri danonline melalui web SMAN 1 Prabumulih.
            </p>
            <p>
              Pengisian form PPDB Online mohon diperhatikan data yang dibutuhkan
              yang nantinya akan dipakai dalam proses PPDB. Setelah proses
              pengisian form PPDB secara online berhasil dilakukan, calon siswa
              akan mendapat bukti daftar dengan nomor pendaftaran dan harus
              disimpan yang akan digunakan untuk proses selanjutnya.
            </p>
          </article>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
