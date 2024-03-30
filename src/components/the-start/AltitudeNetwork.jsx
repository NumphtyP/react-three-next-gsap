'use client'
import React, { useRef, useEffect } from 'react'
import { ForceGraph2D } from 'react-force-graph'

const AltitudeNetwork = () => {
  const chart = useRef()
  useEffect(() => {
    /* global fetch */
    fetch('https://raw.githubusercontent.com/ksachikonye/hzevo-server/main/networks/breath_deep_sleep_networks.json')
      .then((resp) => resp.json())
      .then((json) => {
        // Note: In a real application you would do a validation of JSON data before doing anything with it,
        // but for demonstration purposes we ingore this part here and just trying to select needed data...
        const data = json
        ;(<ForceGraph2D
          graphData={data}
          nodeLabel='id'
          nodeAutoColorBy='group'
          linkDirectionalParticles='value'
          linkDirectionalParticleSpeed={(d) => d.value * 0.001}
        />)(chart.current)
      })
      .catch((err) => console.error('Could not load data', err)) // eslint-disable-line
  }, [])

  return (
    <div>
      <section className='relative flex min-h-screen w-full items-center pb-8 font-light text-white'>
        <div ref={chart} width={400} height={600} className='block w-full font-light text-white'></div>
      </section>
    </div>
  )
}

export default AltitudeNetwork
