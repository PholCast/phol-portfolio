import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Keyboard } from 'swiper/modules'
import { FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight, FaGithub, FaExpand, FaXmark } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/pagination'

const GalleryArrowButton = ({ direction, onClick, disabled = false, className = '' }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
        className={`inline-flex h-11 w-11 items-center cursor-pointer justify-center rounded-full border border-white/15 bg-slate-950/75 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-slate-900/90 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
        {direction === 'prev' ? <FaChevronLeft className="h-3.5 w-3.5" /> : <FaChevronRight className="h-3.5 w-3.5" />}
    </button>
)

const MediaSlide = ({
    src,
    poster,
    type,
    label,
    compact = false,
    onOpenViewer,
    viewerLabel,
    showNav = false,
    onPrev,
    onNext,
    prevDisabled,
    nextDisabled,
}) => {
    const mediaRef = useRef(null)

    return (
        <div className="relative flex w-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-3">
            <div className={`relative flex w-full items-center justify-center overflow-hidden rounded-[20px] bg-slate-950/70 ${compact ? 'h-[clamp(310px,40vh,440px)]' : 'aspect-video'}`}>
                {type === 'video' ? (
                    <video ref={mediaRef} className="max-h-full max-w-full object-contain" src={src} poster={poster} controls playsInline muted loop />
                ) : (
                    <img ref={mediaRef} src={src} alt={label} loading="lazy" className="mx-auto max-h-full max-w-full object-contain object-center" />
                )}

                {showNav && (
                    <>
                        <div className="pointer-events-none absolute inset-y-0 left-3 z-20 flex items-center">
                            <GalleryArrowButton direction="prev" onClick={onPrev} disabled={prevDisabled} className="pointer-events-auto" />
                        </div>
                        <div className="pointer-events-none absolute inset-y-0 right-3 z-20 flex items-center">
                            <GalleryArrowButton direction="next" onClick={onNext} disabled={nextDisabled} className="pointer-events-auto" />
                        </div>
                    </>
                )}

                {type === 'image' && onOpenViewer && (
                    <button
                        type="button"
                        onClick={onOpenViewer}
                        className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full border cursor-pointer border-white/10 bg-black/65 px-3 py-2 text-xs font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-black/80"
                        aria-label={viewerLabel}
                    >
                        <FaExpand />
                        {viewerLabel}
                    </button>
                )}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/50">{label}</p>
        </div>
    )
}

const ProjectModal = ({ isOpen, onClose, project, copy, locale }) => {
    const imageSlides = useMemo(() => [project?.mainImage, ...(project?.gallery || [])].filter(Boolean), [project])
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)
    const activeImageSrc = imageSlides[activeSlideIndex] || project?.mainImage || ''
    const imageWrapperRef = useRef(null)
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [videoSwiperInstance, setVideoSwiperInstance] = useState(null)
    const [activeVideoIndex, setActiveVideoIndex] = useState(0)

    if (!project) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label={project.name[locale]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-lg"
                    onMouseDown={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="mx-auto mt-4 flex h-[calc(100vh-2rem)] w-[min(1200px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[34px] border border-white/10 bg-[#07101f] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                            <div>
                                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{project.name[locale]}</h3>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                                aria-label={copy.close}
                            >
                                <FaXmark />
                            </button>
                        </div>

                        <div className="flex flex-1 min-h-0 flex-col gap-5 overflow-y-auto px-5 py-5 sm:px-6">
                            <div className="space-y-3">
                                {/* <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.images}</h4> */}
                                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3" ref={imageWrapperRef}>
                                    <Swiper
                                        className="project-modal-image-swiper h-full"
                                        modules={[Pagination, A11y, Keyboard]}
                                        keyboard
                                        pagination={{ clickable: true }}
                                        spaceBetween={16}
                                        slidesPerView={1}
                                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                                        onSlideChange={(swiper) => {
                                            setActiveSlideIndex(swiper.activeIndex)
                                        }}
                                    >
                                        {imageSlides.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="flex h-full w-full items-center justify-center">
                                                    <MediaSlide
                                                        src={image}
                                                        type="image"
                                                        label={`${project.name[locale]} ${index + 1}`}
                                                        viewerLabel={copy.openFullscreen}
                                                        compact
                                                        onOpenViewer={() => setIsImageViewerOpen(true)}
                                                        showNav={imageSlides.length > 1}
                                                        onPrev={() => swiperInstance?.slidePrev()}
                                                        onNext={() => swiperInstance?.slideNext()}
                                                        prevDisabled={activeSlideIndex === 0}
                                                        nextDisabled={activeSlideIndex >= imageSlides.length - 1}
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>
                            </div>

                            <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
                                <p className="whitespace-pre-line text-sm leading-7 text-white/75">{project.longDescription[locale]}</p>

                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.tech}</h4>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium tracking-wide text-white/80">
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
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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

                                <div>
                                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/50">{copy.videos}</h4>
                                
  <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3">
    <Swiper
      modules={[Pagination, A11y, Keyboard]}
      keyboard
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      onSwiper={(swiper) => setVideoSwiperInstance(swiper)}
      onSlideChange={(swiper) => {
        setActiveVideoIndex(swiper.activeIndex)
      }}
    >
      {project.videos.map((video, index) => (
        <SwiperSlide key={index}>
          <MediaSlide
            src={video.src}
            poster={video.poster}
            type="video"
            label={`${project.name[locale]} video ${index + 1}`}
            compact
            showNav={project.videos.length > 1}
            onPrev={() => videoSwiperInstance?.slidePrev()}
            onNext={() => videoSwiperInstance?.slideNext()}
            prevDisabled={activeVideoIndex === 0}
            nextDisabled={activeVideoIndex >= project.videos.length - 1}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isImageViewerOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-30 flex items-center justify-center bg-black/88 px-4 py-4 backdrop-blur-xl"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setIsImageViewerOpen(false)}
                                        className="absolute right-4 top-4 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
                                        aria-label={copy.close}
                                    >
                                        <FaXmark />
                                    </button>
                                    <img
                                        src={activeImageSrc}
                                        alt={project.name[locale]}
                                        className="max-h-[85vh] max-w-[90vw] rounded-[24px] border border-white/10 object-contain shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProjectModal
