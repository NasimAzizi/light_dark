import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import web from "../assets/services/web.png"
import database from "../assets/services/database.png"
import mobile from "../assets/services/mobile.png"
import ui from "../assets/services/ui.png"
import graphicc from "../assets/services/graphicc.png"
import marketing from "../assets/services/marketing.png"
import ahmadyar from "../assets/ahmadyar.png"
import ai from "../assets/ai.jpg"
import mof from "../assets/mof.png"
import wfp from "../assets/wfp.png"
import ecom from '../assets/ecom.png'
import wallet from '../assets/wallet.png'
import wallet2 from '../assets/wallet2.png'
import robot3 from '../assets/robot3.webp'

export const navigation = [
  {
    id: "0",
    title: "Our Services",
    url: "#features",
  },
  
  {
    id: "1",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "2",
    title: "Projects",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Roadmap",
    url: "#roadmap",
  },

  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [mof, wfp, database, mobile, ahmadyar, marketing];

export const brainwaveServices = [
  "E-Commerce Marketplace",
  "Outstanding Responisve & Dynmic Websites",
  "Job Portal Web App",
  "Social Media Platform",
  "MIS & CMS",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Multi-Vendor E-commerce ",
    text: "A highly secure e-commerce platform that incorporates blockchain-based payment options (e.g., Ethereum, Bitcoin) alongside traditional payment methods, providing transparency and decentralization to customers.",
    date: "2023",
    status: "done",
    imageUrl: ecom,
    colorful: true,
  },
  {
    id: "1",
    title: "AI-Powered Customer Support Chatbot System",
    text: "The AI-Powered Customer Support Chatbot System is a cutting-edge solution designed to handle customer interactions efficiently and seamlessly. Leveraging advancements in natural language processing (NLP), this chatbot can understand and respond to a wide variety of customer queries in real-time, making it an invaluable asset for businesses aiming to provide quick and effective support. The system can handle routine queries independently, reducing the workload on human agents and enabling them to focus on more complex issues. With 24/7 availability, it ensures that customers are always supported, improving customer satisfaction and operational efficiency.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Real-Time Collaboration",
    text: "A web app that enables multiple users to collaborate in real-time on tasks like coding, graphic design, or document editing.",
    date: "2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Digital Wallet Platform",
    text: "involves building a secure web or mobile application that allows users to store, manage, and transfer digital currencies or digital forms of fiat currency. This project combines secure data storage, integration with payment gateways or blockchain networks, and various security features to create a smooth, user-friendly experience for handling online transactions. Here’s a breakdown of key aspects and technologies for a digital wallet project",
    date: "May 2023",
    status: "progress",
    imageUrl: wallet,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Professional Static SPA Website, Ideal For: Small businesses, portfolios, and personal websites",
    price: "99",
    features: [
      "Up to 10 pages without databse integration",
      "Basic contact form and image gallery",
      "Responsive design for mobile - desktop & SEO-ready structure",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Dynamic website with basic CMS (Content Management System), Ideal For: Growing businesses, blogs, and personal brands",
    price: "299",
    features: [
      "Up to 25 pages",
      "Advanced contact forms, social media integration, and blog functionality",
      "Multi language support & database integration",
      "3 months of priority support with minor updates",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Fully dynamic website with advanced CMS, Ideal For: Established businesses, professional blogs, and e-commerce platforms",
    price: null,
    features: [
      "Unlimited pages as needed",
      " payment gateways, user accounts, and custom functionality",
      " 6-12 months of premium support with ongoing updates",
      "SEO & Analytics Optimization",
      "Custom API Integration & Automation"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Website Design & Development",
    text: "We create user-friendly, responsive sites tailored to your brand, ensuring a seamless experience for your visitors across all devices.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: web,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mobile App Development",
    text: "We design and build intuitive apps for iOS and Android that engage users and enhance your brand’s presence in the mobile space.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: mobile,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Database Design & Development",
    text: "We create robust, scalable databases tailored to your business needs, ensuring efficient data storage, retrieval, and security.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: database,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "UI/UX Design",
    text: "We focus on creating intuitive and engaging interfaces that provide a seamless user experience, ensuring that your website or app is both functional and visually appealing.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: ui,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Graphic Design",
    text: "We create visually stunning graphics, from logos to marketing materials, capture your brand's essence and communicate your message to your audience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: graphicc,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "We develop strategic campaigns tailored to your goals, utilizing social media, SEO, and content marketing to drive traffic and engage your audience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: marketing,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
