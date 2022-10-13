import Image from "./assets/images/service1.png";
import Image2 from "./assets/images/service2.png";
import Image3 from "./assets/images/service3.png";
import caro from "./assets/images/image1.png";
import caro2 from "./assets/images/design1.png";
import caro3 from "./assets/images/bpm.png";

import pro1 from "./assets/images//product1.png";
import pro2 from "./assets/images//product2.png";
import pro3 from "./assets/images//product3.png";
import pro4 from "./assets/images//product4.png";
import web1 from "./assets/images/web1.png";
import web2 from "./assets/images/web2.png";
import web3 from "./assets/images/web3.png";
import web4 from "./assets/images/web4.png";
import mobile1 from "./assets/images/mobile1.png";
import mobile2 from "./assets/images/mobile2.png";
import mobile3 from "./assets/images/mobile3.png";
import mobile4 from "./assets/images/mobile4.png";
import mobile5 from "./assets/images/mobile5.png";
import career1 from "./assets/images/career1.png";
import career2 from "./assets/images/career2.png";
import career3 from "./assets/images/career3.png";
import career4 from "./assets/images/career4.png";
import career5 from "./assets/images/career5.png";
import New from "./assets/images//img1.svg";
import New1 from "./assets/images//img2.svg";

export const services = [
  {
    id: 1,
    title: "Product Development",
    details:
      "The team’s technical excellence takes you halfway to success. At 24 Design Company, we understand that a solid grasp of your business sector and excellent development approach is equally critical in our development process. Over the years, we have enriched and optimised our systems development lifecycle and software engineering skills to arrive at a predictable process that allows teams to minimize risks and costs.",
    image: Image,
    link: "/project-development",
  },
  {
    id: 2,
    title: " Web Application Development",
    details:
      "Our web applications are marked by a robust, scalable architecture that supports high performance requirements and ease of management without compromising security. 24 Design Company emphasises more on intuitive UX and polished UI designs to keep your visitors coming back",
    image: Image2,
    link: "/web-development",
  },
  {
    id: 3,
    title: "Mobile Development",
    details:
      "We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business. Whether native, hybrid or cross platform, our mobile development team delivers solutions that run seamlessly on all major operating systems and all major mobile devicest",
    image: Image3,
    link: "/mobile-development",
  },
];

export const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const carouselData = [
  {
    id: 1,
    image: caro,
  },
  {
    id: 2,
    image: caro2,
  },
  {
    id: 3,
    image: caro3,
  }
];

export const productData = [
  {
    id: 1,
    title: "Prototyping",
    details:
      "Through prototypes tested under market conditions, we refine product functionality and identify issues early to minimize developmentrisks andforecast investments. We deliver complete specification lists,static mockups, and designed interfaces, keeping in mind your future scalability.",
    image: pro1,
  },
  {
    id: 2,
    title: "Product development",
    details:
      "As a strategic partner, we can help you identify emerging trends, understandmarket requirements, and create software products that add value to your customers. Our software development team translates these insights intoinnovative products to equip you with competitive advantage.",
    image: pro2,
  },
  {
    id: 3,
    title: "Product support",
    details:
      "Through prototypes tested under market conditions, we refine productfunctionality and identify issues early to minimize development risks andforecast investments. We deliver complete specification lists, static mockups,and designed interfaces, keeping in mind your future scalability.",
    image: pro3,
  },
  {
    id: 4,
    title: "Product testing",
    details:
      "Our Quality Assurance team ensures that your product hits the market with full functionality and performance. Our testing services encompass various approaches such as Validation Testing, Load Testing, System Testing, Functionality, and Crash Testing to ascertain that your product is scalable, reliable, and secure.",
    image: pro4,
  },
];
export const webData = [
  {
    id: 1,
    title: "Latest Technologies",
    details:
      "We empower our clients with adaptive web applications built using PostgreSQL, Python, MongoDB, React, Node.js to simplify complexbusiness workflows.",
    image: web1,
  },
  {
    id: 2,
    title: "Efficient Methodologies",
    details:
      "We strive for efficiency in custom web applications by subjecting them toaccepted design standards and testing. The agile practices followed by usensure that the projects are delivered within the stipulated time and budget.",
    image: web2,
  },
  {
    id: 3,
    title: "Value-Adds",
    details:
      "Customized web applications fosters growth in valuation and intellectualproperty in the long run. Businesses can better streamline their dailyoperations and processes to fulfill key challenges and achieve targeted goals.",
    image: web3,
  },
  {
    id: 4,
    title: "Expertise",
    details:
      "We have carved out a niche in web application development, alongside valuedconsulting and analysis solutions, to serve growing businesses and industryleaders including Sony, Johnson & Johnson, and NEC.",
    image: web4,
  },
];
export const mobileData = [
  {
    id: 1,
    title: "IOS App Development",
    details:
      "Our iOS applications help you take informed decisions and give you the flexibility to perform critical tasks with ease. Our services extend across various domains and skill sets to help you innovate business processes acrossdepartments.",
    image: mobile1,
  },
  {
    id: 2,
    title: "Android App Development",
    details:
      "Our expert team can help deliver customized, secure, and robust nativeAndroid applications including e-commerce, augmented reality and integration applications that help you meet your business objectives.",
    image: mobile2,
  },
  {
    id: 3,
    title: "Hybrid App Development",
    details:
      "Customized web applications fosters growth in valuation and intellectualproperty in the long run. Businesses can better streamline their dailyoperations and processes to fulfill key challenges and achieve targeted goals.",
    image: mobile3,
  },
  {
    id: 4,
    title: "Cross-Platform App Development",
    details:
      "We have carved out a niche in web application development, alongside valuedconsulting and analysis solutions, to serve growing businesses and industryleaders including Sony, Johnson & Johnson, and NEC.",
    image: mobile4,
  },
  {
    id: 5,
    title: "Mobile Strategies",
    details:
      "We blend our mobile strategies with your technology needs to ensure that you delightyour customers and attain business success. The goal is to gain maximum benefit fromthe current mobile technologies.",
    image: mobile5,
  },
];
export const careerData = [
  {
    id: 1,
    title: "Great Co-workers",
    details:
      "Work with some of the best talents in the industry and build strong networks with them.",
    image: career1,
  },
  {
    id: 2,
    title: "Education oppurtunities",
    details:
      "Work with some of the best talents in the industry and build strong networks with them.",
    image: career2,
  },
  {
    id: 3,
    title: "Ideas",
    details:
      "We let ideas grow, everything you comeup with will be takenseriously and the whole team will work on the idea to try it out.",
    image: career3,
  },
  {
    id: 4,
    title: "Easy Location",
    details:
      "We let ideas grow, everything you comeup with will be takenseriously and the whole team will work on the idea to try it out.",
    image: career4,
  },
  {
    id: 5,
    title: "Performance Award",
    details:
      "Get awarded for better performance every 6 month and be recognized for your work.",
    image: career5,
  },
];

export const jobs = [
  { id: 1, title: "Software Devloper", level: "Junior" },
  { id: 2, title: "Product Manager", level: "Senior" },
  { id: 3, title: "UI/UX Designer", level: "Junior" },
  { id: 4, title: "Mobile Dveloper", level: "Junior" },
  { id: 5, title: "Backend-Developer", level: "Senior" },
];

export const newHome = [
  {
    text1: "We are a global IT Company",
    title: "Connecting Business and Technology",
    text2:
      "We help you harness the cutting edge of tech to boost operational efficiencies, ensure faster time to value, and revolutionize customer care. Our service offering is built around helping you launch and sustain your digital transformation long-term.",
    showBtn: true,
  },
  {
    text1: "",
    title: "Our mission",
    text2:
      "Our mission is to enable progressive businesses and ideas to transform, scale and gain competitive advantage, through the expert delivery of innovative, tailor-made software solutions. Our solutions help organizations and people around the world to perform more effectively and achieve better outcomes.",
    showBtn: false,
  },
];

export const footerServices = [
  {
    title: "Product Development Service",
    link: "/about",
  },
  {
    title: "Web Application Development",
    link: "/about",
  },
  {
    title: "Mobile Development Service",
    link: "/about",
  },
  {
    title: "UI/UX",
    link: "/about",
  },
  {
    title: "Digital Transformation",
    link: "/about",
  },
  {
    title: "QA & Testing",
    link: "/about",
  },
];

