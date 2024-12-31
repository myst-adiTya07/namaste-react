import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-950 to-green-800">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Aditya Kr Gautam</h1>
            <p className="text-xl mb-6">Full Stack Developer & Tech Ethusiast</p>
            <div className="flex gap-4">
              <a href="https://github.com/myst-adiTya07" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-kr-gautam-b26324200/" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="adityakumarjnv2002@gmail.com" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQFDUrGCC_WO7w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1733314311699?e=1735632000&v=beta&t=3uIvqH6MTQHUdRmO5c_67Fv_dFUCLnEK5ZbF9O5xCHU"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;