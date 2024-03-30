'use client'
import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/stopwatch.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Take 01'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='Root'>
            <group name='Lamp' position={[4.076, 1.005, 5.904]} rotation={[-0.268, 0.602, 1.931]}>
              <group name='Lamp_1' />
            </group>
            <group name='stopwatch' position={[0, -0.152, -0.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh
                name='stopwatch_0'
                castShadow
                receiveShadow
                geometry={nodes.stopwatch_0.geometry}
                material={materials.chrome}
              />
            </group>
            <group name='face' position={[0.002, -0.019, -0.138]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh name='face_0' castShadow receiveShadow geometry={nodes.face_0.geometry} material={materials.face} />
            </group>
            <group name='glass' position={[0, -0.17, -0.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh
                name='glass_0'
                castShadow
                receiveShadow
                geometry={nodes.glass_0.geometry}
                material={materials.glass}
              />
            </group>
            <group name='top_button' position={[0, -0.152, -0.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh
                name='top_button_0'
                castShadow
                receiveShadow
                geometry={nodes.top_button_0.geometry}
                material={materials.chrome}
              />
            </group>
            <group name='stopwatch001' position={[0, -0.152, -0.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh
                name='stopwatch001_0'
                castShadow
                receiveShadow
                geometry={nodes.stopwatch001_0.geometry}
                material={materials.chrome}
              />
            </group>
            <group
              name='Plane'
              position={[0.003, -0.099, -0.145]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.125, 0.017, 0.052]}
            >
              <mesh
                name='Plane_0'
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.material}
              />
            </group>
            <group
              name='Plane002'
              position={[-0.002, -0.032, 0.161]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.057, 0.008, 0.024]}
            >
              <mesh
                name='Plane002_0'
                castShadow
                receiveShadow
                geometry={nodes.Plane002_0.geometry}
                material={materials.black}
              />
            </group>
            <group
              name='Plane001'
              position={[0.003, -0.096, -0.145]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.125, 0.017, 0.052]}
            >
              <mesh
                name='Plane001_0'
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials.black}
              />
            </group>
            <group name='stopwatch002' position={[0.01, -0.152, -0.138]} rotation={[Math.PI / 2, 0, 0]} scale={0.936}>
              <mesh
                name='stopwatch002_0'
                castShadow
                receiveShadow
                geometry={nodes.stopwatch002_0.geometry}
                material={materials.chrome}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/stopwatch.glb')

const StopWatch = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default StopWatch
