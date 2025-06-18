import React, { useState } from 'react';

const ContactSection = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);

    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      form.reset();
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("There was an error, please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black scroll-mt-16 p-2 md:p-8 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 fade-element" data-animation-type="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get in <span className="text-green-400">Touch</span></h2>
          <p className="text-gray-400">I’d love to hear about your project or opportunity. Let’s make something awesome together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 p-8 fade-element" data-animation-type="fade-left">
            <div>
              <h3 className="text-xl text-green-400 font-semibold mb-2">Email</h3>
              <p className="text-gray-300"><a href="mailto:sabarisiva775@gmail.com">sabarisiva775@gmail.com</a></p>
            </div>
            <div>
              <h3 className="text-xl text-green-400 font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Salem, TamilNadu</p>
            </div>
            <div>
              <h3 className="text-xl text-green-400 font-semibold mb-2">Follow Me</h3>
              <div className="flex space-x-5 text-white">
                <a href="#" className="hover:text-green-400 transition">LinkedIn</a>
                <a href="#" className="hover:text-green-400 transition">GitHub</a>
                <a href="#" className="hover:text-green-400 transition">Twitter</a>
              </div>
            </div>
          </div>

          <form action="https://formspree.io/f/xgvaljgk" method="POST" className="fade-element bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-xl space-y-6" onSubmit={handleSubmit} data-animation-type="fade-right">
            <div className="text-center text-2xl font-bold">
              <h1 className="text-green-400">Let’s <span className="text-white">Connect</span></h1>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" required className="w-full bg-black text-white border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:border-green-400" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input type="email" name="email" placeholder="Enter Your E-mail" required className="w-full bg-black text-white border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:border-green-400" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea name="message" rows="5" placeholder="Enter Your Message" required className="w-full bg-black text-white border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:border-green-400"></textarea>
            </div>

            <button type="submit" className="text-center flex justify-center items-center gap-3 bg-green-400 text-black font-semibold p-2 rounded-lg hover:bg-green-300 transition">
              Send Message
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </span>
            </button>
          </form>
        </div>

        {toastVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-black ring-1 ring-green-400 text-white h-40 px-6 py-4 rounded-xl shadow-lg relative w-[90%] max-w-sm text-center">
              <button onClick={() => setToastVisible(false)} className="absolute top-2 right-3 text-green-400 text-2xl font-bold hover:text-white transition">&times;</button>
              <p className="font-semibold text-white flex justify-center items-center h-full">Your message was sent successfully!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
