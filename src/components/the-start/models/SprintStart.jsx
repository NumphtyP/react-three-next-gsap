import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { easing } from 'maath'

export function SprintStart(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/idle_to_sprint.glb')
  const { ref, actions, names } = useAnimations(animations)
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(4)
  // type ActionName = 'Armature|mixamo.com|Layer0'

  // Change cursor on hover-state
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])

  useFrame((state, delta) => {
    // Animate the selection halo
    easing.damp3(halo.current.scale, hovered ? 1.15 : 1, 0.2, delta)
    easing.dampC(halo.current.material.color, hovered ? 'hotpink' : 'aquamarine', 0.2, delta)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name='Beta_Joints'
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name='Beta_Surface'
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/idle_to_sprint.glb')
