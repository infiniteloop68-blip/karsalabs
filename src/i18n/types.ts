export type Language = 'id' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  region: string;
  flag: string;
  description: string;
}

export interface Translations {
  nav: {
    allApps: string;
    exploreApps: string;
    ecosystem: string;
    solutions: string;
    solutionsShort: string;
    partners: string;
    services: string;
    about: string;
    contact: string;
    contactSales: string;
    signIn: string;
    products: string;
    resources: string;
    support: string;
    pricing: string;
  };
  footer: {
    tagline: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    col4Title: string;
    col5Title: string;
    col6Title: string;
    aboutLink: string;
    whatIsGoletin: string;
    businessLink: string;
    enterpriseLink: string;
    individualLink: string;
    educationLink: string;
    partnerProgram: string;
    contactSales: string;
    legalSitemap: string;
    legalPrivacy: string;
    legalTerms: string;
    legalTrademarks: string;
    legalContact: string;
    langButton: string;
  };
  langModal: {
    title: string;
    subtitle: string;
    currentActive: string;
    selectLabel: string;
    close: string;
  };
  appsDrawer: {
    badge: string;
    title: string;
    countSuffix: string;
    searchPlaceholder: string;
    emptyTitle: string;
    emptyDesc: string;
    emptyReset: string;
    viewSitemap: string;
  };
  common: {
    learnMore: string;
    tryFree: string;
    getStarted: string;
    viewAll: string;
    contactUs: string;
    bookConsultation: string;
    exploreSolutions: string;
    onSoilBadge: string;
  };
}
