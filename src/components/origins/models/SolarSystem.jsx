import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/sun_earth_moon.glb')
  const { actions } = useAnimations(animations, group)
  // type ActionName = 'Take 001'
  useEffect(() => {
    actions['Take 001'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='2d13584d3773402e832b3b3a4c84745ffbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='Sonne' position={[0, 102.377, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='Sonne_Material_#2_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Sonne_Material_#2_0'].geometry}
                    material={materials.Material_2}
                  />
                </group>
                <group name='Erde' position={[174.689, 102.377, -46.68]} rotation={[-1.169, 0, 0]}>
                  <mesh
                    name='Erde_Material_#1_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Erde_Material_#1_0'].geometry}
                    material={materials.Material_1}
                  />
                </group>
                <group name='Mond' position={[193.581, 102.377, -62.97]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='Mond_Material_#3_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Mond_Material_#3_0'].geometry}
                    material={materials.Material_3}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sun_earth_moon.glb')

const SolarSystem = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default SolarSystem
