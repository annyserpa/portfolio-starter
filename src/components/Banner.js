import React from "react"
import Image from "../assets/avatar-annyy.png"
import { FaGithub, FaLinkedin, FaListAlt } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {text} */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[70px] font-bold leading-[0.8] lg:text-[100px]"
            >
              ANNY <span>SERPA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[37px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="texte-white mr-4">Eu sou</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Front-End", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Olá, eu sou a Anny e seja bem-vindo(a) ao meu portfólio! <br />
              Aqui você vai encontrar alguns dos meus projetos e conhecer um
              pouco sobre mim e sobre meus estudos.
            </motion.p>
            {/* {button} */}
            {/* {social} */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/annyserpa" target="blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anny-serpa/" target="blank">
                <FaLinkedin />
              </a>
              <a
                href="https://drive.google.com/file/d/1MdlKtFhe1DAjEYmOVwmGpNIDyVFsTbTk/view?usp=sharing"
                target="blank"
              >
                <FaListAlt />
              </a>
            </motion.div>
          </div>
          {/* {image} */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[280px] lg:max-w-[442px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Banner
