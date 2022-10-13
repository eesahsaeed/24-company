import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../../component/PortfolioCard";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  }
})

const data = [
  {
    category: "Logistics",
    img: "1.png",
    title: "TMS for a logistics company",
    desc: "Transportation management system with automatic route plannig module.",
    country: "USA",
    core: "Node JS, Kotlin, Swift",
  },
  {
    category: "FinTech",
    img: "2.png",
    title: "Micro-investment platform",
    desc: "A turnkey solution for managing micro-investments and savings for the Middle East market",
    country: "Saudi Arabia",
    core: ".NET, React.js, Redux, Flutter",
  },
  {
    category: "BLOCKBUSTER",
    img: "3.png",
    title: "Video-on-demand platform",
    desc: "A large online video streaming service offering thousands of movies and TV series.",
    country: "Denmark",
    core: "Node JS, Kotlin, Swift",
  },
  {
    category: "Ayoo",
    img: "4.png",
    title: "Social Media for Dancers",
    desc: "Interactive video features take communication and entertainment to a new level.",
    country: "Switzerland",
    core: "Node JS, Express, Swift",
  },
  {
    category: "RETAILOPS",
    img: "5.png",
    title: "Saas Solution for Retail",
    desc: "A versatile SaaS platform for retail businesses offering WMS, IMS, PMS, and other solutions",
    country: "USA",
    core: ".NET, Swift",
  },
  {
    category: "NEDLEY SCORECARD",
    img: "6.png",
    title: "Mental Health App",
    desc: "An app designed to help people get rid of depressions and sleep disorders",
    country: "USA",
    core: "TypeScript, Swift",
  },
  {
    category: "TrainAway",
    img: "7.png",
    title: "Fitness Marketplace",
    desc: `This is the world's largest gym directory app that helps travlers find gyms across the globe.`,
    country: "Denmark",
    core: "Node JS, Angular JS, Java, Swift",
  },
  {
    category: "The School App",
    img: "8.png",
    title: "School Community Software",
    desc: "An app tat makes interaction with schools easier for pupils and their parents.",
    country: "USA",
    core: "Node JS, MySQL, Kotlin, Swift",
  },
  {
    category: "MoveUP",
    img: "9.png",
    title: "P2P Ridesharing Solution",
    desc: "Transportation app that connects drivers with riders having special needs in particular area",
    country: "USA",
    core: "Node JS, Angular, Kotlin, Swift",
  },
  {
    category: "AYIO",
    img: "10.png",
    title: "Social Business Platform",
    desc: "A P2P platform that allows to find and hire local specialists to do work matching their skills.",
    country: "Switzerland",
    core: "Node JS, Angular JS, Kotlin, Swift",
  },
  {
    category: "SAFAQAT",
    img: "11.png",
    title: "Global trading app",
    desc: "A trading app that matches product sellers with buyers",
    country: "Saudi Arabia",
    core: "Kotlin, Swift",
  },
  {
    category: "Occaz",
    img: "12.png",
    title: "Car Checking Platform",
    desc: `A service that helps buyers check a car's condition before purchase.`,
    country: "France",
    core: ".NET, Kotlin, Swift",
  },
  {
    category: "greenlight",
    img: "13.png",
    title: "Social Dating platform",
    desc: "A dating app built around traffuc light conception to help users find a soulmate.",
    country: "USA",
    core: "TypeScript, Angular, Swift",
  },
  {
    category: "Voomie!",
    img: "14.png",
    title: "Live Wallpaper App",
    desc: "A playful wallpaper-making tool that turns best video moments into live wallpapers",
    country: "USA",
    core: "Kotlin",
  },
  {
    category: "OPEN STUDIOS",
    img: "15.png",
    title: "Designers and manufacturers community",
    desc: "A platform that connects talented designers with manufacturers for creating great products.",
    country: "Spain",
    core: "TypeScript, Angular, MySQL",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="contactPage mt-36 mx-20 "
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {data.map((item) => (
          <PortfolioCard
            category={item.category}
            img={item.img}
            title={item.title}
            desc={item.desc}
            core={item.core}
            country={item.country}
          />
        ))}
        <div className="md:w-11/12 bg-blue-700 rounded-2xl lg:p-28 md:p-10 p-5 mx-auto text-white flex">
          <div className="lg:pr-10">
            <h1 className="md:text-5xl text-2xl font-extrabold">
              Start growing your business with us
            </h1>
            <div className="md:grid flex flex-col grid-cols-2 gap-5 md:my-10 ">
              <CssTextField
                id="standard-basic"
                label="Full name"
                variant="standard"
                sx={{ input: { color: 'white' } }}
              />
              <CssTextField sx={{ input: { color: 'white' } }} id="standard-basic" label="Email" variant="standard" />
              <CssTextField
                className="col-span-2"
                id="standard-basic"
                label="About project"
                variant="standard"
                sx={{ input: { color: 'white' } }}
              />
            </div>
            <div className="md:flex justify-between items-center mt-5">
              <h4 className="md:w-1/2 my-10">
                By sending this form I confirm that I have read and accept the
                Privacy Policy
              </h4>
              <button className="bg-white md:mx-0 md:mb-0 mb-5 text-blue-700 py-3 px-6 rounded-3xl">
                Send message
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 lg:visible invisible w-0 lg:h-auto h-0">
            <h2 className="text-2xl font-bold mb-10">Our clients say</h2>
            <h4>{`“I've known them for more than two years, regarding my mobile apps developed by Cleveroad — “OMAP.pl” and “Foodito,” it was an easy and full-service working process with them, and I would definitely recommend them to others. ”`}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
