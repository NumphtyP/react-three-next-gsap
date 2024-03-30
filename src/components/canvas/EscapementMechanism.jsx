'use client'
import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/swiss_lever_escapement_mechanism.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Oscillating mechanism'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' position={[1.781, 2.663, 1.627]} rotation={[1.559, -0.08, -1.59]}>
          <group name='Root'>
            <group name='Lamp' position={[4.775, -2.179, -10.04]} rotation={[-0.268, 0.602, 1.931]}>
              <group name='Lamp_1' />
            </group>
            <group name='fixations' position={[3.412, -0.165, 2.599]} rotation={[0.017, 0, -0.023]}>
              <mesh
                name='fixations_0'
                castShadow
                receiveShadow
                geometry={nodes.fixations_0.geometry}
                material={materials.fixtures}
              />
            </group>
            <group name='escape_wheel' position={[6.741, -5.666, 0.659]} rotation={[0, 0, -1.698]}>
              <mesh
                name='escape_wheel_0'
                castShadow
                receiveShadow
                geometry={nodes.escape_wheel_0.geometry}
                material={materials.escape_wheel}
              />
            </group>
            <group name='Pallets' position={[3.928, -3.286, -0.202]} rotation={[0.005, -0.004, -0.066]}>
              <mesh
                name='Pallets_0'
                castShadow
                receiveShadow
                geometry={nodes.Pallets_0.geometry}
                material={materials.ruby}
              />
            </group>
            <group name='escapement' position={[3.928, -3.286, -0.202]} rotation={[0.005, -0.004, -0.066]}>
              <mesh
                name='escapement_0'
                castShadow
                receiveShadow
                geometry={nodes.escapement_0.geometry}
                material={materials.escapement}
              />
            </group>
            <group name='Balance_Axle' rotation={[0, 0, 0.001]}>
              <mesh
                name='Balance_Axle_0'
                castShadow
                receiveShadow
                geometry={nodes.Balance_Axle_0.geometry}
                material={materials.axle}
              />
            </group>
            <group name='Impulse_Pin' position={[0.005, -0.006, 1.299]} rotation={[0, 0, 1.572]}>
              <mesh
                name='Impulse_Pin_0'
                castShadow
                receiveShadow
                geometry={nodes.Impulse_Pin_0.geometry}
                material={materials.ruby}
              />
            </group>
            <group name='Balance_Wheel' position={[0.003, -0.003, 1.45]} rotation={[0, 0, 1.588]}>
              <mesh
                name='Balance_Wheel_0'
                castShadow
                receiveShadow
                geometry={nodes.Balance_Wheel_0.geometry}
                material={materials.balance_wheel}
              />
            </group>
            <group name='Hsp0' position={[0.065, -0.083, 1.975]} rotation={[0, 0, Math.PI / 2]} scale={1000}>
              <mesh
                name='Hsp0_0'
                castShadow
                receiveShadow
                geometry={nodes.Hsp0_0.geometry}
                material={materials.hairspring}
                morphTargetDictionary={nodes.Hsp0_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Hsp0_0.morphTargetInfluences}
              />
            </group>
            <group name='Pin1' position={[1.393, -2.25, 0.15]}>
              <mesh
                name='Pin1_0'
                castShadow
                receiveShadow
                geometry={nodes.Pin1_0.geometry}
                material={materials.material}
              />
            </group>
            <group name='Pin2' position={[2.476, -1.038, 0.15]}>
              <mesh
                name='Pin2_0'
                castShadow
                receiveShadow
                geometry={nodes.Pin2_0.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/swiss_lever_escapement_mechanism.glb')

const EscapementMechanism = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default EscapementMechanism
