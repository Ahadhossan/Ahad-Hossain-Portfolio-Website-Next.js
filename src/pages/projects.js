import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project-1.png";
import project2 from "../../public/images/projects/project-2.png";
import project3 from "../../public/images/projects/project-3.png";
import project4 from "../../public/images/projects/project-4.png";
import project5 from "../../public/images/projects/project-5.png";
import project6 from "../../public/images/projects/project-6.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, keyleg, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-950 rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <h4 className="my-2 w-full text-left text-xl font-medium">{keyleg}</h4>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Ahad | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex flex-col mb-16 w-full items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Metaverse Website"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. You can easily convert the price in your local currency."
                link="https://metaverse-website-azure.vercel.app/"
                github="https://github.com/Ahadhossan/Metaverse-Website.git"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Voyalabs Website"
                img={project2}
                keyleg="HTML, CSS, JS"
                link="https://voyalabs-website.vercel.app/"
                github="https://github.com/Ahadhossan/Voyalabs-Website.git"
                type="Projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Responsive Card Slider Website"
                img={project3}
                keyleg="HTML, CSS, JS"
                link="https://responsive-card-slider-website.vercel.app/"
                github="https://github.com/Ahadhossan/Responsive-Card-Slider-Website.git"
                type="Projects"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="React Portfolio Website"
                img={project4}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                github="/"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Wibe Studio Website"
                img={project5}
                keyleg="React.js & Tailwind.css"
                link="/"
                github="https://github.com/Ahadhossan/Wibe-Studio-Website.git"
                type="Projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ecommerce Website"
                img={project6}
                keyleg="React.js & Tailwind.css"
                link="/"
                github="https://github.com/Ahadhossan/Ecommerce-Website-21.git"
                type="Projects"
              />
            </div>
          </div>

          <div className="py-16 flex items-center justify-center mt-2 sm:hidden">
            <Link
              href="https://github.com/Ahadhossan"
              className="rounded-lg flex bg-dark text-light p-4 px-10 text-lg font-semibold items-center  hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark hover:underline dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            >
              Visit More Projects <GithubIcon className={"w-4 ml-4"} />
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
