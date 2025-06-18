import React, { useEffect } from "react";

export default function About() {

    useEffect(() => {
        function animateSkillBars() {
            const skillCards = document.querySelectorAll("[data-level]");

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const card = entry.target;
                            const level = card.getAttribute("data-level");
                            const bar = card.querySelector(".skill-bar");
                            if (bar && !bar.style.width) {
                                bar.style.width = level + "%";
                            }
                        }
                    });
                },
                {
                    threshold: 0.5,
                }
            );

            skillCards.forEach((card) => observer.observe(card));
        }

        animateSkillBars();
    }, []);

    return (
        <main>
            {/* About Section */}

            <section id="about" className="min-h-screen scroll-mt-14 p-8 bg-black">
                <div className="container mx-auto">

                    <div className="mb-16 text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-green-400 mb-4">About Me</h2>
                        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
                            I'm a creative and detail-oriented <span class="text-green-400 font-medium">Web Developer</span> with a
                            passion for building intuitive, user-centered digital experiences. I specialize in modern front-end
                            technologies and love transforming complex ideas into elegant solutions.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-4">

                        <div
                            className="bg-transparent ring-1 ring-white/30 rounded-xl p-3 cursor-pointer md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Frontend
                                Development</h3>
                            <p className="text-gray-200 text-sm mb-4">
                                Building responsive interfaces with Tailwind CSS, React.js, and vanilla JavaScript.
                            </p>
                            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-1">
                                <li>Reusable component design</li>
                                <li>Accessibility-first layouts</li>
                                <li>Mobile-first responsiveness</li>
                            </ul>
                        </div>

                        <div
                            className="bg-transparent ring-1 ring-white/30 rounded-xl cursor-pointer p-3 md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">JavaScript &
                                Logic</h3>
                            <p className="text-gray-200 text-sm mb-4">
                                Skilled in writing clean, modular JS for dynamic features and state management.
                            </p>
                            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-1">
                                <li>Form validation & UI interactions</li>
                                <li>APIs & asynchronous operations</li>
                                <li>Code optimization & refactoring</li>
                            </ul>
                        </div>

                        <div
                            className="bg-transparent ring-1 ring-white/30 rounded-xl cursor-pointer p-3 md:p-6 shadow-md transition transform duration-300 hover:-translate-y-3 hover:shadow-green-400">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Tools & Workflow
                            </h3>
                            <p className="text-gray-200 text-sm mb-4">
                                Experienced in using dev tools and version control for streamlined collaboration.
                            </p>
                            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-1">
                                <li>Git & GitHub workflows</li>
                                <li>VS Code + browser dev tools</li>
                                <li>npm, Figma, Chrome extensions</li>
                            </ul>
                        </div>

                    </div>

                    <h2 className="text-3xl text-green-300 font-bold mt-8 mb-8 text-center">My Skills</h2>

                    <div id="skills-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto ">


                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="80">
                            <div class="flex items-center gap-3 mb-3">
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-10 h-10" />
                                <h3 className="text-xl text-white font-semibold">React</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Building dynamic, component-driven UIs with React for scalable frontend
                                    applications.</p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">80%</span>
                            </div>
                        </div>

                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="75">
                            <div className="flex items-center gap-3 mb-3">
                                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="w-10 h-10" />
                                <h3 className="text-xl text-white font-semibold">Node.js</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Creating fast, scalable backend services and APIs using Node.js and Express.</p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">75%</span>
                            </div>
                        </div>

                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="90">
                            <div className="flex items-center gap-3 mb-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                        <path fill="#000001"
                                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z">
                                        </path>
                                    </svg>
                                </span>
                                <h3 className="text-xl text-white font-semibold">JavaScript</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Writing modern, efficient JavaScript to power interactive and responsive web
                                    experiences.</p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">90%</span>
                            </div>
                        </div>

                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="70">
                            <div className="flex items-center gap-3 mb-3">
                                <img src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" alt="SQL"
                                    className="w-10 h-10" />
                                <h3 className="text-xl text-white font-semibold">SQL</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Designing and managing relational databases with clean, optimized SQL queries.
                                </p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">70%</span>
                            </div>
                        </div>

                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="85">
                            <div className="flex items-center gap-3 mb-3">
                                <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10" />
                                <h3 className="text-xl text-white font-semibold">Tailwind CSS</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Crafting pixel-perfect, responsive designs rapidly using Tailwind’s utility-first
                                    classes.</p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">85%</span>
                            </div>
                        </div>

                        <div className="bg-transparent ring-1 ring-green-400 rounded-lg p-5 shadow-md" data-level="60">
                            <div className="flex items-center gap-3 mb-3">
                                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" className="w-10 h-10" />
                                <h3 className="text-xl text-white font-semibold">Python</h3>
                            </div>
                            <div>
                                <p className="text-white mb-4">Automating tasks, analyzing data, and building backend logic with clean Python
                                    code.</p>
                            </div>
                            <div className="w-full bg-transparent ring-1 ring-green-400 rounded-full h-2 overflow-hidden">
                                <div className="skill-bar bg-green-400 h-2 rounded-full"></div>
                            </div>

                            <div className="text-sm text-white mt-1 text-right">
                                <span className="skill-percent">60%</span>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </main>
    )
}
