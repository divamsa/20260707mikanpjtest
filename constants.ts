import { WorkItem, WorkCategory, StaffMember } from './types';

export const COMPANY_INFO = {
  name: "株式会社みかんプロジェクト",
  establishment: "2020年10月",
  capital: "500万円",
  business: "テレビ番組等の映像作品企画・制作",
  ceo: "伊槻雅裕",
  address: "〒150-0042 東京都渋谷区宇田川町"
};

export const WORKS_DATA: WorkItem[] = [
  {
    id: '9',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2026.6',
    title: `「病児の家族を生きる　～お母さん食堂の1年～」`,
    description: `新宿で、子どもの入院に付き添う家族にお弁当を届ける人がいる。食事も満足に取れず、体調を崩す家族は半数以上。その「お母さん食堂」は、子どもを亡くした親たちにも、出会いの場としての料理教室を開く。様々な家族の日々を見つめた。`,
    image: '/works/byouji-kazoku-2026.jpeg',
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/6M1PRGY44L',
    linkText: `病児の家族を生きる 〜お母さん食堂の1年〜 NHK`
  },
  {
    id: '1',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2023.9',
    title: `「断らない　ある市役所の実践」`,
    description: `神奈川県座間市は、「誰も断らない、見捨てない」をモットーに、生活困窮者や生きづらさを抱えた若者の支援に取り組んでいる。そのため地域の力を結集し立ち上げたのは「チーム座間」。迷いながら奮闘する職員たちの、役所内外の日々に密着。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769683674/%E5%9B%B31.png_asgyui.jpg', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/K6LXV37WX7',
    linkText: `「断らない　ある市役所の実践」NHK`
  },
  {
    id: '2',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2022.6',
    title: `「迷える女性たちの家」`,
    description: `とある街の一角。行き場を失った女性たちのためのシェルターがある。「Jikka（実家）」。家族のDV から逃れて来た人、自傷行為がやめられない人、5 人の子を持つシングルマザー…。ここで暮らしを立て直そうとする女性たちの日々。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769683733/%E5%9B%B32_mu4ao5.jpg', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/2KJ99V1GM6',
    linkText: `「迷える女性たちの家」 | NHK`
  },
  {
    id: '3',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2021.5',
    title: `「この国で生きてゆく　～大阪 外国ルーツの子どもたち～」`,
    description: `大阪ミナミの歓楽街。その片隅に、外国ルーツの子どもたちの夜間教室がある。子どもたちにとっては夜間の居場所、親にとっては相談の場所である。コロナ禍、高校受験を控えた３人を中心に、子どもたちとその家族を 1 年に渡って見つめた。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769683783/%E5%9B%B33_u5rbzv.jpg', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/6LVLZK8G84',
    linkText: `「この国で生きてゆく」 | NHK`
  },
  {
    id: '4',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '４K 特集 （BS４K・BSP）',
    date: '2023.5',
    title: `「すべてのものが幸福にしかなれない處　～京都・五条坂 河井寬次郎家の人々」`,
    description: `日本を代表する陶工、河井寬次郎(1890-1966)。器だけでなく、胸に響く多くの「言葉」を遺した。「美を追はない仕事 仕事の後から追ひかける美」etc。何気ない日常に美を見出した祖父の言葉を胸に、人生をよりよく生きようとした家族の物語。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769683867/%E5%9B%B34_hrlkie.jpg', 
    link: 'https://www2.nhk.or.jp/archives/movies/?id=D0009051574_00000',
    linkText: `NHK アーカイブス`
  },
  {
    id: '5',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2025.9',
    title: `「だからあんな不思議な絵を　〜夭折の画家・有元利夫と家族 〜」`,
    description: `かつて幻想に満ちた絵画世界で一世を風靡した画家・有元利夫（1946-1985）。38 歳の若さで亡くなった後、遺されたのは日本画家の妻容子さんと、生まれて間もない長男の利彦さん。生前の夫婦の葛藤、画家を目指した利彦さんのその後とは。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769683817/%E5%9B%B35_yl5pmk.png', 
    link: 'https://www.nhk-ondemand.jp/goods/G2025150385SA000/index.html',
    linkText: `NHKオンデマンド`
  },
  {
    id: '6',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2025.1',
    title: `「人生で美しいとは何か 彫刻家・舟越保武と子どもたち」`,
    description: `日本を代表する彫刻家、舟越保武（1912-2002）。その作品は、見るものに「美しさとは何か」を厳しく問いかける。父の仕事を間近に見て育った、末盛千枝子、舟越桂、舟越直木、舟越カンナ･･･。作品を通して父と対話を続ける人生とは。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769684014/%E5%9B%B36_gllljt.jpg', 
    link: 'https://www.web.nhk/tv/an/nichibi/pl/series-tep-3PGYQN55NP/ep/3L64LJL9XZ',
    linkText: `人生で美しいとは何か　日曜美術館 | NHK`
  },
  {
    id: '7',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2024.1',
    title: `「美は喜び   河井寬次郎 住める哲学」`,
    description: `京都・五条坂にたたずむ河井寬次郎の旧居。ここは寬次郎自ら設計した建物で、没後孫たちが記念館として公開した。寬次郎が体現した「暮らし」のなかの「美」とは？ 孫で学芸員の鷺珠江さんの案内で、建物の随所に現れる哲学に迫る。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769684056/%E5%9B%B37_tzqa9l.jpg', 
    link: 'https://www.web.nhk/tv/an/nichibi/pl/series-tep-3PGYQN55NP/ep/9172NKYWWJ',
    linkText: `美は喜び 日曜美術館 | NHK`
  },
  {
    id: '8',
    category: WorkCategory.OTHER,
    categoryLabel: 'その他',
    subCategory: '', 
    date: '2021.6',
    title: `国立ハンセン病資料館 DVD 「知っていますか？ ハンセン病問題」`,
    description: `国の政策によって世間の偏見差別にさらされ、長く苦難の道を歩いてきた人たちがいるー。ハンセン病について、医学、歴史、現在の課題まで、基本的な知識を、多摩全生園で暮らす山内きみ江さんの語りを軸に、わかりやすくまとめたもの。`,
    image: 'https://res.cloudinary.com/dbyxjlzmt/image/upload/v1769684090/%E5%9B%B38_doxl9r.jpg', 
    link: `https://www.bing.com/videos/riverview/relatedvideo?q=%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%81%8b+%e3%83%8f%e3%83%b3%e3%82%bb%e3%83%b3%e7%97%85%e5%95%8f%e9%a1%8c&refig=693a781d7f4d481f8d0a84e99f761703&pc=LCTS&pq=%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%81%8b%e3%80%80%e3%81%af%e3%82%93%e3%81%9b%e3%82%93&cvid=693a781d7f4d481f8d0a84e99f761703&ghc=0&ntb=1`,
    linkText: `国立ハンセン病資料館ユーチューブ`
  }
];

export const STAFF_DATA: StaffMember[] = [
  {
    id: '1',
    name: '伊槻 雅裕',
    role: 'ディレクター・プロデューサー',
    profile: `大学卒業後、日本短波放送（現ラジオ NIKKEI）入社。ラジオ番組の制作、報道に携わる。1997 年オフィスラフト（現千代田ラフト）に転職。以後テレビ番組のディレクター、プロデューサー。常務取締役。2020 年 10 月、映像制作会社「みかんプロジェクト」設立。`,
    history: [
      {
        id: 'h1',
        type: 'gray-bar',
        title: 'ラジオ',
        items: [
          { text: `■「キャンパスラジオ」（パーソナリティー：鷺沢萌・春風亭昇太）` },
          {
            text: `■「タッチ　～風景のなかで」 日本民間放送連盟賞優秀賞`,
            notes: [
              `横浜文化ライブラリーで聴取できます　👉タッチ 風景のなかで｜放送ライブラリー公式ページ|https://www.bpcj.or.jp/program/detail/R00436/`
            ]
          },
          { text: `■「ソングス 小室等と子どもたち」 ギャラクシー賞小室等個人賞` },
          { text: `■「往復書講 二人の在日韓国人」 ギャラクシー賞優秀賞` }
        ]
      },
      {
        id: 'h2',
        type: 'simple-header',
        title: 'ラジオ番組の書籍化',
        items: [
          { text: `■「ここから風が 小室等対話集」（ぶどう社）` },
          { text: `■「デコボコ映画館 粉雪まみれインタビュー集　ハンディキャップ映画について語ろう」（リトル・モア）` }
        ]
      },
      { id: 'h3', type: 'gray-bar', title: 'NHK テレビ番組', items: [] },
      {
        id: 'y2000',
        type: 'year-box',
        title: '2000 年',
        items: [
          {
            text: `■総合特集「森のドクターと仲間たち」`,
            notes: [
              `横浜文化ライブラリーで視聴できます　👉森のドクターと仲間たち｜放送ライブラリー公式ページ|https://www.bpcj.or.jp/program/detail/011655/`
            ]
          },
          { text: `■ETV2000「新発見 中原中也・晩年の日誌」` }
        ]
      },
      {
        id: 'y2001',
        type: 'year-box',
        title: '2001 年',
        items: [
          {
            text: `■ハイビジョンスペシャル「フェルメール盗難事件 解き明かされた名画の謎」`,
            notes: [`関連リンク👉関連リンク　NHK アーカイブス|https://www2.nhk.or.jp/archives/movies/?id=D0009010657_00000`]
          }
        ]
      },
      {
        id: 'y2004',
        type: 'year-box',
        title: '2004 年',
        items: [
          { text: `■ＢＳドキュメンタリー「よみがえった聖母教会　～ドレスデン 60 年後の和解～」` },
          { text: `■ハイビジョンスペシャル「カヤック 風と荒波の岬へ　～南米最南端 61 歳の挑戦」` }
        ]
      },
      {
        id: 'y2005',
        type: 'year-box',
        title: '2005 年',
        items: [
          { text: `■ＢＳドキュタリー「東京を爆撃した兵士たち　～アメリカ軍元パイロット 60 年後の証言～」` },
          { text: `■ハイビジョンスペシャル「日韓条約　～知られざる交渉の内幕～」` }
        ]
      },
      {
        id: 'y2006-2008',
        type: 'year-box',
        title: '2006 年～2008 年',
        items: [
          {
            text: `■総合 「新日本紀行ふたたび」`,
            notes: [
              `「こけしの詩　～宮城県 鳴子町～」（2006.2）`,
              `「都をどりのころ　～京都 祇園～」（2007.5）`,
              `「風の町にうたが舞う　～北海道 江差町～」（2008.1）　ほか`
            ]
          }
        ]
      },
      {
        id: 'y2008',
        type: 'year-box',
        title: '2008 年',
        items: [
          { text: `■ＢＳドキュメンタリー「憎しみを超えられるか　～北アイルランド紛争対話の旅～」` },
          { text: `■ＥＴＶ特集「戦場カメラマン 小柳次一　～日中・太平洋戦争 従軍５千キロの記録～」 P` }
        ]
      },
      {
        id: 'y2009-2010',
        type: 'year-box',
        title: '2009 年',
        items: [
          { text: `■総合「世界遺産への招待状」（スイス、フランス、ボスニア・ヘルツェゴビナ）` },
          { text: `■ハイビジョンスペシャル「Shall we ラストダンス？　～草刈民代と周防正行」 P` }
        ]
      },
      {
        id: 'y2011-2014',
        type: 'year-box',
        title: '2011 年～2014 年',
        items: [
          {
            text: `■BS1 「ドキュメンタリーWAVE」 P`,
            notes: [
              `「活躍！ドイツ海賊党　～ネット世代の政治のゆくえ」（2013.3）`,
              `ルポ記事お読みいただけます（有料）👉[電子版] ネット選挙とデジタル・デモクラシー | NHK 出版|https://www.nhk-book.co.jp/detail/000243007720000.html`,
              `「激動スコットランド イギリス独立投票の行方」（2014.8） 兼ディレクター ほか`
            ]
          }
        ]
      },
      {
        id: 'y2011-2012',
        type: 'year-box',
        title: '2011 年～2012 年',
        items: [
          {
            text: `■BSP 「極上美の饗宴」 P`,
            notes: [
              `「川端康成 愛（いと）しの山水」（2011.7）`,
              `「藤田嗣治・乳白色の裸婦の秘密」（2012.5） ほか`
            ]
          }
        ]
      },
      {
        id: 'y2013-2019',
        type: 'year-box',
        title: '2013 年～2019 年',
        items: [
          {
            text: `■総合 「証言記録 東日本大震災」 P`,
            notes: [
              `「宮城県東松島市 指定避難所を襲った大津波」（2013.5） ほか`,
              `NHK の DVD でご覧いただけます（有料） 👉証言記録 東日本大震災 第17回 宮城県東松島市|https://www.nhk-ep.com/products/detail/h19421AA`
            ]
          }
        ]
      },
      {
        id: 'y2015-2025',
        type: 'year-box',
        title: '2015 年～2025 年',
        items: [
          {
            text: `■総合「おせち家族に福きたる！ 平野レミの早わざレシピ！」（2015.12）P`,
            notes: [`以降シリーズ化`]
          }
        ]
      },
      {
        id: 'y2016',
        type: 'year-box',
        title: '2016 年',
        items: [
          { text: `■BS1 スペシャル「犬と私の 1600 キロ 極寒の大地をゆく」P` }
        ]
      },
      {
        id: 'y2017-2020',
        type: 'year-box',
        title: '2017 年～2020 年',
        items: [
          {
            text: `■BS プレミアム「行くぞ！最果て！秘境×鉄道　縦断　カナダ大雪原」（2017.2) P`,
            notes: [`以降シリーズ化`]
          },
          {
            text: `■国際放送・BS1　「Asia Insight」 P`,
            notes: [
              `“Indonesia’s Garbage Clinic”  “貧しい人々に医療を” (2017.6) ほか`
            ]
          }
        ]
      },
      {
        id: 'y2018',
        type: 'year-box',
        title: '2018 年',
        items: [
          { text: `■ETV 特集「ドヤ街と詩人とおっちゃんたち　～釜ヶ崎芸術大学の日々」 P 兼ディレクター` }
        ]
      },
      {
        id: 'y2019-2020',
        type: 'year-box',
        title: '2019 年～2020 年',
        items: [
          {
            text: `■Eテレ「美の壺」 P`,
            notes: [
              `「一杯の至福 コーヒー」（2019.10） 　関連リンク👉「一杯の至福コーヒー」 | NHK|https://www.web.nhk/tv/an/tsubo/pl/series-tep-3LWMJVY79P/ep/EGXVNYRK36`,
              `「夏の輝き 氷」（2020.8） 　関連リンク👉「夏の輝き 氷」 | NHK|https://www.web.nhk/tv/an/tsubo/pl/series-tep-3LWMJVY79P/ep/4V9Q8ML2WY| ほか`
            ]
          }
        ]
      }
    ]
  }
];