import { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      formRef.current.reset()
      setLoading(false)
    }, 2000)
  }

  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.{" "}
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="www.johndoe.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
