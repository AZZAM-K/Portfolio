import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import Quote from '../components/Quote'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className='px-5 lg:px-25 mt-40'>
        <section>
          <HeroSection />
        </section>
        <section data-aos='fade-left'>
          <Quote />
        </section>
        <section className='mt-20'>
          <ProjectsSection />
        </section>
        <section className='mt-20'>
          <SkillsSection />
        </section>
        <section className='mt-20' data-aos='fade-up'>
          <AboutSection />
        </section>
        <section className='mt-20' id='contacts' data-aos='fade-up'>
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Home
