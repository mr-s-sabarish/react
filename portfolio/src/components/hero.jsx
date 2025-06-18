export default function Hero() {

  return (

    <main className="">

      <section id="home" class="min-h-screen flex flex-col items-center justify-center pt-20  bg-black p-8">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:max-w-6xl items-center p-4 md:p-12 fade-element">


          <div class="flex flex-col w-full items-center justify-center">

            <img src="https://i.postimg.cc/2SdcnqtQ/image.png" alt="Developer"
              class="w-[30vh] h-[30vh] md:w-[35vh] md:h-[35vh] rounded-xl ring-1 ring-white/60" />

            <div class="grid grid-cols-3 text-white max-w-md gap-3 text-center mt-4">
              <div class="backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-xl">
                <h1 class="">Learn</h1>
              </div>
              <div class="backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-xl">
                <h1 class="">Code</h1>
              </div>
              <div class="backdrop-blur-md bg-white/10 border border-white/20 p-2 rounded-xl">
                <h1 class="">Develop</h1>
              </div>
            </div>

          </div>


          <div class="w-full text-center lg:text-left space-y-6 text-white">

            <h1 class="text-3xl md:text-4xl font-extrabold">
              Hi, I'm <span class="text-white">&lt;/<span
                class="text-transparent bg-clip-text bg-gradient-to-r from-green-400  to-green-500">Sabarish</span>&gt;</span>
            </h1>

            <h1 class="text-xl md:text-2xl font-bold">
              <span id="typed" class="text-green-400 cursor"></span>
            </h1>

            <p class="text-lg text-slate-200">
              I build fast, responsive, and accessible websites using modern tools like <span class="text-white">HTML, CSS,
                JavaScript, and
                frameworks like Tailwind and React</span>.
            </p>

            <div class="flex justify-center lg:justify-start gap-6">
              <div class="">
                <a href=""
                  class="w-10 h-10 flex justify-center items-center rounded-full text-white bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black text-xl ring-2 ring-green-400 hover:ring-0">
                  <i class="fa-brands fa-github"></i></a>
              </div>
              <div class="">
                <a href=""
                  class="w-10 h-10 flex justify-center items-center rounded-full text-white bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-blue-700 text-xl ring-2 ring-green-400 hover:ring-0">
                  <i class="fa-brands fa-linkedin"></i></a>
              </div>
              <div class="">
                <a href=""
                  class="w-10 h-10 flex justify-center items-center rounded-full text-white bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black text-xl ring-2 ring-green-400 hover:ring-0">
                  <i class="fa-brands fa-square-x-twitter"></i></a>
              </div>
            </div>

            <a href="#projects"
              class="inline-block bg-transparent text-white ring-2 ring-green-400 px-3 py-2 transition duration-300 ease-in-out rounded-full hover:text-black hover:bg-green-400 hover:ring-green-400">
              View Projects
            </a>

          </div>
        </div>


      </section>

      <section id="about" class="min-h-screen scroll-mt-16 p-8 bg-black">
        <div class="container mx-auto">

          <div class="mb-16 text-center fade-element" data-animation-type="fade-up">
            <h2 class="text-4xl sm:text-5xl font-bold text-green-400 mb-4">About Me</h2>
            <p class="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a creative and detail-oriented <span class="text-green-400 font-medium">Web Developer</span> with a
              passion for building intuitive, user-centered digital experiences. I specialize in modern front-end
              technologies and love transforming complex ideas into elegant solutions.
            </p>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-4 fade-element" data-animation-type="fade-left">

            <div
              class="bg-transparent ring-1 ring-white/30 rounded-xl p-3 cursor-pointer md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
              <h3 class="text-xl font-semibold mb-2 text-green-400">Frontend
                Development</h3>
              <p class="text-gray-200 text-sm mb-4">
                Building responsive interfaces with Tailwind CSS, React.js, and vanilla JavaScript.
              </p>
              <ul class="text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Reusable component design</li>
                <li>Accessibility-first layouts</li>
                <li>Mobile-first responsiveness</li>
              </ul>
            </div>

            <div
              class="bg-transparent ring-1 ring-white/30 rounded-xl cursor-pointer p-3 md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
              <h3 class="text-xl font-semibold mb-2 text-green-400">JavaScript &
                Logic</h3>
              <p class="text-gray-200 text-sm mb-4">
                Skilled in writing clean, modular JS for dynamic features and state management.
              </p>
              <ul class="text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Form validation & UI interactions</li>
                <li>APIs & asynchronous operations</li>
                <li>Code optimization & refactoring</li>
              </ul>
            </div>

            <div
              class="bg-transparent ring-1 ring-white/30 rounded-xl cursor-pointer p-3 md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
              <h3 class="text-xl font-semibold mb-2 text-green-400">Tools & Workflow
              </h3>
              <p class="text-gray-200 text-sm mb-4">
                Experienced in using dev tools and version control for streamlined collaboration.
              </p>
              <ul class="text-sm text-gray-300 list-disc ml-5 space-y-1">
                <li>Git & GitHub workflows</li>
                <li>VS Code + browser dev tools</li>
                <li>npm, Figma, Chrome extensions</li>
              </ul>
            </div>

          </div>

          <h2 class="text-3xl text-green-300 font-bold mt-8 mb-8 text-center">My Skills</h2>

          <div id="skills-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto fade-element" data-animation-type="fade-right">


            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="80">
              <div class="flex items-center gap-3 mb-3">
                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" class="w-10 h-10" />
                <h3 class="text-xl text-white font-semibold">React</h3>
              </div>
              <div>
                <p class="text-white mb-4">Building dynamic, component-driven UIs with React for scalable frontend
                  applications.</p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">80%</span>
              </div>
            </div>

            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="75">
              <div class="flex items-center gap-3 mb-3">
                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" class="w-10 h-10" />
                <h3 class="text-xl text-white font-semibold">Node.js</h3>
              </div>
              <div>
                <p class="text-white mb-4">Creating fast, scalable backend services and APIs using Node.js and Express.</p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">75%</span>
              </div>
            </div>

            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="90">
              <div class="flex items-center gap-3 mb-3">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z">
                    </path>
                  </svg>
                </span>
                <h3 class="text-xl text-white font-semibold">JavaScript</h3>
              </div>
              <div>
                <p class="text-white mb-4">Writing modern, efficient JavaScript to power interactive and responsive web
                  experiences.</p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">90%</span>
              </div>
            </div>

            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="70">
              <div class="flex items-center gap-3 mb-3">
                <img src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" alt="SQL"
                  class="w-10 h-10" />
                <h3 class="text-xl text-white font-semibold">SQL</h3>
              </div>
              <div>
                <p class="text-white mb-4">Designing and managing relational databases with clean, optimized SQL queries.
                </p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">70%</span>
              </div>
            </div>

            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="85">
              <div class="flex items-center gap-3 mb-3">
                <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS" class="w-10 h-10" />
                <h3 class="text-xl text-white font-semibold">Tailwind CSS</h3>
              </div>
              <div>
                <p class="text-white mb-4">Crafting pixel-perfect, responsive designs rapidly using Tailwind’s utility-first
                  classes.</p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">85%</span>
              </div>
            </div>

            <div class="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="60">
              <div class="flex items-center gap-3 mb-3">
                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" class="w-10 h-10" />
                <h3 class="text-xl text-white font-semibold">Python</h3>
              </div>
              <div>
                <p class="text-white mb-4">Automating tasks, analyzing data, and building backend logic with clean Python
                  code.</p>
              </div>
              <div class="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                <div class="skill-bar bg-green-400 h-2 rounded-full"></div>
              </div>

              <div class="text-sm text-white mt-1 text-right">
                <span class="skill-percent">60%</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="services" class="min-h-screen bg-black scroll-mt-16 p-2 md:p-8 text-white">
        <div class="max-w-7xl mx-auto px-6">

          <div class="flex justify-center items-center text-center mb-16 fade-element" data-animation-type="fade-up">
            <div>
              <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Elevating <span class="text-green-400">Digital</span> Experiences
              </h2>
              <p class="text-gray-400 max-w-xl">
                Specializing in modern UI/UX, high-performance frontend development, and bold graphic design to create
                immersive digital products.
              </p>
            </div>
          </div>


          <div class="grid gap-10 grid-cols-1 md:grid-cols-3 w-full fade-element" data-animation-type="fade-up">


            <div
              class="group relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 transition-all duration-300 shadow-lg transform hover:-translate-y-2 hover:shadow-green-400">
              <div class="mb-6">
                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                  viewBox="0 0 48 48">
                  <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                  <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                  <path fill="#66bb6a"
                    d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                  <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                  <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold mb-4">UI / UX Design</h3>
              <p class="text-gray-400">
                Human-centered interface design that fuses clarity with creativity — wireframes, prototypes, and
                pixel-perfect visuals.
              </p>
            </div>


            <div
              class="group relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-green-400 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                  viewBox="0 0 48 48">
                  <path fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z">
                  </path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Frontend Development</h3>
              <p class="text-gray-400">
                Component-based, scalable web development using Tailwind, React, JavaScript — optimized for performance and
                UX.
              </p>
            </div>


            <div
              class="group relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-green-400 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                  viewBox="0 0 48 48">
                  <linearGradient id="N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1" x1="38.263" x2="10.15" y1="1373.62"
                    y2="1342.615" gradientTransform="translate(0 -1333.89)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#823af3"></stop>
                    <stop offset=".36" stop-color="#4b66e1"></stop>
                    <stop offset=".906" stop-color="#01f1c4"></stop>
                  </linearGradient>
                  <path fill="url(#N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1)" fill-rule="evenodd"
                    d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24	S12.955,4,24,4S44,12.955,44,24z" clip-rule="evenodd">
                  </path>
                  <path fill="#fff" fill-rule="evenodd"
                    d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Graphic Design</h3>
              <p class="text-gray-400">
                Branding, digital art, UI graphics, and custom visuals crafted with detail and edge — made to resonate.
              </p>
            </div>

          </div>
        </div>

        <div class="max-w-7xl mx-auto mt-16">

          <div class="text-center mb-16 fade-element" data-animation-type="fade-up">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4">
              Certificates & Achievements
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Recognized learning and professional development across modern frontend, design, and tech stacks.
            </p>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full fade-element" data-animation-type="fade-right">

            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Applicaion Architecture Internship</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2023-24</span>
              </div>
              <p class="text-gray-400 mb-3">Infyrec Technologies</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>


            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Cloud Virtual Internship</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2024</span>
              </div>
              <p class="text-gray-400 mb-3">Certified by Eduskills</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>


            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Android Developer Virtual Internship</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2024</span>
              </div>
              <p class="text-gray-400 mb-3">Certified by Eduskills</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>


            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Project Completion Certificate</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2025</span>
              </div>
              <p class="text-gray-400 mb-3">Certified by Cosmogems (P) Ltd.,</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>


            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">Data Analytics Workshop</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2024</span>
              </div>
              <p class="text-gray-400 mb-3">Coimbatore Institute of Technology</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>

            <div class="bg-zinc-900 border border-zinc-700 transition duration-300 ease-in transform hover:-translate-y-1 hover:shadow-green-400 rounded-2xl p-6 shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold">International Conference</h3>
                <span class="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">2024</span>
              </div>
              <p class="text-gray-400 mb-3">Issued by KL University</p>
              <a href="" target="_blank" class="text-green-400 text-sm underline hover:text-green-300">View Certificate</a>
            </div>
          </div>
        </div>
      </section>

    </main>

  );
}

