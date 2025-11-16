import Image from 'next/image'

const SkillCard = ({
  icon,
  name,
  color,
}: {
  icon: string
  name: string
  color: string
}) => (
  <div
    className='group relative bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center
   text-center transition-all duration-300 ease-in-out transform hover:scale-105'
  >
    <div
      className='absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
      style={{
        background: `radial-gradient(600px circle at ${
          name.length % 2 === 0 ? '0% 0%' : '100% 100%'
        }, ${color} 0%, transparent 40%)`,
      }}
      aria-hidden='true'
    ></div>
    <div className='relative z-10'>
      <div
        className={`w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110`}
        style={{ color: color }}
      >
        <Image src={icon} alt={name} width={64} height={64} />
      </div>
      <p className='text-lg font-medium text-gray-300 transition-colors duration-300 group-hover:text-white'>
        {name}
      </p>
    </div>
  </div>
)

export default SkillCard
