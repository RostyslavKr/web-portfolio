"use client"
import { Navigation, A11y, EffectCube, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


import Image from "next/image";

const projects = [
    { title: "Web Studio", description: "A website for a Web Studio. User could check company's services, portfolio and fill out a feedback form.The website is responsive and displays well on: desktop, tablet, mobile phone.", img: "/images/projects/webstudio.png", github: "https://github.com/RostyslavKr/web-studio", site: "https://rostyslavkr.github.io/web-studio/", built:"HTML5, Sass, JavaScript", width:380 },
    { title: "Ice Cream", description: "Ice cream store website with responsive layout, burger menu, modal window and attractive design.", img: "/images/projects/icecream.png", github: "https://github.com/RostyslavKr/ice-cream", site: "https://rostyslavkr.github.io/ice-cream/", built:"HTML5, Sass, JavaScript", width:380 },
    { title: "Filmoteka", description: "Application for searching movie.App component with Public and Private routes.", img: "/images/projects/filmoteka.png", github: "https://github.com/RostyslavKr/filmoteka", site: "https://rostyslavkr.github.io/filmoteka/", built:"HTML5, Sass, JavaScript, REST API" , width:220},
    { title: "PhoneBook", description: "The web-site with login auth after that you can create contact and it was saved in your account, besides you can quickly find the desired contact.", img: "/images/projects/phonebook.png", github: "https://github.com/RostyslavKr/PhoneBookApp", site: "https://rostyslavkr.github.io/PhoneBookApp/", built:"React, Redux-Toolkit, ReactHooks ", width:220 },
    {title:"Delivery",description:"This project is a simple delivery app developed using Reactand a custom backend built with Node.js. The app allowsusers to order goods from various shops and track the statusof their orders.", img:"/images/projects/delivery.png", github:"https://github.com/RostyslavKr/delivery-app-frontend", site:"https://delivery-app-frontend-pi.vercel.app/", built:"React, Node.js", width:220},
    { title: "Task Pro", description: "TaskPro is a platform for task and project management thatprovides a variety of features for organizing and coordinatingwork.", img: "/images/projects/taskpro.png", github: "https://github.com/RostyslavKr/TaskPro", site: "https://rostyslavkr.github.io/TaskPro/welcome", built:"React, Redux-Toolkit, ReactHooks, Node.js" , width:380},
    {title:"Tour of Ukraine",description:"Website is designed to provide users with information, services, and the opportunity to connect with travel agency.", img:"/images/projects/tourUkraine.png", github:"https://github.com/RostyslavKr/wonders-of-ukraine", site:"https://wonders-of-ukraine.vercel.app/", built:"Next.js, React", width:380},
]

export default function ProjectsComponent() {
    return (
        <section id="projects">
            <div className="px-5   mx-auto md:px-14 lg:px-28 mb-8 md:mb-14 ">
                <h3 className="font-bold text-4xl text-zinc-100 text-center mb-10 md:mb-14 md:text-5xl">Projects</h3>
                    <Swiper
                    modules={[Navigation, A11y, EffectCube, Pagination]}
                    effect={'cube'}
                    loop={true}
                    slidesPerView={1}
                    cubeEffect={{
                        shadow: false,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                 
     >
                    
                        
                    {projects.map((project, index) => <SwiperSlide key={index}><div className=' flex flex-col gap-4 md:flex-row-reverse '>
                        <Image className='self-center' src={project.img} alt={project.title} width={559} height={447} />
                        <div className='flex flex-col gap-5'><h3 className='font-bold text-zinc-100 text-2xl md:text-3xl lg:text-4xl'>{project.title}</h3>
                        <p className='font-semibold text-sm text-slate-300 md:text-base lg:text-xl'>{project.description}</p>
                        <p className='font-semibold text-sm text-slate-300 md:text-base lg:text-xl'><span className='font-bold text-zinc-100 text-base md:text-lg lg:text-2xl'>Built with:</span> {project.built}</p>
                        <div className='flex gap-x-3'><a href={project.github} target='_blank'><Image className="transition duration-300 delay-100 hover:scale-125  focus:scale-125 " src="/images/github.svg" alt='github' width={28} height={28} /></a><a href={project.site} target='_blank'><Image className="transition duration-300 delay-100 hover:scale-125  focus:scale-125 " src="/images/website.png" alt='website' width={28} height={28} /></a></div></div>
                        
                        
                    
                    </div></SwiperSlide>)}
      
      
      
            </Swiper>
                
            </div>
        </section>
    )
}