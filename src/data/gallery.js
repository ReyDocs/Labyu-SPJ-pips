// data/gallery.js
// Gallery images separated for maintainability.
// To add new images: append an entry to this array with a unique id, src URL, and descriptive alt text.

const galleryImages = [
  {
    id: "gal1",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1751764890/357070966_299139499195106_4093967020498687689_n_qvpzna.jpg",
    alt: "SPJ class group photo",
  },
  {
    id: "gal2",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215441/244706112_3012556005653658_8698370047358473006_n_n3qs2g.jpg",
    alt: "SPJ class group photo 2",
  },
  {
    id: "gal3",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215442/245131685_851419939068992_3701658600761487602_n_bex58n.jpg",
    alt: "SPJ class group photo 3",
  },
  {
    id: "gal4",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215437/498653178_29931292443135908_294071373297611533_n_f3wfqj.jpg",
    alt: "SPJ class activity photo",
  },
  {
    id: "gal5",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215438/244094153_585980252825242_5483373924131894091_n_ekdgri.jpg",
    alt: "SPJ class activity photo 2",
  },
  {
    id: "gal6",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215434/498546819_29931289383136214_1569115687586695634_n_z1wjm1.jpg",
    alt: "SPJ class memory",
  },
  {
    id: "gal7",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215434/241668281_4638393962858298_7481453318360489959_n_qcyhsx.jpg",
    alt: "SPJ class memory 2",
  },
  {
    id: "gal8",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215428/354709984_1392829371315618_4067543323604485440_n_rdmwaj.jpg",
    alt: "SPJ class throwback",
  },
  {
    id: "gal9",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215422/420002585_350926344367841_3461449095069164573_n_hzl5id.jpg",
    alt: "SPJ class throwback 2",
  },
  {
    id: "gal10",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215426/119057616_306054600695653_5475408524441385942_n_grmpza.jpg",
    alt: "SPJ early years photo",
  },
  {
    id: "gal11",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215424/497877640_29921148190817000_3521769548731602168_n_vjugjb.jpg",
    alt: "SPJ class candid",
  },
  {
    id: "gal12",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215415/356547071_1166442048079735_251260462763650511_n_eetpar.jpg",
    alt: "SPJ class candid 2",
  },
  {
    id: "gal13",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215415/95080938_2450368418587430_4526875476781694976_n_tbadm6.jpg",
    alt: "SPJ friends hangout",
  },
  {
    id: "gal14",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215410/505036687_30227214860210330_3586779910924505294_n_oniuvp.jpg",
    alt: "SPJ friends hangout 2",
  },
  {
    id: "gal15",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215409/342969461_230397459681352_6198146313550611264_n_nsaqv0.jpg",
    alt: "SPJ school event",
  },
  {
    id: "gal16",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215407/344294911_1222824405036223_7380848838913383839_n_ehflob.jpg",
    alt: "SPJ school event 2",
  },
  {
    id: "gal17",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215408/345923049_210137288461247_5655888302358659540_n_vraudt.jpg",
    alt: "SPJ school event 3",
  },
  {
    id: "gal18",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215411/502480441_30090547933877024_3871567281139337903_n_lhqolf.jpg",
    alt: "SPJ class fun moments",
  },
  {
    id: "gal19",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215411/348358200_262897722890931_2753383038961920863_n_c4zwrn.jpg",
    alt: "SPJ class fun moments 2",
  },
  {
    id: "gal20",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215412/354490039_994563051682368_3806913835360216152_n_tfndtf.jpg",
    alt: "SPJ memory lane",
  },
  {
    id: "gal21",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215412/82072285_2609720225972955_5699167451397226496_n_to3okj.jpg",
    alt: "SPJ early memories",
  },
  {
    id: "gal22",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215413/82688296_642853119587166_5904917112387796992_n_gn1ptd.jpg",
    alt: "SPJ early memories 2",
  },
  {
    id: "gal23",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215416/358807757_6420838817997336_3544309548192801862_n_zj3gtf.jpg",
    alt: "SPJ graduation season",
  },
  {
    id: "gal24",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215417/95453693_532683580727125_8511876739670999040_n_v8ihka.jpg",
    alt: "SPJ graduation season 2",
  },
  {
    id: "gal25",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215419/358740404_673801551451485_4395559673407007854_n_jibbmh.jpg",
    alt: "SPJ farewell memories",
  },
  {
    id: "gal27",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215427/119136536_1792483874223130_6139437572609339230_n_bkab5a.jpg",
    alt: "SPJ class moments",
  },
  {
    id: "gal28",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215427/119120043_773607726785901_9076214220432773088_n_grhfnc.jpg",
    alt: "SPJ class moments 2",
  },
  {
    id: "gal29",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215433/241708822_857064378531653_3907210301253218927_n_k7xcga.jpg",
    alt: "SPJ class moments 3",
  },
  {
    id: "gal30",
    src: "https://res.cloudinary.com/dqxwpxame/image/upload/v1752215435/241344464_173228141604924_3132448217948157434_n_iryitw.jpg",
    alt: "SPJ class moments 4",
  },
];

export default galleryImages;
