export default function Footer() {
    return (
        <main>
            <footer className="bg-gradient-to-br bg-black text-gray-300 py-12">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 ">

                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-green-400 mb-3">Sabarish</h2>
                        <p className="text-sm text-gray-300">
                            "UI/UX Designer & Frontend Developer crafting visually stunning and functional digital products with modern
                            web
                            technologies."
                        </p>
                    </div>

                    <div className="text-center">

                        <h3 className="text-green-400 font-semibold mb-3">Quick Links</h3>

                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" class="hover:text-green-400 transition">Home</a></li>
                            <li><a href="#about" class="hover:text-green-400 transition">About</a></li>
                            <li><a href="#services" class="hover:text-green-400 transition">Services</a></li>
                            <li><a href="#contact" class="hover:text-green-400 transition">Contact</a></li>
                        </ul>

                    </div>


                    <div className="text-center">
                        <h3 className="text-green-400 font-semibold mb-3">Stay Connected</h3>
                        <div className="flex space-x-4 text-xl justify-center">
                            <a href="#" className="hover:text-green-400 transition"><i className="fab fa-github"></i></a>
                            <a href="#" className="hover:text-green-400 transition"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="hover:text-green-400 transition"><i className="fa-brands fa-square-x-twitter"></i></a>

                        </div>
                        <p className="mt-4 text-sm text-green-400">Email: <a class="text-gray-200" href="">sabarisiva775@gmail.com</a></p>
                    </div>
                </div>
            </footer>
            <div className="text-center bg-black text-gray-300  p-8 flex justify-center items-center ">
                © 2025 Sabarish. All rights reserved.
            </div>
        </main>
    )
}
