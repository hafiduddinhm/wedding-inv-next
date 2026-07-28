const data = {
  slug: 'romi_rosyi',
  theme: 'theme-1',
  title: 'Romi & Rosyi Wedding',
  shortNames: 'Romi & Rosyi',
  description: 'Sabtu, 21 Oktober 2023',
  ogImage: '/couples/romi_rosyi/home.webp',
  heroImage: '/couples/romi_rosyi/home.webp',
  // This couple's original page frames/masks the hero photo instead of
  // showing it plain (theme-owned FRAME.png/MASK.svg assets) — Home.js
  // switches rendering style based on this flag.
  heroFramed: true,

  bride: {
    name: 'Rosyi Indah Putri',
    nickname: 'Oci',
    parents: 'Putri kedua dari Bpk Mohamad Rosid & Ibu Susi Marlina',
    instagram: 'https://instagram.com/ciaocii_',
  },
  groom: {
    name: 'Romi Muhammad Padli, S.Pd.',
    nickname: 'Omi',
    parents: "Putra kedua dari Bpk Amun Ma'mun & Ibu Engkay Sanusi",
    instagram: 'https://instagram.com/RomiMuhammadpadli',
  },

  event: {
    countdownTarget: '2023-10-21T10:00:00',
    calendarStart: '2023-10-21T10:00:00',
    calendarEnd: '2023-10-21T16:00:00',
    akad: {
      date: 'Sabtu, 21 Oktober 2023',
      time: '08.00 s/d 09.00 WIB',
      address:
        'Perumahan Hegarmanah Indah RT 02 RW 10 HG. 04 No. 58 Desa Hegarmanah Kec. Cikancung Kab. Bandung',
    },
    resepsi: {
      date: 'Sabtu, 21 Oktober 2023',
      time: '10.00 s/d 16.00 WIB',
      address:
        'Perumahan Hegarmanah Indah RT 02 RW 10 HG. 04 No. 58 Desa Hegarmanah Kec. Cikancung Kab. Bandung',
    },
    mapsLink: 'https://maps.app.goo.gl/5a27GrQJCxSkEqW89',
    location: {lat: -7.0010749, lng: 107.8341448},
  },

  accounts: [
    {
      bankLogoPath: '/bankLogo/bca.png',
      bankName: 'BCA',
      number: '3761425259',
      holder: 'Romi Muhammad Fadli',
    },
    {
      bankLogoPath: '/bankLogo/bca.png',
      bankName: 'BCA',
      number: '013201126491504',
      holder: 'Romi Muhammad fadli',
    },
  ],

  story: null,
  gallery: [
    '/media/oci_omi/1.webp',
    '/media/oci_omi/2.webp',
    '/media/oci_omi/3.webp',
    '/media/oci_omi/4.webp',
    '/media/oci_omi/5.webp',
  ],
  galleryPlaceholder: [
    '/media/oci_omi/p1.webp',
    '/media/oci_omi/p2.webp',
    '/media/oci_omi/p3.webp',
    '/media/oci_omi/p4.webp',
    '/media/oci_omi/p5.webp',
  ],

  rsvpEndpoint: 'https://wedding-inv-be.vercel.app/oci_omi',
  audioUrl:
    'https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_za2e91be36419d72d827d081b_f101e453cb78d65cb_d20230501_m130446_c005_v0501003_t0008_u01682946286534',
};

export default data;
