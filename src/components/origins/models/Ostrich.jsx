'use client'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/ostrich.glb')
  const { actions } = useAnimations(animations, group)
  // type ActionName = 'GltfAnimation 0'
  useEffect(() => {
    actions['GltfAnimation 0'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='GLTF_created_0'>
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  name='Object_7'
                  geometry={nodes.Object_7.geometry}
                  material={materials.CH_NPC_MOB_Ostrich_A01_MI_HAY}
                  skeleton={nodes.Object_7.skeleton}
                />
                <group name='0000_AN_NPC_MNT_Ostrich_54'>
                  <group name='0000_AN_NPC_MNT_Ostrich_55' />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ostrich.glb')

const Ostrich = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default Ostrich
