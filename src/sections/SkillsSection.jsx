import { skills } from '../constants'
import SkillsCard from '../components/SkillsCard'

const SkillsSection = () => {
  return (
    <>
      <h2
        className='font-bold text-white text-3xl relative inline-block before:content-["#"] before:text-red-400 
        after:content-[""] after:block after:w-[10vw] after:h-px after:bg-red-400 after:absolute after:transform 
        after:translate-x-full after:-translate-y-1/2 after:right-[-16px] after:top-1/2'
      >
        skills
      </h2>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {skills.map((skill, index) => (
          <SkillsCard key={index} {...skill} />
        ))}
      </div>
    </>
  )
}

export default SkillsSection
