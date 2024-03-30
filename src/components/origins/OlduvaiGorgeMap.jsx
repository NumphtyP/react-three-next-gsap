import React, { useRef, useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiY2hvbWJvY2hpbm9rb3NvcmFtb3RvIiwiYSI6ImNsYWIzNzN1YzA5M24zdm4xb2txdXZ0YXQifQ.mltBkVjXA6LjUJ1bi7gdRg'

const OlduvaiGorgeMap = ({ lat, lng, zoom, bearing, pitch, styleUrl }) => {
  const [viewport, setViewport] = useState({
    latitude: { lat },
    longitude: { lng },
    zoom: { zoom },
    bearing: { bearing },
    pitch: { pitch },
  })

  const mapRef = useRef(null)

  useEffect(() => {
    const map = mapRef.current?.getMap()

    if (map) {
      // Set the map style to your custom Mapbox Studio style
      map.setStyle({ styleUrl })

      // Start the camera rotation after the map has loaded
      map.on('load', () => {
        const rotateCamera = (timestamp) => {
          if (!map) return
          map.rotateTo((timestamp / 100) % 360, { duration: 0 })
          requestAnimationFrame(rotateCamera)
        }

        rotateCamera(0)

        // Add 3D buildings layer
        map.addLayer({
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']],
            'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']],
            'fill-extrusion-opacity': 0.6,
          },
        })

        // Remove label layers to enhance the map visuals
        const layers = map.getStyle().layers
        for (const layer of layers) {
          if (layer.type === 'symbol' && layer.layout['text-field']) {
            map.removeLayer(layer.id)
          }
        }
      })
    }
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      height='100vh'
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      ref={mapRef}
    />
  )
}

export default OlduvaiGorgeMap
