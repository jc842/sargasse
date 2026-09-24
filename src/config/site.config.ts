export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId?: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Sargasse.com — Observatoire & Prévisions des Échouements aux Antilles",
  domain: "sargasse.com",
  url: "https://sargasse.com",
  description: "Plateforme indépendante de surveillance environnementale, prévisions de dérive satellite, impacts sanitaires (H2S), solutions de barrage et valorisation des sargasses en Guadeloupe, Martinique et Caraïbes.",
  repo: "jc842/sargasse",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-eco-observatory",
    fontFamily: "sans",
    colorScheme: "botanical-moss",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "110",
    containerId: "X7a6ujV3",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Observatoire Écologique & Journalisme Scientifique Caraïbes",
    address: "Guadeloupe & Martinique, Antilles Françaises",
    contactEmail: "contact@sargasse.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
