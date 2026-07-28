const data = {
  slug: 'anita_husni',
  theme: 'theme-1',
  title: 'Anita & Husni Wedding',
  shortNames: 'Anita & Husni',
  description: 'Minggu, 5 November 2023',
  ogImage: '/couples/anita_husni/home.png',
  // Original page shows a decorative illustration (not the couple's own
  // photo) in the Home hero slot — og:image still uses the real photo above.
  heroImage: '/couples/anita_husni/illustration.png',

  // Standardized order across all Theme 1 couples: bride is always shown
  // first, then groom (per user direction — some original pages displayed
  // groom first; this normalizes display order across the theme).
  bride: {
    name: 'Anita Nurrispa',
    nickname: 'Ade Nita',
    parents: "Putri ke-2 dari Bpk Aat Syafa'at & Ibu Tati Rahmawati",
    instagram: 'https://instagram.com/anitanurrispa06',
  },
  groom: {
    name: 'Muhammad Husni Thamrin',
    nickname: 'Uni',
    parents: 'Putra ke-10 dari Bpk Apud Mahpudin & Ibu Ikah Atikah',
    instagram: 'https://instagram.com/panggilsajahusni',
  },

  event: {
    countdownTarget: '2023-11-05T11:00:00',
    calendarStart: '2023-11-05T09:00:00',
    calendarEnd: '2023-11-05T15:00:00',
    akad: {
      date: 'Minggu, 05 November 2023',
      time: '09.00 s/d 11.00 WIB',
      address:
        'Kp. Jati RT 002 RW 010 Desa Dangdeur Kec. Banyuresmi Kab. Garut',
    },
    resepsi: {
      date: 'Minggu, 05 November 2023',
      time: '11.00 s/d 15.00 WIB',
      address:
        'Kp. Jati RT 002 RW 010 Desa Dangdeur Kec. Banyuresmi Kab. Garut',
    },
    mapsLink: 'https://maps.app.goo.gl/Z1AMZyT86ZJLoPhLA',
    location: {lat: -7.133805, lng: 107.971694},
  },

  accounts: [
    {
      bankLogoPath: '/bankLogo/dana.png',
      bankName: 'DANA',
      number: '087836544816',
      holder: 'Anita Nurrispa',
    },
    {
      bankLogoPath: '/bankLogo/dana.png',
      bankName: 'DANA',
      number: '081398055757',
      holder: 'Muhammad Husni Thamrin',
    },
  ],

  story: [
    {
      detail:
        "Tanggal 27 Oktober 2022 pertemuan pertama kami, dia datang bersilaturahmi ke rumah untuk bertemu dengan kedua orang tua dan mengutarakan niat baiknya untuk ta'aruf",
    },
    {
      detail:
        'Hari demi hari kita lalui. Tepat pada tanggal 11 Desember 2022 lalu, kami mengadakan acara pertemuan kedua belah pihak dan tidak disangka ternyata dia langsung melamar, Masyaallah.',
    },
    {
      detail:
        "5 November 2023 Insyaallah atas izin Allah dan do'a restu dari kedua orang tua, keluarga, guru-guru tercinta serta sahabat, kami akan melangsungkan pernikahan kami.",
    },
    {
      detail:
        'Ini akan menjadi sebuah cerita cinta dengan coretan tinta emas, yang akan di baca dan di lihat oleh anak cucu di kemudian hari',
    },
  ],
  gallery: null,

  rsvpEndpoint: 'https://wedding-inv-be.vercel.app/nita_uni',
  audioUrl:
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f1117370826d688c5_d20230928_m150301_c005_v0501007_t0015_u01695913381017',
};

export default data;
