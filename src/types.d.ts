export interface CountryName {
  name: string;
  alpha3Code: string;
}

interface Flags {
  svg: string;
  png: string;
}

export interface CountryInformation {
  name: string;
  capital: string;
  population: number;
  flags: Flags;
  borders: string[];
}

export interface Info {
  name: string;
  capital: string;
  population: number;
  image: string;
  borders: string[];
}