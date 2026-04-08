import { createContext } from "react";
import { useProprietaire } from "../proprietaire";
import { useContext } from "react";
import { useDonnesProduits } from "../donnesProduits";
import { useCommandesPrix } from "../commadesPrix";
import { useClients } from "../clients";
import { useModeLumiere } from "../modeEcran";

const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // liste des produits
  const dataplus = [
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im2.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "shoes",
      active: true,
    },

    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im3.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "clothes",
      active: true,
    },

    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
    {
      id: null,
      nom: "Nike Airbox",
      photo: "/images/im1.jpg",
      description: "Chaussures molles, pour le sport",

      prix: 634,
      totalDisponible: 337,
      couleursDisponibles: ["bleu", "rouge", "noir"],

      type: "others",
      active: true,
    },
  ];
  const dataClients = [
    {
      nom: "Vallerand",
      prenom: "Marc-Antoine",
      email: "m.vallerand@ziptmail.test",
      photo: "https://picsum.photos/seed/1/200",
      commandes: [],
      conversation: [
        {
          twitter: "@m_vallerand",
          insta: "@marco_v_pics",
          pinterest: "pinterest.com/mvallerand",
          facebook: "fb.com/m.vallerand.pro",
          siteWeb: "www.vallerand-tech.con",
        },
      ],
    },
    {
      nom: "El Mansouri",
      prenom: "Sarah",
      email: "sarah.em@globex.xyz",
      photo: "https://picsum.photos/seed/2/200",
      commandes: [],
      conversation: [
        {
          twitter: "@sarah_em",
          insta: "@sarah_lifestyle",
          pinterest: "pinterest.com/sem_design",
          facebook: "fb.com/sarah.elmansouri",
          siteWeb: "www.selmansouri.web",
        },
      ],
    },
    {
      nom: "Bakari",
      prenom: "Jean-Pierre",
      email: "jpbak@flashnet.dev",
      photo: "https://picsum.photos/seed/3/200",
      commandes: [],
      conversation: [
        {
          twitter: "@jp_bakari",
          insta: "@jpb_studio",
          pinterest: "",
          facebook: "fb.com/jpbakari",
          siteWeb: "www.bakari-studio.io",
        },
      ],
    },
    {
      nom: "Rodriguez",
      prenom: "Elena",
      email: "elena.rod@vortex.mail",
      photo: "https://picsum.photos/seed/4/200",
      commandes: [],
      conversation: [
        {
          twitter: "@erodriguez",
          insta: "@elena_creative",
          pinterest: "pinterest.com/elena_art",
          facebook: "",
          siteWeb: "www.er-design.net",
        },
      ],
    },
    {
      nom: "Tanaka",
      prenom: "Hiroshi",
      email: "tanaka.h@neoshift.jp",
      photo: "https://picsum.photos/seed/5/200",
      commandes: [],
      conversation: [
        {
          twitter: "@hiro_shift",
          insta: "@hiroshi_t",
          pinterest: "pinterest.com/h_tanaka",
          facebook: "fb.com/tanaka.corp",
          siteWeb: "www.tanaka-corp.nexus",
        },
      ],
    },
    {
      nom: "Benisti",
      prenom: "Clara",
      email: "clara.b@o2mail.me",
      photo: "https://picsum.photos/seed/6/200",
      commandes: [],
      conversation: [
        {
          twitter: "@clara_ben",
          insta: "@clara_law",
          pinterest: "",
          facebook: "fb.com/benisti.legal",
          siteWeb: "www.benisti-legal.com",
        },
      ],
    },
    {
      nom: "O’Neil",
      prenom: "Samuel",
      email: "sam.oneil@skyflow.io",
      photo: "https://picsum.photos/seed/7/200",
      commandes: [],
      conversation: [
        {
          twitter: "@sam_oneil",
          insta: "@sam_skyflow",
          pinterest: "pinterest.com/samoneil",
          facebook: "fb.com/sam.oneil.biz",
          siteWeb: "www.oneil-consulting.biz",
        },
      ],
    },
    {
      nom: "Lefebvre",
      prenom: "Inès",
      email: "ilefebvre@distri.cloud",
      photo: "https://picsum.photos/seed/8/200",
      commandes: [],
      conversation: [
        {
          twitter: "@ines_lef",
          insta: "@ines_style",
          pinterest: "pinterest.com/ines_lef",
          facebook: "fb.com/ines.lefebvre",
          siteWeb: "www.ines-lef.site",
        },
      ],
    },
    {
      nom: "Mwangi",
      prenom: "Kevin",
      email: "k.mwangi@afrotech.net",
      photo: "https://picsum.photos/seed/9/200",
      commandes: [],
      conversation: [
        {
          twitter: "@kev_mwangi",
          insta: "@kevin_dev",
          pinterest: "",
          facebook: "fb.com/k.mwangi.tech",
          siteWeb: "www.mwangi-dev.ao",
        },
      ],
    },
    {
      nom: "Wei",
      prenom: "Li",
      email: "li.wei88@oriental.mail",
      photo: "https://picsum.photos/seed/10/200",
      commandes: [],
      conversation: [
        {
          twitter: "@li_wei_pro",
          insta: "@li_wei_88",
          pinterest: "pinterest.com/li_wei",
          facebook: "",
          siteWeb: "www.liwei-solutions.cn",
        },
      ],
    },
    {
      nom: "Rossi",
      prenom: "Sofia",
      email: "s.rossi@italdesign.it",
      photo: "https://picsum.photos/seed/11/200",
      commandes: [],
      conversation: [
        {
          twitter: "@sofia_rossi",
          insta: "@sofia_italy",
          pinterest: "pinterest.com/s_rossi",
          facebook: "fb.com/rossi.creations",
          siteWeb: "www.rossi-creations.it",
        },
      ],
    },
    {
      nom: "Müller",
      prenom: "Thomas",
      email: "t.muller@berlin-lab.de",
      photo: "https://picsum.photos/seed/12/200",
      commandes: [],
      conversation: [
        {
          twitter: "@t_muller",
          insta: "@thomas_m_berlin",
          pinterest: "",
          facebook: "fb.com/muller.lab",
          siteWeb: "www.muller-bio.de",
        },
      ],
    },
    {
      nom: "Diop",
      prenom: "Amara",
      email: "diop.amara@dakar-innov.sn",
      photo: "https://picsum.photos/seed/13/200",
      commandes: [],
      conversation: [
        {
          twitter: "@amara_diop",
          insta: "@amara_innov",
          pinterest: "pinterest.com/adiop",
          facebook: "fb.com/amara.diop.sn",
          siteWeb: "www.amara-diop.tech",
        },
      ],
    },
    {
      nom: "Dupont",
      prenom: "Chloe",
      email: "chloe.d@fleuriste.paris",
      photo: "https://picsum.photos/seed/14/200",
      commandes: [],
      conversation: [
        {
          twitter: "@chloe_fleurs",
          insta: "@dupont_fleurs",
          pinterest: "pinterest.com/chloe_dupont",
          facebook: "fb.com/chloe.fleuriste",
          siteWeb: "www.dupont-fleurs.fr",
        },
      ],
    },
    {
      nom: "Patel",
      prenom: "Arjun",
      email: "arjun.p@indus-soft.in",
      photo: "https://picsum.photos/seed/15/200",
      commandes: [],
      conversation: [
        {
          twitter: "@arjun_p",
          insta: "@arjun_systems",
          pinterest: "pinterest.com/apatel",
          facebook: "fb.com/arjun.patel.dev",
          siteWeb: "www.patel-systems.in",
        },
      ],
    },
  ];

  const proprietaireData = useProprietaire();
  const produitsData = useDonnesProduits(dataplus);
  const commandeData = useCommandesPrix();
  const utilisateursData = useClients(dataClients);
  const lumiereData = useModeLumiere();

  const value = {
    ...proprietaireData,
    ...produitsData,
    ...commandeData,
    ...utilisateursData,
    ...lumiereData,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
