import Image from "next/image"
const images = [
    { img: '/images/gmail.svg', link:'mailto:krivovyaz.ros@gmail.com' },
    { img: '/images/instagram.svg', link:'https://instagram.com/kryvoviaz_official' },
    { img: '/images/github.svg', link:'https://github.com/RostyslavKr' },
    { img: '/images/telegram.svg', link:'https://t.me/Rostyslav_Siriy' },
    { img: '/images/linkedin.svg', link:'https://www.linkedin.com/in/rostyslav-kryvovyaz' },
]

export default function FooterComponent() {
    return (
        <footer id="contacts" className="border-t border-[#2F2F2F]">
            <div className="py-5 md:px-14 lg:px-28 xl:w-[1200px] 2xl:w-[1500px] mx-auto ">
                <div className="md:flex justify-around">
                    <ul className="flex justify-center items-center gap-x-3 mb-4">
                    {images.map((image, index) => <li key={index}><a href={image.link} target="_blank" rel="noopener noreferrer"><Image className="transition duration-300 delay-100 hover:scale-125  focus:scale-125 " src={image.img} alt='logo' width={28} height={28} /></a></li> )}
                    
                    
                </ul>
                <div className="flex justify-center mb-3"><a className="download" href="https://drive.google.com/file/d/1B9V9qRNRzV5GmhvkPSuuwj2KDEfB6T5z/view?usp=sharing" target="_blank" download={true}>Download CV</a></div></div>
                
                <p className="text-center font-jomolhari font-normal text-sm text-slate-300">© Rostyslav Kryvoviaz 2023</p>
            </div>
        </footer>
    )
}