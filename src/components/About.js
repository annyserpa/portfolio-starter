import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-50 lg:gap-y-0 h-screen">
          {/* {img} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent ">Sobre mim</h2>
            <h3 className="h3 mb-4 ">
              Eu sou Programadora Front-End e apaixonada por tecnologia.
            </h3>
            <p className="mb-6">
              Atualmente sigo estudando e buscando novas ferramentas e
              tecnologias para aprimorar minhas habilidades de criar interfaces
              incríveis. Meu objetivo é de transformar designs em realidade,
              garantindo que cada detalhe seja perfeitamente alinhado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
