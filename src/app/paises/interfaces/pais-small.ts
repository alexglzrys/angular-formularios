export interface PaisSmall {
  name: Name;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  eng?: Eng;
  mlt?: Eng;
  swe?: Eng;
  dan?: Eng;
  fao?: Eng;
  bos?: Eng;
  hrv?: Eng;
  srp?: Eng;
  ces?: Eng;
  slk?: Eng;
  fra?: Eng;
  gsw?: Eng;
  ita?: Eng;
  roh?: Eng;
  lav?: Eng;
  bul?: Eng;
  ell?: Eng;
  tur?: Eng;
  deu?: Eng;
  ltz?: Eng;
  gle?: Eng;
  nfr?: Eng;
  est?: Eng;
  nld?: Eng;
  bar?: Eng;
  lat?: Eng;
  hun?: Eng;
  sqi?: Eng;
  bel?: Eng;
  rus?: Eng;
  mkd?: Eng;
  nrf?: Eng;
  nno?: Eng;
  nob?: Eng;
  smi?: Eng;
  ukr?: Eng;
  lit?: Eng;
  glv?: Eng;
  isl?: Eng;
  fin?: Eng;
  nor?: Eng;
  ron?: Eng;
  por?: Eng;
  cat?: Eng;
  slv?: Eng;
  spa?: Eng;
  cnr?: Eng;
  pol?: Eng;
}

interface Eng {
  official: string;
  common: string;
}

