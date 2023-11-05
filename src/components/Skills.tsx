import Image from "next/image";
const images = [
    { img: '/images/logo/html.svg' },
    { img: '/images/logo/css-3.svg' },
    { img: '/images/logo/javascript.svg' },
    { img: '/images/logo/typescript.svg' },
    { img: '/images/logo/react.svg' },
    { img: '/images/logo/redux.svg' },
    { img: '/images/logo/nodejs.svg' },
    { img: '/images/logo/nextjs.svg' },
    { img: '/images/logo/expressjs.svg' },
    { img: '/images/logo/mongodb.svg' },
    { img: '/images/logo/postgresql.svg' },
    { img: '/images/logo/postman.svg' },
    { img: '/images/logo/webpack.svg' },
    { img: '/images/logo/git.svg' },
    { img: '/images/logo/sass-1.svg' },
    { img: '/images/logo/tailwind-css-2.svg' },
    { img: '/images/logo/visual-studio-code-1.svg' },
    { img: '/images/logo/figma.svg' },
]


export default function SkillsComponent() {
    return (
        <section id="skills" className=" mb-12 md:mb-24 ">
            <div className="px-5 md:px-14 lg:px-28 lg:py-32 mx-auto xl:w-[1200px] 2xl:w-[1500px] ">
                <h3 className="font-bold text-4xl text-zinc-100 text-center mb-5 md:mb-8 md:text-5xl lg:mb-14">Skills</h3>
                <ul className="flex justify-center flex-wrap gap-y-6">
                    {images.map((image, index) => <li className="flex justify-center items-center w-1/3 lg:w-1/6 " key={index}><Image src={image.img} alt="logo" width={60} height={50} /></li> )}
                </ul>
            </div>
        </section>
    )
}