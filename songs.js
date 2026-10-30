// 노래방 리스트 데이터
// 형식: { artist: "가수명", songs: [ { title: "곡명", dam: "DAM 번호" }, ... ] }
// DAM 번호가 없는(미수록) 곡은 dam: null 로 둡니다.
const SONGS = [
  {
    artist: "米津玄師 (요네즈 켄시)",
    songs: [
      { title: "fogbound", dam: "3246-48" },
      { title: "LENS FLARE", dam: "3251-10" },
      { title: "ひまわり", dam: "3246-69" },
      { title: "マルゲリータ", dam: "3251-08" },
      { title: "ナンバーナイン", dam: "3246-29" },
      { title: "ララバイさよなら", dam: "3246-32" },
      { title: "Paper Flower", dam: "3246-53" },
      { title: "クランベリーとパンケーキ", dam: "3246-52" },
      { title: "ごめんね", dam: "3246-56" },
      { title: "TEENAGE RIOT", dam: "3246-55" },
      { title: "でしょましょ", dam: "3246-61" },
    ],
  },
  {
    artist: "AKASAKI (아카사키)",
    songs: [
      { title: "夏実", dam: "1424-55" },
      { title: "とろい", dam: "1141-99" },
      { title: "TOGE", dam: "1214-91" },
      { title: "プレデター", dam: "1081-99" },
      { title: "四季回生", dam: "1155-64" },
    ],
  },
  {
    artist: "レトロリロン (레트로리론)",
    songs: [
      { title: "アンバランスブレンド", dam: "5538-29" },
    ],
  },
  {
    artist: "ルシノ (루시노)",
    songs: [
      { title: "ループザルーム", dam: "1411-70" },
    ],
  },
  {
    artist: "マサラダ (마사라다)",
    songs: [
      { title: "ライアーダンサー", dam: "7660-50" },
    ],
  },
  {
    artist: "音乃瀬奏 (오토노세 카나데)",
    songs: [
      { title: "You & 合図", dam: "1494-05" },
      { title: "GREATEST", dam: "1099-59" },
    ],
  },
  {
    artist: "友成空 (토모나리 소라)",
    songs: [
      { title: "宵祭り", dam: "1144-68" },
    ],
  },
  {
    artist: "indigo la End (인디고 라 엔드)",
    songs: [
      { title: "心変わり", dam: "1295-32" },
    ],
  },
  {
    artist: "Kanaria (카나리아)",
    songs: [
      { title: "BRAIN", dam: "7664-18" },
    ],
  },
  {
    artist: "r-906",
    songs: [
      { title: "ワンダー", dam: "1535-03" },
    ],
  },
  {
    artist: "Saucy Dog (사우시 독)",
    songs: [
      { title: "魔法にかけられて", dam: "1305-86" },
    ],
  },
  {
    artist: "なとり (나토리)",
    songs: [
      { title: "フライデー・ナイト", dam: "5467-29" },
    ],
  },
  {
    artist: "藤井風 (후지이 카제)",
    songs: [
      { title: "It's Alright", dam: null },
    ],
  },
  {
    artist: "ずっと真夜中でいいのに。 (즛토마요)",
    songs: [
      { title: "サターン", dam: "5176-27" },
      { title: "君がいて水になる", dam: "5176-26" },
      { title: "Dear. Mr「F」", dam: "5208-26" },
    ],
  },
];
