const hairSummary = "";
const skinSummary = "";
const bodySummary = "";

const hairList = [
  {
    title: "Hair Fall Treatment",
    href: "/treatments/hair/hair-fall-treatment",
  },
  {
    title: "Hair Regrowth Therapy",
    href: "/treatments/hair/hair-regrowth-therapy",
  },
  {
    title: "PRP Therapy",
    href: "/treatments/hair/prp-therapy",
  },
  {
    title: "LLT Treatment",
    href: "/treatments/hair/llt-treatment",
  },
  {
    title: "Hair Transplant",
    href: "/treatments/hair/hair-transplant",
  },
  {
    title: "Dandruff Treatment",
    href: "/treatments/hair/dandruff-treatment",
  },
  {
    title: "Laser Hair Removal",
    href: "/treatments/hair/laser-hair-removal",
  },
];

const skinList = [
  {
    title: "Botox",
    href: "/treatments/skin/botox",
  },
  {
    title: "Rosacea Treatment",
    href: "/treatments/skin/rosacea-treatment",
  },
  {
    title: "Photo Facial",
    href: "/treatments/skin/photo-facial",
  },
  {
    title: "Skin Rejuvenation",
    href: "/treatments/skin/skin-rejuvenation",
  },
  {
    title: "Melasma",
    href: "/treatments/skin/melasma",
  },
  {
    title: "Dark Circles",
    href: "/treatments/skin/dark-circles",
  },
  {
    title: "Skin Brightening",
    href: "/treatments/skin/skin-brightening",
  },
  {
    title: "Acne Treatment",
    href: "/treatments/skin/acne-treatment",
  },
  {
    title: "Derma Fillers",
    href: "/treatments/skin/derma-fillers",
  },
  {
    title: "Face Lifting",
    href: "/treatments/skin/face-lifting",
  },
  {
    title: "Chemical Peeling",
    href: "/treatments/skin/chemical-peeling",
  },
  {
    title: "Skin Polishing",
    href: "/treatments/skin/skin-polishing",
  },
  {
    title: "Anti Aging",
    href: "/treatments/skin/anti-aging",
  },
  {
    title: "Pigment Reduction",
    href: "/treatments/skin/pigment-reduction",
  },
  {
    title: "Semi Permanent Makeup",
    href: "/treatments/skin/semi-permanent-makeup",
  },
];

const bodyList = [
  {
    title: "Body Contouring",
    href: "/treatments/body/body-contouring",
  },
  {
    title: "Tattoo Removal",
    href: "/treatments/body/tattoo-removal",
  },
  {
    title: "Scar & Stretch Reduction",
    href: "/treatments/body/scar-stretch-reduction",
  },
  {
    title: "Warts",
    href: "/treatments/body/warts",
  },
  {
    title: "Mole Removal",
    href: "/treatments/body/mole-removal",
  },
  {
    title: "Earlobe Repair",
    href: "/treatments/body/earlobe-repair",
  },
  {
    title: "Cyst Removal",
    href: "/treatments/body/cyst-removal",
  },
  {
    title: "Birthmark Removal",
    href: "/treatments/body/birthmark-removal",
  },
];

export const load = ({ params }) => {
  let res = {
    title: "",
    summary: "",
    list: [{
        title: "",
        href: ""
    }],
  };
  switch (params.slug) {
    case "hair":
      res = {
        title: "Hair Care",
        summary: hairSummary,
        list: hairList,
      };
      break;
    case "skin":
      res = {
        title: "Skin Care",
        summary: skinSummary,
        list: skinList,
      };
      break;
    case "body":
      res = {
        title: "Body Care",
        summary: bodySummary,
        list: bodyList,
      };
      break;
    default:
      res = {
        title: "Not Found 404",
        summary: "",
        list: []
      };
      break;
  }
  params.slug;
  return res;
};
