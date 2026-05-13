export default function Home() {
  const casinos = [
    { name: "Ace Casino", tag: "POPULAR", signup: "Free Gold Coin Bonus", daily: "Daily login bonus available", url: "https://www.ace.com/lp?r=e43e9141%2F23953168" },
    { name: "Acorn Fun", tag: "", signup: "Free coins on registration", daily: "Daily free coin drops", url: "https://game.acornfun.com/#/dashboard/welcome?channel=Refer&campaign=Refer&invite_code=TB62HMZ1" },
    { name: "Americana Casino", tag: "", signup: "Welcome bonus on sign-up", daily: "Daily sweeps coins available", url: "https://www.americanacasino.com/?aff=2907" },
    { name: "American Luck", tag: "HOT", signup: "Free Gold Coins on sign-up", daily: "Daily login rewards", url: "https://americanluck.com/signup/c4d82a4b-d631-4edc-9318-d61141b9559c" },
    { name: "Baba Casino", tag: "", signup: "Bonus coins on sign-up", daily: "Daily free spins", url: "https://play.babacasino.com/" },
    { name: "Carnival Citi", tag: "", signup: "Welcome coins package", daily: "Daily bonus available", url: "https://www.carnivalciti.com/" },
    { name: "Casino Kai", tag: "", signup: "Free coins on registration", daily: "Daily login reward", url: "https://casinokai.com/?ref=r_jlw661993" },
    { name: "Chanced", tag: "TOP PICK", signup: "5,000 Gold Coins + Free Sweeps", daily: "Daily free sweeps coins", url: "https://chanced.com/c/pu3zp9" },
    { name: "ChipNWin", tag: "", signup: "Bonus chips on sign-up", daily: "Daily chip bonus", url: "https://chipnwin.com/?earn=ZqDvfF3m" },
    { name: "Chumba Casino", tag: "TOP PICK", signup: "2 Sweeps Coins + bonus", daily: "Daily login bonus up to 1 SC", url: "https://chumbacasino.com/" },
    { name: "Clubs Poker", tag: "", signup: "Free chips on registration", daily: "Daily chip gifts", url: "https://play.clubs.poker/?referralCode=8208" },
    { name: "Coins Bucks", tag: "", signup: "Welcome coins on sign-up", daily: "Daily free coins", url: "https://coinsbucks.com/lobby" },
    { name: "Coins Game", tag: "", signup: "Sign-up coin package", daily: "Daily coin drops", url: "https://coins.game/c/2106994_cf160bdf" },
    { name: "Crown Coins Casino", tag: "HOT", signup: "1,000,000 Gold Coins + bonus", daily: "Daily sweeps and coin bonuses", url: "https://crowncoinscasino.com/?utm_campaign=bfcae15d-c154-4c2b-a9f9-917d0f97a04e&utm_source=friends" },
    { name: "Dara Casino", tag: "", signup: "Welcome bonus coins", daily: "Daily free rewards", url: "https://daracasino.com/#/signup/?refferalCode=41s414Z91E" },
    { name: "DoggHouse Casino", tag: "", signup: "Welcome bonus on sign-up", daily: "Daily bonus available", url: "https://prod.d1qrywpnm2lw71.amplifyapp.com/?code=U-ZVG-WHI-5U&type=refferal_code" },
    { name: "Fire Sevens", tag: "", signup: "Free coins on registration", daily: "Daily hot deals", url: "http://firesevens.com/?invited_by=PC7CGW" },
    { name: "Fortune Coins", tag: "POPULAR", signup: "Free Fortune Coins on sign-up", daily: "Daily free coin rewards", url: "https://www.fortunecoins.com/signup/1a24d731-43ed-4586-9288-5d6d63382c9d" },
    { name: "Gains.com", tag: "", signup: "Bonus on registration", daily: "Daily rewards program", url: "https://gains.com/?ref=jlw661993" },
    { name: "Golden Hearts Games", tag: "CHARITY", signup: "10,000 Hearts + bonus", daily: "Daily bonus hearts", url: "https://goldenheartsgames.com/referral/VQ3ZCVXX6Z" },
    { name: "Gold Treasure Casino", tag: "", signup: "Free treasure coins on sign-up", daily: "Daily treasure drops", url: "https://goldtreasurecasino.com/?referrer=OBiIbn8F" },
    { name: "Good Vibes Casino", tag: "", signup: "Bonus coins on sign-up", daily: "Daily good vibes bonus", url: "https://www.goodvibescasino.com/?r=5aHxue8g6YxN" },
    { name: "Hello Millions!", tag: "HOT", signup: "1,000,000 Gold Coins + bonus", daily: "Daily sweeps coins login", url: "https://www.hellomillions.com/lp/raf?r=4ac7eaca%2F1505022400" },
    { name: "High 5 Casino", tag: "TOP PICK", signup: "5 Free Sweeps Coins on sign-up", daily: "Daily 250 HC free", url: "https://high5casino.com/gc?adId=INV001%3Ajlw661993" },
    { name: "Jackpota", tag: "", signup: "Welcome bonus on registration", daily: "Daily jackpot bonuses", url: "https://www.jackpota.com/?r=148982342" },
    { name: "Jackpot Rabbit", tag: "", signup: "Free coins on sign-up", daily: "Daily rabbit rewards", url: "https://jackpotrabbit.com/?invited_by=X14Z3Q" },
    { name: "King Prize", tag: "NEW", signup: "Royal coins on registration", daily: "Daily king rewards", url: "https://kingprize.com/?ref=19636" },
    { name: "Lavish Luck Casino", tag: "", signup: "Welcome coins on sign-up", daily: "Daily lavish rewards", url: "https://lavishluck.net/" },
    { name: "Legendz Casino", tag: "POPULAR", signup: "Bonus coins on sign-up", daily: "Daily legendz login bonus", url: "https://www.legendz.com/?referred_by_id=4978" },
    { name: "LoneStar Casino", tag: "", signup: "Free coins on sign-up", daily: "Daily star bonuses", url: "https://lonestarcasino.com/refer/524119" },
    { name: "Luck Party", tag: "NEW", signup: "Free coins on sign-up", daily: "Daily party bonuses", url: "https://luckparty.com/signup/a93a611b-bbb5-497e-8462-e69d40a01850" },
    { name: "Lucky Bird.io", tag: "", signup: "Free coins on registration", daily: "Daily bird bonuses", url: "https://luckybird.vip/?c=c_jlw661993" },
    { name: "Lucky Bits Vegas", tag: "", signup: "5 Free Sweeps Coins on sign-up", daily: "Daily 250 HC free", url: "https://luckybitsvegas.com/gc?adId=INV001%3Ajlw661993" },
    { name: "Lucky Hands", tag: "", signup: "Free coins on sign-up", daily: "Daily hand rewards", url: "https://luckyhands.com/sign-up?code=e44ffc94-1806-4d81-b12f-577b5ee5f819" },
    { name: "Lucky Kong", tag: "", signup: "Use code JOANNAW for bonus", daily: "Daily kong bonuses", url: "https://luckykong.us/register?promocode=JOANNAW" },
    { name: "Lucky.me", tag: "", signup: "Welcome bonus on registration", daily: "Daily lucky rewards", url: "https://www.lucky.me/raf/458445/" },
    { name: "Luckyland Slots", tag: "TOP PICK", signup: "10 Free Sweeps Coins", daily: "Daily free spins & SC", url: "https://luckylandslots.com/" },
    { name: "LuckySlots.us", tag: "", signup: "Free coins on sign-up", daily: "Daily slot bonuses", url: "https://luckyslots.us/?raf=czZmMmZrVkdyZ0dTTGUzeUFPTlc=" },
    { name: "Luckystake", tag: "", signup: "Welcome stake bonus", daily: "Daily stake rewards", url: "https://luckystake.com/?c=27321_UGd1gBGc" },
    { name: "LunaLand Casino", tag: "", signup: "Lunar welcome bonus", daily: "Daily luna rewards", url: "https://lunalandcasino.com/?inviter=d3199e6e-1304-901c&utm_source=referral&utm_medium=inviteafriend" },
    { name: "McLuck", tag: "HOT", signup: "7,500 Gold Coins + 2.5 SC", daily: "Daily sweeps login bonus", url: "https://www.mcluck.com/?r=1505003889" },
    { name: "Mega Bonanza", tag: "", signup: "Mega welcome coins", daily: "Daily mega bonuses", url: "https://www.megabonanza.com/?r=82721266" },
    { name: "Modo.us", tag: "POPULAR", signup: "Free coins on registration", daily: "Daily modo rewards", url: "https://modo.us/?referralCode=Z3D12S" },
    { name: "Monkey Spins", tag: "", signup: "Free spins on sign-up", daily: "Daily spin bonus", url: "https://monkeyspins.com/?signup=true&referral=c53cb6" },
    { name: "Moon Spin", tag: "", signup: "Lunar bonus on registration", daily: "Daily moon bonuses", url: "https://moonspin.us/?referralId=OXBhc" },
    { name: "Moozi", tag: "", signup: "Welcome coins on sign-up", daily: "Daily moozi login rewards", url: "https://moozi.com/signin?ref=4905187039" },
    { name: "Mr. O Casino", tag: "", signup: "Free coins on registration", daily: "Daily Mr. O rewards", url: "https://download.mrocasino.com/affiliate/remote/ai?casinoID=1052&gAID=138377&subGid=0&bannerID=26133" },
    { name: "MyPrize", tag: "", signup: "Prize coins on sign-up", daily: "Daily prize bonuses", url: "https://myprize.us/invite/Jo_aka_redoxy" },
    { name: "NioPlay", tag: "", signup: "Free coins on registration", daily: "Daily play bonuses", url: "http://nioplay.net/?referralcode=1d887a39-c571-47f6-933b-82be58a69b94" },
    { name: "PlayW3.com", tag: "", signup: "W3 welcome bonus", daily: "Daily W3 rewards", url: "https://playw3.com/?sap=SA*GVAfWifeKsiKESvO" },
    { name: "Pulsz", tag: "TOP PICK", signup: "5,000 Gold Coins + Free SC", daily: "Daily free sweeps coins", url: "https://www.pulsz.com/?invited_by=55uwfm" },
    { name: "Punt Casino", tag: "", signup: "Welcome punt bonus", daily: "Daily punt rewards", url: "https://punt.com/c/0ltmim" },
    { name: "Real Prize", tag: "", signup: "Real coins on sign-up", daily: "Daily real prize login", url: "https://www.realprize.com/refer/203204" },
    { name: "Rich Sweeps", tag: "THURSDAY", signup: "Rich welcome bonus", daily: "Thursday special bonuses", url: "https://richsweeps.com/?ref=r_jlw661993" },
    { name: "Rolla Casino", tag: "", signup: "Free coins on registration", daily: "Daily rolla login bonus", url: "https://www.rolla.com/?raf=1883" },
    { name: "Rolling Riches", tag: "", signup: "Welcome riches package", daily: "Daily rolling rewards", url: "https://www.rollingriches.com/" },
    { name: "Roxy Moxy", tag: "", signup: "Bonus coins on sign-up", daily: "Daily moxy rewards", url: "https://roxymoxy.com/home?invite=ab235ea3bf" },
    { name: "Scarlet Sands", tag: "", signup: "Free coins on registration", daily: "Daily scarlet bonuses", url: "http://scarletsands.com/?invited_by=U7SLFE" },
    { name: "Sheesh Casino", tag: "", signup: "Free coins on sign-up", daily: "Daily sheesh bonus", url: "https://sheeshcasino.com/?ref=owmzngq" },
    { name: "Shuffle.us", tag: "POPULAR", signup: "Welcome bonus on sign-up", daily: "Daily shuffle rewards", url: "https://shuffle.us/?r=eAI7P4rKHH" },
    { name: "Sixty6", tag: "", signup: "Free coins on registration", daily: "Daily sixty6 bonuses", url: "https://sixty6.com/?ref=EAFEB3DB3CBF3945&modal=register" },
    { name: "Speed Sweeps", tag: "WEDNESDAY", signup: "Speed welcome bonus", daily: "Wednesday special bonuses", url: "https://speedsweeps.com/?ref=r_jlw661993" },
    { name: "Spindoo", tag: "", signup: "Free spins on registration", daily: "Daily spin rewards", url: "https://www.spindoo.us/?r=24730237" },
    { name: "Spin Pals", tag: "", signup: "Pal bonus on sign-up", daily: "Daily pal spin bonuses", url: "https://www.spinpals.com/?referralcode=a8eb793b-71c7-485a-b8b4-97fcfcb92ab2" },
    { name: "Spin Quest", tag: "", signup: "Quest coins on sign-up", daily: "Daily quest rewards", url: "https://www.spinquest.com/?u=32OPELA" },
    { name: "Spin Saga Casino", tag: "", signup: "Saga coins on registration", daily: "Daily saga bonuses", url: "https://play.spinsagacasino.com/?ref=10594&campaign=referFriend" },
    { name: "Spree Casino", tag: "", signup: "Free coins on sign-up", daily: "Daily spree login reward", url: "https://spree.com/?r=184637" },
    { name: "Stake.us", tag: "TOP PICK", signup: "100K Gold Coins + bonus", daily: "Daily stake coin bonus", url: "https://stake.us/?c=3egz1X7U" },
    { name: "Storm Rush", tag: "", signup: "Storm bonus on sign-up", daily: "Daily storm rush rewards", url: "https://stormrush.com/?invited_by=FB0ME1" },
    { name: "Sweep Jungle", tag: "", signup: "Jungle coins on registration", daily: "Daily jungle bonuses", url: "https://sweepjungle.com/?ref=F8F5DF02F6D42FF0&modal=register" },
    { name: "Sweep Las Vegas", tag: "", signup: "Vegas welcome coins", daily: "Daily Vegas sweeps", url: "https://sweeplasvegas.com/signup?ref=jlw661993_404" },
    { name: "SweepLuxe", tag: "", signup: "Luxe coins on sign-up", daily: "Daily luxe rewards", url: "https://sweepluxe.com/sign-up?referralCode=JHveva" },
    { name: "SweepNext", tag: "", signup: "Welcome sweeps coins", daily: "Daily next-level bonuses", url: "https://sweepnext.com/?c=3178_ZtpEnugg" },
    { name: "Sweeps Royal", tag: "FRIDAY", signup: "Royal coins on sign-up", daily: "Friday royal bonuses", url: "https://sweepsroyal.com/?ref=r_jlw661993" },
    { name: "Sweeps USA", tag: "NEW", signup: "Welcome sweeps coins", daily: "Daily USA sweeps bonus", url: "https://sweepsusa.com/?ref=jlw661993_1035" },
    { name: "Tao Fortune", tag: "", signup: "Fortune coins on sign-up", daily: "Daily fortune login bonus", url: "https://taofortune.com/?invited_by=3KM6Y0" },
    { name: "The Boss Casino", tag: "HOT", signup: "Boss coins on sign-up", daily: "Daily boss rewards", url: "https://www.theboss.casino/?referralcode=a309f016-89e9-44c4-bf68-8a5a7d5dd64f" },
    { name: "The Money Factory", tag: "", signup: "Factory coins on sign-up", daily: "Daily factory bonuses", url: "https://www.themoneyfactory.com/referral?referralcode=becb32e6-a1e6-4ea9-a332-4c3d5178a1ad" },
    { name: "Tora Tora Casino", tag: "", signup: "Tora coins on registration", daily: "Daily tora bonuses", url: "https://toratoracasino.com/?mode=signup&referral=TORA-3ARPV-YRCN7D-VR" },
    { name: "Wild Horse Bucks", tag: "", signup: "Wild coins on sign-up", daily: "Daily wild horse bonuses", url: "https://wildhorsebucks.com/" },
    { name: "WOW Vegas", tag: "HOT", signup: "1,500,000 WOW Coins + bonus", daily: "Daily sweeps & wow coin login", url: "https://www.wowvegas.com/?raf=1622750" },
    { name: "YAY! Casino", tag: "", signup: "Yay coins on sign-up", daily: "Daily yay bonuses", url: "https://www.yaycasino.com/signup/3e5040ff-699f-436e-b4d3-21ebaae6eebb" },
    { name: "Zula Casino", tag: "TOP PICK", signup: "25 SC + 250,000 Gold Coins", daily: "Daily sweeps coin login", url: "https://www.zulacasino.com/register/cf63004e-b2aa-46ee-b986-fa631fb24ac0" },
  ];

  const topPicks = casinos.filter((c) => c.tag === "TOP PICK");

  function tagColor(tag: string) {
    if (tag === "TOP PICK") return "bg-gradient-to-r from-yellow-400 to-amber-500 text-black";
    if (tag === "HOT") return "bg-gradient-to-r from-red-500 to-orange-500 text-white";
    if (tag === "POPULAR") return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
    if (tag === "NEW") return "bg-gradient-to-r from-green-400 to-emerald-500 text-black";
    if (tag === "CHARITY") return "bg-gradient-to-r from-purple-500 to-violet-500 text-white";
    if (tag === "THURSDAY") return "bg-gradient-to-r from-orange-400 to-amber-500 text-black";
    if (tag === "FRIDAY") return "bg-gradient-to-r from-pink-400 to-rose-500 text-black";
    if (tag === "WEDNESDAY") return "bg-gradient-to-r from-teal-400 to-cyan-500 text-black";
    return "bg-white/20 text-white";
  }

  function tagEmoji(tag: string) {
    if (tag === "TOP PICK") return "⭐";
    if (tag === "HOT") return "🔥";
    if (tag === "POPULAR") return "💎";
    if (tag === "NEW") return "🆕";
    if (tag === "CHARITY") return "💜";
    if (tag === "THURSDAY") return "📅";
    if (tag === "FRIDAY") return "📅";
    if (tag === "WEDNESDAY") return "📅";
    return "";
  }

  function getDomain(url: string) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url.replace(/^https?:\/\//, "").split(/[/?#]/)[0].replace(/^www\./, "");
    }
  }

  function faviconUrl(url: string) {
    return `https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=64`;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">

      {/* 18+ TOP BANNER */}
      <div className="relative bg-gradient-to-r from-red-600/20 via-pink-600/20 to-red-600/20 border-b border-pink-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 text-center">
          <p className="text-xs font-bold text-white/80 tracking-wide">
            🔞 <span className="text-pink-400">18+ ONLY</span> · Play Responsibly · Sweepstakes Casinos · No Purchase Necessary · Void Where Prohibited
          </p>
        </div>
      </div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-12">

        {/* HEADER WITH LOGO */}
        <header className="text-center mb-8">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-pink-500/30 blur-3xl rounded-full" />
            <img
              src="/logo.png.jpg"
              alt="The G Spot Gaming Community"
              className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl shadow-pink-500/30 border border-white/10"
            />
          </div>
          

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
              🎰 {casinos.length} Casinos
            </span>
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
              ⭐ {topPicks.length} Top Picks
            </span>
            <span className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
              🎁 All Free to Join
            </span>
          </div>
          <p className="mt-6 text-white/40 max-w-xl mx-auto">
            The ultimate sweepstakes casino hub. Top picks, hottest bonuses, and daily rewards — all in one place.
          </p>
        </header>

        {/* TOP PICKS */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">⭐</span>
            <h3 className="text-xl font-black tracking-wide">TOP PICKS</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent ml-3" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topPicks.map((c, i) => (
              <div
                key={i}
                className="relative group bg-gradient-to-br from-yellow-500/10 via-white/5 to-pink-500/10 border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
              >
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${tagColor(c.tag)} shadow-lg`}>
                    ⭐ {c.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <img
                    src={faviconUrl(c.url)}
                    alt={`${c.name} logo`}
                    className="w-12 h-12 rounded-lg bg-white/10 p-1 border border-white/10 flex-shrink-0"
                    loading="lazy"
                  />
                  <h2 className="text-xl font-black">{c.name}</h2>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 text-sm mt-0.5">🎁</span>
                    <p className="text-sm text-white/80">{c.signup}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 text-sm mt-0.5">⚡</span>
                    <p className="text-sm text-white/60">{c.daily}</p>
                  </div>
                </div>

                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black py-3 rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-500/20 text-sm tracking-wide"
                >
                  ⭐ CLAIM BONUS →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
          <span className="text-white/30 text-sm font-bold tracking-widest">ALL CASINOS A–Z</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
        </div>

        {/* ALL CASINOS */}
        <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {casinos.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-4 hover:border-pink-500/40 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {c.tag && (
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${tagColor(c.tag)} shadow-sm`}>
                      {tagEmoji(c.tag)} {c.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={faviconUrl(c.url)}
                    alt={`${c.name} logo`}
                    className="w-10 h-10 rounded-lg bg-white/10 p-1 border border-white/10 flex-shrink-0"
                    loading="lazy"
                  />
                  <h2 className="text-base font-bold group-hover:text-pink-400 transition-colors">{c.name}</h2>
                </div>

                <div className="mt-2 space-y-1">
                  <p className="text-xs text-white/60">
                    <span className="text-pink-400">🎁</span> {c.signup}
                  </p>
                  <p className="text-xs text-white/40">
                    <span className="text-yellow-400">⚡</span> {c.daily}
                  </p>
                </div>
              </div>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center bg-white/10 text-white font-bold py-2 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 text-xs tracking-wide border border-white/10 hover:border-pink-500/50"
              >
                CLAIM BONUS →
              </a>
            </div>
          ))}
        </section>

        {/* EZPROFITS */}
        <section className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-center border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20">
                💵 NEW — INVITE ONLY
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-6">EzProfits</h2>
              <p className="mt-3 text-white/70 max-w-lg mx-auto">
                Invite-only affiliate platform — no experience needed. Start earning passive income today.
              </p>
              <a
                href="#"
                target="_blank"
                className="mt-8 inline-block bg-white text-black font-black px-10 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-black/20 text-sm tracking-wide hover:scale-105"
              >
                START EARNING → FREE TO JOIN
              </a>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mt-20 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-black text-yellow-400 text-sm tracking-wide mb-2">DISCLAIMER</h3>
              <p className="text-white/60 text-xs leading-relaxed">
                The owner of this site is <span className="text-white/80 font-semibold">not responsible</span> for any changes
                casinos may make to their bonus structures, promotional offers, terms of service, or eligibility requirements.
                All bonuses, rewards, and offers listed are subject to change at any time without notice by the respective casino operators.
                Please review each casino&apos;s current terms and conditions directly on their website before signing up or claiming any bonus.
                Some links on this site are referral/affiliate links — we may earn a commission at no extra cost to you.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🎰</span>
            <span className="font-black text-white/20">THE G SPOT GAMING COMMUNITY</span>
          </div>
          <p className="text-white/20 text-xs max-w-md mx-auto">
            © 2025 The G Spot Gaming Community. All rights reserved. 18+ only. Play responsibly.
            Sweepstakes casinos are free to play. No purchase necessary.
          </p>
          <p className="text-white/20 text-xs">
            Gambling Problem? Call <span className="text-white/40">1-800-GAMBLER</span>
          </p>
        </footer>

      </div>
    </main>
  );
}