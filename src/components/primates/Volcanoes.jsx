import Globe from 'react-globe.gl'
import React, { useState, useEffect, useRef } from 'react'

import * as d3 from 'd3'
import polished from 'polished'

const Volcanoes = () => {
  const [volcanoes, setVolcanoes] = useState([])

  useEffect(() => {
    // load data
    fetch('/data/world_volcanoes.json')
      .then((res) => res.json())
      .then(setVolcanoes)
  }, [])

  const catColor = d3.scaleOrdinal(d3.schemeCategory10.map((col) => polished.transparentize(0.2, col)))

  const getAlt = (d) => d.elevation * 5e-5

  const getTooltip = (d) => `
      <div style="text-align: center">
        <div><b>${d.name}</b>, ${d.country}</div>
        <div>(${d.type})</div>
        <div>Elevation: <em>${d.elevation}</em>m</div>
      </div>
    `

  return (
    <Globe
      globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
      backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
      pointsData={volcanoes}
      pointLat='lat'
      pointLng='lon'
      pointAltitude={getAlt}
      pointRadius={0.12}
      pointColor={(d) => catColor(d.type)}
      pointLabel={getTooltip}
      labelsData={volcanoes}
      labelLat='lat'
      labelLng='lon'
      labelAltitude={(d) => getAlt(d) + 1e-6}
      labelDotRadius={0.12}
      labelDotOrientation={() => 'bottom'}
      labelColor={(d) => catColor(d.type)}
      labelText='name'
      labelSize={0.15}
      labelResolution={1}
      labelLabel={getTooltip}
    />
  )
}

export default Volcanoes
