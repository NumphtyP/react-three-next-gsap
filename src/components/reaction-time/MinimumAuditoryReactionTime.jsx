import { useRef } from 'react'
import ServiceCard from '@/components/dom/ServiceCard'
import WorkCard from '@/components/dom/WorkCard'
import { stagger } from '@/templates/animations/stagger'
import useIsomorphicLayoutEffect from '@/templates/hooks/useIsomorphicLayoutEffect'

// Local Data

export default function MinimumAuditoryReactionTime() {
  // Ref
  const workRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const textFour = useRef()

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
      { y: 0, x: 0, transform: 'scale(1)' },
    )
  }, [])

  return (
    <div className='antialised relative m-0 flex h-screen w-screen cursor-none resize p-0'>
      <div className='container mx-auto mb-10'>
        <div className='1024px:mt-20 mt-10'>
          <div className='mt-5'>
            <h1
              ref={textOne}
              className='768px:text-6xl 1024px:text-6xl 1440px:text-8xl 768px:p-2 text-bold mob:w-full 1024px:w-4/5 w-4/5 p-1 text-3xl'
            >
              Gang Gang Gang
            </h1>
            <h1
              ref={textTwo}
              className='768px:text-6xl 1024px:text-6xl 1440px:text-8xl 768px:p-2 text-bold 1024px:w-4/5 w-full p-1 text-3xl'
            >
              Gang Gang Gang
            </h1>
            <h1
              ref={textThree}
              className='768px:text-6xl 1024px:text-6xl 1440px:text-8xl 768px:p-2 text-bold 1024px:w-4/5 w-full p-1 text-3xl'
            >
              Gang Gang Gang
            </h1>
            <h1
              ref={textFour}
              className='768px:text-6xl 1024px:text-6xl 1440px:text-8xl 768px:p-2 text-bold 1024px:w-4/5 w-full p-1 text-3xl'
            >
              Gang Gang Gang
            </h1>
          </div>
        </div>
        <div className='1024px:mt-30 1024px:p-0 mt-10 p-2' ref={workRef}>
          <h1 className='text-bold text-2xl'>Work.</h1>

          <div className='1440px:mt-10 768px:grid-cols-2 mt-5 grid grid-cols-1 gap-4'>
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className='1024px:mt-30 1024px:p-0 mt-10 p-2'>
          <h1 className='768px:m-10 text-bold text-2xl'>Services.</h1>
          <div className='768px:m-10 1024px:grid-cols-2 mt-5 grid grid-cols-1 gap-6'>
            {data.services.map((service, index) => (
              <ServiceCard key={index} name={service.title} description={service.description} />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
      </div>
    </div>
  )
}
