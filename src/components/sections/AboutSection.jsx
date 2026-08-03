import { motion } from 'framer-motion'
import MagicRings from '../effects/MagicRings'
import ScrollFloat from '../effects/ScrollFloat'

const AboutSection = ({ copy }) => {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 opacity-40">
        <MagicRings
          color="#8b5cf6"
          colorTwo="#38bdf8"
          speed={0.35}
          ringCount={6}
          attenuation={9}
          lineThickness={2}
          baseRadius={0.28}
          radiusStep={0.1}
          scaleRate={0.08}
          opacity={1}
          noiseAmount={0.02}
          rotation={-8}
          ringGap={1.35}
          fadeIn={0.65}
          fadeOut={0.55}
          followMouse
          mouseInfluence={0.12}
          hoverScale={1.1}
          parallax={0.03}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollFloat containerClassName="text-center" textClassName="font-semibold tracking-tight text-white">
          {copy.title}
        </ScrollFloat>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/5 px-5 py-8 text-left shadow-[0_18px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-8 sm:py-10"
        >
          <p className="whitespace-pre-line text-[1.02rem] leading-8 text-white/74 sm:text-[1.08rem]">
            {copy.content}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
