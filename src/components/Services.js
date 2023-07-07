import React from "react"
import { BsArrowUpRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const services = [
  {
    name: "Mercado Livre",
    description:
      "Uma aplicação React.Js inspirada no site do Mercado Livre com design e o consumo de API.",
    link: "https://mercado-livre-annyserpa.netlify.app/",
  },
  {
    name: "Pokémon List",
    description:
      "Uma aplicação HTML, CSS e JavaScript listando alguns pokémons.",
    link: "https://pokemon-list-annyserpa.netlify.app/",
  },
  {
    name: "Netflix",
    description:
      "Uma aplicação HTML, CSS e JavaScript inspirada no site e design da Netflix.",
    link: "https://netflix-project-annyserpa.netlify.app/",
  },
]

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* {text & image} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">Meus Projetos</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-[20px]">
              Tecnologias: HTML, CSS, <br />
              JavaScript e React.Js. <br />
              Sigo estudando outras <br />
              tecnologias para agregar <br />
              na minha carreira de <br />
              programadora.
            </h3>
            {/* {button} */}
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            {/* {service list} */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="www.google.com"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="www.google.com"
                        className="text-gradient text-sm text-[10px]"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
