import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/baby_in_womb.glb')
  const { actions } = useAnimations(animations, group)
  // type ActionName = 'Animation'
  useEffect(() => {
    actions['Animation'].play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group
                name='tecnologia-png-5_0'
                position={[0.002, -0.024, -0.285]}
                rotation={[1.512, -0.01, -3.054]}
                scale={0.257}
              >
                <mesh
                  name='Object_4'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Materiais.001']}
                />
              </group>
              <group name='Esfera_UV_1' position={[0, 0.134, 0.23]} rotation={[-0.024, 0, 0]} scale={0.598}>
                <mesh
                  name='Object_6'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['Materiais.003']}
                />
              </group>
              <group name='Esfera_UV001_2' position={[0, 0.074, 0.082]} rotation={[-0.484, 0, 0]} scale={0.841}>
                <mesh
                  name='Object_8'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['Materiais.005']}
                />
              </group>
              <group name='Arma����o_43' position={[0, 0.339, -0.028]} rotation={[0.908, 0, 0]} scale={0.267}>
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name='Object_13'
                    geometry={nodes.Object_13.geometry}
                    material={materials.Materiais}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name='Mesh_(2)_42' />
                </group>
              </group>
              <group name='Arma����o001_54' position={[0, 0.339, -0.028]} rotation={[0.908, 0, 0]} scale={0.267}>
                <group name='GLTF_created_1'>
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name='Object_57'
                    geometry={nodes.Object_57.geometry}
                    material={materials['Materiais.002']}
                    skeleton={nodes.Object_57.skeleton}
                  />
                  <group name='C��rculo_53' />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/baby_in_womb.glb')

const Baby = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export default Baby
