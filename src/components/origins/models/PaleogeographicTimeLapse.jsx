'use client'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useCursor } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/paleogeographic_timelapse.glb')
  const { actions } = useAnimations(animations, group)
  const [hovered, hover] = useState(false)

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    group.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    group.current.rotation.z -= delta / 4
  })
  // type ActionName = 'Timelapse'
  useEffect(() => {
    actions['Timelapse'].play()
  })
  return (
    <group ref={group} {...props} dispose={null} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='sketchfabtimeframe'>
            <group name='Object_2' scale={0}>
              <group name='frame_19'>
                <mesh
                  name='Object_4'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['170Ma_0']}
                />
              </group>
            </group>
            <group name='Object_5' scale={0}>
              <group name='frame_18'>
                <mesh
                  name='Object_7'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials['150Ma_0']}
                />
              </group>
            </group>
            <group name='Object_8' scale={0}>
              <group name='frame_17'>
                <mesh
                  name='Object_10'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials['120Ma_0']}
                />
              </group>
            </group>
            <group name='Object_11' scale={0}>
              <group name='frame_16'>
                <mesh
                  name='Object_13'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials['105Ma_0']}
                />
              </group>
            </group>
            <group name='Object_14' scale={0}>
              <group name='frame_15'>
                <mesh
                  name='Object_16'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['90Ma_0']}
                />
              </group>
            </group>
            <group name='Object_17' scale={0}>
              <group name='frame_14'>
                <mesh
                  name='Object_19'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials['65Ma_0']}
                />
              </group>
            </group>
            <group name='Object_20' scale={0}>
              <group name='frame_13'>
                <mesh
                  name='Object_22'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials['50Ma_0']}
                />
              </group>
            </group>
            <group name='Object_23' scale={0}>
              <group name='frame_12'>
                <mesh
                  name='Object_25'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials['35Ma_0']}
                />
              </group>
            </group>
            <group name='Object_26' scale={0}>
              <group name='frame_11'>
                <mesh
                  name='Object_28'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials['20Ma_0']}
                />
              </group>
            </group>
            <group name='Object_29' scale={0}>
              <group name='frame_10'>
                <mesh
                  name='Object_31'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name='Object_32' scale={0}>
              <group name='frame_9'>
                <mesh
                  name='Object_34'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials['20Ma']}
                />
              </group>
            </group>
            <group name='Object_35' scale={0}>
              <group name='frame_8'>
                <mesh
                  name='Object_37'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials['35Ma']}
                />
              </group>
            </group>
            <group name='Object_38' scale={0}>
              <group name='frame_7'>
                <mesh
                  name='Object_40'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials['50Ma']}
                />
              </group>
            </group>
            <group name='Object_41' scale={0}>
              <group name='frame_6'>
                <mesh
                  name='Object_43'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials['65Ma']}
                />
              </group>
            </group>
            <group name='Object_44' scale={0}>
              <group name='frame_5'>
                <mesh
                  name='Object_46'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials['90Ma']}
                />
              </group>
            </group>
            <group name='Object_47' scale={0}>
              <group name='frame_4'>
                <mesh
                  name='Object_49'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials['105Ma']}
                />
              </group>
            </group>
            <group name='Object_50' scale={0}>
              <group name='frame_3'>
                <mesh
                  name='Object_52'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['120Ma']}
                />
              </group>
            </group>
            <group name='Object_53' scale={0}>
              <group name='frame_2'>
                <mesh
                  name='Object_55'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials['150Ma']}
                />
              </group>
            </group>
            <group name='Object_56' scale={0}>
              <group name='frame_1'>
                <mesh
                  name='Object_58'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['170Ma']}
                />
              </group>
            </group>
            <group name='Object_59'>
              <group name='frame_0'>
                <mesh
                  name='Object_61'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials['200Ma']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/paleogeographic_timelapse.glb')

const PaleogeographicTimeLapse = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default PaleogeographicTimeLapse
