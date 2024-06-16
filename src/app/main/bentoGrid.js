import SpotifySection from "../_components/social-media/SpotifySection";
import YoutubeSection from "../_components/social-media/YoutubeSection";
import LinkedinSection from "../_components/social-media/LinkedinSection";
import GithubSection from "../_components/social-media/GithubSection";
import Blog from "../_components/mainPage/blog";
import Hero from "../_components/Hero";
import Toggle from "../_components/styling/toggleComp/Toggle";
import MyStack from "../_components/MyStack4";
import Details from "../_components/Details";

import { ProjectCard, ProjectCard2 } from "../_components/project/Project";
import  ProjectPromo from "../_components/project/ProjectPromo";
import Contact from "../_components/Contact";



export const gridData = [
  {
    gridName: "Spotify",
    tags: ["Home", "About", "Media"],
    className:
      "GridBasis spotify mdd:flex mdd:justify-center text-start !block pushin row-span-1 lg mdd:col-span-2 mdd:row-span-2 smm:col-span-1 smm:row-span-3 xs:col-span-3 rounded-xl border-4 bg-lightVertigress dark:bg-transparent dark:border-darkicebBlue hover:shadow-2xl border-slate-400/10 smm:p-4  transition-transform duration-300 transform hover:scale-95 text-black smm:order-last lgg:order-10",
    content: <SpotifySection />,
  },
  {
    gridName: "Youtube",
    tags: ["Home", "About", "Media"],
    className:
      " GridBasis youtube mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1  smm:col-span-2 smm:row-span-4 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightNaples dark:bg-transparent dark:border-darkVanilla  p-2 smm:p-4  transition-transform duration-300 transform hover:scale-95 text-black smm:order-last lgg:order-9",
    content: <YoutubeSection />,
  },

  {
    gridName: "LinkedInIcon",
    tags: ["Home", "About", "Media", "Contact"],
    content: <LinkedinSection />,
    className:
      "GridBasis mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-2 smm:row-span-2 xs:col-span-3 rounded-xl border-4  border-slate-400/10 bg-lightyinBlue dark:bg-transparent dark:border-darkVista p-2 smm:p-4 transition-transform duration-300 transform hover:scale-95 text-black smm:order-3 sm:order-3 lgg:order-2 ",
  },
  {
    gridName: "Github",
    tags: ["Home", "About", "Media", "Contact"],
    className:
      " GridBasis mdd:flex mdd:justify-center text-start !block pushin texture row-span-1 col-span-1 mdd:col-span-1 mdd:row-span-1 smm:col-span-1 smm:row-span-1 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightVertigress dark:border-darkicebBlue dark:bg-transparent py-4 mdd:p-4 transition-transform duration-300 transform hover:scale-95 text-black  smm:order-4 lgg:order-3 ",
    content: <GithubSection />,
  },
  //  {
  //    gridName: "Stack",
  //    tags: ["Home"],
  //    className:
  //      "GridBasis pushin texture row-span-1 col-span-2 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-2 bg-gray-300 dark:bg-transparent border-slate-400/10 transition-transform duration-300 transform hover:scale-95 text-black smm:hidden lgg:order-7",
  //    content: <MyStack />,
  //  },

  {
    gridName: "Blog",
    tags: ["Home"],
    className:
      " GridBasis text-start !block pushin row-span-1 col-span-2 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 smm:row-span-2 xs:col-span-3 rounded-xl border-4 bg-transparent dark:bg-lightPeriwinkle dark:border-transparent border-lightPeriwinkle transition-transform duration-300 transform hover:scale-95 text-black smm:order-6 lgg:order-5 ",
    content: <Blog />,
  },
  {
    gridName: "Stack",
    tags: ["Home", "About"],
    className:
      "GridBasis pushin smm:hidden texture row-span-3 lgg:row-span-2 col-span-1 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-4 border-slate-400/10 bg-lightPeriwinkle dark:bg-transparent dark:border-lightPeriwinkle py-1 pr-2 transition-transform duration-300 transform hover:scale-95 text-black smm:order-5 sm:order-4 lgg:order-5 ",
    content: <MyStack />,
  },

  {
    gridName: "Hero",
    tags: ["Home", "About", "Projects", "Media", "Contact"],
    className:
      " GridBasis pushin row-span-3 col-span-4 mdd:col-span-3 mdd:row-span-3 smm:col-span-3 xs:col-span-3 rounded-xl border-8 dark:border-0 border-slate-600/10 dark:border-transparent dark:bg-gradient-to-r from-darkVista to-[#D3DDFB] p-2 transition-transform duration-300 transform hover:scale-95 text-black lgg:order-1",
    content: <Hero />,
  },
  {
    gridName: "Toggle",
    tags: ["Home", "About", "Projects", "Media"],
    className:
      " groupG1 GridBasis pushin texture row-span-1 col-span-1 mdd:col-span-1 smm:col-span-1 smm:row-span-1 xs:col-span-3 rounded-xl border-2 border-slate-400/10 bg-gray-300 dark:border-gray-300 dark:bg-transparent p-4 transition-transform duration-300 transform hover:scale-95 text-black smm:order-2 lgg:order-3 ",
    content: <Toggle />,
  },
  {
    gridName: "Project Promo",
    tags: ["Home"],
    className:
      " GridBasis text-start !block pushin row-span-2 lgg:row-span-1 col-span-1 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 smm:row-span-2 xs:col-span-3 rounded-xl border-4 bg-lightyinBlue dark:bg-transparent dark:border-darkVista border-lightPeriwinkle transition-transform duration-300 transform hover:scale-95 text-black smm:order-6 lgg:order-4 ",
    content: <ProjectPromo />,
  },
  //  {
  //    gridName: "Stack",
  //    tags: ["Home"],
  //    className:
  //      "GridBasis pushin texture row-span-3 col-span-1 mdd:col-span-1 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-2 bg-gray-300 dark:bg-transparent border-slate-400/10 transition-transform duration-300 transform hover:scale-95 text-black smm:hidden lgg:order-7",
  //    content: <MyStack />,
  //  },

  {
    gridName: "Contact",
    tags: ["Home", "About", "Media", "Contact"],
    className:
      " GridBasis pushin texture row-span-1 col-span-2 mdd:col-span-2 mdd:row-span-2 smm:col-span-3 xs:col-span-3 rounded-xl border-4 border-slate-400/10 border-lightNaples dark:bg-transparent dark:border-darkVanilla p-1 transition-transform duration-300 transform hover:scale-95 text-black dark:text-lightSnow text-3xl smm:order-5 lgg:order-9 xl:text-center bg-lightFrenchGrey",
    content: <Contact />,
  },
];