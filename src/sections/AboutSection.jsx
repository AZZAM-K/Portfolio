const AboutSection = () => {
  return (
    <>
      <h2
        className='font-bold text-white text-3xl relative inline-block before:content-["#"] before:text-red-400 
        after:content-[""] after:block after:w-[10vw] after:h-px after:bg-red-400 after:absolute after:transform 
        after:translate-x-full after:-translate-y-1/2 after:right-[-16px] after:top-1/2'
      >
        about
      </h2>
      <p className='text-lg text-gray-400 mt-10'>
        I'm a self-taught full-stack web developer based in Tripoli, Lebanon. I
        specialize in building responsive, scalable web applications using
        modern technologies like the MERN stack (MongoDB, Express, React, and
        Node.js).
      </p>
      <p className='text-lg text-gray-400 mt-3'>
        I enjoy transforming ideas into functional digital solutions—from
        crafting clean, intuitive front-end interfaces to developing secure and
        efficient back-end systems.
      </p>
      <p className='text-lg text-gray-400 mt-3'>
        I'm always exploring new technologies and best practices to sharpen my
        skills and build better, faster, and more reliable web applications.
      </p>
    </>
  )
}

export default AboutSection
