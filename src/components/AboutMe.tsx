export default function AboutMeComponent() {
    return (
        <section id="about" className="custom-gradient  py-2">
            <div className="px-5 mb-12 md:px-14 md:py-20 lg:px-28 lg:py-40  mx-auto">
                <h3 className="font-bold text-4xl text-zinc-100 text-center mb-5 md:mb-8 md:text-5xl lg:mb-12">About Me</h3>
                <div className="flex flex-col justify-around gap-y-3 md:gap-y-4">
                <p className="font-semibold text-sm text-slate-300 md:text-lg lg:text-xl">I'm dedicated to HTML5, CSS3, JavaScript, TypeScript, React, and Node.js, focusing on results-driven development.
                </p>
                <p className="font-semibold text-sm text-slate-300 md:text-lg lg:text-xl">My strength lies in problem analysis and solution-oriented troubleshooting for technical issues. As a fast learner with a strong sense of responsibility, I'm ready to tackle challenging tasks. </p>
                <p className="font-semibold text-sm text-slate-300 md:text-lg lg:text-xl">In JavaScript application development, I leverage the right tools or work independently to deliver fast, robust, and scalable solutions, consistently emphasizing performance and scalability.</p></div>
                
                {/* <img src="/images/me.png" alt="Rostyslav" /> */}
            </div>
        </section>
    )
}