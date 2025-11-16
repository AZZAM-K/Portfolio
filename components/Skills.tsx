import SkillCard from '@/components/SkillCard'
import { skills } from '@/constants'

const Skills = () => {
  return (
    <section className='skills w-full bg-black text-gray-300 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16'>
          <span className='bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
            My Skills
          </span>
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8'>
          {skills.map(skill => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
