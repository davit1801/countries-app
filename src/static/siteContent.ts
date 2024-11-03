interface ContentMap {
  eng: SiteContent;
  ka: SiteContent;
}

interface SiteContent {
  navLinks: {
    name: string;
    path: string;
  }[];
  heroHeading: string;
  countriesHeading: string;
  copyrightTitle: string;
  countrySort: {
    title: string;
    increase: string;
    decrease: string;
  };
  countryCreateBtn: string;
  countryEditBtn: string;
  countyCreatePlaceholders: {
    countryName: string;
    countryCapital: string;
    countryPopulation: string;
    countryImg: string;
  };
  detailCountryTitles: {
    capital: string;
    population: string;
    million: string;
  };
  contactFormTitle: string;
  contactInputsPlacehplders: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  contactSendBtn: string;
  aboutPageText: string;
}

export type ParamsType = {
  lang?: keyof typeof CONTENT;
  id?: string;
};

const CONTENT: ContentMap = {
  eng: {
    navLinks: [
      { name: 'Home', path: 'countries' },
      { name: 'About', path: 'about' },
      { name: 'Contact', path: 'contact' },
    ],
    heroHeading: 'We Find The Best Tours For You',
    countriesHeading: 'Popular Countries',
    copyrightTitle: 'Copyright © 2024 All rights reserved',
    countrySort: {
      title: 'Sort By',
      increase: 'Encreases by likes',
      decrease: 'Encreases by likes',
    },
    countryCreateBtn: 'Create Country',
    countryEditBtn: 'Edit Country',
    countyCreatePlaceholders: {
      countryName: 'Country Name',
      countryCapital: 'Country Capital',
      countryPopulation: 'Country Population',
      countryImg: 'country Image URL',
    },
    detailCountryTitles: {
      capital: 'Capital',
      population: 'Population',
      million: 'Million',
    },
    contactFormTitle: 'Contact Us',
    contactInputsPlacehplders: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      message: 'Message',
    },
    contactSendBtn: 'SEND',
    aboutPageText: 'About Page Romelic Jer ar gamistilavs :D',
  },
  ka: {
    navLinks: [
      { name: 'მთავარი', path: 'countries' },
      { name: 'ჩვენს შესახებ', path: 'about' },
      { name: 'დაგვიკავშირდით', path: 'contact' },
    ],
    heroHeading: 'ჩვენ ვპოულობთ საუკეთესო ტურებს თქვენთვის',
    countriesHeading: 'პოპულარული ქვეყნები',
    copyrightTitle: 'ყველა უფლება დაცულია © 2024',
    countrySort: {
      title: 'დალაგება',
      increase: 'მოწონებების ზრდადობით',
      decrease: 'მოწონებების კლებადობით',
    },
    countryCreateBtn: 'ქვეყნის შექმნა',
    countryEditBtn: 'ქვეყნის რედაქტირება',
    countyCreatePlaceholders: {
      countryName: 'ქვეყნის დასახელება',
      countryCapital: 'ქვეყნის დედაქალაქი',
      countryPopulation: 'მოსახლეობის რაოდენობა',
      countryImg: 'ქვეყნის დროშა',
    },
    detailCountryTitles: {
      capital: 'დედაქალაქი',
      population: 'მოსახლეობა',
      million: 'მილიონი',
    },
    contactFormTitle: 'დაგვიკავშირდით',
    contactInputsPlacehplders: {
      firstName: 'სახელი',
      lastName: 'გვარი',
      email: 'მეილი',
      message: 'მესიჯი',
    },
    contactSendBtn: 'გაგზავნა',
    aboutPageText: 'ჩვენს შესახებ გვერდი, რომელიც ჯერ არ გამისტილავს:D',
  },
};

export default CONTENT;

export const defaultLang = 'ka';
