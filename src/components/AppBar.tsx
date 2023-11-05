"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function AppBar() {
    const [activeSection, setActiveSection] = useState(null);
     useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'skills', 'projects', 'contacts']; 

  
  const windowTop = window.scrollY;
  const windowBottom = windowTop + window.innerHeight;

  let activeSection = null;

  sections.forEach(section => {
    const sectionElement = document.getElementById(section);

    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.clientHeight;

      
      if (sectionTop <= windowBottom && sectionBottom >= windowTop) {
        activeSection = section;
      }
    }
  });
      setActiveSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  
    const sections = ['intro', 'about', 'skills', 'projects', 'contacts'];
    
    return (<> <Link href="/navigation"><Image className='fixed top-5 right-12 z-10 lg:hidden' src='/images/hamburger-menu.svg' alt='burger-menu' width={32} height={32} /></Link> <nav className='fixed top-[40%] left-[95%] z-10  opacity-100 transition-opacity duration-500 ease-in-out max-[1023px]:hidden'>
                <ul>
                    {sections.map(section => <li key={section}><a className='block group relative' href={`#${section}`}><span className={`dot block transition-transform transform-origin-center transform scale-60 group-hover:scale-75 group-focus:scale-75 ${activeSection === section ? 'active' : ''}`}></span>
        <span className="relative bottom-3 text-white font-semibold text-[10px] uppercase opacity-0 hover:opacity-100 ">{section}</span></a></li> )}
                </ul>
            </nav></>
        
           
        
    )
}