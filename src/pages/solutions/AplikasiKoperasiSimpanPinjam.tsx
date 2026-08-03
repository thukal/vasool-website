import {
  Users,
  Calculator,
  WifiOff,
  Wallet,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import KeywordLanding, {
  type KeywordLandingConfig,
  type LandingChrome,
} from "@/components/KeywordLanding";

const chrome: LandingChrome = {
  backHome: "Kembali ke Beranda",
  bookDemo: "Jadwalkan Demo Gratis",
  viewPricing: "Lihat Harga",
  faqHeading: "Pertanyaan yang sering diajukan",
  relatedHeading: "Jelajahi lainnya",
  ctaButton: "Jadwalkan Demo",
  compareButton: "Bandingkan Vasool",
};

const config: KeywordLandingConfig = {
  seo: {
    title: "Aplikasi Koperasi Simpan Pinjam untuk Petugas Lapangan | Vasool",
    description:
      "Vasool adalah aplikasi koperasi simpan pinjam untuk pengelolaan pinjaman anggota: catatan pokok dan bunga terpisah, angsuran harian dan mingguan, pertanggungjawaban kas petugas lapangan, mode offline, dan jejak audit lengkap. Nilai rupiah tersimpan persis seperti yang diketik. Demo gratis.",
    keywords:
      "aplikasi koperasi simpan pinjam, aplikasi koperasi simpan pinjam android, aplikasi koperasi simpan pinjam gratis, aplikasi koperasi simpan pinjam excel gratis, download aplikasi koperasi simpan pinjam gratis, contoh aplikasi koperasi simpan pinjam, jual aplikasi koperasi simpan pinjam, aplikasi koperasi simpan pinjam syariah, aplikasi koperasi simpan pinjam sederhana gratis, software koperasi simpan pinjam, aplikasi pinjaman anggota koperasi",
    canonical: "/aplikasi-koperasi-simpan-pinjam",
    ogLocale: "id_ID",
  },
  lang: "id",
  chrome,
  breadcrumbName: "Aplikasi Koperasi Simpan Pinjam",
  badge: "Untuk koperasi dan petugas lapangan",
  h1: (
    <>
      Aplikasi koperasi simpan pinjam untuk{" "}
      <span className="text-gradient">penagihan di lapangan</span>
    </>
  ),
  intro:
    "Sebagian besar aplikasi koperasi simpan pinjam dirancang untuk meja kantor. Vasool dirancang untuk jalur penagihan: petugas lapangan mencatat setoran di tempat, bahkan tanpa sinyal, dan setiap angsuran langsung terhubung ke pokok, bunga, dan riwayat anggota. Nilai rupiah tersimpan persis seperti yang diketik — tanpa pembulatan atau pemotongan angka di belakang layar.",
  featuresHeading: "Yang dibutuhkan koperasi saat penagihan keluar kantor",
  featuresSub:
    "Selama satu orang mengelola satu buku, spreadsheet sudah cukup. Begitu penagihan dilakukan lewat ponsel di lapangan, yang dibutuhkan adalah pertanggungjawaban, bukan sekadar penjumlahan.",
  features: [
    {
      icon: Calculator,
      title: "Nilai rupiah tersimpan apa adanya",
      desc: "Format tampilan tidak pernah mengubah nilai yang tersimpan. Angka besar tetap terbaca jelas di layar dan tetap cocok sampai digit terakhir di buku besar.",
    },
    {
      icon: Users,
      title: "Data anggota dan pinjaman menyatu",
      desc: "Satu catatan anggota memuat seluruh pinjaman, angsuran, dan tunggakannya, sehingga petugas melihat hubungan utuh, bukan sekadar nomor rekening.",
    },
    {
      icon: Wallet,
      title: "Pertanggungjawaban kas petugas lapangan",
      desc: "Target setoran, setoran nyata, biaya, dan penyetoran ke kantor dihitung per petugas dan ditutup setiap hari, sehingga selisih kas terlihat malam itu juga.",
    },
    {
      icon: WifiOff,
      title: "Tetap jalan tanpa koneksi",
      desc: "Entri tersimpan di perangkat dan tersinkron saat sinyal kembali, sehingga rute desa atau pasar tidak pernah membuat catatan setoran hilang.",
    },
    {
      icon: Receipt,
      title: "Pokok, bunga, biaya, dan tenor tercatat jelas",
      desc: "Setiap pinjaman membawa syaratnya secara lengkap, dan setiap pembayaran mencatat tanggal, metode, dan statusnya — bukan singkatan tulisan tangan.",
    },
    {
      icon: ShieldCheck,
      title: "Jejak audit dan persetujuan bertingkat",
      desc: "Setiap perubahan, potongan, penghapusan, dan penutupan tercatat beserta pelakunya dan waktunya. Perubahan oleh staf dapat ditahan hingga disetujui pengurus.",
    },
  ],
  stepsHeading: "Cara koperasi menjalankannya",
  steps: [
    {
      title: "Siapkan koperasi Anda",
      desc: "Pilih Indonesia saat pendaftaran: nilai rupiah, tanggal usaha Asia/Jakarta, dan format nomor lokal, dengan basis data terpisah milik koperasi Anda sendiri.",
    },
    {
      title: "Daftarkan anggota dan kelompok",
      desc: "Masukkan anggota, peminjam, dan kelompok yang meminjam bersama, masing-masing dengan syarat dan dokumennya.",
    },
    {
      title: "Tagih dengan bukti",
      desc: "Petugas mencatat jumlah, metode pembayaran, dan foto bukti di tempat, lalu anggota menerima kuitansi.",
    },
    {
      title: "Tutup hari dan cocokkan",
      desc: "Cocokkan kas dan transfer terhadap target setoran per petugas, lalu baca tunggakan dari buku yang sama.",
    },
  ],
  prose: [
    {
      heading: "Bagian yang tidak dikerjakan Vasool",
      paragraphs: [
        "Vasool menangani sisi pinjaman dan penagihan: data anggota dan peminjam, syarat pinjaman, pencairan, angsuran beserta metode dan petugasnya, pinjaman kelompok, tunggakan, koreksi, dan penutupan — semuanya di bawah jejak audit. Vasool bukan sistem koperasi yang lengkap.",
        "Administrasi simpanan pokok, simpanan wajib, simpanan sukarela, perhitungan SHU, dan penyelenggaraan RAT tidak termasuk di dalamnya. Banyak koperasi menjalankan Vasool berdampingan dengan sistem inti mereka, karena buku pinjaman adalah tempat selisih dan sengketa benar-benar terjadi.",
        "Vasool adalah perangkat lunak penagihan dan portofolio. Ini bukan izin, bukan pendaftaran, dan bukan persetujuan regulator. Bentuk badan hukum, kewenangan meminjamkan, batas harga, dan kewajiban keterbukaan Anda berasal dari hukum Indonesia dan regulator Anda — bukan dari aplikasi. Pastikan semuanya dengan penasihat hukum sebelum pencairan pertama.",
      ],
    },
    {
      heading: "Kenapa aplikasi Excel gratis sering berakhir mahal",
      paragraphs: [
        "Sebagian besar pencarian aplikasi koperasi simpan pinjam berujung pada template Excel gratis atau unduhan sederhana. Untuk koperasi kecil dengan satu pengurus dan satu buku, itu benar-benar cukup, dan kami tidak akan berpura-pura sebaliknya.",
        "Masalah muncul saat penagihan berpindah ke lapangan. Dua orang menyunting berkas yang sama. Seorang petugas menyetor lebih kecil dari catatannya. Seorang anggota mempersoalkan angsuran delapan bulan lalu. Pada titik itu yang Anda butuhkan bukan rumus, melainkan jejak audit, penutupan kas harian per petugas, hak akses per peran, dan entri yang tetap berjalan tanpa sinyal.",
        "Ujian yang jujur bukan berapa biayanya, melainkan apa yang bisa Anda tunjukkan kepada anggota, pengurus, atau pemeriksa yang bertanya bagaimana sebuah saldo bisa menjadi seperti itu.",
      ],
    },
  ],
  checklist: {
    heading: "Sebelum pencairan pertama",
    sub: "Bahas daftar ini dengan penasihat hukum Anda. Vasool menyimpan catatannya, tetapi tidak bisa menjawab satu pun pertanyaan ini untuk Anda.",
    items: [
      "Pastikan bentuk badan hukum dan kewenangan Anda meminjamkan — koperasi, BPR atau BPRS, LKM berizin, bank, atau perusahaan pembiayaan.",
      "Pastikan apakah Anda meminjamkan hanya kepada anggota atau kepada masyarakat umum, dan dokumen Anda sesuai.",
      "Pastikan harga yang diperbolehkan serta cara bunga, biaya, dan tenor harus diungkapkan kepada peminjam.",
      "Catat pokok pinjaman terpisah dari bunga, biaya, dan denda, dalam nilai rupiah penuh.",
      "Nilai kemampuan bayar dari siklus usaha nyata anggota sebelum menetapkan jadwal harian.",
      "Pastikan kewajiban perlindungan konsumen dan data untuk informasi anggota.",
      "Dokumentasikan aturan penagihan Anda dan catat alasan setiap keterlambatan.",
    ],
  },
  faqs: [
    {
      q: "Apakah ini aplikasi koperasi simpan pinjam yang lengkap?",
      a: "Tidak. Vasool menangani sisi pinjaman dan penagihan. Administrasi simpanan pokok, simpanan wajib, simpanan sukarela, perhitungan SHU, dan RAT tetap di sistem inti koperasi Anda. Kami lebih memilih menyampaikannya sekarang daripada saat pemasangan.",
    },
    {
      q: "Apakah tersedia versi gratis?",
      a: "Tersedia demo gratis, bukan paket gratis. Jika template Excel gratis memang sudah cukup untuk koperasi Anda hari ini, gunakan saja. Alasan untuk membayar adalah jejak audit, pertanggungjawaban kas per petugas, mode offline, dan hak akses per peran — semuanya baru terasa penting ketika penagihan keluar dari kantor.",
    },
    {
      q: "Apakah aplikasinya tersedia dalam Bahasa Indonesia?",
      a: "Halaman ini berbahasa Indonesia, tetapi antarmuka aplikasinya saat ini masih berbahasa Inggris. Bahasa Indonesia sedang dalam rencana pengembangan. Kami memilih menyatakannya sejak awal daripada Anda menemukannya sendiri setelah berlangganan.",
    },
    {
      q: "Apakah nilai rupiah yang besar tetap akurat?",
      a: "Ya, dan ini diperlakukan sebagai syarat mutlak. Format masukan hanya untuk tampilan dan tidak pernah mengubah nilai tersimpan, sehingga angka tetap cocok sampai digit terakhir berapa pun panjangnya.",
    },
    {
      q: "Apakah mendukung angsuran harian di pasar?",
      a: "Ya, termasuk mingguan, bulanan, dan pembayaran bunga saja. Frekuensi sebaiknya mengikuti siklus kas peminjam dan perjanjian yang ditandatangani, bukan karena aplikasinya menyediakan jalur harian.",
    },
    {
      q: "Apakah bisa dipakai koperasi syariah?",
      a: "Struktur pinjaman, angsuran, dan penagihannya bisa dipakai, tetapi Vasool tidak menyediakan akad syariah bawaan seperti murabahah atau mudharabah sebagai produk tersendiri. Jika kepatuhan syariah adalah syarat utama Anda, sebaiknya bicarakan lebih dulu sebelum memutuskan.",
    },
  ],
  related: [
    { label: "Vasool di Indonesia", to: "/loan-management-software-indonesia" },
    { label: "Semua negara yang didukung", to: "/countries" },
    { label: "Line Management App", to: "/line-management-app" },
    { label: "Daily Collection App", to: "/daily-collection-app" },
    { label: "White-Label Loan App", to: "/white-label-loan-app" },
  ],
  ctaHeading: "Coba dengan data koperasi Anda sendiri",
  ctaSub:
    "Jadwalkan panggilan, bawa beberapa pinjaman anggota yang nyata, dan kami akan menunjukkan penutupan kas harian serta pencocokannya dengan angka Anda sendiri.",
};

const AplikasiKoperasiSimpanPinjam = () => <KeywordLanding config={config} />;

export default AplikasiKoperasiSimpanPinjam;
