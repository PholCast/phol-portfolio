import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaArrowRightLong } from 'react-icons/fa6'
import ScrollFloat from '../effects/ScrollFloat'

const ContactSection = ({ copy, socials }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = true
    if (!emailRegex.test(form.email.trim())) nextErrors.email = true
    if (!form.subject.trim()) nextErrors.subject = true
    if (form.message.trim().length < 12) nextErrors.message = true
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    const mailto = `mailto:${socials.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailto
    setStatus('success')
  }

  const socialsList = [
    { key: 'linkedin', label: 'LinkedIn', href: socials.links[2].href, icon: FaLinkedinIn },
    { key: 'email', label: 'Email', href: socials.links[0].href, icon: FaEnvelope },
    { key: 'github', label: 'GitHub', href: socials.links[1].href, icon: FaGithub }
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFloat containerClassName="text-center" textClassName="font-semibold tracking-tight text-white">
          {copy.title}
        </ScrollFloat>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/60 sm:text-base">
          {copy.subtitle}
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-white/70">
                <span>{copy.form.name}</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8 ${
                    errors.name ? 'border-rose-400/60' : 'border-white/10'
                  }`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              </label>

              <label className="space-y-2 text-sm text-white/70">
                <span>{copy.form.email}</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8 ${
                    errors.email ? 'border-rose-400/60' : 'border-white/10'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-white/70">
              <span>{copy.form.subject}</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`w-full rounded-2xl border bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8 ${
                  errors.subject ? 'border-rose-400/60' : 'border-white/10'
                }`}
                aria-invalid={errors.subject ? 'true' : 'false'}
              />
            </label>

            <label className="mt-4 block space-y-2 text-sm text-white/70">
              <span>{copy.form.message}</span>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-3xl border bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8 ${
                  errors.message ? 'border-rose-400/60' : 'border-white/10'
                }`}
                aria-invalid={errors.message ? 'true' : 'false'}
              />
            </label>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className={`text-sm ${status === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}>
                {status === 'error' ? copy.form.error : copy.form.success}
              </p>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                {copy.form.submit}
                <FaArrowRightLong />
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="flex flex-col gap-4"
          >
            {socialsList.map((item) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 text-white transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-xl text-white/90 transition group-hover:scale-105">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-base font-semibold">{item.label}</p>
                      <p className="text-sm text-white/50">{item.href.replace('mailto:', '')}</p>
                    </div>
                  </div>
                  <FaArrowRightLong className="text-white/35 transition group-hover:translate-x-1" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
