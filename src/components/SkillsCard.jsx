const SkillsCard = ({ category, techs }) => {
  return (
    <div className='border border-gray-400' data-aos='zoom-in'>
      <p className='text-xl text-white font-bold border-b border-gray-400 p-2'>
        {category}
      </p>
      <ul className='flex flex-wrap p-2 gap-2 text-gray-400 justify-start items-start list-none text-lg'>
        {techs.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard
