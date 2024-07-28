import React, { FC, useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ThreeDlayout from './ThreeDlayout'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'

export const ReactJSModals: FC<any> = () => {
    return (
        <ThreeDlayout FOV={15} wrappedClassName="!h-[150px] !absolute top-[2%] right-[55%] !w-[150px]">
            <Modal />
        </ThreeDlayout>
    )
}

const Modal = () => {
    const { nodes, materials } = useGLTF('/3d/react.glb')
    const groupRef = useRef<THREE.Group>(null)
    useFrame((state, delta) => easing.dampC(materials["Material.001"]?.color, "#0ae3ff", 0.25, delta));

    return (
        <>
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={30}
            />
            <ambientLight intensity={1} />

            <group
                ref={groupRef}
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes?.Sphere?.geometry}
                    material={materials['Material.001']}
                    position={[0, 0.011, -0.188]}
                    scale={0.05}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes?.Torus002?.geometry}
                    material={materials['Material.001']}
                    position={[0, 0.011, -0.185]}
                    rotation={[-Math.PI / 2, 1.043, -1.981]}
                    scale={0.266}
                />
            </group>
        </>
    )
}

useGLTF.preload('/3d/react.glb')