// NavBar Elements

import { curve, nextjs, revision, rocket, shopify, wordpress } from "@/public/icons";
import { ads, seoImage, videoImage, webImage } from "@/public/images";
import {
  Airplay,
  BriefcaseBusiness,
  Calendar,
  CircleDollarSign,
  HandCoins,
  Infinity,
  Settings,
  Zap,
} from "lucide-react";

export const NavElements = [
  {
    title: "Process",
    link: "#process",
  },
  {
    title: "Benefits",
    link: "#benefits",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

// Techonologies

export const Technologies = [
  {
    id: 1,
    title: "Wordpress",
    image: wordpress,
  },
  {
    id: 2,
    title: "Shopify",
    image: shopify,
  },
  {
    id: 3,
    title: "NextJS",
    image: nextjs,
  },
  {
    id: 1,
    title: "Wordpress",
    image: wordpress,
  },
  {
    id: 2,
    title: "Shopify",
    image: shopify,
  },
  {
    id: 3,
    title: "NextJS",
    image: nextjs,
  },
];

// How we Work

export const HowWeWork = {
  title: "How we Work",
  leftContent: "Get a dedicated design team  at fraction of the cost.",
  rightContent:
    "Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. make as many requests as you need - no limits.",
  link: "#pricing",
  process: [
    {
      image: rocket,
      title: "Subscribe & get started",
      content:
        "Submit as many design tasks as you need without worrying about individual project fees",
    },
    {
      image: curve,
      title: "Polished designs - on time",
      content:
        "Our designers get to work to deliver your request. Receive your design within a few days.",
    },
    {
      image: revision,
      title: "Revisions made simple",
      content:
        "Custom designs, prompt replies and as many revisions as you need.",
    },
  ],
};

// Our Capabilities

export const OutCapabilites = {
  subtitle: "Our Capabilities",
  title: "We can help you with...",
  tags: [
    {
      title: "Web design & UI",
    },
    {
      title: "Web Development",
    },
    {
      title: "Infographics",
    },
    {
      title: "Social Media Marketing",
    },
    {
      title: "Video Editing",
    },
    {
      title: "Search Engine Optimization (SEO)",
    },
    {
      title: "Strategic Marketing",
    },
    {
      title: "Digital ads",
    },
  ],
};

export const Services = [
  // {
  //   image: seoImage,
  //   title: "SEO",
  //   content:
  //     "Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO",
  //   tags: [
  //     {
  //       title: "social Media",
  //     },
  //     {
  //       title: "Ads",
  //     },
    
  //   ],
  // },
  // {
  //   image: videoImage,
  //   title: "Video Editing",
  //   content:
  //     "Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO",
  //   tags: [
  //     {
  //       title: "Instagram Reels",
  //     },
  //     {
  //       title: "Youtube",
  //     },
  //   ],
  // },
  {
    image: webImage,
    title: "Website Development",
    content:
      "From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.",
    tags: [
      {
        title: "Wordpress",
      },
      {
        title: "Shopify",
      },
      {
        title: "Nextjs",
      },
    ],
  },
  {
    image: ads,
    title: "Social Media",
    content:
      "Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!",
    tags: [
      {
        title: "Facebook Ads",
      },
      {
        title: "Google Ads",
      },  {
        title: "Video",
      },
    ],
  },
];

// Benefits

export const BenefitsData = {
  subtitle: "Benefits",
  title: "The design subscription that connects you to your dream team",
  content:
    "A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.",
  link: "#pricing",
};

export const BenefitsCardsData = [
  {
    icons: <Infinity className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "On-demand requests",
    content:
      "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    icons: <Zap className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Top-notch quality",
    content: `High-end work from a dedicated team that &apos; s always available when you need it.`,
  },
  {
    icons: <Airplay className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Fast. Responsive. Reliable.",
    content: `Get regular updates on your projects and can expect to receive your projects within 2-3 days.`,
  },
  {
    icons: <Calendar className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "On-demand requests",
    content:
      "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    icons: <CircleDollarSign className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Great value for money",
    content: `Get the power of dedicated design team at fraction of the cost of full-time employee.`,
  },
  {
    icons: <Settings className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Customized for you",
    content: `We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?`,
  },
  {
    icons: <HandCoins className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Creative paying",
    content: `We’re here when you need us and not on payroll when you don’t.`,
  },
  {
    icons: <BriefcaseBusiness className="text-white w-10 h-10 rounded-full border-2 border-primary p-2"/>,
    title: "Expert turnovers",
    content: `You’re getting 3+ years of  experience with every request. No hand-holding required.`,
  },
];

// Testomonials

export const Client = [
  {
    icon: "/public/icons/nextjs.png",
    title:
      "AdsVantage is the best digital agency i have ever seen! Highly Recommended!",
    content:
      "I recently hired Ideapeel for a custom web development project and couldn&apos;t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    owner: "Diana Lorea",
    position: "Director of GYMSTORY",
    image: "/public/icons/user.png",
  },
  {
    icon: "/public/icons/nextjs.png",
    title:
      "AdsVantage is the best digital agency i have ever seen! Highly Recommended!",
    content:
      "I recently hired Ideapeel for a custom web development project and couldn&apos;t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    owner: "Diana Lorea",
    position: "Director of GYMSTORY",
    image: "/public/icons/user.png",
  },
  {
    icon: "/public/icons/nextjs.png",
    title:
      "AdsVantage is the best digital agency i have ever seen! Highly Recommended!",
    content:
      "I recently hired Ideapeel for a custom web development project and couldn&apos;t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    owner: "Diana Lorea",
    position: "Director of GYMSTORY",
    image: "/public/icons/user.png",
  },
  {
    icon: "/public/icons/nextjs.png",
    title:
      "AdsVantage is the best digital agency i have ever seen! Highly Recommended!",
    content:
      "I recently hired Ideapeel for a custom web development project and couldn&apos;t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    owner: "Diana Lorea",
    position: "Director of GYMSTORY",
    image: "/public/icons/user.png",
  },
];

// Prices

export const OurPlanes = [
  {
    title: "Super Delux",
    content:
      "One request at a time. For companies who need on-going design support.",
    price: 90,
    services: [
      {
        item: "1x active task at a time",
      },
      {
        item: "Unlimited revisions",
      },
      {
        item: "Dedicated project manager",
      },
      {
        item: "Daily comms through Slack",
      },
      {
        item: "Work with senior designers",
      },
      {
        item: "2-3 days turn around time",
      },
      {
        item: "Top tier design ",
      },
    ],
  },
  {
    title: "Growth",
    content:
      "Double the requests. For companies with increasing design needs. Limited spots.",
    price: 45,
    services: [
      {
        item: "1x active task at a time",
      },
      {
        item: "Unlimited revisions",
      },
      {
        item: "Dedicated project manager",
      },
      {
        item: "Daily comms through Slack",
      },
      {
        item: "Work with senior designers",
      },
      {
        item: "2-3 days turn around time",
      },
      {
        item: "Top tier design ",
      },
    ],
  },
  {
    title: "Basic - Weekly",
    content:
      "Perfect if you want to try the subscription out or only have a few one-off tasks.",
    price: 10,
    services: [
      {
        item: "1x active task at a time",
      },
      {
        item: "Unlimited revisions",
      },
      {
        item: "Dedicated project manager",
      },
      {
        item: "Daily comms through Slack",
      },
      {
        item: "Work with senior designers",
      },
      {
        item: "2-3 days turn around time",
      },
      {
        item: "Top tier design ",
      },
    ],
  },
];

// FAQ

export const FAQ = [
  {
    question: "Do you have specific princing plans to show?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "How many years of experience do you have?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "What companies have you worked with?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "Am I safe leaving my company in your hands?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "Do you have specific princing plans to show?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
];


// Footer

export const Footer = {
  
}

export const ClientsReview = [
  {
    id : 1,
    url : 'https://player.vimeo.com/video/844951057?h=691caf134d'
  },
  {
    id : 2,
    url : 'https://player.vimeo.com/video/918766171'
  },
  {
    id : 3,
    url : 'https://player.vimeo.com/video/844951057?h=691caf134d'
  },
  {
    id : 4,
    url : 'https://player.vimeo.com/video/918766171'
  },
  {
    id : 5,
    url : 'https://player.vimeo.com/video/844951057?h=691caf134d'
  },
]