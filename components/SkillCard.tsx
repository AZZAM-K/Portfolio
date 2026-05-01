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
    className='group panel rounded-md p-4 flex items-center gap-3 transition-all duration-300 ease-in-out
    hover:-translate-y-1 hover:border-(--border-strong)'
  >
    <Image src={icon} alt={name} width={24} height={24} style={{ color }} />
    <p className='text-xs uppercase tracking-[0.2em] text-(--text-muted)'>
      {name}
    </p>
  </div>
)

export default SkillCard
