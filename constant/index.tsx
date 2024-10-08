// NavBar Elements

import {
  af,
  bharosa,
  blisstouch,
  bravo,
  cartone,
  delightfoldecor,
  leaf,
  rendjewel,
  tf,
  urban,
  gapain,
  soulmateselect,
  coding,
} from "@/public/brands";
import {
  curve,
  google,
  meta,
  nextjs,
  revision,
  rocket,
  shopify,
  wordpress,
} from "@/public/icons";
import { ads, seoImage, videoImage, webImage } from "@/public/images";
import {
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro6,
  pro7,
  pro8,
  pro9,
  pro10,
} from "@/public/projects";
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
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Case Studies",
    link: "/casestudies",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  // {
  //   title: "FAQ",
  //   link: "/#faq",
  // },
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
    title: "Vercel",
    image: nextjs,
  },
  {
    id: 4,
    title: "Google",
    image: google,
  },
  {
    id: 5,
    title: "Meta",
    image: meta,
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

/// Usp

export const Usp = [
  {
    icons: (
      <Infinity className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Providing Chat BOTs FREE",
    content:
      "Try our free chatbot service for instant, 24/7 support. It’s easy to set up and perfect for engaging customers!",
  },
  {
    icons: (
      <Zap className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Best princess",
    content: ` Discover unbeatable prices with our exclusive offers! Enjoy top-quality products at the best rates—where excellence meets affordability.`,
  },
  {
    icons: (
      <Airplay className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Fast. Responsive. Reliable.",
    content: `Experience the ultimate in performance with our solutions—lightning-fast, highly responsive, and consistently reliable for all your needs.`,
  },
  {
    icons: (
      <Calendar className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Customer support lifetime",
    content: "Enjoy peace of mind with our lifetime customer support. We're here for you whenever you need assistance, for as long as you need.",
  },
  {
    icons: (
      <CircleDollarSign className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Free maintenance ",
    content: `Keep things running smoothly with our free maintenance service. We handle all updates and fixes, ensuring your system stays in top shape without extra cost.`,
  },
  {
    icons: (
      <Settings className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Other services for free EX lead Gen free for 14 Days",
    content: `Try our lead generation service free for 14 days! Experience its full potential at no cost and see the results for yourself.`,
  },
  {
    icons: (
      <BriefcaseBusiness className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Expert turnovers",
    content: `You’re getting 3+ years of  experience with every request. No hand-holding required.`,
  },
];

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
    title: "Free Custom Chatbot For Website",
    content:
      "Get a free chatbot for your website that engages visitors and makes interactions easier.",
    tags: [
      {
        title: "Wordpress",
      },
      {
        title: "Shopify",
      },
      {
        title: "FREE CHATBOT",
      },
    ],
  },
  {
    image: ads,
    title: "FB Ads: Free Creative & Strategy",
    content:
      "Get free ad designs and strategy for Facebook ads, plus a 14-day free trial of our lead generation service.",
    tags: [
      {
        title: "Facebook Ads",
      },
      {
        title: "Google Ads",
      },
    ],
  },
  {
    image: videoImage,
    title: "Advanced Video Editing",
    content:
      "Get top-quality video editing that makes your content shine with professional and engaging results.",
    tags: [
      {
        title: "Reels",
      },
      {
        title: "Advertising Video",
      },
      {
        title: "Product's Shoot",
      },
    ],
  },
  // {
  //   image: videoImage,
  //   title: "Marketing ",
  //   content:
  //     "Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!",
  //   tags: [
  //     {
  //       title: "Reels",
  //     },
  //     {
  //       title: "Advertising Video",
  //     },
  //     {
  //       title: "Advertising Video",
  //     },
  //   ],
  // },
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
    icons: (
      <Infinity className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "On-demand requests",
    content:
      "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    icons: (
      <Zap className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Top-notch quality",
    content: `High-end work from a dedicated team that &apos; s always available when you need it.`,
  },
  {
    icons: (
      <Airplay className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Fast. Responsive. Reliable.",
    content: `Get regular updates on your projects and can expect to receive your projects within 2-3 days.`,
  },
  {
    icons: (
      <Calendar className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "On-demand requests",
    content:
      "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
  },
  {
    icons: (
      <CircleDollarSign className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Great value for money",
    content: `Get the power of dedicated design team at fraction of the cost of full-time employee.`,
  },
  {
    icons: (
      <Settings className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Customized for you",
    content: `We design and build custom for you. We’re never starting from a template unless you want that? You don't, right?`,
  },
  {
    icons: (
      <HandCoins className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
    title: "Creative paying",
    content: `We’re here when you need us and not on payroll when you don’t.`,
  },
  {
    icons: (
      <BriefcaseBusiness className="text-white w-10 h-10 rounded-full border-2 border-primary p-2" />
    ),
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

export const Footer = {};

export const ClientsReview = [
  {
    id: 1,
    url: "https://player.vimeo.com/video/918766171",
  },
  {
    id: 2,
    url: "https://player.vimeo.com/video/918766171",
  },
  {
    id: 3,
    url: "https://player.vimeo.com/video/918766171",
  },
  {
    id: 4,
    url: "https://player.vimeo.com/video/918766171",
  },
  {
    id: 5,
    url: "https://player.vimeo.com/video/918766171",
  },
];

/// Our Team
export const OurTeam = [
  {
    image: seoImage,
    title: "Anshul Yadav",
    content: "CEO/Founder of Adsvantage",
    tags: [
      {
        title: "social Media",
      },
      {
        title: "Ads",
      },
    ],
  },
  {
    image: "/images/ccc.jpeg",
    title: "Rabindra Nath Mahato",
    content: "DEVELOPER",
    tags: [
      {
        title: "Websites",
      },
      {
        title: "Apps",
      },
    ],
  },
  {
    image: videoImage,
    title: "Gandharv Sing Parmar",
    content: "Digital Creator",
    tags: [
      {
        title: "Video Editing",
      },
      {
        title: "Videographer",
      },
    ],
  },
];

// Brand Sliders

export const Brands = [
  {
    id: 1,
    title: "TF",
    image: tf,
  },
  {
    id: 2,
    title: "urban",
    image: urban,
  },
  {
    id: 3,
    title: "Saanjh",
    image: leaf,
  },
  {
    id: 4,
    title: "AF",
    image: af,
  },
  {
    id: 5,
    title: "Cartone",
    image: cartone,
  },
  {
    id: 6,
    title: "bravo Post",
    image: bravo,
  },
  {
    id: 7,
    title: "TrendJewel",
    image: rendjewel,
  },
  {
    id: 8,
    title: "BlissTouch Pro",
    image: blisstouch,
  },
  {
    id: 9,
    title: "DelightFoldDecor",
    image: delightfoldecor,
  },
  {
    id: 10,
    title: "Bharosa Bazar",
    image: bharosa,
  },
  {
    id: 11,
    title: "Gopainaway",
    image: gapain,
  },
  {
    id: 12,
    title: "Soulmateselect",
    image: soulmateselect,
  },
  {
    id: 12,
    title: "Coding Chroma",
    image: coding,
  },
];

// Case Studies

export const CaseStudy = [
  {
    id: 1,
    title: "Transforming Negative ROAS to Positive Growth",
    date: "May 1, 2024",
    image: "/images/ccc.jpeg",
    author: "Anshul Yadav",
    position: "CEO",
    shortDesc:
      "Our client was struggling with a negative Return on Ad Spend (ROAS) due to ineffective conversion campaigns. They needed a strategic overhaul to improve their digital marketing outcomes...Read more.",
    content: `<h1><strong>Case Study: Transforming Negative ROAS to Positive Growth</strong></h1>
    Client Overview:<span style="font-weight: 400;"> Our client was struggling with a negative Return on Ad Spend (ROAS) due to ineffective conversion campaigns. They needed a strategic overhaul to improve their digital marketing outcomes.</span>
    <p><strong>Challenge:</strong><span style="font-weight: 400;"> The client's existing strategy wasn't delivering the desired results, with an initial conversion rate of only 10-15%. They needed a solution to turn around their performance and achieve a positive ROAS.</span></p>
    <p><strong>Solution:</strong></p>
    <ol>
    <li><strong>Deep Analysis:</strong><span style="font-weight: 400;"> We conducted a thorough study to identify pain points and gaps in the current strategy.</span></li>
    <li><strong>Strategy Shift:</strong><span style="font-weight: 400;"> We transitioned from conversion campaigns to lead generation ads. Additionally, we implemented personalized calls to leads by the sales team.</span></li>
    <li><strong>Product Customization:</strong><span style="font-weight: 400;"> To further boost engagement, we introduced options for product customization.</span></li>
    </ol>
    <p><strong>Results:</strong></p>
    <ul>
    <li><strong>Initial Conversion Rate:</strong><span style="font-weight: 400;"> 10-15%</span></li>
    <li><strong>Post-Optimization Conversion Rate:</strong><span style="font-weight: 400;"> 30-35%</span></li>
    <li><strong>Initial Investment:</strong><span style="font-weight: 400;"> $1800</span></li>
    <li><strong>Revenue Generated:</strong><span style="font-weight: 400;"> Over $11,000</span></li>
    <li><strong>Achieved ROAS:</strong><span style="font-weight: 400;"> More than 6x</span></li>
    </ul>
    <br /><strong>Key Insights:</strong><span style="font-weight: 400;"> The shift to lead generation ads and personalized calls significantly improved the conversion rate from 10-15% to 30-35%. Product customization also played a crucial role in enhancing customer engagement.</span><br /><span style="font-weight: 400;">This transformation showcases our commitment to understanding and addressing our client's unique business needs, delivering tailored solutions that drive tangible results.</span>`,
  },
  {
    id: 2,
    title: "Achieving 15+ ROAS for a Kid Toy Brand",
    date: "Dec 28, 2023",
    author: "Anshul Yadav",
    image: "/images/ccc.jpeg",

    position: "CEO",
    shortDesc:
      " A kid toy brand sought to scale their business and achieve a profitable return on ad spend (ROAS)...Read more.",
    content: `<h3><strong>Case Study: Achieving 15+ ROAS for a Kid Toy Brand</strong></h3>
    <p><strong>Client Overview:</strong><span style="font-weight: 400;"> A kid toy brand sought to scale their business and achieve a profitable return on ad spend (ROAS).</span></p>
    <p><strong>Challenge:</strong><span style="font-weight: 400;"> The brand needed a comprehensive approach to break through the competitive market and achieve a significant ROAS while increasing revenue.</span></p>
    <p><strong>Solution:</strong></p>
    <ol>
    <li style="font-weight: 400;" aria-level="1"><strong>Market Research:</strong><span style="font-weight: 400;"> Conducted in-depth market research to understand target demographics and market trends.</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Comprehensive Marketing Strategy:</strong><span style="font-weight: 400;"> Developed a tailored marketing strategy focused on reaching the right audience.</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Branding:</strong><span style="font-weight: 400;"> Enhanced the brand's identity to appeal to parents and children alike.</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Creative Strategy:</strong><span style="font-weight: 400;"> Crafted a compelling creative strategy and produced engaging ad creatives.</span></li>
    </ol>
    <p><strong>Results:</strong></p>
    <ul>
    <li style="font-weight: 400;" aria-level="1"><strong>ROAS Achieved:</strong><span style="font-weight: 400;"> 15+ within a month</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Revenue Generated:</strong><span style="font-weight: 400;"> Over ₹4 Crore in 90 days</span></li>
    </ul>
    <strong>Key Insights:</strong><span style="font-weight: 400;"> Our strategic approach, including thorough market research, a strong branding initiative, and effective ad creatives, enabled the brand to achieve an outstanding ROAS and significant revenue growth in a short period.</span>`,
  },
  {
    id: 3,
    title: "Generating 330+ Leads with only $1900 Marketing Spend",
    date: "Dec 1, 2023",
    author: "Anshul Yadav",
    position: "CEO",
    image: "/images/ccc.jpeg",

    shortDesc:
      "The client sought to generate high-quality leads within a limited marketing budget....Read more",
    content: `<h1><strong>Case Study: Generating 330+ Leads with only $1900 Marketing Spend</strong></h1>
    <p><strong>Client Overview:</strong><span style="font-weight: 400;"> The client sought to generate high-quality leads within a limited marketing budget.</span></p>
    <p><strong>Challenge:</strong><span style="font-weight: 400;"> To maximize lead generation and conversion with a modest budget of $1900 over three months.</span></p>
    <p><strong>Solution:</strong></p>
    <ol>
    <li style="font-weight: 400;" aria-level="1"><strong>Understanding Client Needs:</strong><span style="font-weight: 400;"> We began by thoroughly understanding the client's demands and the market landscape.</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Marketing Strategy:</strong><span style="font-weight: 400;"> Developed a targeted marketing strategy to reach the most relevant audience segments.</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Content Creation:</strong><span style="font-weight: 400;"> Produced highly convertible content tailored to attract and engage potential leads.</span></li>
    </ol>
    <p><strong>Results:</strong></p>
    <ul>
    <li style="font-weight: 400;" aria-level="1"><strong>Leads Generated:</strong><span style="font-weight: 400;"> Over 330 leads</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Marketing Spend:</strong><span style="font-weight: 400;"> $1900</span></li>
    <li style="font-weight: 400;" aria-level="1"><strong>Timeframe:</strong><span style="font-weight: 400;"> 3 months</span></li>
    </ul>
    <strong>Key Insights:</strong><span style="font-weight: 400;"> Our focused approach, including deep market understanding and strategic content creation, enabled us to deliver exceptional results. The campaign's success was marked by efficient budget utilization and effective lead generation, demonstrating our capability to achieve substantial outcomes even with limited resources.</span>`,
  },
];

// Project Array

export const projectsArrar = [
  {
    id: 1,
    image: pro1,
  },
  {
    id: 2,
    image: pro2,
  },
  {
    id: 3,
    image: pro3,
  },
  {
    id: 4,
    image: pro4,
  },
  {
    id: 5,
    image: pro5,
  },
  {
    id: 6,
    image: pro6,
  },
  {
    id: 7,
    image: pro7,
  },
  {
    id: 8,
    image: pro8,
  },
  {
    id: 9,
    image: pro9,
  },
  {
    id: 10,
    image: pro10,
  },
];
