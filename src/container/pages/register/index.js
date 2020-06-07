import React, { Fragment } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./register.css";
import authIlustration from "../../../assets/img/user_group_two_color.svg";
import { Link } from "react-router-dom";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label-form">
        {label}
      </label>
      <input className="input-form" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label-form">
        {label}
      </label>
      <textarea className="input-text-area" {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label className="checkbox" className="label-form">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.id || field.name} className="label-form">
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Register() {
  return (
    <Fragment>
      <section className="register">
        <section className="kiri">
          <Link to="/" className="text-back">
            &#8592; Kembali
          </Link>
          <h1 className="text-formulir">Formulir Pendaftaran</h1>
          <Formik
            initialValues={{
              nama: "",
              nisn: "",
              jenisKelamin: "",
              tempatLahir: "",
              tglLahir: "",
              umur: "",
              agama: "",
              golonganDarah: "",
              alamat: "",
              tlpn: "",
              email: "",
              namaAyah: "",
              tahunLahirAyah: "",
              pendidikanAyah: "",
              keadaanAyah: "",
              pekerjaanAyah: "",
              penghasilanAyah: "",
              namaIbu: "",
              tahunLahirIbu: "",
              pendidikanIbu: "",
              keadaanIbu: "",
              pekerjaanIbu: "",
              penghasilanIbu: "",
              kompetensi: "",
            }}
            validationSchema={Yup.object({
              nama: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
              nisn: Yup.number()
                .min(8, "Must be at least 8 characters")
                .required("Required"),
              jenisKelamin: Yup.string()
                .oneOf(["laki-laki", "wanita"])
                .required("required"),
              tempatLahir: Yup.string().required("Required"),
              tglLahir: Yup.date().required("Required"),
              umur: Yup.number().required("Required"),
              agama: Yup.string()
                .oneOf([
                  "islam",
                  "kristen",
                  "katolik",
                  "hindu",
                  "budha",
                  "lainya",
                ])
                .required("required"),
              golonganDarah: Yup.string()
                .oneOf(["A", "B", "AB", "O"])
                .required("required"),
              alamat: Yup.string()
                .min(7, "Must be at least 7 characters")
                .required("Required"),
              namaAyah: Yup.string().required("Required"),
              tahunLahirAyah: Yup.number().required("Required"),
              pendidikanAyah: Yup.string()
                .required("Required")
                .oneOf([
                  "Tidak Sekolah",
                  "Tidak Tamat SD",
                  "SD",
                  "SMP",
                  "SMA",
                  "D1/D2/D3",
                  "S1",
                  "S2",
                  "S3",
                ]),
              keadaanAyah: Yup.string()
                .required("Required")
                .oneOf(["Masih Hidup", "Sudah Meninggal"]),
              pekerjaanAyah: Yup.string().required("Required"),
              penghasilanAyah: Yup.string()
                .oneOf([
                  "Kurang dari Rp. 1.000.000",
                  "Rp. 1.000.000 - Rp. 2.000.000",
                  "Lebih dari Rp. 2.000.000",
                  "0",
                ])
                .required("Required"),
              namaIbu: Yup.string().required("Required"),
              tahunLahirIbu: Yup.number().required("Required"),
              pendidikanIbu: Yup.string()
                .required("Required")
                .oneOf([
                  "Tidak Sekolah",
                  "Tidak Tamat SD",
                  "SD",
                  "SMP",
                  "SMA",
                  "D1/D2/D3",
                  "S1",
                  "S2",
                  "S3",
                ]),
              keadaanIbu: Yup.string()
                .required("Required")
                .oneOf(["Masih Hidup", "Sudah Meninggal"]),
              pekerjaanIbu: Yup.string().required("Required"),
              penghasilanIbu: Yup.string()
                .oneOf([
                  "Kurang dari Rp. 1.000.000",
                  "Rp. 1.000.000 - Rp. 2.000.000",
                  "Lebih dari Rp. 2.000.000",
                  "0",
                ])
                .required("Required"),
              kompetensi: Yup.string()
                .required("Required")
                .oneOf(["RPL", "TKR", "TP"]),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 3000);
            }}
          >
            {(props) => (
              <Form>
                <h3 className="judul-h3">Identitas Calon Peserta Didik</h3>
                <CustomTextInput
                  label="Name"
                  name="nama"
                  type="text"
                  placeholder="Raihan"
                />
                <CustomTextInput
                  label="Nisn"
                  name="nisn"
                  type="number"
                  placeholder="1100288387"
                />
                <CustomSelect
                  label="jenis Kelamin"
                  name="jenisKelamin"
                  className="input-select"
                >
                  <option value="">Jenis Kelamin</option>
                  <option value="laki-laki">laki-laki</option>
                  <option value="wanita">wanita</option>
                </CustomSelect>
                <CustomTextInput
                  label="Tempat Lahir"
                  name="tempatLahir"
                  type="text"
                  placeholder="sukoharjo"
                />
                <CustomTextInput
                  label="Tanggal lahir"
                  name="tglLahir"
                  type="date"
                />
                <CustomTextInput
                  label="Umur"
                  name="umur"
                  type="number"
                  placeholder="18"
                />
                <CustomSelect
                  label="Agama"
                  name="agama"
                  className="input-select"
                >
                  <option value="">Agama</option>
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="hindu">Hindu</option>
                  <option value="budha">Budha</option>
                  <option value="katolik">Katolik</option>
                  <option value="lainya">Lainya</option>
                </CustomSelect>
                <CustomSelect
                  label="Golongan Darah"
                  name="golonganDarah"
                  className="input-select"
                >
                  <option value="">Golongan Darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </CustomSelect>
                <CustomTextArea
                  label="Alamat Rumah"
                  name="alamat"
                  placeholder="Sukoharjo rt 05 rw 12"
                />
                <CustomTextInput
                  label="Nomer Telepon"
                  name="tlpn"
                  type="number"
                  placeholder="0871217872277"
                />
                <CustomTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="raihan@gmail.com"
                />
                <hr className="garis-bawah" />
                <h3 className="judul-h3">Identitas Orang Tua atau Wali</h3>
                <CustomTextInput
                  label="Nama Ayah"
                  name="namaAyah"
                  type="text"
                  placeholder="Raihan"
                />
                <CustomTextInput
                  label="Tahun Lahir Ayah"
                  name="tahunLahirAyah"
                  type="number"
                  placeholder="1987"
                />
                <CustomSelect
                  label="Pendidikan Ayah"
                  name="pendidikanAyah"
                  className="input-select"
                >
                  <option value="">Pendidikan Ayah</option>
                  <option value="Tidak Sekolah">Tidak Sekolah</option>
                  <option value="Tidak Tamat SD">Tidak Tamat SD</option>
                  <option value="SD">SD</option>
                  <option value="SMP">SMP</option>
                  <option value="SMA">SMA</option>
                  <option value="D1/D2/D3">D1/D2/D3</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </CustomSelect>
                <CustomSelect
                  label="Keadaan Ayah"
                  name="keadaanAyah"
                  className="input-select"
                >
                  <option value="">Keadaan Ayah</option>
                  <option value="Masih Hidup">Masih Hidup</option>
                  <option value="Sudah Meninggal">Sudah Meninggal</option>
                </CustomSelect>
                <CustomTextInput
                  label="Pekerjaan Ayah"
                  name="pekerjaanAyah"
                  type="text"
                  placeholder="Guru"
                />
                <CustomSelect
                  label="Penghasilan Ayah"
                  name="penghasilanAyah"
                  className="input-select"
                >
                  <option value="Kurang dari Rp. 1.000.000">
                    {" "}
                    Kurang dari Rp. 1.000.000
                  </option>
                  <option value="Rp. 1.000.000 - Rp. 2.000.000">
                    Rp. 1.000.000 - Rp. 2.000.000
                  </option>
                  <option value="Lebih dari Rp. 2.000.000">
                    Lebih dari Rp. 2.000.000
                  </option>
                  <option value="0">0 jika keadaan ayah sudah meninggal</option>
                </CustomSelect>
                <CustomTextInput
                  label="Nama Ibu"
                  name="namaIbu"
                  type="text"
                  placeholder="Raihan"
                />
                <CustomTextInput
                  label="Tahun Lahir Ibu"
                  name="tahunLahirIbu"
                  type="number"
                  placeholder="1987"
                />
                <CustomSelect
                  label="Pendidikan Ibu"
                  name="pendidikanIbu"
                  className="input-select"
                >
                  <option value="">Pendidikan Ibu</option>
                  <option value="Tidak Sekolah">Tidak Sekolah</option>
                  <option value="Tidak Tamat SD">Tidak Tamat SD</option>
                  <option value="SD">SD</option>
                  <option value="SMP">SMP</option>
                  <option value="SMA">SMA</option>
                  <option value="D1/D2/D3">D1/D2/D3</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </CustomSelect>
                <CustomSelect
                  label="Keadaan Ibu"
                  name="keadaanIbu"
                  className="input-select"
                >
                  <option value="">Keadaan Ibu</option>
                  <option value="Masih Hidup">Masih Hidup</option>
                  <option value="Sudah Meninggal">Sudah Meninggal</option>
                </CustomSelect>
                <CustomTextInput
                  label="Pekerjaan Ibu"
                  name="pekerjaanIbu"
                  type="text"
                  placeholder="Guru"
                />
                <CustomSelect
                  label="Penghasilan Ibu"
                  name="penghasilanIbu"
                  className="input-select"
                >
                  <option value="Kurang dari Rp. 1.000.000">
                    {" "}
                    Kurang dari Rp. 1.000.000
                  </option>
                  <option value="Rp. 1.000.000 - Rp. 2.000.000">
                    Rp. 1.000.000 - Rp. 2.000.000
                  </option>
                  <option value="Lebih dari Rp. 2.000.000">
                    Lebih dari Rp. 2.000.000
                  </option>
                  <option value="0">0 jika keadaan Ibu sudah meninggal</option>
                </CustomSelect>
                <h3 className="judul-h3">Jurusan/peminatan</h3>
                <CustomSelect
                  label="Pilih Kompetensi Keahlian"
                  name="kompetensi"
                  className="input-select"
                >
                  <option value="">Pilih Jurusan</option>
                  <option value="RPL">Teknik Komputer (RPL)</option>
                  <option value="TKR">Teknik Kendaraan Ringan (TKR)</option>
                  <option value="TP">Teknik Permesinan (TP)</option>
                </CustomSelect>
                <button type="submit" className="btn-daftar">
                  {props.isSubmitting ? "Loading..." : "Kirim"}
                </button>
              </Form>
            )}
          </Formik>
        </section>
        <section className="kanan">
          <div className="bungkus-gambar">
            <img src={authIlustration} alt="Register Ilustrator" />
          </div>
          <h4 className="text-pendaftaran">PPDB SMK N 2 KRA</h4>
          <p className="text-desc">
            Terimakasih atas kepercayaan anda terhadap SMK Bhina Karya
            Karanganyar sebagai pilihan untuk meraih masa depan.
          </p>
        </section>
      </section>
    </Fragment>
  );
}

export default Register;
