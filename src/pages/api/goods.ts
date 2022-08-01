import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      ttl: "井上芳雄 by MYSELF SPECIAL “LIVE” 20th Anniversary Festival! ～裏切らない芳雄4時間フェス～",
      date: {
        year: 2022,
        month: 2,
        day: 16,
      },
      style: "DVD",
      descriptiion:
        "■井上芳雄オフィシャルFC購入特典+\n「井上芳雄×大貫祐一郎×秋山 瞬(TBSグロウディア) スペシャル・インタビュー DVD」\n井上芳雄がゲストを迎えてデビュー20周年を振り返るインタビュー映像。\n井上芳雄のソロインタビュー、ラジオやライブでの”相棒”大貫祐一郎を迎えての対談、そしてTBSラジオ「井上芳雄by MYSELF」の番組ディレクター秋山 瞬(TBSグロウディア)を加えての鼎談の3部で構成されたこれまでとこれからを語ったスペシャルインタビュー映像。\n詳細は、井上芳雄オフィシャルファンクラブサイトへ→\n\n[DISC1 DVD]\n井上芳雄 by MYSELF SPECIAL ”LIVE” 20th Anniversary Festival! ～裏切らない芳雄4時間フェス～ @東京国際フォーラム ホールA 5/8/21\n【第1部】\n1. 奇跡の子（モーツァルト！）\n2. わたしという人間（ルドルフ ザ・ラスト・キス）\n3. チャリティ（ダディ・ロング・レッグズ）\n4. この星空（二都物語）\n5. 最後のダンス（エリザベート）\n6. 世界の王（ロミオ&ジュリエット）\n7. シェリー（ジャージー・ボーイズ）\n8. 夜明けの約束（グレート・ギャツビー）\n9. ドリーム（音楽座ミュージカル「シャボン玉とんだ宇宙(ソラ)までとんだ」（原作/筒井広志『アルファ・ケンタウリからの客』）\n\n【第2部】\n1. Jumpin'up ”by MYSELF”\n2. とおくから\n3. 星と星のあいだ\n4. 僕こそ音楽（モーツァルト！） with 中川晃教\n5. 私たちは泣かない（マリー・アントワネット）with 田代万里生\n6. ハクナ・マタタ(ライオンキング) with中川晃教, 田代万里生,坂元健児\n7. What You Own（RENT) with 坂元健児\n8. What You Own（RENT) with 加藤和樹\n9. 夜のボート（エリザベート） with はいだしょうこ\n10. 輝く未来（塔の上のラプンツェル) with はいだしょうこ\n11. あなたを忘れない（ウィキッド) with 海宝直人\n12. Anything you can do（アニーよ銃を取れ）with 島田歌穂\n13. ぼよよんこうしんきょく with All Guests\n14. Tonight belongs to you（PROM)\n15. 花束\n16. 愛した日々に悔いはない（コーラスライン)\n17. 明日への階段（ルドルフ ザ·ラスト·キス） with All Guests\n\n[DISC2 DVD]\n井上芳雄 by MYSELF SPECIAL ”LIVE” 20th Anniversary Live Tour @森のホール21 24/4/21\n1. 影を逃れて(モーツァルト！）with 浦井健治\n2. スタートライン with 浦井健治\n3. 瑠璃色の地球\n\n井上芳雄 by MYSELF SPECIAL ”LIVE” 20th Anniversary Festival! ～裏切らない芳雄4時間フェス～ @国際フォーラムA 5/8/21\n• トーク・セレクション\n\n[DISC3 CD]\n井上芳雄 by MYSELF SPECIAL ”LIVE” 20th Anniversary Festival! ～裏切らない芳雄4時間フェス～ @東京国際フォーラム ホールA 5/8/21 第1部\n1. 奇跡の子（モーツァルト！）\n2. わたしという人間（ルドルフ ザ・ラスト・キス）\n3. チャリティ（ダディ・ロング・レッグズ）\n4. この星空（二都物語）\n5. 最後のダンス（エリザベート）\n6. 世界の王（ロミオ&ジュリエット）\n7. シェリー（ジャージー・ボーイズ）\n8. 夜明けの約束（グレート・ギャツビー）\n9. ドリーム（音楽座ミュージカル「シャボン玉とんだ宇宙(ソラ)までとんだ」（原作/筒井広志『アルファ・ケンタウリからの客』）\n\n[DISC4 CD]\n井上芳雄 by MYSELF SPECIAL ”LIVE” 20th Anniversary Festival! ～裏切らない芳雄4時間フェス～ @東京国際フォーラム ホールA 5/8/21 第2部\n1. Jumpin'up ”by MYSELF”\n2. とおくから\n3. 星と星のあいだ\n4. 僕こそ音楽（モーツァルト！） with 中川晃教\n5. 私たちは泣かない（マリー・アントワネット）with 田代万里生\n6. ハクナ・マタタ(ライオンキング) with中川晃教, 田代万里生,坂元健児\n7. What You Own（RENT) with 坂元健児\n8. What You Own（RENT) with 加藤和樹\n9. 夜のボート（エリザベート） with はいだしょうこ\n10. 輝く未来（塔の上のラプンツェル) with はいだしょうこ\n11. あなたを忘れない（ウィキッド) with 海宝直人\n12. Anything you can do（アニーよ銃を取れ）with 島田歌穂\n13. ぼよよんこうしんきょく with All Guests\n14. Tonight belongs to you（PROM)\n15. 花束\n16. 愛した日々に悔いはない（コーラスライン)\n17. 明日への階段（ルドルフ ザ·ラスト·キス） with All Guests",
      edition: [
        {
          img: "bms2022",
          ttl: "通常盤",
          price: "¥12,000(tax in)",
          contents: "DVD2枚+CD2枚 計4枚組 + スペシャルフォトブック",
          url: "https://shop.grand-arts.com/shopdetail/000000000136/",
        },
      ],
    },
    {
      ttl: "井上芳雄のミュージカル案内",
      date: {
        year: 2021,
        month: 10,
        day: 6,
      },
      style: "Book",
      descriptiion:
        "ミュージカルオタクを自負する井上芳雄が、厳選した作品20本、ミュージカルナンバー10曲、キャラクター10人を解説。バックステージなど、演者しか知りえないエピソード満載の楽しいミュージカル入門！",
      edition: [
        {
          img: "musicalannnai",
          ttl: "",
          price: "¥900(tax in)",
          contents: "",
          url: "https://shop.grand-arts.com/shopdetail/000000000132",
        },
      ],
    },
    {
      ttl: "夢をかける",
      date: {
        year: 2020,
        month: 12,
        day: 21,
      },
      style: "Book",
      descriptiion:
        "NIKKEI STYLEエンタメ！チャンネルで月2回連載中の「井上芳雄 エンタメ通信」の初の単行本化。\n        2017年7月から2020年11月まで約3年半のコラムを「ショー・マスト・ゴー・オン」「ミュージカル」「ストレートプレイ」「歌手」「新ジャンル」 「レジェンド」というテーマ別に再構成され、書き下ろしが加えられました。特に今年は、コロナ禍で演劇界は大きな打撃を受けました。その逆境のなかでデビュー20周年イヤーを迎えた井上が、何を思い、どんな日々を送り、 未来に何を残そうとしているのか。明日への希望や勇気が詰まった１冊です。",
      edition: [
        {
          img: "yumewokakeru",
          ttl: "",
          price: "¥2,700(tax in)",
          contents: "",
          url: "https://shop.grand-arts.com/shopdetail/000000000128",
        },
      ],
    },
    {
      ttl: "幸せのピース",
      date: {
        year: 2018,
        month: 7,
        day: 25,
      },
      style: "Album",
      descriptiion:
        "[CD] 全10曲\n        1. 幸せのピース\n        2. 人生は夢だらけ\n        3. Waving Through a Window\n        4. 歌うたいのバラッド\n        5. 心の瞳\n        6. 明日はきっといい日になる\n        7. I have dreamed\n        8. 戦士のルフラン\n        9. Tomorrow\n        10.風のオリヴァストロ\n        \n        [DVD]\n        YOSHIO INOUE by MYSELF SPECIAL “LIVE” 2017.10.12 at 東京国際フォーラム ホール A ライヴ映像\n        (M1～M3)\n        1. 心の瞳\n        2. 歌うたいのバラッド\n        3. 風のオリヴァストロ\n        4. メイキング・オブ・“幸せのピース”(スペシャル・インタビュー&レコーディング、アートワーク撮影風景)\n        \n        [CD] 全11曲\n        1. 幸せのピース\n        2. 人生は夢だらけ\n        3. Waving Through a Window\n        4. 歌うたいのバラッド\n        5. 心の瞳\n        6. 明日はきっといい日になる\n        7. I have dreamed\n        8. 戦士のルフラン\n        9. Tomorrow\n        10.風のオリヴァストロ\n        11.幸せのピース（インストゥルメンタル）",
      edition: [
        {
          img: "shiawasenopiece_limited",
          ttl: "初回限定盤",
          price: "¥4,800(tax in)",
          contents: "CD+DVD/2枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000094/ct5/page1/recommend/",
        },
        {
          img: "shiawasenopiece_original",
          ttl: "通常盤",
          price: "¥3,000(tax in)",
          contents: "CDのみ/1枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000095/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "風のオリヴァストロ",
      date: {
        year: 2017,
        month: 10,
        day: 4,
      },
      style: "Single",
      descriptiion:
        "[CD]\n        1. 風のオリヴァストロ\n        2. リンゴの木の下で\n        3. 風のオリヴァストロ (カラオケ)\n        4. リンゴの木の下で (カラオケ)\n        [DVD]\n        1. 風のオリヴァストロ (Special Version) 映像",
      edition: [
        {
          img: "kazeno_limited",
          ttl: "初回限定盤",
          price: "¥2,160(tax in)",
          contents: "CD+DVD/2枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000072/ct5/page1/recommend/",
        },
        {
          img: "kazeno_original",
          ttl: "通常盤",
          price: "¥1,296(tax in)",
          contents: "CDのみ/1枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000071/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "井上芳雄 シングス ディズニー ～ワン・ナイト・ドリーム！ ザ・ライヴ",
      date: {
        year: 2016,
        month: 5,
        day: 18,
      },
      style: "Album",
      descriptiion:
        "[DISC：1（CD）]\n        1. 右から2番目の星[ピーター・パン]\n        2. 君はともだち[トイ・ストーリー]\n        3. レット・イット・ゴー[アナと雪の女王]\n        4. 妖精のうた[ティンカー・ベル]\n        5. そばにいて[魔法にかけられて]\n        6. サムディ[ノートルダムの鐘]\n        7. プラウド・オブ・ユア・ボーイ（自慢の息子）[アラジン]\n        8. 愛の物語[アイーダ]\n        9. 勝利ほほえむ[アイーダ]\n        10. MC1\n        11. 終わりなき夜[ライオンキング]\n        12. メリーポピンズ・メドレー[メリーポピンズ]\n        13. ユール・ビー・イン・マイ・ハート[ターザン®]\n        14. MC2\n        15. あの声[リトルマーメイド]\n        16. MC3\n        17. フレンド・ライク・ミー[アラジン]\n        18. 愛せぬならば[美女と野獣]\n        19. プラウド・オブ・ユア・ボーイ（自慢の息子）[英語歌][アラジン]\n        \n        [DISC：2（DVD）]\n        1. プラウド・オブ・ユア・ボーイ(自慢の息子)-プロローグ- [アラジン]\n        2. 僕の願い [ノートルダムの鐘]\n        3. Go the Distance [ヘラクレス]\n        4. 輝く未来 [塔の上のラプンツェル]\n        5. プラウド・オブ・ユア・ボーイ(自慢の息子) [アラジン]\n        6. 愛の物語 [アイーダ]\n        7. 勝利ほほえむ [アイーダ]\n        8. MC1 【第2部】\n        9. 終わりなき夜 [ライオンキング]\n        10. あの声 [リトルマーメイド]\n        11. MC2\n        12. MC3 バンド紹介\n        13. MC4\n        14. フレンド・ライク・ミー [アラジン]\n        15. MC5\n        16. 愛せぬならば [美女と野獣]\n        17. MC6\n        18. プラウド・オブ・ユア・ボーイ(自慢の息子) [英語歌] [アラジン]\n        （C）Disney\n        ",
      edition: [
        {
          img: "sings_disney",
          ttl: "",
          price: "¥8,000(tax in)",
          contents: "CD+DVD/2枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000048/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "ミュージカル俳優という仕事",
      date: {
        year: 2015,
        month: 12,
        day: 22,
      },
      style: "Book",
      descriptiion:
        "井上芳雄が、仕事への熱い思いや俳優として生きていく覚悟を語った、初めての”お仕事本”。 「エリザベート」での鮮烈なデビューから、ストレートプレイに も積極的に挑戦、CD制作やコンサートの音楽、ドラマ・映画といった映像にも活動の幅を広げて、ミュージカル俳優として独自の道を切り拓いてきた井上芳雄。その歩みに沿って、当時の心境や得たものを振り返ると共に、ミュージカル俳優という仕事の独自性やメンタリティー、演出家や俳優仲間との交流、プライ ベートについての考え、ファンとの関係、将来への夢などを語っています。",
      edition: [
        {
          img: "workismusical",
          ttl: "",
          price: "¥1,728(tax in)",
          contents: "",
          url: "https://shop.grand-arts.com/shopdetail/000000000035/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "井上芳雄 at Billboard Live TOKYO～Come Fly With Me～",
      date: {
        year: 2015,
        month: 1,
        day: 28,
      },
      style: "DVD",
      descriptiion:
        "[DISC：1 DVD]\n        1. Come Fly With Me\n        2. Come Dance With Me\n        3. My Way\n        4. How Do You Keep The Music Playing?\n        5. I Will Wait For You\n        6. Watch What Happens\n        7. Love Machine\n        8. Let It Go\n        9. Proud of Your Boy\n        10. Mack The Knife\n        11. Stardust\n        12. Theme From New York New York 13. A Thousand Thoughts of You [アンコール]\n        14. What A Wonderful World [アンコール]\n        \n        [DISC：2 DVD]\n        Backstage Special Movie\n        \n        [DISC：3 CD]\n        1. Come Fly With Me\n        2. Come Dance With Me\n        3. My Way\n        4. How Do You Keep The Music Playing?\n        5. I Will Wait For You\n        6. Watch What Happens\n        7. Love Machine\n        8. Let It Go\n        9. Proud of Your Boy\n        10. Mack The Knife\n        11. Stardust\n        12. Theme From New York New York\n        13. A Thousand Thoughts of You\n        14. What A Wonderful World\n        \n        1. Come Fly With Me\n        2. Come Dance With Me\n        3. My Way\n        4. How Do You Keep The Music Playing?\n        5. I Will Wait For You\n        6. Watch What Happens\n        7. Love Machine\n        8. Let It Go\n        9. Proud of Your Boy\n        10. Mack The Knife\n        11. Stardust\n        12. Theme From New York New York\n        13. A Thousand Thoughts of You [アンコール]\n        14. What A Wonderful World [アンコール]\n        ",
      edition: [
        {
          img: "billboard_limited",
          ttl: "初回生産限定盤",
          price: "¥9,180(tax in)",
          contents: "DVD2枚組+CD",
          url: "https://shop.grand-arts.com/shopdetail/000000000024/ct5/page1/recommend/",
        },
        {
          img: "billboard_original",
          ttl: "初回生産限定盤",
          price: "¥4,968(tax in)",
          contents: "DVD/1枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000025/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "井上芳雄・ミーツ・ディズニー～プラウド・オブ・ユア・ボーイ～",
      date: {
        year: 2014,
        month: 12,
        day: 17,
      },
      style: "Single",
      descriptiion:
        "[CD]\n        1. プラウド・オブ・ユア・ボーイ(自慢の息子)-プロローグ-[アラジン]\n        2. 僕の願い[ノートルダムの鐘]\n        3. 右から2番目の星[ピーター・パン]\n        4. 君はともだち[トイ・ストーリー]\n        5. いつか王子様が[白雪姫]\n        6. Go the Distance[ヘラクレス]\n        7. レット・イット・ゴー[アナと雪の女王]\n        8. 妖精のうた[ティンカー・ベル]\n        9. そばにいて[魔法にかけられて]\n        10. 輝く未来[塔の上のラプンツェル]\n        11. サムディ[ノートルダムの鐘]\n        12. プラウド・オブ・ユア・ボーイ(自慢の息子)[アラジン]\n        13. レット・イット・ゴー~ありのままで~[アナと雪の女王] ＜ボーナストラック＞\n        \n        [DVD]\n        1. プラウド・オブ・ユア・ボーイ(自慢の息子) ミュージック・ビデオ\n        2. ブラッド・ケリー氏( 「プラウド・オブ・ユア・ボーイ」 指揮・編曲)との対談\n        3. 井上芳雄、ディズニーを語る\n        4. プラウド・オブ・ユア・ボーイ(自慢の息子) レコーディング&ビデオ撮影風景\n        \n        (P)Walt Disney Records\n        (C)Disney\n        \n        [CD]\n        1. プラウド・オブ・ユア・ボーイ(自慢の息子)-プロローグ-[アラジン]\n        2. 僕の願い[ノートルダムの鐘]\n        3. 右から2番目の星[ピーター・パン]\n        4. 君はともだち[トイ・ストーリー]\n        5. いつか王子様が[白雪姫]\n        6. Go the Distance[ヘラクレス]\n        7. レット・イット・ゴー[アナと雪の女王]\n        8. 妖精のうた[ティンカー・ベル]\n        9. そばにいて[魔法にかけられて]\n        10. 輝く未来[塔の上のラプンツェル]\n        11. サムディ[ノートルダムの鐘]\n        12. プラウド・オブ・ユア・ボーイ(自慢の息子)[アラジン]\n        13. レット・イット・ゴー~ありのままで~[アナと雪の女王] ＜ボーナストラック＞\n\n        (P)Walt Disney Records\n        (C)Disney",
      edition: [
        {
          img: "kazeno_limited",
          ttl: "デラックス・エディション",
          price: "¥5,400(tax in)",
          contents: "CD+DVD/2枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000026/ct5/page1/recommend/",
        },
        {
          img: "kazeno_original",
          ttl: "通常盤",
          price: "¥3,240(tax in)",
          contents: "CDのみ/1枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000027/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "井上芳雄 35 on the way to…",
      date: {
        year: 2014,
        month: 11,
        day: 1,
      },
      style: "Book",
      descriptiion:
        "前著「井上芳雄 開演です！」から7年。井上芳雄自身初の責任編集による、最新オフィシャルブック。対談やグラビアページなど、井上自身のアイデアを取り入れた内容。2014年の今、そしてこれからの井上芳雄を知ることが出来る、ファン待望の一冊",
      edition: [
        {
          img: "35",
          ttl: "",
          price: "¥2,160(tax in)",
          contents: "",
          url: "https://shop.grand-arts.com/shopdetail/000000000032/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "Welcome To The Theater／井上芳雄 ミュージカルセレクション",
      date: {
        year: 2008,
        month: 5,
        day: 8,
      },
      style: "Album",
      descriptiion:
        "[CD]\n        1. ようこそ劇場へ（WELCOME TO THE THEATER）～アプローズ～\n        2. 君の結婚式（IT'S YOUR WEDDING DAY）～ウェディング・シンガー～\n        3. マリア（MARIA）～ウエスト・サイド・ストーリー～\n        4. 神よ 何故？（WHY GOD WHY?）～ミス・サイゴン～\n        5. 街灯の下で（LEANING ON A LAMP POST）～ミー&マイガール～\n        6. ぎくしゃくワルツ（I LIKE YOUR STYLE）～BARNUM～ / DUET：大竹しのぶ\n        7. ディス・イズ・ノット・オーヴァー・イェット（THIS IS NOT OVER YET）～PARADE～\n        8. ルック・トゥー・ザ・レインボウ（LOOK TO THE RAINBOW）～フィニアンの虹～\n        9. 星から降る金（Gold von den Sternen）～モーツァルト！～\n        10. 明日への階段（THE STEPS OF TOMORROW)～ルドルフ・The Last Kiss～\n        \n        [DVD]\n        1. 本人による曲解説（CD収録曲/全10曲）\n        2. レコーディング風景",
      edition: [
        {
          img: "welcome_to",
          ttl: "",
          price: "¥3,600(tax in)",
          contents: "CD+DVD/2枚組",
          url: "https://shop.grand-arts.com/shopdetail/000000000018/ct5/page1/recommend/",
        },
      ],
    },
    {
      ttl: "空に星があるように",
      date: {
        year: 2008,
        month: 8,
        day: 11,
      },
      style: "Album",
      descriptiion:
        "[CD]\n        1. 黒のクレール\n        2. 木綿のハンカチーフ\n        3. 花鳥風月\n        4. 空に星があるように\n        5. 上を向いて歩こう\n        6. 胸の振り子\n        7. 瑠璃色の地球\n        8. 恋のバカンス\n        9. YOU ARE THE TOP\n        10. 伝えたい・・・ありがとう。\n        \n        [DVD]\n        瑠璃色の地球",
      edition: [
        {
          img: "soranihoshigaaruyouni",
          ttl: "",
          price: "¥3,048+tax",
          contents: "CD+DVD/2枚組",
          url: "",
        },
      ],
    },
    {
      ttl: "井上芳雄コンサート2005「星に願いを」",
      date: {
        year: 2005,
        month: 12,
        day: 16,
      },
      style: "DVD",
      descriptiion:
        "[Disc1]\n        1.Opening:星に願いを\n        2.MC-1\n        3.Stars\n        4.星から降る金\n        5.MC-2\n        6.空に星があるように\n        7.真夏のシリウス\n        8.見上げてごらん夜の星を\n        9.MC-3\n        10.わたしは青空\n        11.ニーナ\n        \n        [Disc2]\n        1.This Is Not Over Yet\n        2.Steam Heat\n        3.MC-1 使用曲:JEDEM GIBT ER DAS SEINE(皇帝の義務)\n        4.The Phantom of The Opera\n        5.MC-2\n        6.小さな空\n        7.雪の華\n        8.If We Hold On Together\n        9.MC-3\n        10.ビリーヴ\n        11.You Raise Me Up\n        12.The Last Night of The World\n        13.MC-4\n        14.伝えたい…ありがとう\n        15.星に願いを",
      edition: [
        {
          img: "hoshininegaiwo",
          ttl: "",
          price: "¥7,619+tax",
          contents: "DVD/2枚組",
          url: "",
        },
      ],
    },
    {
      ttl: "井上芳雄コンサート2002「Sotte Voce」",
      date: {
        year: 2002,
        month: 10,
        day: 2,
      },
      style: "Album",
      descriptiion:
        "[CD]\n        1. LACRIMOSA\n        2. 桜坂\n        3. 優雅な月よ\n        4. 猫がふんじゃった\n        5. 闇が広がる\n        6. WE WERE DANCING\n        7. 明日に架ける橋\n        8. 少年時代\n        9. TIME TO SAY GOODBYE\n        10. 夢より確かなもの\n        11. トライ・トゥ・リメンバー「ファンタスティック」より",
      edition: [
        {
          img: "sottevoce",
          ttl: "",
          price: "¥2,900(tax in)",
          contents: "CD/1枚組",
          url: "",
        },
      ],
    },
  ]);
}

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
