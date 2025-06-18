import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "A Passionate Developer",
        "Building Responsive Pages",
        "Graphic Designer",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);


  return (
    <main className="">

      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 bg-black p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:max-w-6xl items-center p-4 md:p-12">

          {/* Left Side - Image & Skills */}
          <div className="flex flex-col w-full items-center justify-center">
            <img
              src="https://i.postimg.cc/2SdcnqtQ/image.png"
              alt="Developer"
              className="w-[30vh] h-[30vh] md:w-[35vh] md:h-[35vh] rounded-xl ring-1 ring-white/20"
            />
            <div className="grid grid-cols-3 text-white max-w-md gap-3 text-center mt-4">
              {["Learn", "Code", "Develop"].map((text, i) => (
                <div key={i} className="backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-xl">
                  <h1>{text}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Text & Social */}
          <div className="w-full text-center lg:text-left space-y-6 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Hi, I'm <span className="text-white">&lt;/<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Sabarish</span>&gt;</span>
            </h1>

            <h1 className="text-xl md:text-2xl font-bold">
              <span ref={typedRef} className="text-green-400 cursor"></span>
            </h1>

            <p className="text-lg text-slate-300">
              I build fast, responsive, and accessible websites using modern tools like{" "}
              <span className="text-white">HTML, CSS, JavaScript, Tailwind, and React</span>.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full text-black bg-white transition-all duration-300 ease-in hover:bg-black hover:text-white text-xl hover:ring-2 ring-white">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full text-blue-600 bg-white transition-all duration-300 ease-in hover:bg-black hover:text-white text-xl hover:ring-2 ring-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full text-black bg-white transition-all duration-300 ease-in hover:bg-black hover:text-white text-xl hover:ring-2 ring-white">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </div>

            {/* Download Button */}
            <a href="#projects" className="inline-block bg-transparent text-white ring-1 ring-green-400 px-3 py-2 transition duration-300 ease-in-out rounded-full hover:text-black hover:bg-green-400">
              Download CV
            </a>
          </div>
        </div>
      </section>

    </main>

  );
}

