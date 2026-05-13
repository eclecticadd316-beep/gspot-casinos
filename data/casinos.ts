export type Casino = {
  id: string;
  name: string;
  href: string;
  bonus: string;
  tag?: "TOP PICK" | "HOT" | "POPULAR" | "NEW" | "CHARITY";
};

export const casinos: Casino[] = [
  {
    id: "ace",
    name: "Ace Casino",
    href: "https://www.ace.com/lp?r=e43e9141%2F23953168",
    bonus: "Free Gold Coins on sign-up + Daily login bonus",
    tag: "POPULAR",
  },
  {
    id: "acornfun",
    name: "Acorn Fun",
    href: "https://game.acornfun.com/#/dashboard/welcome?channel=Refer&campaign=Refer&invite_code=TB62HMZ1",
    bonus: "Free coins on registration + Daily free coin drops",
  },
  {
    id: "americana",
    name: "Americana Casino",
    href: "https://www.americanacasino.com/?aff=2907",
    bonus: "Welcome bonus on sign-up + Daily sweeps coins",
  },
  {
    id: "americanluck",
    name: "American Luck",
    href: "https://americanluck.com/signup/c4d82a4b-d631-4edc-9318-d61141b9559c",
    bonus: "Free Gold Coins + Daily login rewards",
    tag: "HOT",
  },
  {
    id: "baba",
    name: "Baba Casino",
    href: "https://play.babacasino.com/",
    bonus: "Bonus coins on sign-up + Daily free spins",
  },
  {
    id: "carnivalciti",
    name: "Carnival Citi",
    href: "https://www.carnivalciti.com/",
    bonus: "Welcome coins package + Daily bonus available",
  },
  {
    id: "casinokai",
    name: "Casino Kai",
    href: "https://casinokai.com/?ref=r_jlw661993",
    bonus: "Free coins on registration + Daily login reward",
  },
  {
    id: "chanced",
    name: "Chanced",
    href: "https://chanced.com/c/pu3zp9",
    bonus: "5,000 Gold Coins + Daily free sweeps coins",
    tag: "TOP PICK",
  },
  {
    id: "chipnwin",
    name: "ChipNWin",
    href: "https://chipnwin.com/?earn=ZqDvfF3m",
    bonus: "Bonus chips on sign-up + Daily chip bonus",
  },
  {
    id: "chumba",
    name: "Chumba Casino",
    href: "https://chumbacasino.com/",
    bonus: "2 Sweeps Coins + Daily login bonus up to 1 SC",
    tag: "TOP PICK",
  },
  {
    id: "clubspoker",
    name: "Clubs Poker",
    href: "https://play.clubs.poker/?referralCode=8208",
    bonus: 