'use client'

import { useGLTF, Environment } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'

const Lightning = (props) => {
  const { scene } = useGLTF('/models/lightning_event.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

const HomoErectus = (props) => {
  const { scene } = useGLTF('/models/homo_erectus_mandible.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

const HomoHabilis = (props) => {
  const { scene } = useGLTF('/models/homo_habilis_mandible.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

const Paranthropus = (props) => {
  const { scene } = useGLTF('/models/paranthropus_boisei_mandible.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

const Neonate = (props) => {
  const { scene } = useGLTF('/models/gorilla_neonate_skeleton.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

const Skeletons = (props) => {
  const { scene } = useGLTF('/models/primates_skeletons.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))
  return <primitive object={scene} {...props} />
}

export const HomoErectusMandible = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <HomoErectus position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export const ParathropusMandible = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Paranthropus position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export const GorillaNeonate = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Neonate position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export const PrimateSkeletons = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Skeletons position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export const HomoHabilisMandible = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <HomoHabilis position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)

export const LingtningEvent = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />
    <color attach='background' args={['#f0f0f0']} />
    <fog attach='fog' args={['#f0f0f0', 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Lightning position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  </Canvas>
)
