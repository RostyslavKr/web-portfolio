import HeroComponent from "@/components/Hero"
import AboutMeComponent from "@/components/AboutMe"
import SkillsComponent from "@/components/Skills"
import ProjectsComponent from "@/components/Projects"
import FooterComponent from "@/components/Footer"
import AppBar from "@/components/AppBar"

export default function Home() {
  return (
    <main>
      <AppBar />
      <HeroComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <FooterComponent />
    </main>
  )
}
