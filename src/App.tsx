import { useState } from "react";
import uinLogo from "@/imports/uin_jkt.png";
import wisudaImage from "./assetwisuda.jpg";

const NAV_ITEMS = [
  { label: "Beranda", href: "#beranda" },
  {
    label: "Kemahasiswaan",
    href: "#tentang",
    children: [
      { label: "Bidang Bina Bakat & Minat", href: "#bakat-minat" },
      { label: "Bidang Administrasi", href: "#administrasi" },
      { label: "Bidang Alumni", href: "#alumni" },
      { label: "Profil Tim Kerja", href: "#tim-kerja" },
    ],
  },
  { label: "UKM", href: "#ukm" },
  {
    label: "Informasi",
    href: "#informasi",
    children: [
      { label: "Beasiswa", href: "#beasiswa" },
      { label: "Layanan & Pedoman", href: "#layanan" },
      { label: "Prestasi", href: "#prestasi" },
    ],
  },
  { label: "Kontak", href: "#kontak" },
];

const UKM_LIST = [
  { name: "Pramuka UIN Jakarta", kategori: "Kepanduan & Sosial", icon: "🏕️", color: "#1a3f7a" },
  { name: "Menwa UIN Jakarta", kategori: "Bela Negara", icon: "🎖️", color: "#1e5fa8" },
  { name: "Resimen Mahasiswa", kategori: "Kepemimpinan", icon: "⚔️", color: "#0d2d5e" },
  { name: "UKM Olahraga", kategori: "Seni & Olahraga", icon: "⚽", color: "#0ea5e9" },
  { name: "Koperasi Mahasiswa", kategori: "Wirausaha", icon: "🤝", color: "#4a90d9" },
  { name: "MAPALA UIN Jakarta", kategori: "Pecinta Alam", icon: "🏔️", color: "#2563eb" },
  { name: "UKM Seni & Budaya", kategori: "Seni & Budaya", icon: "🎭", color: "#3b82f6" },
  { name: "Lembaga Dakwah", kategori: "Keagamaan", icon: "🕌", color: "#1d4ed8" },
];

const BEASISWA_LIST = [
  { nama: "Beasiswa Bidikmisi / KIP-K", penyelenggara: "Kemendikbud", deadline: "Maret 2027", status: "Aktif" },
  { nama: "Beasiswa Bank Indonesia", penyelenggara: "Bank Indonesia", deadline: "Oktober 2026", status: "Aktif" },
  { nama: "Beasiswa Djarum", penyelenggara: "Djarum Foundation", deadline: "Desember 2026", status: "Segera Dibuka" },
  { nama: "Beasiswa UIN Jakarta", penyelenggara: "UIN Jakarta", deadline: "Ongoing", status: "Aktif" },
];

const PRESTASI_LIST = [
  { judul: "Juara I Olimpiade Sains Nasional", mahasiswa: "Ahmad Fauzi — FITK", tahun: "2026", level: "Nasional" },
  { judul: "Juara II Debat Mahasiswa Internasional", mahasiswa: "Siti Rahmawati — FAH", tahun: "2026", level: "Internasional" },
  { judul: "Finalis PKM-K Dikti", mahasiswa: "Tim Mahasiswa FEB", tahun: "2025", level: "Nasional" },
  { judul: "Juara I Musabaqah Tilawatil Quran", mahasiswa: "Yusuf Abdullah — FU", tahun: "2025", level: "Nasional" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"ID" | "EN" | "AR">("ID");

  return (
    <header className="sticky top-0 z-50 bg-[#1a3f7a] shadow-lg">
      {/* Top bar */}
      <div className="border-b border-[#1e5fa8] px-4 py-1.5 flex items-center justify-between max-w-7xl mx-auto">
        <p className="text-[11px] text-white font-medium tracking-wide">
          Biro Administrasi Akademik, Kemahasiswaan dan Kerjasama — UIN Syarif Hidayatullah Jakarta
        </p>
        <div className="flex items-center gap-1">
          {(["ID", "EN", "AR"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`text-[11px] font-semibold px-2 py-0.5 rounded transition-all ${
                lang === l
                  ? "bg-[#4a90d9] text-white"
                  : "text-white hover:text-white hover:bg-[#1e5fa8]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-3">
          <img
            src={uinLogo}
            alt="Logo UIN Syarif Hidayatullah Jakarta"
            className="w-10 h-10 object-contain"
          />
          <div>
            <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kemahasiswaan
            </p>
            <p className="text-white text-[10px] leading-tight opacity-75">UIN Jakarta</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:bg-[#1e5fa8] rounded-md transition-all"
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[#c5d5e8] py-1 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-black hover:bg-[#e4edf8] font-medium transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#beasiswa"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#0ea5e9] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#38bdf8] transition-colors shadow"
          >
            Beasiswa
          </a>
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-[#1e5fa8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d2d5e] border-t border-[#1e5fa8] px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block py-3 text-sm font-semibold text-white hover:text-white border-b border-[#1e5fa8]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-xs text-white opacity-75 hover:opacity-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      → {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#beasiswa"
            className="mt-4 flex items-center justify-center gap-2 bg-[#0ea5e9] text-white font-bold py-3 rounded-xl text-sm"
            onClick={() => setMenuOpen(false)}
          >
            🎓 Cari Beasiswa
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0f1c35]">
        <img
          src={wisudaImage}
          alt="Wisudawan UIN Jakarta"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c35]/95 via-[#1a3f7a]/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Biro AAKK — UIN Jakarta
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Wujudkan Potensimu
            <br />
            <span className="text-white opacity-80">Bersama Kami</span>
          </h1>

          <p className="text-white opacity-75 text-lg leading-relaxed mb-8 max-w-lg">
            Pusat layanan kemahasiswaan UIN Syarif Hidayatullah Jakarta mendukung
            pengembangan bakat, minat, beasiswa, dan keorganisasian mahasiswa menuju
            insan akademis yang berilmu dan berakhlak mulia.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#ukm"
              className="inline-flex items-center gap-2 bg-[#1a3f7a] border-2 border-white text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white hover:text-[#1a3f7a] transition-all min-h-[44px]"
            >
              Jelajahi UKM
            </a>
            <a
              href="#beasiswa"
              className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#38bdf8] transition-all shadow-lg min-h-[44px]"
            >
              Info Beasiswa
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            {[
              { num: "45+", label: "UKM Aktif" },
              { num: "2.400+", label: "Mahasiswa Penerima Beasiswa" },
              { num: "120+", label: "Prestasi Nasional/Int'l" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.num}
                </p>
                <p className="text-white opacity-60 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: "Beasiswa", desc: "4 program aktif tersedia", href: "#beasiswa" },
              { icon: "🏛️", title: "UKM", desc: "45+ unit kegiatan mahasiswa", href: "#ukm" },
            ].map((q) => (
              <a
                key={q.title}
                href={q.href}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <p className="text-3xl mb-3">{q.icon}</p>
                <p className="font-bold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{q.title}</p>
                <p className="text-white opacity-60 text-sm mt-1">{q.desc}</p>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📋", title: "Administrasi", desc: "Surat & layanan kemahasiswaan", href: "#layanan" },
              { icon: "🏆", title: "Prestasi", desc: "Raih & daftarkan prestasimu", href: "#prestasi" },
            ].map((q) => (
              <a
                key={q.title}
                href={q.href}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <p className="text-3xl mb-3">{q.icon}</p>
                <p className="font-bold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{q.title}</p>
                <p className="text-white opacity-60 text-sm mt-1">{q.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-50">
        <span className="text-xs tracking-widest uppercase">Gulir</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

function QuickAccessSection() {
  const items = [
    {
      icon: "🎓", title: "Beasiswa",
      desc: "Temukan program beasiswa internal & eksternal yang tersedia untuk mahasiswa aktif",
      href: "#beasiswa", cta: "Lihat Beasiswa", bg: "#0ea5e9",
    },
    {
      icon: "🏛️", title: "Unit Kegiatan Mahasiswa",
      desc: "Bergabung dengan 45+ UKM — dari olahraga, seni, dakwah, hingga organisasi keprofesian",
      href: "#ukm", cta: "Jelajahi UKM", bg: "#1a3f7a",
    },
    {
      icon: "📋", title: "Layanan & Pedoman",
      desc: "Akses surat, pedoman akademis, dan layanan administrasi kemahasiswaan secara mudah",
      href: "#layanan", cta: "Akses Layanan", bg: "#2563eb",
    },
    {
      icon: "🏆", title: "Prestasi Mahasiswa",
      desc: "Daftarkan dan lihat prestasi membanggakan mahasiswa UIN Jakarta di level nasional & internasional",
      href: "#prestasi", cta: "Lihat Prestasi", bg: "#3b82f6",
    },
  ];

  return (
    <section className="py-16 bg-[#e4edf8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-black mb-2">Akses Cepat</p>
          <h2 className="text-3xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Apa yang Kamu Cari?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all hover:-translate-y-1 text-white"
              style={{ backgroundColor: item.bg }}
            >
              <span className="text-4xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm opacity-85 leading-relaxed">{item.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-auto">
                {item.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[480px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-[#e4edf8]">
            <img
              src={wisudaImage}
              alt="Wisudawan melempar togaa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#1a3f7a] rounded-2xl p-5 shadow-xl w-48">
            <p className="text-white font-bold text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>54+</p>
            <p className="text-white opacity-75 text-sm font-medium mt-0.5">Tahun Pengabdian</p>
          </div>
          <div className="absolute -left-4 top-10 bottom-10 w-1.5 bg-[#0ea5e9] rounded-full" />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-black mb-3">
            Tentang Kemahasiswaan
          </p>
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Membentuk Mahasiswa Berilmu, Berkarakter & Berdaya Saing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bidang Kemahasiswaan Biro AAKK UIN Syarif Hidayatullah Jakarta hadir untuk
            memfasilitasi pengembangan potensi mahasiswa secara holistik — dari pembinaan
            bakat dan minat melalui UKM, pengelolaan beasiswa, layanan administrasi, hingga
            pendataan alumni.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Kami berkomitmen menciptakan ekosistem kemahasiswaan yang aktif, inklusif, dan
            berlandaskan nilai-nilai Islam wasatiyah, sehingga setiap mahasiswa UIN Jakarta
            dapat tumbuh menjadi insan akademis yang kompeten dan berkontribusi nyata bagi
            masyarakat.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Bidang Bina Bakat & Minat", icon: "🎨" },
              { label: "Bidang Administrasi", icon: "📋" },
              { label: "Bidang Alumni", icon: "👥" },
            ].map((b) => (
              <div key={b.label} className="bg-[#e4edf8] rounded-xl p-4 text-center border border-[#c5d5e8]">
                <p className="text-2xl mb-2">{b.icon}</p>
                <p className="text-xs font-semibold text-black leading-tight">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UKMSection() {
  const [filter, setFilter] = useState("Semua");
  const kategoriList = ["Semua", "Kepanduan & Sosial", "Olahraga", "Seni & Budaya", "Keagamaan", "Wirausaha", "Kepemimpinan"];
  const filtered = filter === "Semua" ? UKM_LIST : UKM_LIST.filter((u) => u.kategori === filter);

  return (
    <section id="ukm" className="py-20 bg-[#f4f7fc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-black mb-2">
              Unit Kegiatan Mahasiswa
            </p>
            <h2 className="text-4xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Temukan Komunitasmu
            </h2>
          </div>
          {/* Link interaktif ke halaman lain — tetap biru */}
          <a href="#ukm-lengkap" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline self-start sm:self-auto">
            Lihat Semua UKM →
          </a>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {kategoriList.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                filter === k
                  ? "bg-[#1a3f7a] text-white shadow"
                  : "bg-white text-black border border-[#c5d5e8] hover:border-[#1a3f7a]"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((ukm) => (
            <div
              key={ukm.name}
              className="bg-white rounded-2xl overflow-hidden border border-[#c5d5e8] hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="h-2 w-full" style={{ backgroundColor: ukm.color }} />
              <div className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: ukm.color + "18" }}
                >
                  {ukm.icon}
                </div>
                <h3 className="font-bold text-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {ukm.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{ukm.kategori}</p>
                {/* "Selengkapnya" = link ke halaman lain, tetap biru */}
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1">
                  Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden h-52 relative">
          <img
            src="https://images.unsplash.com/photo-1663246544754-c9145de13338?w=1440&h=400&fit=crop&auto=format"
            alt="Kegiatan mahasiswa UIN Jakarta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3f7a]/85 to-transparent flex items-center px-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Belum Bergabung dengan UKM?
              </h3>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#38bdf8] transition-colors text-sm min-h-[44px]"
              >
                Hubungi Kami →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeasiswaSection() {
  return (
    <section id="beasiswa" className="py-20 bg-[#1a3f7a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-white mb-2">
            Informasi Beasiswa
          </p>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Raih Beasiswamu Sekarang
          </h2>
          <p className="text-white opacity-75 max-w-xl mx-auto">
            Berbagai program beasiswa tersedia untuk mendukung pendidikanmu. Pastikan kamu
            memenuhi persyaratan dan tidak melewatkan deadline pendaftaran.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {BEASISWA_LIST.map((b) => (
            <div
              key={b.nama}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {b.nama}
                </h3>
                <span
                  className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${
                    b.status === "Aktif"
                      ? "bg-[#0ea5e9] text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {b.status}
                </span>
              </div>
              <p className="text-white opacity-75 text-sm mb-1">
                <span className="text-white opacity-100 font-medium">Penyelenggara:</span> {b.penyelenggara}
              </p>
              <p className="text-white opacity-75 text-sm">
                <span className="text-white opacity-100 font-medium">Deadline:</span> {b.deadline}
              </p>
              {/* Link ke halaman lain — tetap biru */}
              <button className="mt-4 text-blue-300 hover:text-blue-100 hover:underline text-sm font-semibold">
                Info Lengkap →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#0ea5e9] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-white text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Perlu Bantuan Informasi Beasiswa?
            </h3>
            <p className="text-white opacity-80 text-sm">Tim kemahasiswaan siap membantu proses pendaftaranmu.</p>
          </div>
          <a
            href="#kontak"
            className="shrink-0 bg-[#1a3f7a] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0d2d5e] transition-colors min-h-[44px] flex items-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

function PrestasiSection() {
  return (
    <section id="prestasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-black mb-2">
              Prestasi Mahasiswa
            </p>
            <h2 className="text-4xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kebanggaan UIN Jakarta
            </h2>
          </div>
          {/* Link ke halaman lain — tetap biru */}
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline self-start sm:self-auto">
            Lihat Semua →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRESTASI_LIST.map((p, i) => (
            <div
              key={p.judul}
              className="border border-[#c5d5e8] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-gray-200" style={{ fontFamily: "'Playfair Display', serif" }}>
                  0{i + 1}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    p.level === "Internasional"
                      ? "bg-[#0ea5e9] text-white"
                      : "bg-[#e4edf8] text-black"
                  }`}
                >
                  {p.level}
                </span>
              </div>
              <h3 className="font-bold text-black text-base mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.judul}
              </h3>
              <p className="text-gray-600 text-sm">{p.mahasiswa}</p>
              <p className="text-gray-400 text-xs mt-1">{p.tahun}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#f4f7fc] rounded-2xl p-8 border border-[#c5d5e8]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-black text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Punya Prestasi? Daftarkan Sekarang!
              </h3>
              <p className="text-gray-600 text-sm">Bantu kami mencatat prestasi gemilang mahasiswa UIN Jakarta.</p>
            </div>
            <a
              href="mailto:kemahasiswaan@uinjkt.ac.id"
              className="inline-flex items-center gap-2 bg-[#1a3f7a] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#0d2d5e] transition-colors text-sm min-h-[44px]"
            >
              📧 Kirim Data Prestasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LayananSection() {
  const layanan = [
    { icon: "📄", title: "Surat Keterangan Aktif", desc: "Penerbitan SKA untuk keperluan beasiswa, magang, dan administrasi lainnya." },
    { icon: "🏅", title: "Rekomendasi Organisasi", desc: "Surat rekomendasi untuk kegiatan kemahasiswaan eksternal." },
    { icon: "📚", title: "Pedoman Kemahasiswaan", desc: "Unduh pedoman lengkap tata kelola organisasi mahasiswa UIN Jakarta." },
    { icon: "🤝", title: "Kerjasama UKM", desc: "Fasilitasi MoU dan kerjasama antara UKM dengan pihak eksternal." },
  ];

  return (
    <section id="layanan" className="py-20 bg-[#e4edf8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-black mb-3">
              Layanan & Pedoman
            </p>
            <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Administrasi Mudah, Cepat, & Transparan
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Segala kebutuhan administrasi kemahasiswaan dapat diakses dan diproses
              melalui Biro AAKK. Kami berkomitmen memberikan pelayanan yang responsif
              dan efisien untuk menunjang kebutuhan akademik dan non-akademikmu.
            </p>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-[#1a3f7a] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#0d2d5e] transition-colors min-h-[44px]"
            >
              Ajukan Layanan →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {layanan.map((l) => (
              <div
                key={l.title}
                className="bg-white rounded-2xl p-5 border border-[#c5d5e8] hover:shadow-md hover:border-[#1a3f7a] transition-all"
              >
                <p className="text-3xl mb-3">{l.icon}</p>
                <h3 className="font-bold text-black text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {l.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    { divisi: "Bidang Akademik", email: "akademik@uinjkt.ac.id", telp: "(021) 7401925 ext. 1820", icon: "📚" },
    { divisi: "Bidang Kemahasiswaan", email: "kemahasiswaan@uinjkt.ac.id", telp: "(021) 7401925 ext. 1825", icon: "🎓" },
    { divisi: "Bidang Kerjasama", email: "kerjasama@uinjkt.ac.id", telp: "(021) 7401925 ext. 1830", icon: "🤝" },
  ];

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-black mb-2">Kontak</p>
          <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Tim Biro AAKK UIN Jakarta siap membantu pertanyaan dan kebutuhan administrasi kemahasiswaanmu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contacts.map((c) => (
            <div
              key={c.divisi}
              className="border border-[#c5d5e8] rounded-2xl p-6 hover:shadow-md hover:border-[#1a3f7a] transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#e4edf8] flex items-center justify-center text-3xl mx-auto mb-4">
                {c.icon}
              </div>
              <h3 className="font-bold text-black mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {c.divisi}
              </h3>
              {/* Email adalah link ke alamat lain — tetap biru */}
              <a href={`mailto:${c.email}`} className="block text-sm text-blue-600 hover:underline mb-1 font-medium">
                {c.email}
              </a>
              <p className="text-sm text-gray-600">{c.telp}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border border-[#c5d5e8] shadow-sm">
          <div className="bg-[#e4edf8] p-4 border-b border-[#c5d5e8] flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div>
              <p className="font-bold text-black text-sm">Kampus UIN Syarif Hidayatullah Jakarta</p>
              <p className="text-xs text-gray-600">Jl. Ir. H. Juanda No.95, Ciputat, Tangerang Selatan 15412</p>
            </div>
          </div>
          <iframe
            title="Lokasi UIN Jakarta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5694882839486!2d106.74578767496963!3d-6.321310593671052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef85498e94ef%3A0x91fa03a6ab2ed55b!2sUIN%20Syarif%20Hidayatullah%20Jakarta!5e0!3m2!1sid!2sid!4v1726478000000!5m2!1sid!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f1c35] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={uinLogo}
                alt="Logo UIN Syarif Hidayatullah Jakarta"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Kemahasiswaan UIN Jakarta
                </p>
                <p className="text-white opacity-50 text-[10px]">Biro AAKK — UIN Syarif Hidayatullah</p>
              </div>
            </div>
            <p className="text-white opacity-65 text-sm leading-relaxed max-w-xs">
              Mendukung pengembangan potensi mahasiswa UIN Jakarta menuju insan akademis
              yang berilmu, berkarakter, dan berdaya saing global.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "𝕏", label: "Twitter/X" },
                { icon: "📷", label: "Instagram" },
                { icon: "▶", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[#1a3f7a] border border-[#1e5fa8] flex items-center justify-center text-white hover:bg-[#1e5fa8] transition-colors text-xs font-bold min-h-[44px] min-w-[44px]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Kemahasiswaan</h4>
            <ul className="space-y-2 text-sm">
              {["UKM UIN Jakarta", "Beasiswa", "Prestasi", "Administrasi", "Alumni"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white opacity-60 hover:opacity-100 hover:underline transition-opacity">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Portal UIN Jakarta", href: "#" },
                { label: "SIAKAD", href: "#" },
                { label: "Perpustakaan Digital", href: "#" },
                { label: "E-Journal", href: "#" },
                { label: "uinjkt.ac.id", href: "https://uinjkt.ac.id" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white opacity-60 hover:opacity-100 hover:underline transition-opacity">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a3f7a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white opacity-40">
          <p>© {new Date().getFullYear()} Biro AAKK UIN Syarif Hidayatullah Jakarta. Hak cipta dilindungi.</p>
          <a href="https://uinjkt.ac.id" className="hover:opacity-100 hover:underline transition-opacity">uinjkt.ac.id →</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickAccessSection />
      <AboutSection />
      <UKMSection />
      <BeasiswaSection />
      <PrestasiSection />
      <LayananSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
