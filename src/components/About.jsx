import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
  I'm a dedicated software developer with hands-on experience in{" "}
  <span style={{ color: "#b886e4", fontWeight: "bold" }}>
    JavaScript, Java, PHP, and SQL
  </span>, and a strong foundation in frameworks and tools like{" "}
  <span style={{ color: "#b886e4", fontWeight: "bold" }}>
    React, Bootstrap, HTML, CSS, and MongoDB
  </span>.{" "}
  I’m a{" "}
  <span style={{ color: "#b886e4", fontWeight: "bold" }}>fast learner</span>{" "}
  who thrives in team environments, and I’ve contributed to both{" "}
  <span style={{ color: "#b886e4", fontWeight: "bold" }}>frontend</span> and{" "}
  <span style={{ color: "#b886e4", fontWeight: "bold" }}>backend</span> projects—from dynamic websites to full-cycle application development.
  <br /><br />
  I’m passionate about building{" "}
  <span className="text-white font-semibold">clean</span>,{" "}
  <span className="text-white font-semibold">functional</span>, and{" "}
  <span className="text-white font-semibold">user-focused</span> solutions.   
  <a href="#contact" className="text-[#b886e4] font-bold underline hover:text-[#a26fd3] transition">
    Let’s work together.
  </a>{" "}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
