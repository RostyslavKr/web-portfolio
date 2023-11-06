import Image from "next/image"
export default function HeroComponent() {
    return (
        <section id="intro"  >
            <div className="flex flex-col gap-y-3.5 px-5 mt-3 mb-12 md:px-14 md:gap-y-5 lg:px-28 lg:pb-28 lg:mb-20 mx-auto xl:w-[1200px] 2xl:w-[1500px] ">
                <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around">
                    <div className="flex gap-y-3 flex-col md:gap-y-5"><div className="flex items-center"><p className="font-medium text-lg text-slate-300 md:text-2xl">Hi there,I'm Rostyslav</p>
               <Image className="wave" src="/images/waving-hand.svg" alt="hand" width={28} height={28} /></div>
            
            
            <h1 className="font-bold text-4xl text-zinc-100 md:text-5xl">Frontend Developer</h1>
            <p className="font-medium text-sm text-slate-300 md:text-lg lg:text-xl">Passionate about crafting websites and scalable frontend products that prioritize exceptional user experiences, I specialize in developing rich web applications that engage and delight users.</p></div>
                    
              <Image className="self-center" src="/images/computer.svg" width={250} height={120} alt="computer" /> </div>
                
            </div>
            

        </section>
    )
}