import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../contants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col' 
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introducción
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eveniet error, molestias necessitatibus quo aspernatur culpa suscipit consequatur illo nemo quam deleniti odit blanditiis omnis explicabo accusamus facere quos. Tempora quae maiores velit dolor ea modi incidunt eum esse reiciendis! Aliquid dignissimos alias placeat consequuntur, nam vel blanditiis exercitationem obcaecati doloremque soluta veritatis, repellendus recusandae natus sapiente inventore vitae! Unde, voluptatibus? Amet odio modi doloremque cum est nam ut impedit, sequi in officiis. Tempora quo quas alias aliquid eligendi doloribus, voluptatem velit pariatur voluptatibus? Quae delectus aut tempore? Culpa animi consequatur voluptatibus accusantium ducimus quibusdam laborum odit ab a voluptas.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")