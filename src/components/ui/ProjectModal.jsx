import { useMemo, useRef } from 'react'
import Modal from 'react-modal'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules'
import { FaArrowUpRightFromSquare, FaGithub, FaExpand, FaXmark } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slideProps = {
  navigation: true,
  pagination: { clickable: true }
}

const MediaSlide = ({ src, poster, type, label }) => {
  const mediaRef = useRef(null)

  const handleFullscreen = () => {
    const element = mediaRef.current
    if (element?.requestFullscreen) {
      element.requestFullscreen().catch(() => {
        window.open(src, '_blank', 'noopener,noreferrer')
      })
      return
    }
    window.open(src, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-3">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-slate-950/70">
        {type === 'video' ? (
          <video ref={mediaRef} className="h-full w-full object-cover" src={src} poster={poster} controls playsInline muted loop />
        ) : (
          <img ref={mediaRef} src={src} alt={label} loading="lazy" className="h-full w-full object-cover" />
        )}

        <button
          type="button"
          onClick={handleFullscreen}
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/65"
          aria-label={`${label} fullscreen`}
        >
          <FaExpand />
          Fullscreen
        </button>
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/50">{label}</p>
    </div>
  )
}

const ProjectModal = ({ isOpen, onClose, project, copy, locale }) => {
  const imageSlides = useMemo(() => [project?.mainImage, ...(project?.gallery || [])].filter(Boolean), [project])

  if (!project) return null

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      overlayClassName="fixed inset-0 z-[70] bg-black/75 backdrop-blur-lg"
      className="outline-none"
      ariaHideApp={false}
      contentLabel={project.name[locale]}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mx-auto mt-4 flex h-[calc(100vh-2rem)] w-[min(1200px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[34px] border border-white/10 bg-[#07101f] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">Case study</p>
                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{project.name[locale]}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                aria-label={copy.close}
              >
                <FaXmark />
              </button>
            </div>

            <div className="grid flex-1 gap-6 overflow-y-auto px-5 py-5 sm:px-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="space-y-6">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  src={project.mainImage}
                  alt={project.name[locale]}
                  className="h-auto w-full rounded-[28px] border border-white/10 object-cover"
                  loading="lazy"
                />

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.images}</h4>
                  <Swiper modules={[Navigation, Pagination, A11y, Keyboard]} keyboard {...slideProps} spaceBetween={16} slidesPerView={1.05} breakpoints={{ 768: { slidesPerView: 1.2 } }}>
                    {imageSlides.map((image, index) => (
                      <SwiperSlide key={index}>
                        <MediaSlide src={image} type="image" label={`${project.name[locale]} ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.videos}</h4>
                  <Swiper modules={[Navigation, Pagination, A11y, Keyboard]} keyboard {...slideProps} spaceBetween={16} slidesPerView={1.05} breakpoints={{ 768: { slidesPerView: 1.2 } }}>
                    {project.videos.map((video, index) => (
                      <SwiperSlide key={index}>
                        <MediaSlide src={video.src} poster={video.poster} type="video" label={`${project.name[locale]} video ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-sm leading-7 text-white/75">{project.longDescription[locale]}</p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.tech}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/78">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    <FaGithub />
                    {copy.viewGitHub}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaArrowUpRightFromSquare />
                    {copy.viewDemo}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  )
}

export default ProjectModal
