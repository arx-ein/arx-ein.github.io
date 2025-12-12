interface ImgGroup {
  group: String;
  dir?: String;
  imgs: Array<{
    path: String;
    ext?: String;
    date: String;
    caption: Array<String>;
  }>;
}

export const IconList: ImgGroup[] = [
  {
    group: "デフォルト六角柱",
    imgs: [
      {
        path: "mycelithyl1",
        date: "2021-03-29",
        caption: ["一番最初に作ったアイコン。", "着想5分 制作30分 とかそんな感じだった"],
      },
      {
        path: "mycelithyl1n",
        date: "2021-07-24",
        caption: ["目の色を微調整。", "長らくこれをデフォルトとしてやってきた"],
      },
      {
        path: "mycelithyl_def_n2",
        date: "2024-08-03",
        caption: ["全体的な色味を一新。", "基本色を1つ指定するだけで色違いを生成できるように！"],
      },
    ],
  },
  {
    group: "Discordアイコン",
    imgs: [
      {
        path: "mycelithyl2",
        date: "2021-05-13",
        caption: ["Discord用に作ったアイコン。", "一番最初のやつの直後に作ったような"],
      },
      {
        path: "mycelithyl2n",
        date: "2021-11-24",
        caption: ["外側を灰色に。", "全体が緑一色(リューイーソー)だと見づらかったため。"],
      },
      {
        path: "mycelithyl_dis1",
        date: "2022-04-16",
        caption: ["Discord公式ロゴをパロディ。", "公式サイトからデータをダウンロードできることを知った"],
      },
      {
        path: "mycelithyl_dis2",
        date: "2023-12-02",
        caption: ["光り輝くように。", "SVGのフィルター・エフェクトを使う練習として。"],
      },
      {
        path: "mycelithyl_dis3",
        date: "2023-08-01",
        caption: ["色調をシンプルに。", "ゴテゴテした見た目に飽きてきたっぽい"],
      },
    ],
  },
  {
    group: "いろいろな六角柱",
    dir: "var",
    imgs: [
      {
        path: "mycelithyl1_summer",
        date: "2021-07-24",
        caption: ["2021夏仕様", "ここが全ての色違いの始まりだったと思うと感慨深い。"],
      },
      {
        path: "mycelithyl1_mono",
        date: "2021-07-28",
        caption: ["MS Paint 手描き風", "今はnote.com用のアイコンとして使用中。"],
      },
      {path: "mycelithyl1n_gray", date: "2021-08-03", caption: ["グレースケール"]},
      {
        path: "mycelithyl1m",
        date: "2021-11-01",
        caption: ["首都高速の排気塔っぽいやつ", "「駒場の裏に六角柱がいる」と話題だったため。"],
      },
      {path: "mycelithyl1_night", date: "2021-11-04", caption: ["夜仕様", "瞳孔(?)がいつもより大きくなっている"]},
      {path: "mycelithyl_handdraw", date: "2021-11-11", caption: ["本当に手描き"]},
      {path: "mycelithyl1g", date: "2021-11-11", caption: ["ゲーミング六角柱", "1,677万色に照り輝く"]},
      {path: "mycelithyl1g2", date: "2021-11-17", caption: ["メタリック六角柱", "レインボー六角柱の使い回し"]},
      {
        path: "mycelithyl_winter",
        date: "2021-11-24",
        caption: ["2021冬仕様", "全体的に白くぼやっとなっている感じが好き。"],
      },
      {
        path: "mycelithyl_santa",
        date: "2021-11-30",
        caption: ["2021クリスマス仕様", "赤い帽子を被るだけで簡単サンタさん。"],
      },
      {path: "mycelithyl_dark", date: "2021-12-09", caption: ["闇堕ち風？", "実は赤黒い色味も好きなのです"]},
      {path: "mycelithyl_alt1", date: "2021-12-17", caption: ["2Pカラー"]},
      {
        path: "mycelithyl_xmas",
        date: "2021-12-24",
        caption: ["クリスマスカラーにしようとして盛大に失敗したやつ", "赤と緑って一緒に使うの難しい"],
      },
      {path: "mycelithyl2022", date: "2021-12-27", caption: ["2022新年仕様", "寅年なので虎柄に"]},
      {path: "mycelithyl_snow", date: "2022-01-09", caption: ["初雪記念かなんか。"]},
      {
        path: "mycelithyl_19yo",
        date: "2022-01-23",
        caption: ["19歳の誕生日記念", "十の位が違うだけで遥か昔のことのように思える"],
      },
      {path: "mycelithyl_cry", date: "2022-01-28", caption: ["嫌なことがあったらしい"]},
      {path: "mycelithyl_cry2", date: "2022-01-31", caption: ["とても嫌なことがあったらしい"]},
      {path: "mycelithyl_chill", date: "2022-03-25", caption: ["チルい。"]},
      {path: "mycelithyl_spring", date: "2022-04-03", caption: ["2022春仕様", "今まで作った中でこの色味が一番大好き"]},
      {
        path: "mycelithyl_clover",
        date: "2022-04-08",
        caption: ["<a href='https://twitter.com/cm_ayf'>&#x1F331&#x1F33F&#x2618;&#x1F340氏</a>とのコラボ？"],
      },
      {
        path: "mycelithyl_blur",
        date: "2022-04-13",
        caption: ["点描によるぼやけ", "気分がぐちゃぐちゃの時はアイコンもぐちゃぐちゃになりがち"],
      },
      {path: "mycelithyl_alter", date: "2022-04-27", caption: ["オルタ化", "色味が漂白されている感じが良い"]},
      {path: "mycelithyl_blur2", date: "2022-04-30", caption: ["滲み風ぼやけ", "まだ原型が残っている"]},
      {
        path: "mycelithyl_superblur",
        date: "2022-05-01",
        caption: ["ガウスぼかしによるぼやけ", "もう原型が残っていない"],
      },
      {path: "mycelithyl_penta", date: "2022-05-15", caption: ["五角柱", "五月だったので。"]},
      {path: "mycelithyl_small", date: "2022-05-31", caption: ["萎縮してしまった"]},
      {path: "mycelithyl_lambda", date: "2022-06-08", caption: ["縮こまっていた時のラムダなお口を再利用。"]},
      {path: "mycelithyl_0617", date: "2022-06-15", caption: ["6月17日に何かあったらしい。覚えてない"]},
      {
        path: "mycelithyl_worst",
        date: "2022-06-19",
        caption: ["最悪の気分", "気分が悪くなればなるほど歪むのは相変わらず"],
      },
      {path: "mycelithyl_restart", date: "2022-06-23", caption: ["再起の意志", "強い決意により眼も燃え上がっている！"]},
      {path: "mycelithyl_rain", date: "2022-07-04", caption: ["2022梅雨仕様？", "梅雨で雨が多かったんだな～と"]},
      {path: "mycelithyl_spain", date: "2022-09-08", caption: ["スペイン旅行の帰り"]},
      {path: "mycelithyl_crazy", date: "2022-10-03", caption: ["てんやわんやでグルグル目"]},
      {path: "mycelithyl_autumn", date: "2022-10-20", caption: ["2022秋仕様", "夕焼けの空っぽい色がお気に入り"]},
      {
        path: "mycelithyl_sunset",
        date: "2022-10-27",
        caption: ["2022秋仕様その2", "黄昏な感じが演出できていてとても好き"],
      },
      {
        path: "mycelithyl_komafes2022",
        date: "2022-11-17",
        caption: ["2022駒場祭仕様", "マスコットキャラクター・こまっけろと融合"],
      },
      {path: "mycelithyl_komafes2022after", date: "2022-11-20", caption: ["駒場祭終了後", "分離に失敗"]},
      {path: "mycelithyl_peel", date: "2022-11-28", caption: ["一皮剥けようという思い", "ちょっと痛そう"]},
      {path: "mycelithyl_pixel", date: "2022-12-19", caption: ["8-bit柱"]},
      {
        path: "mycelithyl_4koma_o",
        date: "2023-04-22",
        caption: ["<a href='https://twitter.com/itototo1010'>いととと氏</a>とのコラボ？", "「六角柱の4コマ」"],
      },
      {
        path: "mycelithyl_golden",
        date: "2023-05-03",
        caption: ["ゴールデン六角柱", "レインボー六角柱の使い回し その2"],
      },
      {path: "mycelithyl_summerMk2", date: "2023-06-09", caption: ["2023夏仕様", "淡青を基調に涼しげな雰囲気で"]},
      {
        path: "comiket102",
        ext: "jpg",
        date: "2023-08-13",
        caption: [
          "コミックマーケット102用",
          "会場その場でPCへのアクセスができなかったのでやむなく手描きして写真を撮った",
        ],
      },
      {
        path: "mycelithyl_teto1",
        date: "2024-01-29",
        caption: ["テトテリトリー宣伝用", "出展したCD『鳴積霧』は<a href='/things/music'>音鳴らし</a>から聴けるよ！"],
      },
    ],
  },
  {
    group: "角柱以外",
    dir: "not-hex",
    imgs: [
      {
        path: "musicelithyl",
        date: "2021-09-07",
        caption: [
          "音楽アカウント用。",
          "結局分離したアカウントはほぼ動かせなかったので廃止したが、アイコンはお気に入り",
        ],
      },
      {
        path: "mycelonymous",
        date: "2022-05-05",
        caption: ["Twitter初期アイコンパロディ", "インターネット独特の文体をなるべく使わないように頑張った時に使った"],
      },
      {
        path: "maycelithyl2022",
        date: "2022-05-13",
        caption: ["2022五月祭仕様", "マスコットキャラクター・めいちゃんと融合"],
      },
      {path: "myceline_metro", date: "2022-07-22", caption: ["東京メトロ舞ノ芹線"]},
      {path: "mycelithyl_absence", date: "2022-08-18", caption: ["旅行で自宅を離れていた時に使っていたやつ"]},
      {path: "realberil", date: "2022-08-20", caption: ["本物の緑柱石", "誰かがどこかの博物館の展示で撮ってきたもの"]},
      {
        path: "mycelithyl_icosa",
        date: "2023-01-17",
        caption: ["20歳の誕生日記念", "豆知識: 正二十面体と六角柱はどちらも頂点が12個ある"],
      },
    ],
  },
  {
    group: "いただきもの",
    dir: "given",
    imgs: [
      {
        path: "mycelithylman",
        ext: "jpg",
        date: "2022-03-30",
        caption: [
          "<a href='https://twitter.com/41_36_22'>宇田氏</a>から",
          "手足がある代理キャラが欲しい とか何とか言ったのがきっかけだったと思う",
        ],
      },
      {
        path: "mycelithyl_FAKE",
        date: "2022-04-27",
        caption: [
          "<a href='https://twitter.com/41_36_22'>宇田氏</a>から その2",
          "偽・六角柱。",
          "よく見ると五角柱になっている。細かい。",
        ],
      },
      {
        path: "mycelithyl_waso",
        ext: "jpg",
        date: "2022-07-24",
        caption: ["わそ氏から。", "いつの間にかTwitterアカウントが無くなっている…", "表情が絶妙で面白い。"],
      },
    ],
  },
];
