// es 5

// es 6

// modul member kelas

class siswa {
  constructor(username, password, nama_kelas) {
    this.username = username;
    this.password = password;
    this.nama_kelas = nama_kelas;
  }

  gabung() {
    console.log(
      "Selamat " + this.username + " Telah Bergabung ! " + this.nama_kelas
    );
  }
}

let tambahSiswa = new siswa(`kadek`, `12345`, `web design`);
tambahSiswa.gabung();

// inhertance
// anak dari class

class langganan extends siswa {
  constructor(username, paket) {
    //super :  ambil username dari siswa
    super(username);
    this.paket = paket;
  }

  gabungPaket() {
    console.log(`hi ${this.username} telah berlangganan paket ${this.paket} `);
  }
}

let tambahLangganan = new langganan("kadek", "premium");
tambahLangganan.gabungPaket();
tambahLangganan.gabung();
