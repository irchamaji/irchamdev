---
title: "Kriteria Fungsionalitas Aplikasi Web untuk Audit Keamanan SPBE"
summary: "Penjelasan detail prosedur Audit Keamanan SPBE untuk aplikasi web, mencakup autentikasi, manajemen sesi, kontrol akses, validasi input, kriptografi, penanganan error, proteksi data, dan keamanan API beserta panduan evaluasi EDK, EIK, dan EEK."
publishedAt: "2026-05-05"
tag: "Audit Keamanan"
---

## Explanation

Penjelasan detail masing2 prosedur pada Audit Keamanan SPBE. Tiap fungsi (seperti "autentikasi", "manajemen sesi") memiliki beberapa prosedur/kontrol. Kemudian, tiap prosedur memiliki 3 hal evaluasi: Evaluasi Desain Kontrol (EDK), Evaluasi Implementasi Kontrol (EIK), dan Evaluasi Efektifitas Kontrol (EEK).

Berikut penjelasan tiap evaluasi:

- **EDK**: meninjau apakah desain (kebijakan, prosedur, SOP) yang dibuat di suatu instansi apakah sesuai dengan kriteria prosedur keamanan. Misal di peraturan SMKI (level kepala daerah) apakah mengatur tentang manajemen kata sandi untuk autentikasi. Hasil evaluasinya ada: Memadai, Perlu Peningkatan, dan Tidak Memadai.
- **EIK**: meninjau apakah implementasi dari prosedur/kontrol tersebut sesuai dengan desain sebelumnya. Jadi kalo EDK nya **tidak memadai**, maka EIK ini tidak bisa dijawab. Hanya bisa dijawab kalo EDK nya **memadai** atau **perlu peningkatan**. Hasil evaluasinya ada: Sesuai dan Tidak Sesuai.
- **EEK**: meninjau apakah implementasi yang diterapkan/diimplementasikan dari prosedur/kontrol ini sudah efektif untuk mencapai tujuan dari kontrol ini, atau apakah risiko yang muncul untuk hal yang berkaitan dengan kontrol dapat dimitigasi dan tertangani dengan baik. Hasil evaluasinya ada: Efektif, Perlu Peningkatan dan Tidak Efektif.

Berikut adalah penjelasan dan bukti dukung yang bisa digunakan untuk setiap prosedur/kontrol dari seluruh fungsi: (bukti dukungnya biasanya kebijakan mikro: level kepala daerah atau kepala instansi, kebijakan kepala dinas atau unit kerja, prosedur/SOP terkait suatu proses)

---

## 1. Autentikasi

> **Konteks regulasi:** Pasal 27 Perban BSSN No. 4 Tahun 2021 — prosedur teknis untuk memenuhi fungsi autentikasi sebagaimana Pasal 26 huruf a.
> 
> **Tujuan fungsi autentikasi:** Memastikan bahwa hanya pengguna yang sah (teridentifikasi dan terverifikasi) yang dapat mengakses sistem. Autentikasi adalah garis pertahanan pertama dari sebuah aplikasi.

---

### a. Menggunakan manajemen kata sandi untuk proses autentikasi

**Penjelasan teknis:** Sistem harus memiliki modul manajemen password yang terdefinisi secara eksplisit — bukan implementasi ad hoc. Ini mencakup: kebijakan password (policy enforcement) yang dikodekan langsung ke dalam logika aplikasi, bukan hanya dokumen SOP. Dalam praktik, ini berarti ada class/service/module khusus (misal `PasswordManager`, `AuthService`) yang menangani seluruh siklus hidup password: pembuatan, validasi, rotasi, dan penghapusan. Framework seperti Django punya `AUTH_PASSWORD_VALIDATORS`, Spring Security punya `PasswordEncoder`, dsb.

**Penjelasan awam:** Bayangkan password seperti kunci rumah. "Manajemen kata sandi" artinya instansi punya aturan tertulis dan sistem yang memastikan kunci itu: punya standar kekuatan tertentu, diganti secara berkala, dan tidak dibiarkan sembarangan. Bukan cuma aturan di atas kertas, tapi sistemnya sendiri yang memaksa aturan itu diikuti.

**Risiko jika tidak diterapkan:** Pengguna bebas memakai password lemah seperti "123456" atau "admin". Tidak ada standar keamanan minimum. Sistem rentan terhadap serangan _brute force_ dan _credential stuffing_.

**Bukti dukung untuk auditor:**

- Kebijakan SMKI level kepala daerah/instansi yang secara eksplisit mengatur manajemen password
- SOP Pengelolaan Kata Sandi (mencakup pembuatan, penggunaan, rotasi, pemulihan)
- Screenshot atau dokumen teknis konfigurasi sistem yang menunjukkan adanya policy enforcement (misal: konfigurasi LDAP, Active Directory password policy, atau konfigurasi aplikasi)
- Daftar aplikasi SPBE beserta status penerapan manajemen kata sandinya

**EDK:** Tinjau apakah kebijakan SMKI atau kebijakan keamanan informasi instansi secara eksplisit mengatur manajemen kata sandi untuk autentikasi sistem. Cek apakah SOP terkait telah ditetapkan secara formal.

**EIK:** Tinjau apakah sistem/aplikasi yang berjalan benar-benar mengimplementasikan manajemen kata sandi sesuai kebijakan yang ada. Lakukan pengujian: coba buat akun dengan password tanpa aturan — apakah sistem menolak? Cek apakah ada konfigurasi teknis yang aktif.

**EEK:** Tinjau apakah manajemen kata sandi yang diterapkan efektif mencegah penggunaan password lemah dan mengurangi risiko akses tidak sah. Indikator: tidak ada insiden akun yang dibobol akibat password lemah, hasil vulnerability scan tidak menemukan weak password policy.

---

### b. Menerapkan verifikasi kata sandi pada sisi server

**Penjelasan teknis:** Validasi password **wajib** dilakukan di sisi server (backend), bukan hanya di sisi client (browser/JavaScript). Client-side validation boleh ada untuk UX, tapi tidak boleh menjadi satu-satunya penjaga. Penyerang dapat dengan mudah menonaktifkan JavaScript, menggunakan `curl`, Burp Suite, atau Postman untuk mengirim request langsung ke endpoint API tanpa melalui form browser. Endpoint autentikasi (misal: `POST /api/login`) harus selalu memvalidasi credential di server sebelum mengeluarkan session token atau JWT. Jika hanya ada client-side validation, penyerang tinggal mengirim HTTP request langsung ke backend dan bypass semua validasi.

**Penjelasan awam:** Ibarat gedung kantor: validasi di sisi client itu seperti tulisan "Silakan antre dengan tertib" di pintu masuk. Tapi validasi di sisi server itu seperti satpam yang benar-benar memeriksa ID badge setiap orang yang masuk. Kalau hanya ada tulisan tanpa satpam, siapa saja bisa masuk. Yang memastikan keamanan adalah satpam (server), bukan tulisannya (browser).

**Risiko jika tidak diterapkan:** Penyerang bisa bypass login form menggunakan tools seperti Burp Suite atau curl, langsung menyerang endpoint API. Seluruh logika autentikasi bisa ditembus.

**Bukti dukung untuk auditor:**

- Source code review atau dokumentasi arsitektur yang menunjukkan logika validasi ada di backend
- Hasil penetration testing yang membuktikan sistem menolak request autentikasi tidak valid yang dikirim langsung ke API (tanpa melalui browser)
- Konfigurasi API Gateway atau WAF yang menunjukkan validasi server-side aktif
- SOP pengembangan aplikasi yang mewajibkan server-side validation

**EDK:** Tinjau apakah kebijakan/SOP pengembangan aplikasi atau standar keamanan aplikasi instansi mewajibkan validasi autentikasi dilakukan di sisi server.

**EIK:** Uji secara teknis: kirim request login langsung ke endpoint backend (menggunakan Burp Suite atau curl) dengan credential yang salah — apakah server menolak? Pastikan validasi tidak hanya terjadi di JavaScript browser.

**EEK:** Tinjau apakah penerapan server-side validation efektif mencegah bypass autentikasi. Indikator: hasil pentest tidak menemukan kemungkinan bypass login melalui manipulasi request langsung ke API.

---

### c. Mengatur jumlah karakter, kombinasi jenis karakter, dan masa berlaku dari kata sandi

**Penjelasan teknis:** Ini adalah implementasi _password complexity policy_ dan _password expiry policy_. Secara teknis mencakup:

- **Panjang minimum:** Umumnya minimal 8 karakter, direkomendasikan 12+ karakter (NIST SP 800-63B merekomendasikan minimal 8, fokus pada panjang daripada kompleksitas).
- **Kombinasi karakter:** Minimal mencakup kombinasi huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan karakter khusus (!@#$%).
- **Masa berlaku (expiry):** Password harus diganti setelah periode tertentu (misal: 90 hari). Sistem harus secara otomatis memaksa pengguna mengganti password saat masa berlaku habis.
- **Password history:** Sistem mencegah pengguna memakai kembali N password terakhir. Implementasi teknis: dikonfigurasi di level aplikasi, LDAP/Active Directory, atau identity provider (Keycloak, Okta, dll).

**Penjelasan awam:** Seperti aturan membuat PIN ATM: minimal 6 digit, tidak boleh urutan seperti 123456, dan harus diganti tiap beberapa bulan. Sistemnya yang memaksa aturan ini — kalau password tidak memenuhi syarat, sistem langsung menolak dan menjelaskan apa yang kurang. Password lama juga tidak boleh dipakai ulang.

**Risiko jika tidak diterapkan:** Password pendek dan sederhana sangat mudah ditebak atau di-brute force. Password yang tidak pernah diganti bisa digunakan oleh mantan karyawan atau pihak yang pernah mengetahui password lama.

**Bukti dukung untuk auditor:**

- Kebijakan/SOP yang mendefinisikan standar password (panjang minimum, kombinasi karakter, masa berlaku)
- Screenshot konfigurasi sistem (Active Directory Group Policy, Keycloak realm settings, atau konfigurasi aplikasi) yang menunjukkan policy aktif
- Demonstrasi langsung: coba buat password yang tidak memenuhi syarat — sistem menolak dan menampilkan pesan error yang sesuai
- Log atau laporan rotasi password periodik

**EDK:** Tinjau apakah kebijakan/SOP instansi mendefinisikan secara eksplisit: panjang minimum karakter, kombinasi jenis karakter yang diwajibkan, dan masa berlaku kata sandi.

**EIK:** Uji secara teknis: coba buat atau ubah password dengan variasi yang tidak memenuhi syarat (terlalu pendek, tanpa angka, tanpa huruf besar). Verifikasi sistem menolak dan menampilkan pesan yang sesuai. Periksa juga apakah ada mekanisme notifikasi expiry password kepada pengguna.

**EEK:** Tinjau efektivitas kebijakan dalam mencegah penggunaan password lemah. Indikator: tidak ada temuan password lemah dalam password audit, tidak ada insiden akses tidak sah akibat password mudah ditebak.

---

### d. Mengatur jumlah maksimum kesalahan dalam pemasukan kata sandi

**Penjelasan teknis:** Ini adalah implementasi _account lockout policy_ untuk mencegah serangan _brute force_. Mekanismenya:

- Sistem mencatat jumlah percobaan login gagal per akun (atau per IP).
- Setelah N kali gagal (misal: 5 kali), akun dikunci (_locked_) untuk periode tertentu (misal: 15-30 menit, atau sampai di-unlock manual oleh admin).
- Ada dua model: **hard lockout** (akun dikunci permanen hingga admin reset) dan **soft lockout** (otomatis unlock setelah periode cooldown).
- **CAPTCHA** bisa ditambahkan setelah beberapa kali gagal sebagai lapisan tambahan.
- Perlu diperhatikan: mekanisme lockout bisa disalahgunakan untuk _denial of service_ — penyerang sengaja mengunci akun korban. Mitigasi: notifikasi email ke pemilik akun saat terjadi lockout.
- Implementasi: biasanya disimpan di Redis/cache (attempt counter dengan TTL) atau database.

**Penjelasan awam:** Seperti ATM yang memblokir kartu setelah 3 kali salah PIN. Ini mencegah seseorang yang tidak tahu password terus mencoba ribuan kemungkinan secara otomatis (serangan brute force). Setelah batas percobaan terlampaui, akun dikunci sementara dan pemilik akun biasanya mendapat notifikasi.

**Risiko jika tidak diterapkan:** Penyerang bisa menggunakan tools otomatis untuk mencoba jutaan kombinasi password (brute force attack / dictionary attack) tanpa hambatan apapun, hingga akhirnya berhasil masuk.

**Bukti dukung untuk auditor:**

- Kebijakan/SOP yang mendefinisikan batas maksimum kesalahan login dan durasi lockout
- Screenshot atau konfigurasi sistem yang menunjukkan account lockout policy aktif
- Demonstrasi: coba login dengan password salah berulang kali — sistem harus menolak dan mengunci setelah batas tercapai
- Log sistem yang mencatat percobaan login gagal dan lockout event

**EDK:** Tinjau apakah kebijakan instansi secara eksplisit mendefinisikan jumlah maksimum kesalahan pemasukan kata sandi dan konsekuensinya (lockout/blokir sementara).

**EIK:** Uji secara teknis: lakukan percobaan login gagal berulang kali melebihi batas yang ditentukan. Verifikasi sistem mengunci akun sesuai kebijakan. Periksa apakah ada notifikasi ke pemilik akun saat lockout terjadi.

**EEK:** Tinjau apakah mekanisme lockout efektif mencegah brute force attack. Indikator: hasil pentest tidak menemukan kemungkinan brute force tak terbatas, monitoring menunjukkan lockout event terdeteksi dan direspons.

---

### e. Mengatur mekanisme pemulihan kata sandi

**Penjelasan teknis:** Mekanisme password reset yang aman harus memenuhi beberapa syarat:

- **Token berbasis waktu (time-limited token):** Link reset password menggunakan token acak yang kuat (minimal 128-bit entropy, misal UUID v4 atau CSPRNG) yang hanya berlaku untuk satu kali penggunaan dan kedaluwarsa dalam waktu singkat (misal: 15-60 menit).
- **Pengiriman melalui kanal terverifikasi:** Token dikirim ke email atau nomor HP yang sudah terdaftar dan terverifikasi — bukan ditampilkan langsung di browser.
- **Invalidasi token lama:** Saat token baru dibuat, semua token reset lama untuk akun yang sama harus diinvalidasi.
- **Verifikasi identitas tambahan:** Bisa ditambahkan pertanyaan keamanan, OTP SMS, atau verifikasi manual oleh admin untuk akun sensitif.
- **Anti-enumeration:** Respon sistem harus sama baik saat email terdaftar maupun tidak terdaftar, untuk mencegah penyerang mengetahui apakah suatu email terdaftar di sistem.
- **Yang TIDAK boleh dilakukan:** Mengirim password lama via email, menampilkan password di browser, atau menggunakan token yang mudah ditebak (misal: timestamp saja).

**Penjelasan awam:** Bayangkan lupa kunci rumah. Mekanisme yang benar: kamu menghubungi pusat layanan, mereka mengirim kode rahasia sementara ke nomor HP yang sudah terdaftar, kamu pakai kode itu untuk masuk dan langsung ganti kunci baru. Kode itu hanya berlaku beberapa menit. Yang salah: petugas memberitahu kunci lama kamu lewat telepon terbuka, atau kamu bisa meminta reset tanpa verifikasi identitas apapun.

**Risiko jika tidak diterapkan:** Penyerang bisa mengambil alih akun orang lain dengan meminta reset password tanpa verifikasi identitas yang memadai. Token yang tidak kedaluwarsa bisa dieksploitasi lama setelah email reset dikirim.

**Bukti dukung untuk auditor:**

- SOP Pemulihan Kata Sandi yang terdokumentasi
- Alur teknis (flow diagram) proses reset password
- Demonstrasi proses reset: verifikasi token kedaluwarsa setelah digunakan atau melewati batas waktu
- Bukti pengiriman token ke email/HP terdaftar (bukan ditampilkan di layar)
- Kebijakan yang melarang pengiriman password plaintext

**EDK:** Tinjau apakah instansi memiliki SOP atau prosedur tertulis untuk pemulihan kata sandi yang mencakup mekanisme verifikasi identitas dan keamanan proses reset.

**EIK:** Uji proses pemulihan password secara langsung: apakah token reset dikirim ke kanal yang tepat? Apakah token kedaluwarsa setelah digunakan? Apakah ada verifikasi identitas yang memadai sebelum reset diizinkan?

**EEK:** Tinjau apakah mekanisme pemulihan efektif mencegah pengambilalihan akun (account takeover) melalui eksploitasi proses reset password. Indikator: tidak ada insiden account takeover melalui reset password, hasil pentest tidak menemukan kelemahan pada alur pemulihan.

---

### f. Menjaga kerahasiaan kata sandi yang disimpan melalui mekanisme kriptografi

**Penjelasan teknis:** Password **tidak boleh** disimpan dalam bentuk plaintext atau enkripsi reversibel di database. Yang wajib digunakan adalah **cryptographic hashing dengan salt**:

- **Algoritma yang direkomendasikan:** bcrypt, Argon2id (paling direkomendasikan saat ini — OWASP), scrypt, atau PBKDF2. Keempatnya adalah _slow hashing algorithm_ yang sengaja dirancang lambat untuk mempersulit serangan brute force.
- **Yang TIDAK boleh digunakan:** MD5, SHA-1, SHA-256 tanpa salt — algoritma ini terlalu cepat dan rentan terhadap rainbow table attack.
- **Salt:** String acak unik yang ditambahkan ke setiap password sebelum di-hash, sehingga dua user dengan password sama akan memiliki hash yang berbeda. Modern password hashing library (bcrypt, Argon2) sudah otomatis menangani salt.
- **Pepper (opsional, best practice):** Secret key yang disimpan di environment variable (bukan database) yang ditambahkan ke password sebelum hashing — lapisan keamanan tambahan jika database bocor.
- **Work factor/cost factor:** Parameter yang mengontrol seberapa lambat algoritma bekerja. Harus di-tuning berkala seiring peningkatan kemampuan hardware.
- Contoh implementasi: Django menggunakan PBKDF2 by default, bisa diganti Argon2 dengan `django-argon2`. Laravel menggunakan bcrypt. Spring Security mendukung semua algoritma di atas.

**Penjelasan awam:** Password tidak boleh disimpan apa adanya di database — ibarat menyimpan kunci asli di bawah keset pintu. Sebaliknya, sistem menyimpan "sidik jari" dari password (disebut hash) yang tidak bisa dikembalikan ke password aslinya. Saat login, sistem membuat sidik jari dari password yang kamu ketik dan membandingkan dengan sidik jari yang tersimpan. Jika ada peretas yang berhasil mencuri database, mereka hanya mendapat sidik jari — tidak bisa membalikkannya menjadi password asli (terutama jika menggunakan algoritma yang kuat).

**Risiko jika tidak diterapkan:** Jika database bocor (data breach), seluruh password pengguna langsung terbaca oleh penyerang. Password plaintext bisa langsung digunakan untuk login ke sistem lain (password reuse attack).

**Bukti dukung untuk auditor:**

- Dokumentasi teknis atau konfigurasi yang menunjukkan algoritma hashing yang digunakan
- Source code review pada modul autentikasi (fungsi simpan/verifikasi password)
- Hasil pemeriksaan langsung di database: field password harus berisi string hash (bukan plaintext) — untuk bcrypt biasanya diawali `$2b$`, untuk Argon2 diawali `$argon2id$`
- Kebijakan yang mewajibkan penggunaan kriptografi untuk penyimpanan password
- Catatan: auditor tidak perlu melihat password asli, cukup verifikasi format hash di database

**EDK:** Tinjau apakah kebijakan atau standar teknis instansi secara eksplisit mewajibkan penyimpanan kata sandi menggunakan mekanisme kriptografi (hashing dengan salt), dan melarang penyimpanan plaintext.

**EIK:** Lakukan pemeriksaan teknis pada database: verifikasi bahwa kolom password berisi nilai hash (bukan plaintext). Verifikasi algoritma hashing yang digunakan termasuk kategori algoritma yang direkomendasikan (bcrypt, Argon2, PBKDF2). Periksa apakah salt digunakan.

**EEK:** Tinjau apakah mekanisme kriptografi yang diterapkan efektif melindungi kerahasiaan password jika terjadi kebocoran database. Indikator: algoritma yang digunakan adalah slow hashing algorithm yang direkomendasikan, work factor sesuai standar terkini, tidak ada password yang disimpan dalam plaintext atau enkripsi reversibel.

---

### g. Menggunakan jalur komunikasi yang diamankan untuk proses autentikasi

**Penjelasan teknis:** Seluruh transmisi credential (username, password, token) antara client dan server **wajib** dienkripsi menggunakan TLS (Transport Layer Security). Secara praktis ini berarti:

- **HTTPS wajib di seluruh endpoint:** Terutama endpoint login, logout, dan semua halaman yang memerlukan autentikasi. HTTP plain text tidak boleh digunakan sama sekali untuk transmisi credential.
- **HTTP Strict Transport Security (HSTS):** Header `Strict-Transport-Security` harus dikonfigurasi agar browser otomatis menggunakan HTTPS dan mencegah SSL stripping attack. Contoh: `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
- **Versi TLS:** Minimal TLS 1.2, direkomendasikan TLS 1.3. TLS 1.0 dan 1.1 sudah deprecated dan tidak boleh digunakan.
- **Sertifikat valid:** Gunakan sertifikat SSL/TLS dari Certificate Authority (CA) terpercaya, bukan self-signed certificate di production.
- **Redirect HTTP ke HTTPS:** Semua request HTTP harus di-redirect otomatis ke HTTPS (301 redirect).
- **Secure flag pada cookie:** Cookie session harus memiliki atribut `Secure` (hanya dikirim via HTTPS) dan `HttpOnly` (tidak dapat diakses JavaScript).
- Tools untuk verifikasi: SSL Labs (ssllabs.com/ssltest), testssl.sh.

**Penjelasan awam:** Bayangkan mengirim surat berisi password ke bank. Tanpa pengamanan (HTTP), suratnya dikirim terbuka — siapa saja yang ada di jalan bisa membaca isinya. Dengan HTTPS, suratnya dimasukkan ke amplop terkunci yang hanya bisa dibuka oleh bank. HTTPS adalah "amplop terkunci" untuk komunikasi internet. Kamu bisa melihatnya dari ikon gembok (🔒) di browser. Jika proses login tidak menggunakan HTTPS, password bisa dicuri oleh siapa saja yang berada di jaringan yang sama (misalnya WiFi publik).

**Risiko jika tidak diterapkan:** Penyerang yang berada di jaringan yang sama (man-in-the-middle attack) dapat menyadap transmisi dan langsung membaca username/password yang dikirim dalam plaintext. Serangan ini sangat mudah dilakukan di jaringan WiFi publik menggunakan tools seperti Wireshark.

**Bukti dukung untuk auditor:**

- Hasil scan SSL/TLS menggunakan SSL Labs atau testssl.sh yang menunjukkan konfigurasi TLS yang baik (grade A atau A+)
- Verifikasi langsung di browser: URL menggunakan `https://`, ikon gembok tampil, sertifikat valid dan belum kedaluwarsa
- Verifikasi HSTS header menggunakan browser developer tools (Network tab → Response Headers)
- Konfigurasi web server (Nginx/Apache) yang menunjukkan redirect HTTP ke HTTPS dan TLS version yang digunakan
- Kebijakan yang mewajibkan penggunaan HTTPS untuk seluruh aplikasi SPBE
- Catatan: cek juga apakah ada endpoint yang masih bisa diakses via HTTP tanpa redirect

**EDK:** Tinjau apakah kebijakan instansi mewajibkan penggunaan jalur komunikasi terenkripsi (HTTPS/TLS) untuk seluruh aplikasi SPBE, terutama untuk proses autentikasi.

**EIK:** Lakukan verifikasi teknis: akses aplikasi via HTTP — apakah otomatis di-redirect ke HTTPS? Periksa sertifikat SSL: apakah valid dan tidak kedaluwarsa? Gunakan SSL Labs untuk memeriksa konfigurasi TLS. Periksa response header HSTS.

**EEK:** Tinjau apakah penggunaan HTTPS efektif mencegah penyadapan credential saat transmisi. Indikator: hasil scan SSL Labs minimal grade A, TLS 1.2+ digunakan, HSTS aktif, tidak ada endpoint autentikasi yang dapat diakses via HTTP tanpa redirect, tidak ada sertifikat kedaluwarsa.

---

## 2. Manajemen Sesi

> **Konteks regulasi:** Pasal 28 Perban BSSN No. 4 Tahun 2021 — prosedur teknis untuk memenuhi fungsi manajemen sesi.
> 
> **Tujuan fungsi manajemen sesi:** Memastikan bahwa setelah pengguna berhasil terautentikasi, akses yang diberikan kepada pengguna tersebut dikelola dengan aman selama masa sesi aktif — dan dihentikan dengan benar saat sesi berakhir. Sesi yang tidak dikelola dengan baik adalah pintu masuk utama serangan seperti session hijacking dan CSRF.

---

### a. Menggunakan pengendali sesi untuk proses manajemen sesi

**Penjelasan teknis:** Aplikasi wajib menggunakan _session manager_ yang terdedikasi dan terdefinisi — bukan implementasi custom ad hoc yang dibuat sendiri dari nol. Session manager bertanggung jawab atas seluruh siklus hidup sesi: pembuatan token sesi, penyimpanan (server-side state atau stateless JWT), validasi setiap request, dan penghapusan saat logout. Implementasi custom session management sangat rawan bug keamanan — library/framework yang sudah teruji jauh lebih aman. Session state bisa disimpan di: server-side (Redis, database), atau stateless (JWT dengan signature verification). Setiap pendekatan punya trade-off keamanan yang harus dipahami.

**Penjelasan awam:** Setelah kamu login, sistem perlu mengingat bahwa "ini adalah kamu" di setiap halaman yang kamu buka selanjutnya — karena HTTP pada dasarnya tidak punya "memori". Pengendali sesi adalah bagian sistem yang bertugas mengingat dan memverifikasi identitasmu di setiap langkah. Ini seperti tanda pengenal sementara yang diberikan satpam setelah kamu masuk gedung — kamu menunjukkannya setiap kali mau masuk ruangan berbeda, dan satpam mengecek apakah tanda pengenal itu masih berlaku.

**Risiko jika tidak diterapkan:** Tanpa session manager yang proper, sesi bisa tidak konsisten, mudah dipalsukan, atau tidak bisa dicabut saat diperlukan (misal: saat logout atau ada indikasi penyalahgunaan).

**Bukti dukung untuk auditor:**

- Dokumentasi arsitektur teknis aplikasi yang menjelaskan mekanisme session management yang digunakan
- SOP atau kebijakan yang mewajibkan penggunaan session manager standar (bukan custom)
- Source code review atau konfigurasi framework yang menunjukkan session manager aktif digunakan (misal: Express-session, Django sessions, Spring Session)
- Daftar aplikasi SPBE beserta mekanisme session management yang digunakan

**EDK:** Tinjau apakah kebijakan pengembangan aplikasi instansi mewajibkan penggunaan pengendali sesi (session manager) yang terstandar untuk semua aplikasi SPBE.

**EIK:** Verifikasi secara teknis bahwa aplikasi menggunakan session manager dari framework atau library yang diakui (bukan implementasi custom). Periksa konfigurasi session manager yang aktif.

**EEK:** Tinjau apakah penggunaan session manager yang terstandar efektif mencegah kelemahan manajemen sesi. Indikator: hasil pentest tidak menemukan kelemahan session management fundamental, sesi dapat dibuat, divalidasi, dan dihapus dengan benar.

---

### b. Menggunakan pengendali sesi yang disediakan oleh kerangka kerja aplikasi

**Penjelasan teknis:** Ini adalah spesifikasi lebih lanjut dari kontrol (a): session manager yang digunakan **harus** berasal dari kerangka kerja (framework) aplikasi yang dipakai, bukan dibangun sendiri. Setiap framework modern sudah menyediakan session management yang telah diuji secara ekstensif:

- **Django:** `django.contrib.sessions` — session tersimpan di database, cache (Redis), atau file. Dikonfigurasi via `SESSION_ENGINE`.
- **Laravel (PHP):** Built-in session handling via `session()` helper dan konfigurasi `config/session.php`.
- **Spring Boot (Java):** Spring Session — mendukung Redis, JDBC, Hazelcast sebagai backend.
- **Express.js (Node):** `express-session` middleware dengan Redis store.
- **Next.js:** `next-auth` atau `iron-session` sebagai standar komunitas. Alasan utama: library pihak ketiga yang sudah mature telah menangani edge case keamanan yang sering terlewat dalam implementasi custom (misal: timing attack pada token comparison, proper entropy generation, dsb).

**Penjelasan awam:** Ibarat memilih kunci brankas: lebih aman membeli brankas dari produsen terpercaya yang sudah melalui pengujian bertahun-tahun, daripada membuat brankas sendiri dari bahan seadanya. Framework aplikasi seperti Django atau Laravel sudah menyediakan "sistem tanda pengenal" yang telah teruji dan diaudit oleh ribuan developer di seluruh dunia. Menggunakannya jauh lebih aman daripada membuat sistem sendiri yang mungkin punya celah tersembunyi.

**Risiko jika tidak diterapkan:** Implementasi session management custom sangat sering mengandung bug keamanan yang tidak disadari developer: token yang mudah ditebak, tidak ada invalidasi yang proper, atau penyimpanan yang tidak aman.

**Bukti dukung untuk auditor:**

- Dokumentasi teknis yang menyebutkan framework dan versi session manager yang digunakan
- Konfigurasi framework (misal: `settings.py` Django, `config/session.php` Laravel) yang menunjukkan penggunaan built-in session manager
- Source code review: tidak ada implementasi custom session dari nol
- Catatan: verifikasi bahwa versi framework yang digunakan masih dalam status "supported" dan tidak ada known vulnerability pada modul session-nya

**EDK:** Tinjau apakah kebijakan/standar pengembangan aplikasi instansi secara eksplisit mensyaratkan penggunaan session manager bawaan framework, bukan implementasi custom.

**EIK:** Lakukan source code review atau dokumentasi review untuk memverifikasi bahwa session manager yang digunakan adalah bawaan framework (bukan custom). Identifikasi framework dan versi yang digunakan.

**EEK:** Tinjau apakah penggunaan framework session manager efektif. Indikator: tidak ada temuan kelemahan session pada pentest yang disebabkan oleh implementasi session management yang buruk, framework yang digunakan masih actively maintained.

---

### c. Mengatur pembuatan dan keacakan token sesi yang dihasilkan oleh pengendali sesi

**Penjelasan teknis:** Token sesi harus memiliki **entropi yang cukup** sehingga tidak bisa ditebak atau di-brute force. Standar minimum:

- **Panjang token:** Minimal 128-bit (16 byte) random data, direkomendasikan 256-bit (32 byte).
- **Sumber keacakan:** Harus menggunakan **Cryptographically Secure Pseudo-Random Number Generator (CSPRNG)** — bukan `Math.random()` (JavaScript) atau `rand()` (PHP) yang **tidak** cryptographically secure. Di Python: `secrets.token_hex()`, di Node.js: `crypto.randomBytes()`, di Java: `SecureRandom`.
- **Encoding:** Token biasanya di-encode sebagai hex atau base64url untuk keamanan dalam transmisi.
- **Untuk JWT:** Harus di-sign menggunakan algoritma yang kuat (HS256 minimum, direkomendasikan RS256 atau ES256 untuk asymmetric). Payload JWT tidak boleh berisi data sensitif karena bisa di-decode (meski tidak bisa dimodifikasi tanpa invalidasi signature).
- **Uniqueness:** Setiap sesi harus mendapat token yang unik — tidak boleh ada pola atau urutan yang bisa diprediksi.

**Penjelasan awam:** Token sesi adalah seperti nomor tiket antrian yang diberikan kepada kamu setelah login. Nomor tiket ini harus benar-benar acak dan unik — tidak boleh berurutan atau mudah ditebak. Kalau nomornya mudah ditebak (misal: 1001, 1002, 1003...), penyerang bisa menebak nomor tiket orang lain dan berpura-pura jadi mereka. Token yang baik seperti nomor seri acak yang sangat panjang — hampir tidak mungkin ditebak.

**Risiko jika tidak diterapkan:** Jika token sesi dapat ditebak atau di-brute force, penyerang bisa melakukan session prediction attack — mengambil alih sesi pengguna lain tanpa harus tahu password mereka.

**Bukti dukung untuk auditor:**

- Dokumentasi atau konfigurasi yang menunjukkan panjang token sesi dan mekanisme pembuatannya
- Source code review pada bagian pembuatan token: verifikasi penggunaan CSPRNG
- Sampel token sesi yang dihasilkan: cek panjang dan apakah terlihat benar-benar acak (bukan sequential/predictable)
- Hasil analisis entropi token menggunakan tools seperti Burp Suite (Sequencer) untuk mengukur keacakan token

**EDK:** Tinjau apakah kebijakan/standar teknis instansi mendefinisikan persyaratan keacakan dan panjang minimum token sesi.

**EIK:** Analisis token sesi yang dihasilkan sistem menggunakan Burp Suite Sequencer atau tools serupa. Verifikasi panjang token minimal 128-bit dan dibuat menggunakan CSPRNG. Cek apakah ada pola atau urutan yang dapat diprediksi.

**EEK:** Tinjau apakah token yang dihasilkan memiliki entropi yang cukup untuk mencegah session prediction attack. Indikator: hasil analisis Burp Sequencer menunjukkan entropi tinggi, tidak ada temuan session prediction vulnerability pada pentest.

---

### d. Mengatur kondisi dan jangka waktu habis sesi

**Penjelasan teknis:** Ada dua jenis timeout sesi yang harus diimplementasikan:

- **Idle timeout (inactivity timeout):** Sesi otomatis berakhir setelah pengguna tidak aktif selama periode tertentu (misal: 15-30 menit untuk aplikasi sensitif, 1-2 jam untuk aplikasi umum). Ini mencegah sesi terbuka jika pengguna lupa logout atau meninggalkan komputer.
- **Absolute timeout (maximum session duration):** Sesi berakhir setelah durasi maksimum tertentu meskipun pengguna masih aktif (misal: 8-24 jam). Memaksa re-autentikasi berkala.
- **Kondisi terminasi paksa lainnya:** Sesi harus segera diinvalidasi saat: logout eksplisit, perubahan password, perubahan hak akses, deteksi aktivitas mencurigakan, atau permintaan admin.
- **Implementasi server-side expiry:** Untuk session-based auth, expiry dikontrol di server (Redis TTL, database timestamp). Untuk JWT, gunakan `exp` claim — tapi ingat JWT tidak bisa di-invalidasi sebelum kedaluwarsa kecuali menggunakan blacklist/denylist.
- Notifikasi ke pengguna sebelum sesi berakhir (misal: popup "Sesi Anda akan berakhir dalam 5 menit") adalah best practice untuk UX.

**Penjelasan awam:** Bayangkan tanda pengenal sementara di gedung kantor. Tanda pengenal ini punya dua aturan: (1) jika kamu diam saja tidak kemana-mana selama 30 menit, tanda pengenal otomatis kadaluarsa, dan (2) meskipun kamu terus aktif, tanda pengenal tetap harus diperbaharui setelah 8 jam bekerja. Ini memastikan kalau kamu pergi dan lupa mengembalikan tanda pengenal, orang lain tidak bisa memakainya selamanya.

**Risiko jika tidak diterapkan:** Sesi yang tidak pernah kedaluwarsa bisa dieksploitasi selamanya jika token sesi dicuri. Pengguna yang lupa logout di komputer publik akan membiarkan akun mereka terbuka tanpa batas waktu.

**Bukti dukung untuk auditor:**

- Kebijakan/SOP yang mendefinisikan durasi idle timeout dan absolute timeout sesi untuk setiap kategori aplikasi
- Konfigurasi teknis yang menunjukkan timeout aktif (misal: `SESSION_COOKIE_AGE` di Django, `session.timeout` di konfigurasi server)
- Demonstrasi: biarkan sesi idle melebihi batas — sistem harus otomatis logout
- Cek apakah logout eksplisit benar-benar menginvalidasi token sesi di server (bukan hanya menghapus cookie di client)

**EDK:** Tinjau apakah kebijakan instansi mendefinisikan jangka waktu habis sesi (idle timeout dan absolute timeout) serta kondisi-kondisi yang memaksa terminasi sesi.

**EIK:** Uji secara teknis: biarkan sesi idle melebihi batas yang ditentukan, lalu coba gunakan — apakah sistem menolak dan meminta login ulang? Verifikasi bahwa logout menginvalidasi token di sisi server.

**EEK:** Tinjau apakah timeout sesi efektif meminimalkan risiko session hijacking. Indikator: tidak ada sesi yang bisa digunakan setelah melewati batas timeout, token yang sudah logout tidak bisa digunakan kembali (replay test), tidak ada insiden akibat sesi yang tidak berakhir.

---

### e. Validasi dan pencantuman session ID

**Penjelasan teknis:** Setiap request yang memerlukan autentikasi **wajib** divalidasi session ID-nya di sisi server. Ini mencakup:

- **Validasi keberadaan:** Session ID ada dan tidak kosong.
- **Validasi integritas:** Session ID terdaftar di server (ada di database/cache) dan belum kedaluwarsa.
- **Validasi konteks:** Session terikat pada konteks yang tepat (misal: user ID, IP address binding opsional, User-Agent binding opsional).
- **Pencantuman session ID:** Session ID harus dikirimkan melalui mekanisme yang aman:
    - **Direkomendasikan:** Cookie dengan atribut `HttpOnly`, `Secure`, `SameSite=Strict` (atau `Lax`).
    - **Tidak direkomendasikan:** URL parameter (`?sessionid=xxx`) — tercatat di server log, browser history, dan Referer header. Ini disebut session ID exposure.
    - **Tidak direkomendasikan:** Hidden form field — rentan terhadap CSRF.
- Setiap endpoint yang memerlukan autentikasi harus secara konsisten melakukan validasi — tidak ada endpoint yang "terlupa" diproteksi.

**Penjelasan awam:** Setiap kali kamu membuka halaman baru di aplikasi, sistem harus selalu memeriksa apakah tanda pengenalmu (session ID) masih valid — tidak palsu, tidak kadaluarsa, dan benar-benar milikmu. Selain itu, cara membawa tanda pengenal ini juga penting: harus disimpan di tempat yang aman (cookie terproteksi), bukan ditempel di alamat URL yang bisa dilihat semua orang.

**Risiko jika tidak diterapkan:** Jika session ID ditempatkan di URL, bisa bocor melalui log server, browser history, atau header Referer. Jika validasi tidak konsisten, ada endpoint yang bisa diakses tanpa autentikasi yang valid (IDOR, unauthorized access).

**Bukti dukung untuk auditor:**

- Source code atau dokumentasi teknis yang menunjukkan mekanisme validasi session ID di setiap request
- Pemeriksaan menggunakan browser developer tools atau Burp Suite: di mana session ID dikirimkan? (Cookie vs URL)
- Verifikasi atribut cookie: `HttpOnly`, `Secure`, `SameSite` harus terset dengan benar
- Pengujian akses langsung ke endpoint tanpa session ID atau dengan session ID yang tidak valid — sistem harus menolak (401/403)
- Pengujian apakah session ID pernah muncul di URL (cek access log server)

**EDK:** Tinjau apakah kebijakan/standar teknis instansi mengatur cara pencantuman dan validasi session ID, termasuk larangan penggunaan session ID di URL.

**EIK:** Verifikasi secara teknis: periksa di mana session ID dikirimkan (harus di cookie, bukan URL). Periksa atribut cookie (`HttpOnly`, `Secure`, `SameSite`). Coba akses endpoint tanpa session ID yang valid — sistem harus menolak.

**EEK:** Tinjau apakah validasi dan pencantuman session ID efektif mencegah session hijacking dan unauthorized access. Indikator: session ID tidak pernah muncul di URL, cookie memiliki atribut proteksi yang lengkap, semua endpoint terproteksi secara konsisten.

---

### f. Pelindungan terhadap lokasi dan pengiriman token untuk sesi terautentikasi

**Penjelasan teknis:** Kontrol ini berfokus pada perlindungan token sesi selama penyimpanan di client dan selama transmisi:

- **Penyimpanan di client (Storage):**
    - **Cookie dengan HttpOnly + Secure:** Pilihan terbaik untuk session token. `HttpOnly` mencegah akses via JavaScript (mitigasi XSS), `Secure` memastikan hanya dikirim via HTTPS.
    - **localStorage/sessionStorage:** **TIDAK DIREKOMENDASIKAN** untuk session token sensitif — dapat diakses JavaScript, rentan terhadap XSS attack. Jika terpaksa digunakan (misal untuk SPA dengan JWT), pastikan ada mitigasi XSS yang sangat kuat.
    - **Memory only (in-memory):** Paling aman untuk SPA, tapi hilang saat refresh halaman.
- **Transmisi token:**
    - Selalu via HTTPS (sudah dicakup kontrol 1g).
    - Untuk API: gunakan `Authorization: Bearer <token>` header, bukan query parameter.
    - Header `Cache-Control: no-store` dan `Pragma: no-cache` pada response autentikasi untuk mencegah token tersimpan di browser cache atau proxy.
- **Token rotation:** Saat privilege level berubah (misal: setelah login atau setelah melakukan aksi sensitif), buat token sesi baru dan invalidasi yang lama. Ini disebut _session regeneration_.

**Penjelasan awam:** Tanda pengenal sementara (token sesi) harus dijaga di dua titik: saat disimpan di perangkat kamu (harus di tempat yang tidak bisa diintip program jahat), dan saat dikirim ke server (harus melalui jalur terenkripsi). Analoginya: ID card kamu harus disimpan di dompet (bukan ditempel di baju), dan saat menunjukkannya ke satpam, kamu lakukan di ruang tertutup (bukan di tempat umum).

**Risiko jika tidak diterapkan:** Token yang disimpan di localStorage dapat dicuri melalui serangan XSS. Token yang dikirim via HTTP atau URL dapat disadap. Token yang di-cache dapat diakses oleh pengguna lain pada komputer bersama.

**Bukti dukung untuk auditor:**

- Verifikasi di browser developer tools (Application tab): session token disimpan di Cookie (bukan localStorage/sessionStorage)
- Cek atribut cookie: `HttpOnly`, `Secure`, `SameSite` harus ada
- Periksa response headers saat login: pastikan ada `Cache-Control: no-store`
- Verifikasi bahwa API endpoint menerima token via Authorization header, bukan URL parameter
- Pentest untuk XSS: jika ada XSS vulnerability, apakah token dapat dicuri? (Cookie HttpOnly seharusnya mencegah ini)

**EDK:** Tinjau apakah kebijakan/standar teknis instansi mengatur lokasi penyimpanan token sesi di client dan mekanisme pengirimannya yang aman.

**EIK:** Verifikasi secara teknis lokasi penyimpanan token (harus di HttpOnly cookie, bukan localStorage). Periksa response header autentikasi untuk Cache-Control. Verifikasi token tidak dikirim via URL parameter.

**EEK:** Tinjau apakah perlindungan token efektif mencegah pencurian token sesi. Indikator: token tidak dapat diakses via JavaScript (HttpOnly), tidak tersimpan di cache, tidak bocor ke URL, hasil pentest XSS tidak berhasil mencuri token sesi.

---

### g. Pelindungan terhadap duplikasi dan mekanisme persetujuan pengguna

**Penjelasan teknis:** Kontrol ini mencakup dua hal utama:

**1. Perlindungan terhadap duplikasi sesi (Session Fixation & Concurrent Session):**

- **Session fixation prevention:** Saat pengguna berhasil login, token sesi yang digunakan sebelum login (pre-authentication session) **harus** dihapus dan diganti dengan token baru. Ini mencegah session fixation attack di mana penyerang sudah menyiapkan session ID tertentu dan memaksa korban menggunakannya.
- **Concurrent session control:** Sistem dapat membatasi jumlah sesi aktif per pengguna secara bersamaan (misal: maksimal 1 sesi aktif, atau notifikasi saat login dari device baru). Saat sesi baru dibuat, sesi lama bisa diinvalidasi secara otomatis.
- **Session ID regeneration:** Wajib dilakukan setiap kali terjadi perubahan privilege (login, logout, role change, password change).

**2. Mekanisme persetujuan pengguna (CSRF Protection):**

- **Cross-Site Request Forgery (CSRF):** Serangan di mana website berbahaya memaksa browser korban (yang sudah terautentikasi) untuk mengirim request ke aplikasi target tanpa sepengetahuan korban.
- **Mitigasi CSRF:**
    - **CSRF Token (Synchronizer Token Pattern):** Server menyisipkan token acak unik (CSRF token) ke dalam setiap form atau request. Token ini harus disertakan di setiap state-changing request dan divalidasi server. Token CSRF berbeda dari session token.
    - **SameSite Cookie attribute:** `SameSite=Strict` atau `SameSite=Lax` mencegah cookie dikirim dalam cross-site request, mitigasi CSRF secara signifikan.
    - **Double Submit Cookie:** Variasi lain dari CSRF protection.
    - **Verifikasi Origin/Referer header** (sebagai lapisan tambahan).
- Framework modern umumnya menyediakan CSRF protection built-in: Django (`{% csrf_token %}`), Laravel (middleware VerifyCsrfToken), Spring Security (CSRF token).

**Penjelasan awam:** Ada dua perlindungan di sini:

Pertama, mencegah "duplikasi tanda pengenal": setelah kamu login, sistem membuat tanda pengenal baru yang segar — tidak memakai tanda pengenal lama yang mungkin sudah diketahui orang lain. Juga bisa diatur agar kamu tidak bisa login dari dua tempat sekaligus.

Kedua, memastikan bahwa aksi penting (kirim form, ubah data) benar-benar kamu yang meminta — bukan website lain yang diam-diam mengendalikan browsermu tanpa kamu sadari. Ini seperti memastikan tanda tangan di dokumen penting memang benar-benar tanda tanganmu, bukan tanda tangan palsu yang dibuat orang lain.

**Risiko jika tidak diterapkan:**

- Tanpa session regeneration: session fixation attack — penyerang bisa mengambil alih sesi pengguna sebelum mereka login.
- Tanpa CSRF protection: penyerang bisa membuat pengguna secara tidak sadar melakukan aksi seperti transfer data, ubah password, atau hapus akun hanya dengan mengunjungi halaman berbahaya.

**Bukti dukung untuk auditor:**

- Source code review: verifikasi adanya session regeneration setelah login berhasil
- Verifikasi CSRF token di setiap form: inspect HTML source, cari hidden input CSRF token
- Periksa cookie attribute `SameSite` menggunakan browser developer tools
- Dokumentasi atau konfigurasi yang menunjukkan CSRF middleware aktif
- Pengujian CSRF: coba kirim request state-changing (POST/PUT/DELETE) tanpa CSRF token — sistem harus menolak (403 Forbidden)
- Pengujian concurrent session: login dari dua device/browser berbeda — apakah ada notifikasi atau pembatasan?

**EDK:** Tinjau apakah kebijakan/standar teknis instansi mengatur perlindungan terhadap session fixation, concurrent session, dan serangan CSRF. Pastikan ada ketentuan yang mewajibkan session regeneration saat login dan implementasi CSRF protection.

**EIK:** Verifikasi secara teknis: (1) cek apakah session ID berubah sebelum dan sesudah login berhasil (session regeneration); (2) verifikasi CSRF token ada di setiap form yang melakukan aksi penting; (3) coba submit form tanpa CSRF token — sistem harus menolak; (4) periksa atribut `SameSite` pada cookie.

**EEK:** Tinjau apakah perlindungan duplikasi dan mekanisme persetujuan efektif mencegah session fixation dan CSRF attack. Indikator: session ID selalu baru setelah login, semua form dilindungi CSRF token, request tanpa CSRF token ditolak, tidak ada temuan CSRF vulnerability pada pentest.

## 3. Persyaratan Kontrol Akses

> **Konteks regulasi:** Pasal 27 ayat (3) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan bahwa setelah pengguna terautentikasi, akses yang diberikan hanya sebatas apa yang memang menjadi haknya — tidak lebih. Autentikasi membuktikan _siapa_ kamu, kontrol akses membuktikan _apa yang boleh kamu lakukan_.

---

### a. Menetapkan otorisasi pengguna untuk membatasi kontrol akses

**Penjelasan teknis:** Implementasi _authorization_ yang terstruktur menggunakan model seperti:

- **RBAC (Role-Based Access Control):** Pengguna diberi role (Admin, Operator, Viewer), dan setiap role punya kumpulan permission. Ini model paling umum di aplikasi pemerintah.
- **ABAC (Attribute-Based Access Control):** Keputusan akses berdasarkan atribut pengguna, resource, dan konteks (misal: jam kerja, lokasi).
- **ACL (Access Control List):** Daftar eksplisit siapa boleh melakukan apa pada resource tertentu. Prinsip utama yang wajib diterapkan: **Principle of Least Privilege** — setiap pengguna hanya mendapat akses minimum yang dibutuhkan untuk menjalankan tugasnya. Otorisasi harus divalidasi di server pada setiap request, bukan hanya di UI (menyembunyikan tombol di frontend bukan otorisasi yang sah). Setiap endpoint API harus dilindungi dengan pengecekan otorisasi eksplisit.

**Penjelasan awam:** Bayangkan gedung kantor dengan berbagai ruangan. Setiap pegawai punya kartu akses yang hanya bisa membuka ruangan sesuai jabatannya — staf administrasi bisa masuk ruang arsip, tapi tidak bisa masuk ruang server. Direktur bisa masuk semua ruangan. Kontrol akses di aplikasi bekerja sama: setiap pengguna hanya bisa mengakses fitur dan data sesuai perannya, tidak lebih.

**Risiko jika tidak diterapkan:** Pengguna biasa bisa mengakses fitur admin, melihat data orang lain, atau melakukan aksi yang seharusnya dibatasi. Ini adalah celah yang sangat umum ditemukan di aplikasi pemerintah (IDOR — Insecure Direct Object Reference, Broken Access Control).

**Bukti dukung untuk auditor:**

- Kebijakan/SOP yang mendefinisikan matriks hak akses (role dan permission) untuk setiap aplikasi
- Dokumentasi teknis struktur role dan permission yang diimplementasikan
- Demonstrasi: login sebagai user biasa, coba akses URL/endpoint yang seharusnya hanya bisa diakses admin — sistem harus menolak (403 Forbidden)
- Source code review: verifikasi setiap endpoint memiliki pengecekan otorisasi

**EDK:** Tinjau apakah instansi memiliki kebijakan yang mendefinisikan matriks otorisasi (siapa boleh akses apa) untuk setiap aplikasi SPBE, termasuk prinsip least privilege.

**EIK:** Uji secara teknis: coba akses resource/endpoint yang tidak sesuai role pengguna yang sedang login — sistem harus menolak. Verifikasi pengecekan otorisasi ada di sisi server, bukan hanya disembunyikan di UI.

**EEK:** Tinjau apakah kontrol otorisasi efektif mencegah akses tidak sah. Indikator: tidak ada temuan Broken Access Control atau IDOR pada pentest, tidak ada insiden akses data oleh pihak yang tidak berhak.

---

### b. Mengatur peringatan terhadap bahaya serangan otomatis apabila terjadi akses yang bersamaan atau akses yang terus-menerus pada fungsi

**Penjelasan teknis:** Ini adalah implementasi **rate limiting** dan **anomaly detection** pada level kontrol akses:

- **Rate limiting:** Membatasi jumlah request per user/IP dalam periode waktu tertentu (misal: maksimal 100 request per menit per user). Implementasi: `express-rate-limit` (Node.js), Django Ratelimit, atau di level API Gateway/WAF (Nginx `limit_req`, Cloudflare Rate Limiting).
- **Concurrent access detection:** Mendeteksi jika satu akun melakukan banyak request bersamaan secara tidak wajar (misal: scraping, automated attack).
- **Alerting/notifikasi:** Saat threshold terlampaui, sistem harus: (1) menolak request selanjutnya (429 Too Many Requests), (2) mencatat ke log, (3) mengirim alert ke tim keamanan/admin.
- **Progressive response:** Bisa ditambahkan CAPTCHA setelah beberapa request berlebihan sebelum hard block.
- Implementasi di level infrastruktur: WAF (Web Application Firewall), API Gateway dengan rate limiting policy.

**Penjelasan awam:** Bayangkan loket pelayanan yang normalnya melayani 1 orang per menit. Jika tiba-tiba ada satu orang yang mencoba mengakses loket 1000 kali dalam satu menit, itu tidak normal — pasti ada sesuatu yang salah (bisa serangan otomatis menggunakan bot). Sistem harus mendeteksi perilaku tidak wajar ini, otomatis memblokir, dan memberitahu petugas keamanan.

**Risiko jika tidak diterapkan:** Penyerang bisa melakukan serangan otomatis (credential stuffing, data scraping, brute force pada fungsi tertentu) tanpa hambatan. Sistem bisa kewalahan (DoS) atau data bisa dicuri secara massal.

**Bukti dukung untuk auditor:**

- Konfigurasi rate limiting yang aktif (di aplikasi, API Gateway, atau WAF)
- Log yang menunjukkan deteksi dan penolakan request berlebihan
- Konfigurasi alerting: bukti ada notifikasi ke tim saat terjadi anomali
- SOP respons insiden untuk serangan otomatis

**EDK:** Tinjau apakah kebijakan/SOP instansi mengatur mekanisme deteksi dan respons terhadap akses otomatis yang berlebihan atau tidak wajar pada fungsi aplikasi.

**EIK:** Uji rate limiting: kirim request melebihi batas yang ditentukan — sistem harus menolak dengan 429 Too Many Requests. Verifikasi ada logging dan alerting saat threshold terlampaui.

**EEK:** Tinjau apakah mekanisme rate limiting dan alerting efektif mencegah serangan otomatis. Indikator: serangan brute force/scraping terdeteksi dan diblokir otomatis, tim keamanan menerima alert tepat waktu.

---

### c. Mengatur antarmuka pada sisi administrator

**Penjelasan teknis:** Antarmuka administrator (admin panel/dashboard) harus mendapat perlakuan keamanan khusus:

- **Isolasi akses:** Admin panel sebaiknya tidak dapat diakses dari internet publik — hanya dari jaringan internal atau VPN. URL admin tidak boleh mudah ditebak (`/admin` adalah URL yang terlalu umum dan selalu diserang).
- **Autentikasi lebih kuat:** Admin panel harus menggunakan MFA (Multi-Factor Authentication) tambahan di atas password biasa.
- **IP whitelisting:** Akses hanya dari IP/range yang sudah diizinkan.
- **Audit logging lengkap:** Setiap aksi admin harus dicatat dengan detail (siapa, apa, kapan, dari mana).
- **Separation of duties:** Tidak ada satu akun yang bisa melakukan semua aksi admin tanpa oversight — prinsip four-eyes.
- **Timeout lebih ketat:** Sesi admin harus punya timeout lebih pendek dibanding user biasa.

**Penjelasan awam:** Panel administrator adalah "ruang kontrol" dari sebuah aplikasi — dari sini bisa diubah data semua pengguna, dihapus akun, atau diubah konfigurasi sistem. Karena sangat powerful, ruang kontrol ini harus dijaga lebih ketat: tidak semua orang bisa tahu di mana pintunya, hanya orang tertentu yang boleh masuk, dan setiap yang dilakukan di dalamnya dicatat lengkap.

**Risiko jika tidak diterapkan:** Admin panel yang dapat diakses publik adalah target serangan nomor satu. Jika berhasil dibobol, penyerang mendapat kontrol penuh atas seluruh sistem dan data.

**Bukti dukung untuk auditor:**

- Kebijakan yang mengatur siapa yang boleh mengakses admin panel dan dari mana
- Konfigurasi teknis: akses admin terbatas (VPN/IP whitelist, port tidak standar)
- Bukti MFA aktif untuk akun administrator
- Log audit admin panel yang lengkap
- Verifikasi: coba akses admin URL dari IP yang tidak diizinkan — harus ditolak

**EDK:** Tinjau apakah kebijakan instansi mengatur secara eksplisit pembatasan akses ke antarmuka administrator, termasuk persyaratan autentikasi yang lebih ketat dan audit logging.

**EIK:** Verifikasi teknis: apakah admin panel hanya dapat diakses dari jaringan/IP yang diizinkan? Apakah MFA aktif untuk admin? Apakah setiap aksi admin tercatat di log audit?

**EEK:** Tinjau apakah pengamanan admin panel efektif mencegah akses tidak sah dan penyalahgunaan. Indikator: admin panel tidak dapat diakses dari internet publik tanpa VPN, semua aksi admin ter-log, tidak ada akun admin tanpa MFA.

---

### d. Mengatur verifikasi kebenaran token ketika mengakses data dan informasi yang dikecualikan

**Penjelasan teknis:** "Informasi yang dikecualikan" merujuk pada data sensitif atau terbatas yang memerlukan level otorisasi lebih tinggi (misal: data pribadi, data keuangan, data rahasia instansi). Kontrol ini mensyaratkan:

- **Token verification pada setiap akses:** Setiap kali resource sensitif diakses, token/credential pengguna harus diverifikasi ulang — bukan hanya saat login awal.
- **Fine-grained authorization:** Pengecekan tidak hanya "apakah user sudah login" tapi "apakah user ini punya hak akses ke resource _spesifik_ ini".
- **Re-authentication untuk aksi kritis:** Untuk aksi sangat sensitif (hapus data, export data massal, ubah konfigurasi kritis), minta pengguna melakukan konfirmasi ulang password atau OTP.
- **Object-level authorization:** Validasi bahwa user tidak hanya punya permission untuk tipe resource, tapi juga untuk instance spesifik resource tersebut (mencegah IDOR).

**Penjelasan awam:** Beberapa data sangat sensitif — seperti data kependudukan, data keuangan, atau dokumen rahasia. Untuk mengaksesnya, sistem tidak cukup hanya tahu bahwa "kamu sudah login" — sistem harus memverifikasi ulang bahwa kamu benar-benar punya izin khusus untuk data tersebut. Analoginya: masuk gedung dengan kartu biasa itu satu hal, tapi untuk masuk ruang brankas, kamu perlu verifikasi tambahan lagi.

**Risiko jika tidak diterapkan:** Pengguna yang sudah login tapi tidak punya hak akses ke data tertentu bisa tetap mengakses data tersebut dengan memanipulasi ID di URL (IDOR attack). Data sensitif bocor ke pihak yang tidak berhak.

**Bukti dukung untuk auditor:**

- Dokumentasi klasifikasi data yang dikecualikan/sensitif dalam sistem
- Source code review: verifikasi object-level authorization pada endpoint yang mengelola data sensitif
- Pengujian IDOR: ubah ID di URL/parameter — apakah bisa mengakses data milik user lain?
- Kebijakan yang mewajibkan verifikasi token pada akses data sensitif

**EDK:** Tinjau apakah kebijakan instansi mendefinisikan klasifikasi data sensitif/dikecualikan dan mewajibkan verifikasi otorisasi khusus untuk mengaksesnya.

**EIK:** Uji akses ke data sensitif: login sebagai user A, coba akses data milik user B dengan memanipulasi ID di request — sistem harus menolak. Verifikasi object-level authorization ada di server.

**EEK:** Tinjau apakah verifikasi token efektif mencegah akses tidak sah ke data sensitif. Indikator: tidak ada temuan IDOR pada pentest, tidak ada insiden kebocoran data sensitif akibat kelemahan otorisasi.

---

## 4. Validasi Input

> **Konteks regulasi:** Pasal 27 ayat (4) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan bahwa semua data yang masuk ke sistem melalui input pengguna divalidasi dan dibersihkan sebelum diproses, sehingga aplikasi tidak dapat dimanipulasi melalui input berbahaya.

---

### a. Menerapkan fungsi validasi input pada sisi server

**Penjelasan teknis:** Sama dengan prinsip pada autentikasi: validasi input **wajib** dilakukan di sisi server. Client-side validation (JavaScript/HTML5) boleh ada untuk UX, tapi tidak boleh diandalkan untuk keamanan. Penyerang dapat dengan mudah memodifikasi request menggunakan Burp Suite atau curl untuk mengirim input apapun langsung ke server tanpa melalui form browser. Setiap parameter input (query string, form field, JSON body, header, cookie) harus divalidasi di server: tipe data, format, panjang, dan nilai yang diizinkan.

**Penjelasan awam:** Formulir di website biasanya punya aturan: kolom nama tidak boleh berisi angka, kolom umur harus angka positif. Tapi aturan ini di browser bisa diakali — penyerang bisa mengirim data "kotor" langsung ke server melewati form. Makanya, server sendiri harus selalu memeriksa ulang setiap data yang masuk, tidak peduli dari mana asalnya.

**Risiko jika tidak diterapkan:** SQL injection, XSS, command injection, buffer overflow — hampir semua serangan injeksi bermula dari input yang tidak divalidasi di server.

**Bukti dukung:** Source code review menunjukkan validasi input di backend; pengujian: kirim input invalid langsung via Burp Suite — server harus menolak.

**EDK:** Tinjau apakah standar pengembangan aplikasi instansi mewajibkan validasi input di sisi server untuk semua parameter.

**EIK:** Kirim request dengan input tidak valid langsung ke endpoint API (bypass form browser) — server harus menolak dengan pesan error yang tepat.

**EEK:** Indikator: tidak ada temuan injection vulnerability pada pentest akibat missing server-side validation.

---

### b. Menerapkan mekanisme penolakan input jika terjadi kesalahan validasi

**Penjelasan teknis:** Saat validasi gagal, sistem harus menerapkan **fail-safe / reject-by-default**: input yang tidak valid **langsung ditolak**, bukan dicoba diperbaiki atau dilanjutkan. Respons penolakan harus: (1) mengembalikan status HTTP yang tepat (400 Bad Request untuk input tidak valid), (2) memberikan pesan error yang informatif kepada user tapi **tidak mengungkapkan detail teknis internal** (stack trace, nama tabel database, dsb.), (3) mencatat kejadian di log server untuk audit. Tidak boleh ada "silent fail" — input invalid yang lolos tanpa diproses maupun ditolak secara eksplisit.

**Penjelasan awam:** Jika seseorang mengisi formulir dengan data yang salah atau mencurigakan, sistem harus langsung menolak dan memberitahu kesalahannya — bukan mencoba menebak maksudnya atau membiarkan data tersebut masuk. Ini seperti mesin tiket yang langsung menolak uang palsu, bukan mencoba memproses atau mengabaikannya.

**Risiko jika tidak diterapkan:** Input invalid yang tidak ditolak secara eksplisit bisa diproses sebagian, menyebabkan perilaku tidak terduga atau membuka celah keamanan.

**Bukti dukung:** Pengujian input invalid: apakah sistem mengembalikan 400 dengan pesan jelas? Apakah tidak ada stack trace yang terekspos? Log server menunjukkan pencatatan input invalid.

**EDK:** Tinjau apakah SOP/standar pengembangan mengatur mekanisme penolakan input yang jelas dan aman (tidak mengekspos informasi teknis internal).

**EIK:** Uji berbagai skenario input invalid — verifikasi sistem menolak dengan status code dan pesan yang tepat, tanpa mengekspos informasi sensitif.

**EEK:** Indikator: tidak ada informasi teknis internal yang terekspos saat validasi gagal, semua input invalid ter-log dengan benar.

---

### c. Memastikan runtime environment aplikasi tidak rentan terhadap serangan validasi input

**Penjelasan teknis:** Runtime environment (bahasa pemrograman, framework, library, OS) yang digunakan harus dalam versi yang aman dan up-to-date. Banyak kerentanan validasi input bukan berasal dari kode aplikasi, tapi dari library pihak ketiga yang digunakan. Langkah-langkah:

- **Dependency scanning:** Gunakan tools seperti `npm audit`, `pip-audit`, OWASP Dependency-Check, atau Snyk untuk mendeteksi library dengan known vulnerability.
- **Update berkala:** Terapkan patch management — library dan framework harus selalu di-update ke versi terbaru yang aman.
- **Versi yang supported:** Pastikan menggunakan versi runtime (Python, Node.js, PHP, Java) yang masih dalam status "active support".

**Penjelasan awam:** Aplikasi tidak berdiri sendiri — ia bergantung pada puluhan atau ratusan komponen pendukung (library/framework) yang dibuat pihak lain. Jika salah satu komponen tersebut punya kelemahan yang diketahui publik tapi belum di-update, penyerang bisa memanfaatkannya. Ini seperti rumah dengan tembok kuat tapi pintu belakangnya ternyata dari bahan yang mudah dibobol karena belum diganti.

**Risiko jika tidak diterapkan:** Exploitasi known vulnerability pada library yang outdated (misal: Log4Shell, Heartbleed, berbagai CVE Laravel/Django/Spring).

**Bukti dukung:** Hasil dependency vulnerability scan (npm audit, OWASP Dependency-Check); daftar komponen dan versi yang digunakan; bukti proses patch management (change log update); SOP patch management.

**EDK:** Tinjau apakah kebijakan instansi mengatur patch management dan update berkala untuk runtime environment dan dependencies aplikasi.

**EIK:** Lakukan dependency scan pada aplikasi — apakah ada library dengan known critical/high vulnerability? Verifikasi proses update yang berjalan.

**EEK:** Indikator: tidak ada library dengan known critical vulnerability yang belum di-patch, proses dependency scanning berjalan secara rutin.

---

### d. Melakukan validasi positif pada seluruh input

**Penjelasan teknis:** **Validasi positif (allowlist/whitelist)** berarti mendefinisikan dengan eksplisit apa yang **diizinkan**, bukan apa yang dilarang. Ini kebalikan dari blacklist (melarang karakter berbahaya tertentu). Contoh:

- Kolom nama: hanya boleh huruf, spasi, tanda hubung — karakter lain ditolak.
- Kolom NIK: harus tepat 16 digit angka.
- Kolom tanggal: harus format YYYY-MM-DD.
- Kolom email: harus sesuai format RFC 5322. Validasi positif jauh lebih aman dari blacklist karena penyerang selalu bisa menemukan cara baru untuk bypass blacklist (encoding tricks, Unicode bypass, dsb.). Implementasi: gunakan library validasi yang sudah mature (Joi, Zod, Marshmallow, Hibernate Validator) dengan schema yang ketat.

**Penjelasan awam:** Ada dua cara menjaga keamanan pintu masuk: (1) membuat daftar hal-hal berbahaya yang dilarang (blacklist), atau (2) membuat daftar hal-hal yang memang boleh masuk (allowlist/whitelist). Cara kedua jauh lebih aman — jika tidak ada di daftar izin, otomatis ditolak. Penyerang kreatif selalu bisa menemukan cara baru untuk bypass larangan, tapi sangat sulit bypass izin yang sudah sangat spesifik.

**Risiko jika tidak diterapkan:** Blacklist sering tidak lengkap — penyerang menemukan cara encoding atau karakter unicode yang tidak ada di blacklist untuk tetap menyisipkan payload berbahaya.

**Bukti dukung:** Source code review: apakah validasi menggunakan allowlist (regex spesifik, schema yang ketat)? Pengujian: coba input dengan karakter di luar allowlist — sistem harus menolak.

**EDK:** Tinjau apakah standar pengembangan aplikasi instansi mewajibkan penggunaan validasi positif (allowlist) untuk semua input pengguna.

**EIK:** Review schema validasi input: apakah menggunakan pendekatan allowlist atau blacklist? Uji dengan input yang mengandung karakter di luar spesifikasi — harus ditolak.

**EEK:** Indikator: tidak ada temuan injection attack yang berhasil karena validasi input yang lemah pada pentest.

---

### e. Melakukan filter terhadap data yang tidak dipercaya

**Penjelasan teknis:** Data yang "tidak dipercaya" adalah semua data yang berasal dari luar batas kendali aplikasi: input pengguna, data dari API pihak ketiga, data dari database eksternal, file yang diunggah, dsb. Filter yang harus diterapkan:

- **Output encoding:** Sebelum menampilkan data ke HTML, lakukan HTML encoding (`&`, `<`, `>`, `"`, `'` di-encode). Ini mencegah XSS.
- **Parameterized queries:** Saat data digunakan dalam query SQL, selalu gunakan prepared statement/parameterized query — jangan pernah string concatenation langsung. Ini mencegah SQL injection.
- **Command sanitization:** Jika data digunakan dalam system command, sanitasi ketat atau gunakan library yang aman.
- **Context-aware encoding:** Encoding berbeda tergantung konteks output (HTML, JavaScript, CSS, URL, SQL) — jangan gunakan satu encoding untuk semua konteks.

**Penjelasan awam:** Data dari pengguna dianggap "kotor" sampai terbukti bersih. Sebelum data tersebut dipakai — baik untuk ditampilkan ke layar maupun disimpan ke database — harus "dicuci" terlebih dahulu. Ibarat bahan makanan dari pasar: sebelum dimasak, harus dicuci dulu untuk menghilangkan kotoran atau pestisida yang tidak kasat mata.

**Risiko jika tidak diterapkan:** XSS (Cross-Site Scripting), SQL Injection, Command Injection — tiga dari sepuluh kerentanan OWASP paling kritis.

**Bukti dukung:** Source code review: penggunaan parameterized query, output encoding library; hasil DAST (Dynamic Application Security Testing); pentest: apakah XSS atau SQL injection berhasil?

**EDK:** Tinjau apakah standar pengembangan instansi mewajibkan filtering dan encoding data tidak dipercaya sebelum diproses atau ditampilkan.

**EIK:** Uji XSS: masukkan `<script>alert(1)</script>` ke input — apakah ter-render sebagai kode atau ditampilkan sebagai teks biasa? Uji SQL injection: masukkan `' OR '1'='1` ke input — apakah query berhasil dimanipulasi?

**EEK:** Indikator: tidak ada temuan XSS atau SQL injection pada pentest, output encoding konsisten diterapkan di seluruh aplikasi.

---

### f. Menggunakan fitur kode dinamis

**Penjelasan teknis:** Kontrol ini melarang atau membatasi penggunaan **dynamic code execution** — fitur bahasa pemrograman yang memungkinkan kode dieksekusi secara dinamis dari string input:

- **PHP:** `eval()`, `exec()`, `system()`, `passthru()`
- **Python:** `eval()`, `exec()`, `compile()`
- **JavaScript:** `eval()`, `new Function()`, `setTimeout(string)`
- **Java:** Reflection yang tidak terkontrol Jika input pengguna pernah masuk ke fungsi-fungsi ini, penyerang bisa mengeksekusi kode arbitrary di server (Remote Code Execution/RCE) — ini adalah kerentanan paling kritis yang bisa terjadi. Jika penggunaan dynamic code tidak bisa dihindari, harus ada sandboxing yang sangat ketat dan input yang digunakan harus bukan dari user-controlled data.

**Penjelasan awam:** Beberapa fungsi pemrograman bisa "menjalankan perintah apapun yang diberikan kepadanya". Jika penyerang bisa memasukkan perintahnya sendiri ke fungsi tersebut, mereka bisa memerintahkan server untuk melakukan apapun — menghapus data, mencuri informasi, atau bahkan mengambil alih server. Ini seperti mesin yang bisa menjalankan instruksi dari siapa saja yang memberikannya kertas bertuliskan perintah.

**Risiko jika tidak diterapkan:** Remote Code Execution (RCE) — penyerang bisa mengeksekusi kode arbitrary di server, mengambil alih sistem sepenuhnya.

**Bukti dukung:** Source code review: apakah ada penggunaan `eval()` atau fungsi serupa? Jika ada, apakah inputnya bukan dari user? Static code analysis report (SonarQube, Semgrep).

**EDK:** Tinjau apakah kebijakan pengembangan instansi melarang atau membatasi penggunaan dynamic code execution, terutama dengan input dari pengguna.

**EIK:** Lakukan static code analysis untuk mendeteksi penggunaan fungsi dynamic code execution. Verifikasi tidak ada input pengguna yang mengalir ke fungsi tersebut.

**EEK:** Indikator: tidak ditemukan penggunaan dynamic code execution yang berbahaya dalam code review dan pentest.

---

### g. Melakukan pelindungan terhadap akses yang mengandung konten skrip

**Penjelasan teknis:** Kontrol ini berfokus pada pencegahan **Cross-Site Scripting (XSS)** — serangan di mana penyerang menyisipkan skrip berbahaya ke dalam konten yang ditampilkan oleh aplikasi:

- **Content Security Policy (CSP):** HTTP response header yang memberitahu browser skrip dari mana saja yang boleh dieksekusi. Konfigurasi ketat: `Content-Security-Policy: default-src 'self'; script-src 'self'` — melarang inline script dan skrip dari domain lain.
- **X-XSS-Protection header:** `X-XSS-Protection: 1; mode=block` (untuk browser lama).
- **X-Content-Type-Options:** `X-Content-Type-Options: nosniff` — mencegah browser "menebak" tipe konten yang berbeda dari yang dideklarasikan (mencegah MIME sniffing attack).
- **Sanitasi HTML:** Jika aplikasi perlu menerima dan menampilkan HTML dari user (misal: rich text editor), gunakan library sanitasi HTML yang sudah teruji (DOMPurify, bleach).

**Penjelasan awam:** XSS adalah serangan di mana penyerang "menyelipkan" kode berbahaya ke halaman website yang kemudian dieksekusi di browser korban. Hasilnya bisa bermacam-macam: mencuri cookie/session, menampilkan phishing form, atau mengarahkan user ke website berbahaya. Perlindungan XSS adalah seperti petugas yang memeriksa setiap koran yang masuk ke gedung untuk memastikan tidak ada selebaran berbahaya yang disisipkan di dalamnya.

**Risiko jika tidak diterapkan:** Penyerang bisa mencuri session cookie pengguna lain, mengambil alih akun, atau menyebarkan malware kepada pengunjung website.

**Bukti dukung:** Periksa response header menggunakan browser developer tools atau curl: apakah ada CSP, X-XSS-Protection, X-Content-Type-Options? Pengujian XSS pada semua input field. Laporan security header dari tools seperti securityheaders.com.

**EDK:** Tinjau apakah kebijakan/standar teknis instansi mewajibkan implementasi proteksi XSS (CSP header, output encoding) pada semua aplikasi web.

**EIK:** Periksa security headers pada response aplikasi. Uji XSS pada setiap input field. Verifikasi CSP aktif dan terkonfigurasi dengan benar.

**EEK:** Indikator: CSP terkonfigurasi dengan ketat, tidak ada temuan XSS pada pentest, security header assessment menunjukkan grade baik.

---

### h. Melakukan pelindungan dari serangan injeksi basis data

**Penjelasan teknis:** **SQL Injection** adalah serangan paling berbahaya dan paling umum pada aplikasi database. Pencegahan utama:

- **Parameterized queries / Prepared statements:** Gunakan SELALU tanpa pengecualian. Input pengguna diperlakukan sebagai data, bukan bagian dari query SQL.
    
    ```python
    # SALAH (rentan SQL injection):query = "SELECT * FROM users WHERE id = " + user_input# BENAR (parameterized):cursor.execute("SELECT * FROM users WHERE id = %s", (user_input,))
    ```
    
- **ORM (Object-Relational Mapper):** Gunakan ORM (Django ORM, SQLAlchemy, Hibernate, Eloquent) yang secara default menggunakan parameterized query.
- **Stored procedures:** Jika digunakan, tetap harus parameterized.
- **Principle of least privilege pada database user:** Akun database yang digunakan aplikasi hanya punya permission SELECT/INSERT/UPDATE/DELETE yang diperlukan — tidak boleh DROP TABLE atau akses ke sistem tabel.
- **Error handling:** Pesan error database tidak boleh ditampilkan ke pengguna (mengungkapkan struktur database).

**Penjelasan awam:** SQL injection adalah ketika penyerang memasukkan "perintah database" ke dalam input biasa. Misalnya, di field nama pengguna dimasukkan kode yang bisa membuat database menampilkan seluruh isinya, menghapus tabel, atau bahkan memberikan akses penuh. Pencegahannya adalah memastikan input pengguna selalu diperlakukan sebagai "data biasa", bukan sebagai "perintah" oleh database.

**Risiko jika tidak diterapkan:** Pencurian seluruh data database, manipulasi data, penghapusan data, dalam kasus tertentu bisa dijadikan entry point untuk RCE.

**Bukti dukung:** Source code review: semua query menggunakan parameterized query atau ORM; pengujian SQL injection (manual atau SQLMAP); tidak ada pesan error database yang terekspos ke user.

**EDK:** Tinjau apakah standar pengembangan instansi secara eksplisit melarang penggunaan string concatenation dalam query SQL dan mewajibkan parameterized query.

**EIK:** Lakukan SQL injection testing pada semua input field yang berinteraksi dengan database. Review source code untuk memastikan tidak ada dynamic query construction dari input user.

**EEK:** Indikator: tidak ada temuan SQL injection pada pentest, source code review tidak menemukan raw string concatenation di query SQL.

---

## 5. Kriptografi pada Verifikasi Statis

> **Konteks regulasi:** Pasal 27 ayat (5) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan penggunaan kriptografi yang kuat dan benar untuk melindungi kerahasiaan, integritas, dan keaslian data — baik saat disimpan maupun saat ditransmisikan.

---

### a. Menggunakan algoritma kriptografi, modul kriptografi, protokol kriptografi, dan kunci kriptografi sesuai dengan ketentuan peraturan perundang-undangan

**Penjelasan teknis:** Indonesia mengacu pada standar kriptografi nasional melalui regulasi BSSN dan NIST. Algoritma yang direkomendasikan:

- **Enkripsi simetris:** AES-256 (mode GCM atau CBC dengan padding PKCS7). Jangan gunakan DES, 3DES, atau RC4 — sudah deprecated.
- **Enkripsi asimetris:** RSA-2048 minimum (direkomendasikan RSA-4096 atau ECC/ECDSA P-256/P-384). Jangan gunakan RSA < 1024 bit.
- **Hashing:** SHA-256 minimum (SHA-3 direkomendasikan untuk aplikasi baru). Jangan gunakan MD5 atau SHA-1 untuk tujuan keamanan.
- **Key derivation:** PBKDF2, bcrypt, Argon2id untuk derivasi kunci dari password.
- **Protokol TLS:** TLS 1.2 minimum, TLS 1.3 direkomendasikan. Jangan gunakan SSL, TLS 1.0, TLS 1.1.
- **Modul kriptografi:** Gunakan library yang sudah diaudit dan ter-maintain (OpenSSL, libsodium, Bouncy Castle, Python `cryptography` library). Jangan implementasi algoritma kriptografi sendiri.

**Penjelasan awam:** Kriptografi seperti gembok — ada gembok yang kuat dan ada yang mudah dibobol. Regulasi menetapkan standar minimum: hanya gembok yang sudah terbukti kuat yang boleh digunakan. Gembok lama yang sudah terbukti bisa dibobol (algoritma lama) tidak boleh dipakai lagi, meskipun masih "kelihatan aman" di permukaan.

**Risiko jika tidak diterapkan:** Data yang dienkripsi dengan algoritma lemah bisa didekripsi oleh penyerang. Kunci yang terlalu pendek rentan terhadap serangan brute force dengan hardware modern.

**Bukti dukung:** Dokumentasi teknis yang menyebutkan algoritma kriptografi yang digunakan; konfigurasi TLS (SSL Labs scan); source code review modul kriptografi; kebijakan yang mengacu pada standar yang berlaku.

**EDK:** Tinjau apakah kebijakan keamanan informasi instansi menetapkan standar algoritma kriptografi yang boleh dan tidak boleh digunakan, mengacu pada regulasi yang berlaku.

**EIK:** Verifikasi algoritma yang aktif digunakan: scan TLS konfigurasi, review source code modul enkripsi, pastikan tidak ada penggunaan algoritma deprecated.

**EEK:** Indikator: SSL Labs grade A+, tidak ada algoritma deprecated yang digunakan, semua kunci memenuhi panjang minimum yang disyaratkan.

---

### b. Melakukan autentikasi data yang dienkripsi

**Penjelasan teknis:** Enkripsi saja tidak cukup — data yang dienkripsi harus juga diautentikasi untuk memastikan integritas dan keasliannya. Ini disebut **Authenticated Encryption**:

- **AEAD (Authenticated Encryption with Associated Data):** Gunakan mode enkripsi yang sekaligus mengautentikasi data, seperti AES-GCM atau ChaCha20-Poly1305. Mode ini menghasilkan _authentication tag_ yang membuktikan data tidak dimodifikasi.
- **MAC (Message Authentication Code):** Jika tidak menggunakan AEAD, tambahkan HMAC (misal: HMAC-SHA256) setelah enkripsi (Encrypt-then-MAC pattern).
- **Digital Signature:** Untuk dokumen atau data yang perlu diverifikasi oleh pihak lain, gunakan tanda tangan digital (RSA/ECDSA).
- **Jangan gunakan ECB mode:** Mode ECB tidak mengautentikasi data dan memiliki kelemahan fatal (pola data terlihat dalam ciphertext).

**Penjelasan awam:** Mengenkripsi data tanpa autentikasi seperti memasukkan pesan dalam amplop terkunci — orang lain tidak bisa membaca isinya, tapi bisa menukar amplop atau memodifikasi amplop tanpa diketahui. Autentikasi data terenkripsi seperti menambahkan segel resmi pada amplop — jika segel rusak, penerima tahu bahwa amplop sudah pernah dibuka atau dimodifikasi.

**Risiko jika tidak diterapkan:** Bit-flipping attack — penyerang bisa memodifikasi ciphertext secara terstruktur tanpa perlu mendekripsinya, menyebabkan perubahan data yang tidak terdeteksi setelah dekripsi.

**Bukti dukung:** Source code review: apakah mode enkripsi yang digunakan adalah AEAD (AES-GCM)? Verifikasi authentication tag selalu diverifikasi saat dekripsi.

**EDK:** Tinjau apakah standar kriptografi instansi mewajibkan penggunaan authenticated encryption (bukan enkripsi saja) untuk data sensitif.

**EIK:** Review implementasi enkripsi: apakah menggunakan mode AEAD atau Encrypt-then-MAC? Apakah authentication tag diverifikasi saat dekripsi?

**EEK:** Indikator: tidak ada penggunaan unauthenticated encryption (misal: AES-ECB atau AES-CBC tanpa MAC) untuk data sensitif.

---

### c. Menerapkan manajemen kunci kriptografi

**Penjelasan teknis:** Kunci kriptografi adalah aset paling sensitif dalam sistem — jika kunci bocor, semua data yang dienkripsi dengan kunci tersebut bisa didekripsi. Manajemen kunci mencakup:

- **Pembuatan kunci:** Menggunakan CSPRNG, panjang sesuai standar.
- **Penyimpanan kunci:** Tidak boleh di-hardcode dalam source code. Gunakan: environment variables, secrets manager (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault), HSM (Hardware Security Module) untuk kunci yang sangat kritis.
- **Rotasi kunci:** Kunci harus diganti secara berkala. Saat rotasi, data yang dienkripsi dengan kunci lama harus di-re-enkripsi dengan kunci baru.
- **Akses terbatas:** Hanya proses/service yang benar-benar membutuhkan yang boleh mengakses kunci.
- **Backup dan pemulihan:** Prosedur aman untuk backup kunci dan pemulihan jika terjadi insiden.
- **Audit trail:** Setiap akses dan penggunaan kunci dicatat.

**Penjelasan awam:** Kunci kriptografi seperti master key gembok brankas — sangat berharga dan harus dijaga ekstra. Tidak boleh disimpan sembarangan (tidak boleh ditulis di source code yang bisa dilihat siapa saja), harus diganti secara berkala, dan hanya orang yang benar-benar berwenang yang boleh memegangnya. Ada prosedur khusus untuk membuat, menyimpan, menggunakan, dan menghancurkan kunci ketika sudah tidak diperlukan.

**Risiko jika tidak diterapkan:** Kunci yang hardcoded di source code bisa bocor jika repository kode diakses orang lain. Kunci yang tidak pernah dirotasi — jika bocor — memungkinkan penyerang mendekripsi semua data historis.

**Bukti dukung:** Tidak ada kunci kriptografi di source code (cek dengan `git grep` atau secret scanning tools); konfigurasi secrets manager; SOP manajemen siklus hidup kunci; bukti rotasi kunci berkala.

**EDK:** Tinjau apakah instansi memiliki kebijakan manajemen kunci kriptografi yang mencakup pembuatan, penyimpanan, distribusi, rotasi, dan pemusnahan kunci.

**EIK:** Scan source code untuk hardcoded secrets (API key, kunci enkripsi). Verifikasi penggunaan secrets manager. Periksa prosedur rotasi kunci.

**EEK:** Indikator: tidak ditemukan hardcoded key di source code, kunci dirotasi sesuai jadwal, akses ke kunci ter-audit.

---

### d. Membuat angka acak yang menggunakan generator angka acak kriptografi

**Penjelasan teknis:** Semua nilai yang berkaitan dengan keamanan (token, salt, kunci, nonce, CSRF token, OTP) harus dibuat menggunakan **CSPRNG (Cryptographically Secure Pseudo-Random Number Generator)**:

- **Python:** `secrets` module (`secrets.token_hex()`, `secrets.token_bytes()`) — bukan `random` module.
- **Node.js:** `crypto.randomBytes()` — bukan `Math.random()`.
- **PHP:** `random_bytes()`, `random_int()` — bukan `rand()` atau `mt_rand()`.
- **Java:** `java.security.SecureRandom` — bukan `java.util.Random`. Fungsi random biasa (`Math.random()`, `rand()`) menggunakan algoritma yang **dapat diprediksi** jika penyerang mengetahui seed atau beberapa output sebelumnya — tidak aman untuk keperluan kriptografi.

**Penjelasan awam:** Ada dua jenis "lempar dadu": dadu biasa (hasilnya bisa diprediksi jika tahu pola mesinnya) dan dadu kriptografis (benar-benar tidak bisa diprediksi). Untuk token keamanan, OTP, atau kunci enkripsi, harus selalu pakai "dadu kriptografis" — yang benar-benar acak. Kalau pakai dadu biasa, penyerang yang cukup pintar bisa menebak angka berikutnya.

**Risiko jika tidak diterapkan:** Token yang dihasilkan dari non-CSPRNG bisa diprediksi, memungkinkan penyerang memalsukan token sesi, OTP, atau nilai kriptografi lainnya.

**Bukti dukung:** Source code review: identifikasi penggunaan random number generator di bagian kritis (token generation, salt generation, key generation) — verifikasi menggunakan CSPRNG.

**EDK:** Tinjau apakah standar pengembangan instansi mewajibkan penggunaan CSPRNG untuk semua nilai yang berkaitan dengan keamanan.

**EIK:** Source code review pada semua lokasi pembuatan token, salt, kunci, dan OTP — verifikasi penggunaan CSPRNG, bukan fungsi random biasa.

**EEK:** Indikator: tidak ditemukan penggunaan fungsi random non-kriptografis untuk keperluan keamanan dalam code review.

---

## 6. Penanganan Eror dan Pencatatan Log

> **Konteks regulasi:** Pasal 27 ayat (6) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan eror ditangani dengan aman (tidak membocorkan informasi sensitif) dan semua kejadian keamanan dicatat secara memadai untuk keperluan audit dan investigasi insiden.

---

### a. Mengatur konten pesan yang ditampilkan ketika terjadi kesalahan

**Penjelasan teknis:** Pesan error yang ditampilkan ke pengguna harus mengikuti prinsip **information hiding**:

- **User-facing:** Tampilkan pesan generik yang informatif untuk user tapi tidak mengungkapkan detail teknis: "Terjadi kesalahan sistem. Silakan coba lagi atau hubungi administrator." — bukan stack trace, nama file, nama tabel database, atau versi software.
- **Internal logging:** Detail error teknis (stack trace, query yang gagal, dsb.) dicatat di log server — tidak ditampilkan ke user.
- **Custom error pages:** Buat halaman error custom (404, 500, dsb.) yang branded dan tidak menggunakan default error page framework (yang sering mengekspos informasi teknis).
- **Debug mode:** Pastikan debug mode **dinonaktifkan** di production. Django `DEBUG=False`, PHP `display_errors=Off`, dsb.

**Penjelasan awam:** Saat terjadi kesalahan, sistem tidak boleh "curhat" tentang masalah internalnya kepada pengguna. Informasi seperti "Error di baris 47 file database.py, query SELECT * FROM tabel_rahasia gagal" sangat berguna bagi penyerang untuk memahami struktur sistem. Yang boleh ditampilkan: pesan singkat yang ramah bahwa ada masalah, tanpa detail teknis apapun.

**Risiko jika tidak diterapkan:** Stack trace dan pesan error teknis mengungkapkan struktur internal aplikasi, nama teknologi yang digunakan, dan kadang data sensitif — informasi berharga bagi penyerang untuk menyusun serangan lebih lanjut.

**Bukti dukung:** Demonstrasi: trigger error (URL tidak valid, input yang menyebabkan exception) — apakah pesan error yang tampil ke user bersih dari informasi teknis? Verifikasi debug mode dimatikan di production; custom error page aktif.

**EDK:** Tinjau apakah kebijakan/standar pengembangan instansi mengatur bahwa pesan error yang ditampilkan ke pengguna tidak boleh mengandung informasi teknis internal.

**EIK:** Trigger berbagai skenario error — verifikasi pesan yang ditampilkan ke user tidak mengandung stack trace, nama file, atau informasi teknis lainnya. Verifikasi debug mode dimatikan.

**EEK:** Indikator: tidak ada informasi teknis yang terekspos melalui pesan error pada pengujian, custom error page aktif di semua environment production.

---

### b. Menggunakan metode penanganan eror untuk mencegah kesalahan terprediksi dan tidak terduga serta menangani seluruh pengecualian yang tidak ditangani

**Penjelasan teknis:** Implementasi **comprehensive exception handling**:

- **Try-catch di semua titik kritis:** Semua operasi yang bisa gagal (database query, API call eksternal, file I/O, parsing) harus dibungkus dalam try-catch.
- **Global exception handler:** Harus ada handler di level aplikasi yang menangkap semua unhandled exception sebelum sampai ke user (misal: `@app.errorhandler` di Flask, `@ControllerAdvice` di Spring).
- **Fail safely:** Saat terjadi error, aplikasi harus masuk ke state yang aman — bukan crash atau menampilkan partial data.
- **Tidak menggunakan empty catch block:** `catch(Exception e) {}` tanpa logging atau handling adalah anti-pattern berbahaya — error ditelan tanpa diketahui.

**Penjelasan awam:** Sistem yang baik harus punya rencana cadangan untuk setiap kemungkinan masalah — baik yang sudah diprediksi maupun yang tidak terduga. Seperti pilot pesawat yang harus tahu cara menangani berbagai kondisi darurat, bukan hanya kondisi ideal. Jika ada yang tidak tertangani, sistem harus tetap mendarat dengan aman (fail gracefully), bukan jatuh bebas (crash).

**Risiko jika tidak diterapkan:** Unhandled exception bisa menyebabkan aplikasi crash, menampilkan error page dengan informasi teknis, atau masuk ke state tidak konsisten yang bisa dieksploitasi.

**Bukti dukung:** Source code review: apakah ada global exception handler? Apakah semua operasi kritis punya error handling? Apakah tidak ada empty catch block? Pengujian: trigger berbagai skenario error — aplikasi harus tetap berjalan dengan baik.

**EDK:** Tinjau apakah standar pengembangan instansi mewajibkan implementasi comprehensive exception handling termasuk global exception handler.

**EIK:** Review source code untuk memastikan semua operasi kritis punya error handling. Verifikasi global exception handler aktif. Trigger unhandled exception — aplikasi harus menangani dengan graceful.

**EEK:** Indikator: tidak ada unhandled exception yang menyebabkan crash di production, semua error ditangani dan di-log dengan benar.

---

### c. Tidak mencantumkan informasi yang dikecualikan dalam pencatatan log

**Penjelasan teknis:** Log adalah catatan operasional sistem, bukan tempat menyimpan data sensitif. **Data yang TIDAK boleh masuk ke log:**

- Password, PIN, kunci kriptografi
- Nomor kartu kredit, data keuangan
- Data pribadi sensitif (NIK, nomor KK, data kesehatan)
- Session token, API key, secret key
- Data yang masuk klasifikasi "dikecualikan" sesuai regulasi Implementasi: buat fungsi/filter logging yang secara otomatis menyensor (masking/redacting) field sensitif sebelum ditulis ke log. Misal: password di-mask menjadi `[REDACTED]`, nomor kartu `4111-1111-1111-1111` menjadi `4111-****-****-1111`.

**Penjelasan awam:** Log adalah buku catatan harian sistem — berguna untuk investigasi masalah. Tapi buku catatan ini tidak boleh mencatat informasi yang sangat sensitif seperti password atau data pribadi pengguna. Jika log bisa diakses oleh pihak yang tidak berwenang (atau bocor), informasi sensitif tersebut ikut terekspos. Log harus cukup informatif untuk investigasi, tapi tidak sampai menyimpan data yang berbahaya jika bocor.

**Risiko jika tidak diterapkan:** Log yang mengandung password atau data sensitif menjadi target menarik bagi penyerang. Jika log bocor (sering terjadi karena log disimpan di tempat yang kurang terlindungi), data sensitif ikut bocor.

**Bukti dukung:** Review sample log file: verifikasi tidak ada password, token, atau data sensitif yang tercatat; konfigurasi log masking/filtering; kebijakan pengelolaan log.

**EDK:** Tinjau apakah kebijakan instansi melarang pencatatan data sensitif/dikecualikan dalam log dan mengatur mekanisme masking/redacting.

**EIK:** Review sample log: apakah ada password, token, atau data pribadi sensitif yang tercatat? Verifikasi log masking aktif untuk field sensitif.

**EEK:** Indikator: tidak ditemukan data sensitif dalam log file, log masking berjalan dengan benar untuk semua field yang dikategorikan sensitif.

---

### d. Mengatur cakupan log yang dicatat untuk mendukung upaya penyelidikan ketika terjadi insiden

**Penjelasan teknis:** Log harus cukup lengkap untuk mendukung forensik digital saat terjadi insiden. Event yang **wajib** dicatat:

- Semua percobaan login (berhasil dan gagal) — dengan timestamp, username, IP address
- Logout dan session timeout
- Percobaan akses ke resource yang tidak diizinkan (403 events)
- Perubahan data sensitif (create, update, delete)
- Perubahan konfigurasi atau hak akses
- Error dan exception yang terjadi
- Perubahan password atau credential Setiap log entry harus mengandung: timestamp (dengan timezone), user ID, action, resource yang diakses, IP address, hasil (sukses/gagal), dan correlation ID untuk tracing.

**Penjelasan awam:** Saat terjadi insiden keamanan, tim investigasi harus bisa menjawab: apa yang terjadi, kapan, siapa yang melakukannya, dan dari mana. Log yang baik seperti CCTV yang terpasang di semua sudut penting — merekam siapa yang masuk, kapan, melakukan apa. Log yang tidak lengkap seperti CCTV yang hanya ada di satu pintu — banyak kejadian tidak terekam.

**Risiko jika tidak diterapkan:** Saat terjadi insiden, tidak ada bukti yang bisa digunakan untuk investigasi — tidak bisa menentukan apa yang terjadi, kapan, dan siapa pelakunya.

**Bukti dukung:** Konfigurasi logging yang menunjukkan event apa saja yang dicatat; sample log yang menunjukkan kelengkapan field (timestamp, user, IP, action, result); kebijakan retensi log; SOP response insiden yang mengacu pada log.

**EDK:** Tinjau apakah kebijakan instansi mendefinisikan cakupan minimum log yang harus dicatat (jenis event, field yang wajib ada, durasi retensi).

**EIK:** Review konfigurasi logging dan sample log: apakah semua event keamanan penting dicatat? Apakah setiap entry mengandung timestamp, user, IP, dan detail action?

**EEK:** Indikator: log mencukupi untuk mendukung investigasi insiden (simulasikan skenario insiden dan cek apakah buktinya ada di log), retensi log sesuai kebijakan.

---

### e. Mengatur pelindungan log aplikasi dari akses dan modifikasi yang tidak sah

**Penjelasan teknis:** Log adalah barang bukti — harus dilindungi dari manipulasi:

- **Akses terbatas:** Hanya admin/tim keamanan yang bisa mengakses log file. Gunakan file permission yang ketat.
- **Write-once / append-only:** Log harus hanya bisa di-append, tidak bisa di-edit atau di-delete oleh pengguna biasa (bahkan operator).
- **Centralized logging:** Kirim log ke sistem terpusat (SIEM, log aggregator seperti ELK Stack, Splunk, Loki) yang terpisah dari server aplikasi — jika server dibobol, log sudah aman di tempat lain.
- **Log integrity:** Bisa ditambahkan mekanisme hash chaining atau digital signature pada log untuk mendeteksi jika ada yang dimodifikasi.
- **Enkripsi log:** Log yang disimpan sebaiknya dienkripsi untuk melindungi dari akses tidak sah.

**Penjelasan awam:** Jika penyerang berhasil masuk ke sistem, hal pertama yang mereka lakukan adalah menghapus log untuk menghilangkan jejak. Log harus disimpan di tempat yang tidak bisa diubah atau dihapus oleh penyerang — idealnya di sistem terpisah yang hanya bisa di-tulis, tidak bisa di-hapus. Ini seperti kotak hitam pesawat terbang — dirancang untuk bertahan dan tidak bisa dimodifikasi.

**Risiko jika tidak diterapkan:** Penyerang yang berhasil masuk bisa menghapus log untuk menghilangkan bukti, membuat investigasi insiden tidak mungkin dilakukan.

**Bukti dukung:** Konfigurasi sistem logging terpusat (SIEM/log aggregator); permission file log (hanya append, tidak writable oleh proses aplikasi); bukti log dikirim ke sistem eksternal yang terpisah.

**EDK:** Tinjau apakah kebijakan instansi mengatur perlindungan integritas dan kerahasiaan log, termasuk pembatasan akses dan mekanisme centralized logging.

**EIK:** Verifikasi konfigurasi akses log: apakah log hanya bisa diakses oleh pihak berwenang? Apakah log dikirim ke sistem terpusat? Verifikasi log tidak bisa dihapus oleh proses aplikasi biasa.

**EEK:** Indikator: log tidak bisa dimodifikasi atau dihapus oleh penyerang yang berhasil masuk ke server aplikasi, centralized logging aktif dan berfungsi.

---

### f. Melakukan enkripsi pada data yang disimpan untuk mencegah injeksi log

**Penjelasan teknis:** **Log injection** adalah serangan di mana penyerang menyisipkan karakter kontrol (newline `\n`, carriage return `\r`) atau format khusus ke dalam input yang masuk ke log, sehingga log entry palsu bisa dibuat. Misalnya, username `admin\n[2024-01-01] User admin logged in successfully` bisa menyisipkan log entry palsu. Pencegahan:

- **Sanitasi input sebelum logging:** Strip atau encode karakter newline dan kontrol dari data yang akan di-log.
- **Enkripsi log:** Log yang dienkripsi tidak bisa dimanipulasi tanpa kunci.
- **Structured logging:** Gunakan format log terstruktur (JSON) dengan field yang terdefinisi — jauh lebih sulit diinjeksi dibanding plain text log.
- **Log signing:** Tambahkan signature kriptografi pada setiap log batch.

**Penjelasan awam:** Log injection seperti seseorang yang memalsukan buku absensi dengan menyelipkan kertas berisi absensi palsu di antara halaman asli. Enkripsi log dan format log yang terstruktur membuat pemalsuan seperti ini sangat sulit dilakukan, karena setiap perubahan akan terdeteksi.

**Bukti dukung:** Konfigurasi structured logging (JSON format); bukti sanitasi input sebelum logging; enkripsi log aktif jika diterapkan.

**EDK/EIK/EEK:** Sama seperti kontrol log lainnya — fokus pada apakah structured logging dan sanitasi input ke log sudah diterapkan.

---

### g. Melakukan sinkronisasi sumber waktu sesuai dengan zona waktu dan waktu yang benar

**Penjelasan teknis:** Timestamp yang akurat dalam log adalah syarat mutlak untuk investigasi forensik digital. Jika timestamp berbeda antar server, urutan kejadian tidak bisa direkonstruksi.

- **NTP (Network Time Protocol):** Semua server harus disinkronisasi ke NTP server yang terpercaya. Di Indonesia: gunakan NTP server BSSN atau BMKG (`ntp.bssn.go.id`, `0.id.pool.ntp.org`).
- **Timezone konsisten:** Semua server harus menggunakan timezone yang sama (disarankan UTC untuk server, konversi ke WIB/WITA/WIT hanya untuk tampilan UI).
- **Log timestamp:** Setiap log entry harus menyertakan timestamp dengan presisi minimal detik, lebih baik millisecond, beserta informasi timezone.
- **Monitoring drift:** Pasang monitoring untuk mendeteksi jika ada server yang driftnya terlalu jauh dari waktu referensi.

**Penjelasan awam:** Bayangkan investigasi insiden di mana log server A menunjukkan serangan terjadi pukul 10:00, tapi log server B menunjukkan pukul 10:35 — padahal keduanya seharusnya merekam kejadian yang sama. Investigasi jadi kacau karena tidak bisa menentukan urutan kejadian yang sebenarnya. Sinkronisasi waktu memastikan semua sistem punya "jam yang sama", sehingga investigasi bisa berjalan dengan akurat.

**Risiko jika tidak diterapkan:** Timestamp log yang tidak akurat membuat investigasi insiden sulit atau tidak mungkin dilakukan — urutan kejadian tidak bisa direkonstruksi dengan benar.

**Bukti dukung:** Konfigurasi NTP pada semua server; verifikasi sinkronisasi waktu aktif (`timedatectl status`, `ntpstat`); log menunjukkan timestamp yang konsisten dan akurat.

**EDK:** Tinjau apakah kebijakan instansi mewajibkan sinkronisasi waktu menggunakan NTP pada semua server yang menjalankan aplikasi SPBE.

**EIK:** Verifikasi konfigurasi NTP aktif di setiap server. Bandingkan timestamp log antar server — apakah konsisten?

**EEK:** Indikator: semua server tersinkronisasi ke NTP dengan drift < 1 detik, timestamp log konsisten dan akurat di semua server.

---

## 7. Proteksi Data

> **Konteks regulasi:** Pasal 27 ayat (7) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan data — terutama data sensitif/dikecualikan — dilindungi sepanjang siklus hidupnya: saat disimpan, diproses, ditukar, dan dihapus.

---

### a. Melakukan identifikasi dan penyimpanan salinan informasi yang dikecualikan

**Penjelasan teknis:** Langkah pertama proteksi data adalah mengetahui data apa yang ada dan di mana:

- **Data inventory/classification:** Identifikasi semua data yang diproses aplikasi dan klasifikasikan tingkat sensitivitasnya (publik, internal, rahasia, sangat rahasia).
- **Data minimization:** Kumpulkan dan simpan hanya data yang benar-benar diperlukan — jangan simpan data yang tidak ada keperluan bisnis yang jelas.
- **Enkripsi data sensitif at rest:** Data sensitif yang disimpan harus dienkripsi di tingkat field/kolom atau tingkat database. Jangan hanya mengandalkan enkripsi disk (full-disk encryption) saja.
- **Salinan/backup:** Backup data sensitif harus dienkripsi dan disimpan di lokasi terpisah yang aman. Akses backup dibatasi dan diaudit.

**Penjelasan awam:** Sebelum bisa melindungi sesuatu, harus tahu dulu apa yang perlu dilindungi dan di mana letaknya. Identifikasi data sensitif seperti membuat inventaris barang berharga di rumah — setelah tahu ada di mana, bisa diputuskan mana yang perlu dikunci di brankas, mana yang cukup disimpan di lemari biasa.

**Bukti dukung:** Data classification policy; inventaris data (data catalog); bukti enkripsi data sensitif at rest; prosedur backup yang mencakup enkripsi.

**EDK:** Tinjau apakah instansi memiliki kebijakan klasifikasi data dan inventaris data yang dikecualikan, termasuk persyaratan enkripsi untuk penyimpanannya.

**EIK:** Verifikasi apakah data sensitif di database dienkripsi (field-level atau full encryption). Periksa prosedur backup apakah mencakup enkripsi.

**EEK:** Indikator: semua data yang terklasifikasi sensitif/dikecualikan tersimpan dalam bentuk terenkripsi, backup dienkripsi dan disimpan aman.

---

### b. Melakukan pelindungan dari akses yang tidak sah terhadap informasi yang dikecualikan yang disimpan sementara dalam aplikasi

**Penjelasan teknis:** Data sensitif yang disimpan sementara (temporary/cache) juga harus dilindungi:

- **In-memory cache:** Data sensitif di cache (Redis, Memcached) harus dienkripsi dan punya TTL (time-to-live) yang pendek. Cache harus dikonfigurasi dengan autentikasi.
- **Temporary files:** Jika aplikasi membuat file temporary yang mengandung data sensitif, file tersebut harus dienkripsi, dibuat di direktori yang hanya bisa diakses oleh proses aplikasi, dan dihapus segera setelah tidak diperlukan.
- **Session storage:** Data sensitif tidak boleh disimpan di session storage kecuali memang diperlukan, dan session harus dienkripsi.
- **Browser storage:** Jangan simpan data sensitif di localStorage, sessionStorage, atau cookie yang tidak aman.

**Penjelasan awam:** Data sensitif kadang disimpan sementara di "ruang tunggu" sistem (cache/temp) agar bisa diakses lebih cepat. Ruang tunggu ini juga harus diamankan — bukan seperti ruang terbuka, tapi lebih seperti ruang tunggu VIP yang butuh ID khusus untuk masuk, dan data yang tidak diperlukan lagi segera dikeluarkan.

**Bukti dukung:** Konfigurasi Redis/cache dengan autentikasi dan enkripsi; TTL yang wajar pada cache data sensitif; prosedur cleanup temporary file.

**EDK/EIK/EEK:** Tinjau dan verifikasi konfigurasi cache, kebijakan TTL, dan prosedur pembersihan temporary data sensitif.

---

### c. Melakukan pertukaran, penghapusan, dan audit informasi yang dikecualikan

**Penjelasan teknis:**

- **Pertukaran data sensitif:** Saat data sensitif perlu dibagikan antar sistem atau pihak, gunakan kanal terenkripsi (SFTP, HTTPS, S/MIME untuk email) dan mekanisme autentikasi yang kuat. Hindari berbagi data sensitif via email plain text atau media tidak terenkripsi.
- **Penghapusan aman (secure deletion):** Menghapus file biasa (`rm`) tidak benar-benar menghapus data — hanya menandai ruang sebagai tersedia. Untuk data sensitif, gunakan secure deletion (overwrite sebelum hapus): `shred`, `wipe`, atau enkripsi data sebelum disimpan (sehingga menghapus kunci sama dengan menghapus data — crypto shredding).
- **Audit trail pertukaran dan penghapusan:** Setiap pertukaran dan penghapusan data sensitif harus dicatat dalam audit log — siapa, apa, kapan, kepada/oleh siapa.
- **Right to erasure (hak hapus):** Sesuai UU PDP, pengguna berhak meminta penghapusan datanya — sistem harus mendukung penghapusan menyeluruh dari semua penyimpanan (database, backup, cache, log).

**Penjelasan awam:** Data sensitif yang tidak diperlukan lagi harus dihancurkan, bukan hanya "dibuang ke tong sampah" digital — pihak lain masih bisa memungutnya dari sana. Penghancuran yang benar seperti memasukkan dokumen fisik ke mesin penghancur kertas, bukan hanya meremas dan membuangnya.

**Bukti dukung:** SOP pertukaran data sensitif; prosedur secure deletion; audit log pertukaran dan penghapusan data; prosedur penanganan hak hapus pengguna.

**EDK/EIK/EEK:** Tinjau kebijakan dan prosedur pertukaran/penghapusan data; verifikasi implementasi secure deletion; review audit log pertukaran data.

---

### d. Melakukan penentuan jumlah parameter

**Penjelasan teknis:** Kontrol ini berkaitan dengan **parameter pollution** dan **mass assignment** attacks:

- **Mass assignment prevention:** Saat menerima input JSON/form yang akan langsung di-map ke model/objek database, harus ada allowlist field yang boleh diubah. Jangan gunakan "update all fields from request" tanpa filter — penyerang bisa mengubah field yang seharusnya tidak bisa diubah (misal: `is_admin=true`, `balance=1000000`).
- **Parameter pollution:** Validasi bahwa setiap parameter hanya dikirimkan sekali dan tidak ada parameter duplikat yang bisa dieksploitasi untuk bypass validasi.
- **Batasi jumlah parameter:** Tentukan dan validasi jumlah parameter yang diizinkan dalam setiap request.

**Penjelasan awam:** Jika sebuah formulir online memiliki kolom "nama" dan "email", sistem hanya boleh memproses kedua kolom itu — tidak boleh ada kolom tersembunyi seperti "level_admin" yang bisa dikirimkan penyerang untuk meningkatkan hak aksesnya sendiri. Sistem harus secara eksplisit menentukan kolom apa saja yang boleh diisi melalui formulir, dan mengabaikan sisanya.

**Bukti dukung:** Source code review: apakah ada allowlist field untuk setiap form/endpoint? Pengujian mass assignment: kirim parameter tambahan yang tidak seharusnya bisa diubah — sistem harus mengabaikannya.

**EDK/EIK/EEK:** Tinjau standar pengembangan terkait mass assignment prevention; uji endpoint dengan parameter tambahan; verifikasi allowlist field aktif.

---

### e. Memastikan data disimpan dengan aman

**Penjelasan teknis:** Penyimpanan data yang aman mencakup:

- **Enkripsi data at rest:** Data sensitif dienkripsi di database (field-level encryption atau Transparent Data Encryption).
- **Database hardening:** Database dikonfigurasi dengan aman: remote access dibatasi, default credential diganti, port database tidak terekspos ke internet publik, akun database dengan least privilege.
- **Backup terenkripsi:** Semua backup dienkripsi.
- **Retensi data:** Data hanya disimpan selama diperlukan — setelah melewati masa retensi, dihapus secara aman.
- **Pemisahan data:** Data dari tenant berbeda tidak bercampur (multi-tenancy isolation).

**Penjelasan awam:** "Menyimpan dengan aman" artinya lebih dari sekadar memasukkan data ke database. Database-nya sendiri harus dikunci (tidak bisa diakses dari internet), datanya dienkripsi di dalam database, dan backup-nya juga dienkripsi. Ini seperti tidak hanya mengunci lemari arsip, tapi juga menempatkan lemari tersebut di ruangan yang dikunci, dan menyimpan salinan dokumennya di brankas terpisah.

**Bukti dukung:** Konfigurasi database (network binding, akses terbatas, enkripsi at rest); bukti enkripsi backup; kebijakan retensi data.

**EDK/EIK/EEK:** Tinjau konfigurasi database dan kebijakan penyimpanan; verifikasi enkripsi at rest dan backup; periksa network exposure database.

---

### f. Menentukan metode untuk menghapus dan mengekspor data sesuai permintaan pengguna

**Penjelasan teknis:** Sesuai amanat UU PDP No. 27 Tahun 2022, pengguna punya hak:

- **Right to erasure:** Meminta penghapusan data pribadinya — sistem harus bisa menghapus data dari seluruh penyimpanan (database primer, backup, cache, log yang memungkinkan).
- **Right to data portability:** Meminta ekspor datanya dalam format yang dapat dibaca mesin (JSON, CSV). Sistem harus menyediakan mekanisme ekspor yang aman.
- **Proses terverifikasi:** Permintaan hapus/ekspor harus melalui verifikasi identitas pengguna terlebih dahulu.
- **Konfirmasi dan audit:** Setiap penghapusan dan ekspor data harus dikonfirmasi ke pengguna dan dicatat dalam audit log.

**Penjelasan awam:** Sesuai undang-undang, warga negara berhak meminta agar data pribadinya dihapus dari sistem pemerintah, atau meminta salinan datanya untuk dibawa ke instansi lain. Sistem harus menyediakan mekanisme yang mudah dan aman untuk ini — bukan sekedar "nanti kami proses secara manual".

**Bukti dukung:** Fitur hapus/ekspor data yang tersedia di aplikasi; SOP penanganan permintaan hak subjek data; audit log permintaan dan eksekusi hapus/ekspor data.

**EDK/EIK/EEK:** Tinjau apakah sistem menyediakan mekanisme hapus/ekspor data sesuai UU PDP; uji fungsi hapus dan ekspor; verifikasi audit trail tersedia.

---

### g. Membersihkan memori setelah tidak diperlukan

**Penjelasan teknis:** Data sensitif yang diproses dalam memori (RAM) harus dibersihkan setelah tidak digunakan:

- **Sensitive data in memory:** Setelah password atau kunci kriptografi selesai digunakan, lokasi memorinya harus ditimpa (overwrite) — jangan hanya dilepas ke garbage collector.
- **Bahasa dengan GC (Python, Java, JS):** Susah untuk benar-benar zero-out memori karena GC. Gunakan library khusus atau prinsip minimasi exposure time.
- **Bahasa dengan manual memory management (C/C++/Rust):** Gunakan `memset()` atau `SecureZeroMemory()` untuk menimpa data sensitif sebelum membebaskan memori.
- **Core dump:** Pastikan core dump dinonaktifkan atau dienkripsi di production — core dump bisa mengekspos seluruh isi memori proses.
- **Swap encryption:** Enkripsi swap partition untuk mencegah data sensitif yang tersimpan di swap bisa dibaca.

**Penjelasan awam:** Saat komputer memproses data sensitif seperti password, data tersebut ada di memori RAM untuk sementara. Jika tidak dibersihkan setelah selesai, data itu bisa "terbaca" oleh program lain atau penyerang yang berhasil mengakses memori. Membersihkan memori seperti menghapus tulisan di papan tulis yang berbagi ruangan — setelah selesai digunakan, hapus agar tidak bisa dibaca orang berikutnya.

**Bukti dukung:** Code review pada penanganan data sensitif di memori; konfigurasi core dump (dinonaktifkan di production); enkripsi swap jika digunakan.

**EDK/EIK/EEK:** Tinjau kebijakan dan implementasi pembersihan memori untuk data sensitif; verifikasi core dump dinonaktifkan; review kode penanganan data sensitif.

---

## 8. Keamanan Komunikasi

> **Konteks regulasi:** Pasal 27 ayat (8) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan semua komunikasi data — baik antar pengguna dan sistem maupun antar sistem — dilakukan melalui kanal yang terenkripsi dan terautentikasi.

---

### a. Menggunakan komunikasi terenkripsi

**Penjelasan teknis:** Semua komunikasi jaringan yang membawa data sensitif harus dienkripsi end-to-end:

- **TLS untuk HTTP:** HTTPS wajib untuk semua aplikasi web (sudah dibahas di autentikasi 1g, tapi berlaku lebih luas di sini).
- **TLS untuk database connection:** Koneksi dari aplikasi ke database harus menggunakan TLS, bukan plain TCP.
- **TLS untuk inter-service communication:** Komunikasi antar microservice/API internal juga harus terenkripsi (Service Mesh, mTLS).
- **Enkripsi email:** Jika aplikasi mengirim email berisi data sensitif, gunakan TLS untuk SMTP (STARTTLS atau SMTPS) dan pertimbangkan S/MIME atau PGP untuk enkripsi konten email.
- **VPN untuk akses jaringan internal:** Akses ke sistem internal dari luar jaringan harus melalui VPN.

**Penjelasan awam:** Semua percakapan penting — baik antara pengguna dengan sistem maupun antara satu sistem dengan sistem lain — harus dilakukan di "ruang kedap suara" (enkripsi), bukan di tempat terbuka di mana siapa saja bisa mendengarkan. Ini berlaku untuk semua jenis komunikasi, tidak hanya yang terlihat oleh pengguna.

**Bukti dukung:** Konfigurasi TLS di semua layer (web, database, inter-service); scan port yang menunjukkan tidak ada layanan yang berjalan di plain text untuk data sensitif; konfigurasi VPN untuk akses remote.

**EDK:** Tinjau apakah kebijakan instansi mewajibkan enkripsi untuk semua jenis komunikasi yang membawa data sensitif.

**EIK:** Verifikasi TLS aktif di semua layer komunikasi: web (HTTPS), database (SSL connection string), API internal. Scan untuk layanan yang menggunakan plain text.

**EEK:** Indikator: tidak ada komunikasi data sensitif yang terjadi tanpa enkripsi, semua koneksi menggunakan TLS 1.2+.

---

### b. Mengatur koneksi masuk dan keluar yang aman dan terenkripsi dari sisi pengguna

**Penjelasan teknis:** Kontrol koneksi masuk (inbound) dan keluar (outbound):

- **Inbound:** Semua koneksi dari user ke server harus melalui HTTPS. HTTP redirect ke HTTPS. Firewall/WAF memfilter traffic mencurigakan.
- **Outbound:** Koneksi dari server ke pihak ketiga (API eksternal, layanan email, webhook) juga harus menggunakan TLS dan memvalidasi sertifikat tujuan — jangan nonaktifkan verifikasi sertifikat SSL (`verify=False` di Python requests, `curl -k`).
- **Certificate pinning (opsional, untuk aplikasi mobile):** Mem-pin sertifikat yang diharapkan untuk mencegah MITM bahkan dengan sertifikat yang valid tapi tidak diharapkan.
- **Mutual TLS (mTLS):** Untuk koneksi server-to-server sensitif, gunakan mTLS di mana kedua pihak saling memverifikasi sertifikat.

**Penjelasan awam:** Tidak hanya koneksi masuk yang harus aman — ketika server menghubungi layanan lain (misal: mengirim notifikasi, memanggil API pihak ketiga), koneksi tersebut juga harus terenkripsi dan harus memverifikasi bahwa pihak yang dihubungi memang benar-benar pihak yang dimaksud, bukan penyamar.

**Bukti dukung:** Konfigurasi outbound connection (verifikasi sertifikat aktif); firewall rules untuk inbound/outbound traffic; konfigurasi HTTPS-only untuk aplikasi.

**EDK/EIK/EEK:** Tinjau kebijakan koneksi masuk/keluar; verifikasi konfigurasi outbound connection dengan SSL verification aktif; uji redirect HTTP ke HTTPS.

---

### c. Mengatur jenis algoritma yang digunakan dan alat pengujiannya

**Penjelasan teknis:** Dokumen cipher suite yang diizinkan untuk TLS:

- **Cipher suite yang direkomendasikan (TLS 1.3):** `TLS_AES_256_GCM_SHA384`, `TLS_CHACHA20_POLY1305_SHA256`, `TLS_AES_128_GCM_SHA256`
- **Cipher suite yang masih aman (TLS 1.2):** Suite dengan ECDHE untuk perfect forward secrecy, AES-GCM, SHA-256+
- **Cipher suite yang harus dinonaktifkan:** RC4, DES, 3DES, NULL cipher, export cipher, ANON cipher, MD5 dalam cipher suite
- **Alat pengujian:** SSL Labs, testssl.sh, nmap ssl-enum-ciphers, OWASP SSL Testing Guide
- Konfigurasi cipher suite di web server (Nginx/Apache) dan load balancer harus dikontrol secara eksplisit — jangan biarkan server memilih sendiri.

**Penjelasan awam:** TLS punya banyak "metode enkripsi" yang bisa dipilih — beberapa kuat, beberapa sudah terbukti lemah. Seperti memilih gembok: ada yang susah dibobol, ada yang terlihat bagus tapi mudah dibuka. Konfigurasi server harus secara eksplisit hanya mengizinkan metode enkripsi yang kuat, dan secara berkala diuji menggunakan alat khusus untuk memastikan tidak ada metode lemah yang tersisa.

**Bukti dukung:** Konfigurasi cipher suite di web server; hasil SSL Labs (grade A minimal); hasil testssl.sh; kebijakan yang mendefinisikan algoritma yang diizinkan dan dilarang.

**EDK/EIK/EEK:** Tinjau kebijakan cipher suite yang berlaku; scan TLS konfigurasi dengan SSL Labs; verifikasi tidak ada cipher lemah yang diaktifkan.

---

### d. Mengatur aktivasi dan konfigurasi sertifikat elektronik yang diterbitkan oleh penyelenggara sertifikasi elektronik

**Penjelasan teknis:** Di Indonesia, konteks ini mengacu pada:

- **Sertifikat elektronik dari PSrE (Penyelenggara Sertifikasi Elektronik):** Untuk aplikasi pemerintah, sertifikat harus diterbitkan oleh PSrE yang diakui — bisa PSrE pemerintah (BSSN/BSrE) atau PSrE komersial yang tersertifikasi.
- **Validitas sertifikat:** Sertifikat harus diperbarui sebelum kedaluwarsa. Pasang monitoring expiry date dan alert jauh sebelum expired (misal: 60 hari sebelum expiry).
- **Revocation checking:** Konfigurasikan OCSP stapling atau CRL checking untuk memastikan sertifikat tidak dicabut.
- **Wildcard vs. specific certificate:** Pertimbangkan risiko penggunaan wildcard certificate — jika satu subdomain dikompromikan, semua subdomain terdampak.
- **Certificate transparency (CT) log:** Pantau CT log untuk mendeteksi sertifikat yang tidak sah yang mungkin diterbitkan atas nama domain instansi.

**Penjelasan awam:** Sertifikat elektronik seperti KTP digital untuk website — membuktikan bahwa website yang diakses memang benar-benar milik instansi yang diklaim. Sertifikat ini diterbitkan oleh lembaga resmi yang terpercaya (PSrE), punya masa berlaku, dan harus diperbarui sebelum kadaluarsa. Jika sertifikat kadaluarsa, browser akan memperingatkan pengguna bahwa website mungkin tidak aman.

**Bukti dukung:** Sertifikat SSL yang valid dari PSrE yang diakui; monitoring expiry sertifikat; prosedur pembaruan sertifikat; konfigurasi OCSP stapling.

**EDK:** Tinjau apakah kebijakan instansi mengatur penggunaan sertifikat elektronik dari PSrE yang diakui, termasuk prosedur pembaruan dan monitoring expiry.

**EIK:** Verifikasi sertifikat yang digunakan: diterbitkan oleh CA yang diakui, masa berlaku masih valid, domain sesuai. Verifikasi monitoring expiry aktif.

**EEK:** Indikator: tidak ada sertifikat yang kedaluwarsa di production, ada proses otomatis pembaruan atau alert expiry, sertifikat dari PSrE yang diakui.

---

## 9. Pengendalian Kode Berbahaya

> **Konteks regulasi:** Pasal 27 ayat (9) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan kode aplikasi dan library yang digunakan bebas dari malware, backdoor, dan fungsi berbahaya yang tidak diinginkan.

---

### a. Menggunakan analisis kode dalam kontrol kode berbahaya

**Penjelasan teknis:** Implementasi **Static Application Security Testing (SAST)** dan code review dalam pipeline pengembangan:

- **SAST Tools:** SonarQube, Checkmarx, Semgrep, Bandit (Python), ESLint security plugins, CodeQL (GitHub Actions). Tools ini menganalisis source code tanpa menjalankan program untuk mendeteksi pola kode yang berpotensi berbahaya.
- **Code review:** Setiap perubahan kode harus melalui peer review — minimal satu developer lain harus menyetujui sebelum di-merge.
- **Secret scanning:** Gunakan tools seperti GitGuardian, TruffleHog, atau git-secrets untuk mendeteksi credential/secret yang tidak sengaja ter-commit ke repository.
- **Dependency analysis:** Analisis keamanan dependency (npm audit, pip-audit, OWASP Dependency-Check).
- **CI/CD integration:** SAST harus berjalan otomatis di CI/CD pipeline — build gagal jika ditemukan kerentanan kritis.

**Penjelasan awam:** Sebelum kode aplikasi dijalankan oleh pengguna, harus diperiksa terlebih dahulu secara otomatis oleh alat khusus — seperti mesin X-ray yang memeriksa bagasi penumpang sebelum masuk bandara. Alat ini mencari pola kode yang mencurigakan atau berbahaya. Selain itu, developer lain juga harus memeriksa kode secara manual sebelum digunakan.

**Bukti dukung:** Konfigurasi SAST tools dalam CI/CD pipeline; laporan hasil SAST scan; prosedur code review (pull request policy); hasil secret scanning.

**EDK:** Tinjau apakah instansi memiliki kebijakan yang mewajibkan analisis kode keamanan (SAST) dan code review dalam proses pengembangan aplikasi.

**EIK:** Verifikasi SAST tools aktif di CI/CD pipeline. Review proses code review (apakah ada mandatory peer review?). Cek laporan SAST terbaru.

**EEK:** Indikator: tidak ada kerentanan kritis yang lolos ke production tanpa di-address, semua kode melalui code review dan SAST sebelum di-deploy.

---

### b. Memastikan kode sumber aplikasi dan pustaka tidak mengandung kode berbahaya dan fungsionalitas lain yang tidak diinginkan

**Penjelasan teknis:**

- **Supply chain security:** Verifikasi integritas library pihak ketiga — download dari sumber resmi, periksa checksum/hash, gunakan lock file (package-lock.json, requirements.txt dengan hash). Serangan supply chain (seperti kasus `event-stream` npm atau SolarWinds) menyisipkan kode berbahaya ke dalam library yang populer.
- **Software Bill of Materials (SBOM):** Buat dan maintain daftar lengkap semua komponen yang digunakan beserta versinya.
- **Backdoor detection:** Review kode untuk fungsionalitas tersembunyi: hardcoded credential, debug code yang tertinggal, undocumented API endpoint, atau logika yang tidak sesuai spesifikasi.
- **Dead code removal:** Hapus kode yang tidak lagi digunakan — dead code sulit di-audit dan bisa menyembunyikan kerentanan.
- **Antivirus scanning:** Scan file yang di-upload pengguna dengan antivirus engine.

**Penjelasan awam:** Library pihak ketiga yang digunakan aplikasi seperti komponen yang dibeli dari supplier luar — harus dipastikan tidak ada "jebakan" atau "pintu belakang" yang disisipkan. Bayangkan membeli komponen elektronik yang ternyata ada chip pemata-mata di dalamnya. Verifikasi integritas komponen dari supplier adalah langkah kritis yang sering diabaikan.

**Bukti dukung:** Lock file dependencies dengan hash verification; SBOM (Software Bill of Materials); hasil dependency vulnerability scan; proses verifikasi checksum saat download library.

**EDK/EIK/EEK:** Tinjau kebijakan dan implementasi supply chain security; verifikasi lock file dan checksum; review SBOM; cek proses audit dependency.

---

### c. Mengatur izin terkait fitur atau sensor terkait privasi

**Penjelasan teknis:** Aplikasi web dan mobile harus menerapkan prinsip **data minimization** pada akses fitur device:

- **Web browser permissions:** Minta permission hanya untuk yang benar-benar diperlukan (kamera, mikrofon, lokasi, notifikasi). Jangan minta permission saat pertama kali aplikasi dibuka — minta saat fitur yang memerlukan permission tersebut digunakan.
- **Purpose limitation:** Jelaskan dengan jelas kepada pengguna mengapa permission tersebut diperlukan.
- **Revocation:** Pengguna harus bisa mencabut permission kapan saja.
- **No silent collection:** Tidak ada pengumpulan data sensor/fitur tanpa sepengetahuan dan persetujuan pengguna.
- **Privacy by design:** Pertimbangkan kebutuhan privasi sejak awal desain fitur, bukan ditambahkan belakangan.

**Penjelasan awam:** Aplikasi tidak boleh diam-diam mengakses kamera, mikrofon, atau lokasi pengguna tanpa izin eksplisit. Dan saat meminta izin, harus jelas dijelaskan untuk apa izin tersebut digunakan. Pengguna juga harus bisa mencabut izin tersebut kapan saja jika tidak nyaman.

**Bukti dukung:** Dokumentasi permission yang diminta aplikasi dan alasannya; implementasi just-in-time permission request; kebijakan privasi yang jelas.

**EDK/EIK/EEK:** Tinjau daftar permission yang diminta aplikasi; verifikasi permission diminta secara kontekstual (bukan sekaligus di awal); uji kemampuan pengguna mencabut permission.

---

### d. Mengatur pelindungan integritas

**Penjelasan teknis:** Memastikan kode dan file konfigurasi yang berjalan di production adalah versi yang sah dan tidak dimodifikasi:

- **File integrity monitoring (FIM):** Tools seperti AIDE, Tripwire, atau Wazuh memantau perubahan file-file kritis dan memberikan alert jika ada modifikasi yang tidak diotorisasi.
- **Code signing:** Deploy artifact (Docker image, binary) yang ditandatangani secara kriptografi — verifikasi signature sebelum deploy.
- **Immutable infrastructure:** Gunakan paradigma immutable deployment — server tidak pernah dimodifikasi langsung, selalu di-rebuild dari image yang baru dan divalidasi.
- **Checksum verification:** Verifikasi checksum file yang di-download sebelum digunakan.
- **Sub-resource Integrity (SRI):** Untuk file JavaScript/CSS yang di-load dari CDN, gunakan SRI attribute (`integrity="sha384-..."`) agar browser memverifikasi integritas file sebelum menjalankannya.

**Penjelasan awam:** Memastikan kode yang berjalan di server adalah persis kode yang sudah disetujui — tidak ada yang berhasil mengubahnya secara diam-diam. Seperti segel pada obat-obatan: jika segel rusak, berarti ada yang sudah membuka kemasan dan mungkin mengubah isinya. FIM adalah "segel digital" yang terus memantau apakah ada perubahan yang tidak sah.

**Bukti dukung:** Konfigurasi FIM tools yang aktif; proses code signing untuk deployment artifact; konfigurasi SRI untuk asset eksternal; alert jika ada perubahan file yang tidak diotorisasi.

**EDK/EIK/EEK:** Tinjau kebijakan integritas kode; verifikasi FIM aktif di server production; periksa SRI pada asset eksternal; simulasi perubahan file — apakah alert terpicu?

---

### e. Mengatur mekanisme fitur pembaruan

**Penjelasan teknis:** Proses update/patch aplikasi harus aman:

- **Update melalui jalur resmi:** Update hanya dari source yang terverifikasi (repository resmi, registry internal). Tidak ada manual download dari internet sembarangan.
- **Staging environment:** Setiap update diuji di environment staging sebelum di-deploy ke production.
- **Rollback plan:** Selalu ada plan rollback yang terdokumentasi dan diuji — jika update bermasalah, bisa kembali ke versi sebelumnya dengan cepat.
- **Signed updates:** Update artifact harus ditandatangani dan signature diverifikasi sebelum diinstal.
- **Auto-update dengan verifikasi:** Jika menggunakan auto-update, pastikan proses update memverifikasi integritas dan authenticity dari update sebelum mengaplikasikannya.
- **Change management:** Setiap update harus melalui proses change management yang terdokumentasi — tidak ada "hotfix" yang langsung ke production tanpa review.

**Penjelasan awam:** Pembaruan aplikasi harus datang dari sumber yang terpercaya dan melalui proses yang terverifikasi — tidak asal download dari internet. Sebelum pembaruan diterapkan ke sistem yang digunakan pengguna, harus diuji terlebih dahulu di lingkungan percobaan. Dan selalu ada rencana untuk kembali ke versi lama jika pembaruan baru menimbulkan masalah.

**Bukti dukung:** Prosedur change management untuk update; konfigurasi staging environment; rollback procedure; proses verifikasi update sebelum deployment.

**EDK/EIK/EEK:** Tinjau kebijakan change management; verifikasi adanya staging environment; uji prosedur rollback; periksa apakah update diverifikasi sebelum deployment.

---

## 10. Logika Bisnis

> **Konteks regulasi:** Pasal 27 ayat (10) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan alur proses bisnis dalam aplikasi tidak bisa dimanipulasi untuk mendapatkan keuntungan yang tidak semestinya atau melewati tahapan yang seharusnya wajib dilalui.

---

### a. Memproses alur logika bisnis dalam urutan langkah dan waktu yang realistis

**Penjelasan teknis:** Alur proses bisnis harus dipaksakan di sisi server dan tidak bisa di-skip atau dibalik:

- **State machine enforcement:** Implementasikan alur bisnis sebagai state machine yang eksplisit — setiap transisi state hanya bisa terjadi jika pre-condition terpenuhi. Misal: tidak bisa submit formulir tanpa melewati validasi awal.
- **Sequence validation:** Server harus memvalidasi bahwa langkah-langkah dilakukan dalam urutan yang benar — tidak bisa langsung lompat ke langkah 5 tanpa menyelesaikan langkah 1-4.
- **Timing validation:** Tambahkan validasi waktu realistis — jika proses manusia biasanya butuh minimal 30 detik, request yang selesai dalam 0.1 detik harus dicurigai (bot/automation).
- **Anti-race condition:** Gunakan database transaction, locking, atau idempotency key untuk mencegah race condition di mana dua proses bersamaan bisa mengeksploitasi jeda waktu.

**Penjelasan awam:** Alur pengajuan dokumen di kantor harus dilakukan berurutan: isi formulir → validasi → tanda tangan → submit. Sistem tidak boleh mengizinkan seseorang langsung lompat ke tahap submit tanpa melewati tahap sebelumnya. Dan jika seseorang "menyelesaikan" formulir 50 halaman dalam 1 detik, itu jelas tidak wajar — pasti menggunakan bot.

**Risiko jika tidak diterapkan:** Penyerang bisa melewati tahapan validasi, mengeksploitasi race condition, atau menggunakan bot untuk mendapatkan keuntungan yang tidak semestinya (misal: mendaftar ribuan tiket sekaligus).

**Bukti dukung:** Dokumentasi state machine/flowchart alur bisnis; pengujian skip-step (coba langsung ke langkah akhir tanpa langkah sebelumnya — harus ditolak); implementasi timing validation.

**EDK:** Tinjau apakah SOP/dokumentasi teknis mendefinisikan alur logika bisnis yang harus diikuti dan mekanisme enforcement-nya di sistem.

**EIK:** Uji bypass alur bisnis: coba langsung submit tanpa melewati tahapan wajib — sistem harus menolak. Uji race condition pada proses yang rentan.

**EEK:** Indikator: tidak ada temuan business logic bypass pada pentest, race condition tidak dapat dieksploitasi.

---

### b. Memastikan logika bisnis memiliki batasan dan validasi

**Penjelasan teknis:** Setiap aturan bisnis harus memiliki batasan yang divalidasi secara eksplisit:

- **Limit enforcement:** Batas kuantitas, batas nilai, batas frekuensi harus divalidasi di server. Contoh: tidak bisa mengajukan lebih dari 1 permohonan aktif per pengguna, nilai input tidak bisa negatif, tanggal tidak bisa di masa lampau untuk jadwal ke depan.
- **Business rule validation:** Validasi aturan bisnis yang kompleks (misal: syarat kelayakan, batas anggaran) harus dilakukan di server — tidak cukup di UI.
- **Cross-field validation:** Validasi yang melibatkan beberapa field sekaligus (misal: tanggal mulai harus sebelum tanggal selesai, total item harus sesuai jumlah yang dinyatakan).

**Penjelasan awam:** Sistem harus memiliki "aturan bisnis" yang jelas dan tidak bisa dilanggar. Seperti aturan di kantor pelayanan: satu orang hanya bisa mengajukan satu permohonan pada satu waktu, nilai tidak boleh melebihi batas anggaran. Aturan-aturan ini harus dikenforce oleh sistem — tidak bisa disiasati dengan memanipulasi data.

**Bukti dukung:** Dokumentasi business rules yang diimplementasikan; source code review: validasi batasan di server; pengujian edge case (input di batas minimum/maksimum, input negatif, dsb.).

**EDK/EIK/EEK:** Tinjau dokumentasi business rules; uji batasan dan validasi dengan input edge case; verifikasi validasi ada di server.

---

### c. Memonitor aktivitas yang tidak biasa

**Penjelasan teknis:** Implementasi **behavioral analytics** dan anomaly detection:

- **Baseline normal behavior:** Tentukan apa yang "normal" untuk setiap pengguna dan proses (frekuensi transaksi, volume data yang diakses, jam aktivitas).
- **Anomaly detection:** Deteksi penyimpangan dari baseline: login dari lokasi/IP yang tidak biasa, volume transaksi yang tiba-tiba melonjak, akses data dalam jumlah besar dalam waktu singkat.
- **SIEM integration:** Kirim log ke SIEM (Security Information and Event Management) untuk korelasi event dan deteksi pola serangan yang tersebar.
- **Alert otomatis:** Kirim notifikasi ke tim keamanan saat anomali terdeteksi.

**Penjelasan awam:** Seperti bank yang mendeteksi transaksi mencurigakan — jika tiba-tiba ada transaksi besar dari negara lain atau frekuensi transaksi yang tidak biasa, sistem otomatis memberikan peringatan. Monitoring aktivitas tidak biasa di aplikasi pemerintah bekerja sama: jika ada pengguna yang tiba-tiba mengakses ribuan data dalam hitungan menit, atau login dari lokasi yang tidak pernah digunakan sebelumnya, sistem harus memberikan peringatan.

**Bukti dukung:** Konfigurasi monitoring/alerting untuk aktivitas tidak biasa; integrasi dengan SIEM; laporan anomali yang terdeteksi; SOP response terhadap alert anomali.

**EDK/EIK/EEK:** Tinjau mekanisme monitoring dan alerting; verifikasi SIEM integration; simulasikan aktivitas tidak biasa — apakah alert terpicu?

---

### d. Membantu dalam kontrol antiotomatisasi

**Penjelasan teknis:** Mencegah otomatisasi yang tidak sah (bot, script) pada fungsi-fungsi bisnis:

- **CAPTCHA:** Tambahkan CAPTCHA (Google reCAPTCHA, hCaptcha, atau Friendly CAPTCHA) pada form yang rentan terhadap otomatisasi (login, registrasi, submit permohonan).
- **Rate limiting per aksi bisnis:** Batasi berapa kali satu user bisa melakukan aksi tertentu dalam periode waktu tertentu.
- **Honeypot fields:** Tambahkan field tersembunyi (via CSS display:none) yang hanya akan diisi oleh bot — jika field ini terisi, request dianggap dari bot.
- **Behavioral biometrics:** Analisis pola interaksi pengguna (kecepatan mengetik, gerakan mouse) untuk membedakan manusia dan bot.
- **Token bucket / leaky bucket algorithm:** Untuk API yang bisa dieksploitasi oleh bot.

**Penjelasan awam:** Beberapa fungsi harus dilindungi dari serangan bot — program otomatis yang bisa mengisi ribuan formulir atau mengakses data secara massal dalam hitungan detik. CAPTCHA adalah yang paling familiar: "klik semua gambar yang ada lampu lalu lintas" — manusia bisa, bot sulit. Mekanisme lain bekerja di belakang layar untuk membedakan perilaku manusia dari mesin.

**Bukti dukung:** Konfigurasi CAPTCHA pada form kritis; konfigurasi rate limiting per aksi bisnis; implementasi honeypot jika ada; laporan bot detection.

**EDK/EIK/EEK:** Tinjau implementasi anti-otomatisasi; verifikasi CAPTCHA aktif pada form kritis; uji rate limiting per aksi; coba simulasi bot — apakah terdeteksi dan diblokir?

---

### e. Memberikan peringatan ketika terjadi serangan otomatis atau aktivitas yang tidak biasa

**Penjelasan teknis:** Ini adalah output dari monitoring (kontrol 10c dan 10d) — mekanisme alerting yang memastikan tim keamanan mendapat notifikasi:

- **Real-time alerting:** Alert dikirim segera (bukan batch harian) saat threshold terlampaui.
- **Kanal notifikasi:** Email, SMS, Slack/Teams, PagerDuty, atau sistem ticketing internal.
- **Alert fatigue prevention:** Kalibrasi threshold dengan baik — terlalu banyak false positive menyebabkan tim mengabaikan alert. Implementasikan alert prioritization.
- **Escalation policy:** Jika alert level tinggi tidak di-acknowledge dalam waktu tertentu, eskalasi otomatis ke tingkat yang lebih tinggi.
- **Incident response integration:** Alert harus otomatis membuat tiket insiden di sistem ticketing (Jira, ServiceNow) untuk tracking dan accountability.

**Penjelasan awam:** Deteksi saja tidak cukup — tim keamanan harus diberitahu segera saat ada yang mencurigakan. Seperti alarm kebakaran yang tidak hanya berbunyi di lokasi, tapi juga langsung menghubungi pemadam kebakaran. Waktu respons sangat penting: semakin cepat tim keamanan tahu, semakin cepat bisa bertindak sebelum kerusakan meluas.

**Bukti dukung:** Konfigurasi alerting system; bukti notifikasi diterima saat simulasi serangan; SOP response insiden; sistem escalation policy.

**EDK/EIK/EEK:** Tinjau kebijakan alerting dan incident response; simulasikan serangan otomatis — apakah alert diterima tim? Verifikasi escalation policy.

---

## 11. File

> **Konteks regulasi:** Pasal 27 ayat (11) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan fitur upload/download file tidak menjadi vektor serangan — mencegah upload malware, file berbahaya, atau penggunaan berlebihan yang mengganggu layanan.

---

### a. Mengatur jumlah file untuk setiap pengguna dan kuota ukuran file yang diunggah

**Penjelasan teknis:** Batasan yang wajib diimplementasikan:

- **Ukuran file maksimum:** Tentukan ukuran maksimum per file (misal: 10MB untuk dokumen, 5MB untuk gambar). Validasi di server — jangan hanya di client. Konfigurasi di web server (Nginx `client_max_body_size`, Express `multer` limit).
- **Kuota per pengguna:** Total penyimpanan yang bisa digunakan per pengguna (misal: 100MB per akun).
- **Jumlah file maksimum:** Batasi berapa file yang bisa di-upload dalam satu request dan per periode waktu.
- **Rate limiting upload:** Batasi frekuensi upload untuk mencegah DoS melalui upload massal. Tanpa batasan ini, satu pengguna bisa menghabiskan seluruh storage server atau membuat server kewalahan (Denial of Service melalui resource exhaustion).

**Penjelasan awam:** Layanan email dan cloud storage membatasi ukuran attachment dan total storage per pengguna — bukan untuk menyulitkan, tapi untuk memastikan layanan tetap berjalan lancar untuk semua pengguna. Tanpa batasan, satu pengguna iseng atau jahat bisa mengunggah file sangat besar hingga sistem tidak bisa melayani pengguna lain.

**Bukti dukung:** Konfigurasi limit upload di web server dan aplikasi; kebijakan kuota per pengguna; pengujian: upload file melebihi batas — server harus menolak dengan pesan yang jelas.

**EDK:** Tinjau apakah kebijakan instansi mendefinisikan batasan ukuran dan kuota file upload per pengguna.

**EIK:** Uji upload file melebihi batas yang ditentukan — server harus menolak. Verifikasi batasan dikonfigurasi di sisi server (bukan hanya client-side).

**EEK:** Indikator: tidak ada insiden resource exhaustion akibat upload file tidak terbatas, batasan berfungsi konsisten di semua endpoint upload.

---

### b. Melakukan validasi file sesuai dengan tipe konten yang diharapkan

**Penjelasan teknis:** Validasi file upload harus berlapis:

- **Validasi ekstensi file:** Hanya ekstensi yang diizinkan yang diterima (allowlist, bukan blacklist). Misal: hanya `.pdf`, `.docx`, `.jpg`, `.png`.
- **Validasi MIME type di server:** Jangan percaya MIME type yang dikirim client (`Content-Type` header bisa dipalsukan). Periksa magic bytes (file signature) menggunakan library seperti `python-magic` atau `file-type` (Node.js). File PDF selalu dimulai dengan `%PDF-`, PNG dengan `\x89PNG`, dsb.
- **Deep content validation:** Untuk dokumen Office, bisa dilakukan scan struktur internal.
- **Rename file setelah upload:** Ganti nama file dengan nama yang di-generate server (UUID/hash) — jangan gunakan nama asli dari user karena bisa mengandung path traversal (misal: `../../etc/passwd`).
- **Jangan simpan di webroot:** File yang di-upload tidak boleh langsung tersedia sebagai URL yang bisa dieksekusi oleh web server. Simpan di luar webroot atau di object storage (S3, MinIO).

**Penjelasan awam:** Penyerang bisa mengganti nama file berbahaya menjadi sesuatu yang terlihat aman — misal, virus yang diubah namanya menjadi "laporan.pdf". Validasi file yang benar memeriksa "isi" file, bukan hanya nama atau ekstensinya — seperti petugas bandara yang memeriksa isi bagasi bukan hanya membaca label luarnya.

**Risiko jika tidak diterapkan:** Upload malware/web shell yang bisa dieksekusi di server, path traversal attack, upload file executable yang bisa memicu RCE.

**Bukti dukung:** Source code review: validasi menggunakan magic bytes bukan hanya ekstensi; konfigurasi penyimpanan file di luar webroot; pengujian: upload file executable yang disamarkan sebagai PDF — server harus menolak.

**EDK:** Tinjau apakah standar pengembangan instansi mewajibkan validasi file upload menggunakan pemeriksaan tipe konten aktual (magic bytes) dan allowlist ekstensi.

**EIK:** Uji upload file berbahaya yang disamarkan (ganti ekstensi PHP menjadi .jpg, dsb.) — server harus menolak berdasarkan konten aktual, bukan hanya ekstensi.

**EEK:** Indikator: tidak ada web shell atau file berbahaya yang berhasil di-upload dan dieksekusi pada pentest.

---

### c. Melakukan pelindungan terhadap metadata input dan metadata file

**Penjelasan teknis:** File yang di-upload sering mengandung metadata yang tidak diinginkan:

- **EXIF data pada gambar:** Foto yang diambil smartphone mengandung EXIF metadata yang bisa berisi: GPS koordinat (lokasi pengambilan foto), model device, nama pemilik. Ini adalah privacy issue serius jika file yang di-upload kemudian bisa diakses publik.
- **Document metadata:** File Word/PDF mengandung metadata: nama penulis, nama perusahaan, histori edit, komentar tersembunyi. Ini bisa mengekspos informasi internal.
- **Stripping metadata:** Sebelum menyimpan atau mempublikasikan file, strip metadata menggunakan library: `Pillow` (Python) untuk gambar, `python-docx`, `PyMuPDF` untuk dokumen. Atau gunakan tools seperti `ExifTool`, `mat2`.
- **Metadata injection via filename:** Nama file yang mengandung karakter khusus bisa menyebabkan path traversal atau injection — selalu rename dan sanitasi.

**Penjelasan awam:** File digital sering membawa "label tersembunyi" yang tidak terlihat saat dibuka biasa — foto mungkin menyimpan koordinat GPS lokasi pengambilan, dokumen Word menyimpan nama penulis asli dan histori edit. Jika file ini di-publish tanpa dibersihkan, informasi sensitif tersebut bisa bocor tanpa disadari.

**Bukti dukung:** Implementasi metadata stripping sebelum file disimpan/dipublikasikan; pengujian: upload foto, download — apakah EXIF data sudah dihapus?; kebijakan pengelolaan metadata file.

**EDK/EIK/EEK:** Tinjau kebijakan pengelolaan metadata file; verifikasi implementasi metadata stripping; uji dengan file yang mengandung metadata sensitif.

---

### d. Melakukan pemindaian file yang diperoleh dari sumber yang tidak dipercaya

**Penjelasan teknis:** Semua file yang di-upload pengguna dianggap tidak dipercaya dan harus dipindai:

- **Antivirus/anti-malware scanning:** Integrasikan antivirus engine ke dalam pipeline upload. Opsi: ClamAV (open source, self-hosted), atau cloud AV API (VirusTotal, Windows Defender ATP API). Scan dilakukan sebelum file disimpan permanen.
- **Sandboxed analysis:** File yang mencurigakan bisa dianalisis di sandbox terisolasi (Cuckoo Sandbox, ANY.RUN) sebelum diterima.
- **Asynchronous scanning:** Untuk performa, scan bisa dilakukan secara async — file di-quarantine sementara, baru dipindahkan ke penyimpanan final setelah scan selesai dan clean.
- **Scan file dari sumber eksternal:** Tidak hanya file dari user, tapi juga file yang di-download dari URL atau API eksternal.

**Penjelasan awam:** Seperti surat yang masuk ke kantor pemerintah melewati mesin X-ray dan detektor bahan berbahaya sebelum sampai ke meja pegawai. Semua file yang diterima dari pengguna — tidak peduli siapa pengirimnya — harus dipindai terlebih dahulu untuk memastikan tidak mengandung virus atau malware sebelum disimpan di sistem.

**Bukti dukung:** Konfigurasi antivirus scanning di pipeline upload; log hasil scan (file yang ditolak karena virus); dokumentasi integrasi AV engine.

**EDK:** Tinjau apakah kebijakan instansi mewajibkan pemindaian antivirus/malware untuk semua file yang diunggah pengguna.

**EIK:** Verifikasi antivirus scanning aktif di pipeline upload. Uji dengan file EICAR test file — sistem harus mendeteksi dan menolak.

**EEK:** Indikator: semua file yang di-upload dipindai sebelum disimpan, malware terdeteksi dan di-quarantine, tidak ada file berbahaya yang lolos ke penyimpanan production.

---

### e. Melakukan konfigurasi server untuk mengunduh file sesuai ekstensi yang ditentukan

**Penjelasan teknis:** Konfigurasi server harus memastikan file yang di-download diperlakukan dengan benar oleh browser:

- **Content-Disposition header:** Tambahkan `Content-Disposition: attachment; filename="nama-file.pdf"` untuk memaksa browser mendownload file daripada menjalankannya di browser.
- **Content-Type yang tepat:** Set MIME type yang benar untuk setiap tipe file — hindari `application/octet-stream` generik yang bisa disalahgunakan.
- **X-Content-Type-Options: nosniff:** Mencegah browser menebak tipe konten yang berbeda dari yang dideklarasikan.
- **Batasi ekstensi yang bisa didownload:** Server hanya mengizinkan download file dengan ekstensi yang sudah diizinkan — file dengan ekstensi tidak dikenal atau berbahaya tidak bisa diakses via URL langsung.
- **Prevent direct execution:** File yang di-upload pengguna tidak boleh bisa dieksekusi oleh web server (pastikan `php_flag engine off` atau konfigurasi serupa di direktori upload, jika menggunakan server-side scripting).

**Penjelasan awam:** Server harus mengontrol bagaimana browser menangani file yang didownload. Jika file PHP berbahaya yang di-upload bisa diakses via URL dan dieksekusi oleh server, penyerang mendapat akses penuh. Konfigurasi yang benar memastikan file upload diperlakukan sebagai data yang didownload — bukan kode yang dijalankan.

**Bukti dukung:** Konfigurasi web server (Nginx/Apache) untuk direktori file upload; pengujian: upload file PHP, akses via URL — server harus mengembalikan file sebagai download, bukan mengeksekusinya; verifikasi Content-Disposition header.

**EDK/EIK/EEK:** Tinjau konfigurasi server untuk file download; verifikasi Content-Disposition header aktif; uji akses langsung ke file yang di-upload.

---

## 12. Keamanan API dan Web Service

> **Konteks regulasi:** Pasal 27 ayat (12) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan API dan web service yang diekspos diamankan dengan benar — baik dari sisi konfigurasi, autentikasi/otorisasi, validasi input, maupun perlindungan terhadap eksploitasi otomatis.

---

### a. Melakukan konfigurasi layanan web

**Penjelasan teknis:** Konfigurasi dasar web service yang aman:

- **Nonaktifkan metode HTTP yang tidak diperlukan:** Hanya izinkan GET, POST, PUT, DELETE sesuai kebutuhan. Nonaktifkan TRACE (rentan terhadap Cross-Site Tracing), OPTIONS jika tidak diperlukan untuk CORS.
- **CORS yang ketat:** Konfigurasi `Access-Control-Allow-Origin` hanya untuk domain yang memang diizinkan — jangan gunakan wildcard `*` untuk API yang memerlukan autentikasi.
- **Disable directory listing:** Web server tidak boleh menampilkan daftar file dalam direktori.
- **Sembunyikan informasi server:** Hilangkan atau minimize header yang mengekspos informasi server (`Server: nginx`, `X-Powered-By: PHP/8.1`).
- **Konfigurasi timeout yang tepat:** Request timeout, connection timeout untuk mencegah slowloris attack.
- **Hardening web server:** Ikuti hardening guide untuk web server yang digunakan (CIS Benchmark untuk Nginx/Apache).

**Penjelasan awam:** Konfigurasi web service seperti mengatur tata tertib kantor: pintu mana yang boleh digunakan (HTTP method yang diizinkan), siapa dari luar yang boleh masuk (CORS policy), dan tidak boleh ada papan pengumuman yang menunjukkan denah internal kantor (disable directory listing dan server info).

**Bukti dukung:** Konfigurasi web server (Nginx/Apache config); hasil scan headers menggunakan securityheaders.com; verifikasi CORS policy; hardening checklist.

**EDK:** Tinjau apakah standar konfigurasi server instansi mengacu pada hardening guide yang diakui (CIS Benchmark, OWASP).

**EIK:** Periksa konfigurasi web server: CORS, HTTP methods yang diizinkan, directory listing, server header. Gunakan tools seperti Nikto, securityheaders.com.

**EEK:** Indikator: tidak ada konfigurasi default yang tidak aman, CORS terkonfigurasi ketat, directory listing dinonaktifkan.

---

### b. Memverifikasi uniform resource identifier API tidak menampilkan informasi yang berpotensi sebagai celah keamanan

**Penjelasan teknis:** Desain URL/endpoint API harus mengikuti prinsip information hiding:

- **Jangan ekspos ID internal:** Gunakan UUID atau slug daripada auto-increment integer ID di URL (`/api/users/550e8400` lebih baik dari `/api/users/1`). Integer ID mudah di-enumerate untuk IDOR.
- **Hindari informasi sensitif di URL:** Tidak boleh ada token, password, atau data sensitif di URL/query string — tercatat di server log dan browser history.
- **Konsistensi respons 404:** Untuk resource yang tidak ada atau tidak bisa diakses pengguna, kembalikan 404 (bukan 403) — mencegah penyerang membedakan "tidak ada" vs "ada tapi tidak bisa diakses".
- **Versioning API:** Gunakan versioning (misal: `/api/v1/`) untuk manajemen perubahan yang terkontrol.
- **Hindari verbose endpoint naming:** Nama endpoint tidak boleh mengungkapkan detail implementasi (misal: jangan `/api/mysql-query`, `/api/exec-command`).

**Penjelasan awam:** URL API seperti alamat yang diberikan kepada tamu — sebaiknya tidak mengandung informasi internal yang tidak perlu diketahui tamu. Nomor urut yang mudah ditebak (1, 2, 3...) memungkinkan orang iseng mencoba semua nomor untuk mengakses data yang bukan miliknya. ID acak yang panjang jauh lebih aman.

**Bukti dukung:** Review desain URL API; verifikasi tidak ada informasi sensitif di URL; uji IDOR dengan enumerate ID; review API documentation apakah tidak mengekspos informasi berlebihan.

**EDK/EIK/EEK:** Tinjau desain URL API; uji IDOR; verifikasi tidak ada informasi teknis yang terekspos di URL.

---

### c. Membuat keputusan otorisasi

**Penjelasan teknis:** Setiap API endpoint harus membuat keputusan otorisasi yang eksplisit:

- **Default deny:** Jika tidak ada otorisasi yang dikonfigurasi, akses ditolak — bukan diizinkan.
- **Otorisasi di setiap endpoint:** Tidak ada endpoint yang "terlupa" diproteksi. Gunakan middleware/interceptor untuk memastikan semua endpoint di-cover.
- **Object-level authorization:** Selain memeriksa apakah user punya akses ke tipe resource, periksa juga apakah user punya akses ke instance spesifik resource tersebut (mencegah BOLA — Broken Object Level Authorization, termasuk dalam OWASP API Security Top 10).
- **Function-level authorization:** Pastikan aksi sensitif (delete, update, admin action) memerlukan level otorisasi yang tepat (BFLA — Broken Function Level Authorization).

**Penjelasan awam:** Setiap "pintu" di API (endpoint) harus punya penjaga yang memutuskan siapa yang boleh masuk. Tidak boleh ada pintu yang terlupa tidak dijaga. Dan penjaga harus memeriksa tidak hanya "apakah kamu punya tiket masuk" tapi juga "apakah tiket kamu berlaku untuk ruangan ini dan untuk barang yang ada di dalamnya".

**Bukti dukung:** Source code review: setiap endpoint memiliki authorization check; pengujian BOLA dan BFLA; dokumentasi authorization matrix.

**EDK/EIK/EEK:** Tinjau authorization matrix API; uji akses endpoint tanpa otorisasi yang tepat; uji BOLA dengan mengakses resource milik user lain.

---

### d. Menampilkan metode RESTful hypertext transfer protocol apabila input pengguna dinyatakan valid

**Penjelasan teknis:** API hanya memproses request dan mengembalikan respons setelah validasi input berhasil:

- **Validate before process:** Seluruh validasi input harus dilakukan sebelum logika bisnis dijalankan — tidak ada partial processing.
- **HTTP method semantics:** Gunakan HTTP method sesuai semantiknya: GET untuk read (idempotent, tidak mengubah state), POST untuk create, PUT/PATCH untuk update, DELETE untuk hapus. Jangan gunakan GET untuk aksi yang mengubah state (rentan terhadap CSRF dan caching).
- **Status code yang tepat:** Kembalikan HTTP status code yang sesuai: 200 OK, 201 Created, 400 Bad Request (validasi gagal), 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity (semantic validation error), 500 Internal Server Error.
- **Respons konsisten:** Format respons API harus konsisten (JSON schema yang terdefinisi) untuk semua endpoint.

**Penjelasan awam:** API yang baik seperti loket pelayanan yang profesional: hanya memproses permintaan yang lengkap dan valid, mengembalikan jawaban yang jelas dan konsisten, dan menggunakan "kode status" yang tepat (misalnya: "permintaan diterima", "data tidak valid", "anda tidak berwenang") agar pengguna API tahu apa yang terjadi.

**Bukti dukung:** API documentation (OpenAPI/Swagger spec); pengujian dengan input tidak valid — apakah validasi berjalan sebelum processing?; review HTTP method yang digunakan; verifikasi status code yang dikembalikan.

**EDK/EIK/EEK:** Tinjau desain API (HTTP methods, status codes); uji API dengan input tidak valid sebelum processing; verifikasi konsistensi respons.

---

### e. Menggunakan validasi skema dan verifikasi sebelum menerima input

**Penjelasan teknis:** Validasi input API menggunakan schema formal:

- **JSON Schema validation:** Definisikan schema yang ketat untuk setiap request body menggunakan JSON Schema (OpenAPI Specification). Validasi secara otomatis menggunakan library: `jsonschema` (Python), `ajv` (Node.js), Hibernate Validator (Java).
- **OpenAPI/Swagger spec:** Buat dan maintain API specification — ini sekaligus menjadi dokumentasi dan dasar untuk auto-generated validation.
- **Strict mode:** Tolak field yang tidak ada dalam schema (additionalProperties: false) — mencegah mass assignment dan parameter pollution.
- **Tipe data yang ketat:** Definisikan tipe data, format (email, date, uuid), range nilai, dan pola regex dalam schema.

**Penjelasan awam:** Sebelum menerima data dari pengguna, API harus memverifikasi bahwa data tersebut sesuai dengan "template" yang sudah ditetapkan — jenis datanya benar, format sesuai, dan tidak ada kolom yang tidak diharapkan. Seperti formulir resmi yang hanya menerima data dalam format tertentu dan menolak data yang tidak sesuai kolom yang tersedia.

**Bukti dukung:** OpenAPI specification yang lengkap; konfigurasi JSON schema validation di API; pengujian: kirim request dengan field ekstra atau tipe data salah — harus ditolak.

**EDK/EIK/EEK:** Tinjau apakah API memiliki schema validation yang terdokumentasi; uji API dengan request yang melanggar schema; verifikasi strict mode aktif.

---

### f. Menggunakan metode pelindungan layanan berbasis web

**Penjelasan teknis:** Lapisan perlindungan tambahan untuk API:

- **API Gateway:** Gunakan API Gateway (Kong, AWS API Gateway, Nginx + Lua) sebagai single entry point yang menerapkan: autentikasi, rate limiting, logging, dan routing secara terpusat.
- **WAF (Web Application Firewall):** Deploy WAF (ModSecurity, AWS WAF, Cloudflare WAF) untuk memfilter traffic berbahaya sebelum sampai ke aplikasi. WAF mendeteksi pola serangan umum (SQLi, XSS, LFI, RFI).
- **DDoS protection:** Gunakan layanan proteksi DDoS (Cloudflare, AWS Shield) untuk memfilter traffic flood.
- **API key / OAuth 2.0:** Autentikasi API menggunakan API key (untuk server-to-server) atau OAuth 2.0 dengan token (untuk user-facing API).
- **Mutual TLS (mTLS):** Untuk API sensitif antar instansi pemerintah, pertimbangkan mTLS di mana kedua sisi memverifikasi sertifikat.

**Penjelasan awam:** API membutuhkan lapisan keamanan berlapis — seperti pos keamanan di berbagai titik sebelum masuk ke gedung utama. WAF adalah pos pertama yang menyaring tamu mencurigakan, API Gateway adalah resepsionis yang memverifikasi identitas dan tujuan, dan autentikasi API adalah ID card yang harus ditunjukkan.

**Bukti dukung:** Konfigurasi API Gateway; konfigurasi WAF dan rules yang aktif; bukti proteksi DDoS; mekanisme autentikasi API (API key, OAuth 2.0).

**EDK/EIK/EEK:** Tinjau arsitektur keamanan API; verifikasi WAF dan API Gateway aktif; uji apakah request tanpa autentikasi ditolak; verifikasi rate limiting berfungsi.

---

### g. Menerapkan kontrol antiotomatisasi

**Penjelasan teknis:** Sama seperti kontrol bisnis 10d, tapi spesifik untuk API:

- **API-specific rate limiting:** Rate limit per API key, per endpoint, per IP. Berbeda limitnya antara endpoint read dan write.
- **Throttling:** Kurangi kecepatan response secara progresif saat mendekati limit — bukan langsung blok.
- **Bot detection pada API:** Analisis pola request: interval yang terlalu reguler, tidak ada variasi User-Agent, volume yang tidak realistis.
- **CAPTCHA untuk API publik:** Jika API diakses via web app, proteksi dengan CAPTCHA untuk aksi sensitif.
- **Idempotency keys:** Untuk aksi yang tidak boleh dieksekusi dua kali (pembayaran, submit permohonan), gunakan idempotency key untuk mencegah double-submit meski request dikirim dua kali.

**Penjelasan awam:** API sangat rentan terhadap serangan otomatis karena dirancang untuk dikonsumsi oleh program — penyerang tinggal menulis script untuk mengirim ribuan request. Rate limiting dan anti-bot detection memastikan API tidak bisa disalahgunakan oleh program otomatis yang mencoba mengeksploitasi sistem secara massal.

**Bukti dukung:** Konfigurasi rate limiting per endpoint; implementasi idempotency key; monitoring traffic API untuk pola bot; log penolakan request berlebihan.

**EDK/EIK/EEK:** Tinjau rate limiting API; uji dengan kirim request melebihi limit; verifikasi idempotency untuk aksi kritis; simulasikan bot traffic.

---

## 13. Keamanan Konfigurasi

> **Konteks regulasi:** Pasal 27 ayat (13) Perban BSSN No. 4 Tahun 2021.
> 
> **Tujuan:** Memastikan server, framework, dan semua komponen infrastruktur dikonfigurasi dengan aman — menghilangkan celah yang muncul bukan dari kode aplikasi, tapi dari konfigurasi yang salah atau tidak aman.

---

### a. Mengonfigurasi server sesuai rekomendasi server aplikasi dan kerangka kerja aplikasi yang digunakan

**Penjelasan teknis:** Gunakan hardening guide yang sudah teruji sebagai acuan konfigurasi:

- **CIS Benchmarks:** Center for Internet Security menerbitkan hardening guide untuk hampir semua platform (Linux, Windows Server, Nginx, Apache, MySQL, PostgreSQL, Docker, Kubernetes). Ini adalah referensi standar industri.
- **Framework hardening guide:** Setiap framework punya checklist konfigurasi aman:
    - Django: `SECURE_SSL_REDIRECT`, `SESSION_COOKIE_SECURE`, `CSRF_COOKIE_SECURE`, `SECURE_HSTS_SECONDS`, `X_FRAME_OPTIONS`, `SECURE_CONTENT_TYPE_NOSNIFF`.
    - Laravel: `APP_DEBUG=false`, `HTTPS only`, correct file permissions.
    - Spring Boot: actuator endpoint security, HTTPS configuration.
- **OS hardening:** Nonaktifkan service yang tidak diperlukan, tutup port yang tidak digunakan, terapkan principle of least privilege untuk system user.
- **Database hardening:** Nonaktifkan remote root access, hapus test database, ganti default credential, batasi network binding.

**Penjelasan awam:** Setiap platform teknologi (server, database, framework) punya "pengaturan pabrik" yang tidak selalu aman — mirip router WiFi baru yang password defaultnya "admin". Hardening adalah proses mengubah semua pengaturan default ke konfigurasi yang aman sesuai panduan dari para ahli keamanan.

**Bukti dukung:** Checklist hardening yang sudah diaplikasikan (referensi CIS Benchmark); konfigurasi framework (settings.py, .env); hasil vulnerability scan infrastruktur; bukti nonaktifnya service yang tidak diperlukan.

**EDK:** Tinjau apakah instansi memiliki panduan atau kebijakan konfigurasi server yang mengacu pada standar hardening yang diakui (CIS Benchmark atau setara).

**EIK:** Lakukan configuration review menggunakan CIS Benchmark sebagai acuan. Verifikasi service yang tidak diperlukan sudah dinonaktifkan, konfigurasi framework sudah di-hardened.

**EEK:** Indikator: hasil configuration audit menunjukkan kepatuhan terhadap hardening guide, tidak ditemukan konfigurasi default yang tidak aman saat pentest.

---

### b. Mendokumentasikan, menyalin konfigurasi, dan semua dependensi

**Penjelasan teknis:** Infrastructure as Code (IaC) dan configuration management:

- **IaC (Infrastructure as Code):** Dokumentasikan semua konfigurasi infrastruktur dalam kode yang bisa di-version-control: Terraform, Ansible, Docker Compose, Kubernetes manifests. Ini memastikan konfigurasi reproducible dan terdokumentasi.
- **Configuration management:** Gunakan tools seperti Ansible, Chef, Puppet untuk menerapkan konfigurasi secara konsisten di semua server.
- **Dependency documentation:** `requirements.txt` (Python), `package.json` + `package-lock.json` (Node.js), `pom.xml` (Maven), `Gemfile.lock` (Ruby) — semua dependencies terdokumentasi dengan versi yang spesifik.
- **Backup konfigurasi:** Konfigurasi server di-backup secara berkala dan disimpan di lokasi yang aman dan terpisah dari production server.
- **Change documentation:** Setiap perubahan konfigurasi didokumentasikan — siapa yang mengubah, apa yang diubah, kapan, dan mengapa.

**Penjelasan awam:** Konfigurasi sistem seperti "resep" yang harus terdokumentasi dengan baik. Jika server tiba-tiba rusak dan harus diganti, resep ini yang digunakan untuk membangun ulang sistem yang identik. Tanpa dokumentasi, membangun ulang sistem bisa memakan waktu sangat lama dan hasilnya mungkin tidak sama.

**Bukti dukung:** Repository IaC (Terraform, Ansible, Docker Compose); lock file untuk dependencies; backup konfigurasi yang terverifikasi; change log konfigurasi.

**EDK:** Tinjau apakah instansi memiliki kebijakan dokumentasi konfigurasi dan penggunaan IaC atau configuration management tools.

**EIK:** Verifikasi konfigurasi terdokumentasi dalam IaC; verifikasi semua dependency terdokumentasi dengan versi yang spesifik; verifikasi backup konfigurasi tersedia.

**EEK:** Indikator: sistem bisa di-rebuild dari dokumentasi/IaC yang ada, tidak ada "undocumented configuration" yang hanya ada di satu server.

---

### c. Menghapus fitur, dokumentasi, sampel, dan konfigurasi yang tidak diperlukan

**Penjelasan teknis:** Setiap komponen yang tidak diperlukan adalah permukaan serangan yang tidak perlu:

- **Default credentials:** Hapus atau ubah semua akun dan password default (database `root`, admin panel default, framework default user).
- **Sample/example files:** Hapus file contoh yang sering ada dalam instalasi default — misal `phpinfo.php`, contoh konfigurasi, demo aplikasi. File-file ini sering mengekspos informasi tentang konfigurasi sistem.
- **Unused features/plugins:** Nonaktifkan atau hapus fitur, plugin, atau modul yang tidak digunakan. Setiap fitur yang aktif adalah permukaan serangan potensial.
- **Debug/development tools:** Pastikan tools debug (phpmyadmin, debug toolbar, Swagger UI dengan full access) tidak tersedia di production, atau diproteksi dengan autentikasi yang ketat.
- **Default error pages:** Ganti dengan custom error page yang tidak mengekspos informasi teknis.
- **Unused open ports:** Tutup semua port yang tidak diperlukan menggunakan firewall.

**Penjelasan awam:** Gedung yang aman tidak memiliki pintu atau jendela yang tidak perlu — setiap bukaan adalah potensi titik masuk bagi penyusup. Begitu pula sistem: setiap fitur yang tidak diperlukan, setiap file contoh yang tertinggal, setiap akun default yang tidak dihapus adalah "pintu" yang tidak dijaga. Bersih-bersih sebelum sistem digunakan publik adalah langkah keamanan yang sangat penting.

**Bukti dukung:** Tidak ada file default atau sampel yang tertinggal (cek `phpinfo.php`, `/examples`, `/demo`); semua akun default sudah diubah atau dihapus; daftar port yang terbuka menunjukkan hanya yang diperlukan; plugin/modul yang tidak digunakan sudah dinonaktifkan.

**EDK:** Tinjau apakah checklist deployment instansi mencakup penghapusan fitur, dokumentasi, dan konfigurasi default yang tidak diperlukan sebelum go-live.

**EIK:** Lakukan audit: cari file default, sampel, dan akun default. Scan port terbuka. Verifikasi debug tools tidak dapat diakses dari internet. Periksa apakah ada modul/plugin yang tidak digunakan tapi masih aktif.

**EEK:** Indikator: tidak ada file sampel atau akun default yang ditemukan pada pentest, semua port terbuka memiliki justifikasi yang terdokumentasi.

---

### d. Memvalidasi integritas aset jika aset aplikasi diakses secara eksternal

**Penjelasan teknis:** Aset yang diakses dari sumber eksternal harus diverifikasi integritasnya:

- **Sub-resource Integrity (SRI):** Untuk JavaScript dan CSS yang di-load dari CDN, tambahkan atribut `integrity` dan `crossorigin`:
    
    ```html
    <script src="https://cdn.example.com/library.js"        integrity="sha384-[hash]"        crossorigin="anonymous"></script>
    ```
    
    Browser akan menolak menjalankan script jika hash tidak cocok — mencegah CDN compromise atau MITM.
- **Package integrity verification:** Saat install dependencies, verifikasi checksum (npm menggunakan `integrity` field dalam `package-lock.json`, pip mendukung hash checking).
- **Container image signing:** Docker image yang di-pull dari registry harus di-sign dan signature-nya diverifikasi (Docker Content Trust, Cosign + Sigstore).
- **Monitoring external dependencies:** Pantau apakah library/CDN yang digunakan masih aktif dan tidak mengalami compromise.

**Penjelasan awam:** Ketika website menggunakan file JavaScript dari server lain (CDN), ada risiko server tersebut di-hack dan file-nya diganti dengan versi berbahaya. Sub-resource Integrity seperti "sidik jari" dari file yang diharapkan — jika file yang diterima tidak cocok sidik jarinya, browser langsung menolak menjalankannya. Ini memastikan bahwa meskipun server eksternal dikompromikan, website tetap aman.

**Bukti dukung:** Source code review: semua CDN resources memiliki atribut SRI; konfigurasi Docker Content Trust; proses verifikasi checksum dependencies.

**EDK:** Tinjau apakah kebijakan pengembangan instansi mewajibkan penggunaan SRI untuk aset eksternal dan verifikasi integritas dependency.

**EIK:** Review source code HTML: apakah semua script/style dari CDN memiliki atribut integrity? Verifikasi Docker image signing jika menggunakan container.

**EEK:** Indikator: 100% aset dari CDN menggunakan SRI, tidak ada aset eksternal yang di-load tanpa verifikasi integritas.

---

### e. Menggunakan respons aplikasi dan konten yang aman

**Penjelasan teknis:** Security headers yang wajib dikonfigurasi pada semua response aplikasi:

- **Content-Security-Policy (CSP):** Kontrol sumber resource yang diizinkan browser untuk di-load dan dieksekusi. Ini adalah pertahanan utama terhadap XSS.
    
    ```
    Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-[random]'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-ancestors 'none';
    ```
    
- **X-Frame-Options: DENY:** Mencegah halaman di-embed dalam iframe (melindungi dari clickjacking attack).
- **X-Content-Type-Options: nosniff:** Mencegah MIME type sniffing.
- **Referrer-Policy: no-referrer:** Mengontrol informasi Referer yang dikirim — mencegah kebocoran URL internal.
- **Permissions-Policy:** Mengontrol akses ke browser API (camera, microphone, geolocation).
- **Cache-Control:** Untuk halaman yang berisi data sensitif: `Cache-Control: no-store, no-cache, must-revalidate`.
- **Remove sensitive headers:** Hapus atau minimize `Server`, `X-Powered-By` yang mengekspos informasi teknologi. Tools untuk audit: securityheaders.com, Mozilla Observatory.

**Penjelasan awam:** HTTP headers keamanan seperti instruksi yang diberikan server kepada browser: "jangan izinkan halaman ini dibuka dalam frame website lain" (mencegah clickjacking), "hanya jalankan script dari domain saya sendiri" (mencegah XSS), "jangan simpan halaman ini di cache" (melindungi data sensitif). Instruksi-instruksi ini tidak terlihat oleh pengguna, tapi sangat penting untuk keamanan.

**Risiko jika tidak diterapkan:** Clickjacking attack, XSS melalui injeksi konten, kebocoran informasi sensitif melalui cache atau referrer header.

**Bukti dukung:** Hasil scan headers menggunakan securityheaders.com (target grade A atau A+); review response headers menggunakan browser developer tools; konfigurasi web server yang menambahkan security headers.

**EDK:** Tinjau apakah standar pengembangan instansi mendefinisikan security headers yang wajib dikonfigurasi pada semua aplikasi web.

**EIK:** Scan semua aplikasi menggunakan securityheaders.com atau Mozilla Observatory. Verifikasi setiap security header yang diwajibkan ada dan terkonfigurasi dengan benar. Review konfigurasi web server yang mengatur header tersebut.

**EEK:** Indikator: semua aplikasi mendapat grade A minimal dari securityheaders.com, tidak ada security header kritis yang hilang, tidak ada temuan clickjacking atau header-related vulnerability pada pentest.