import React, { FC, useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ThreeDlayout from './ThreeDlayout'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export const MongoModal: FC<any> = () => {
    return (
        <ThreeDlayout FOV={30} wrappedClassName="!h-[150px] !absolute top-[13%]  left-[7%] !w-[150px]">
            <Modal />
        </ThreeDlayout>
    )
}

const Modal = () => {
    const { nodes, materials } = useGLTF('/3d/mongo.glb')
    useFrame((state, delta) => easing.dampC(materials.back.color, "green", 0.25, delta));
    return (
        <>
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={30}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI * 3 / 4}
            />
            <ambientLight intensity={3} />

            <group dispose={null}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
                    <mesh castShadow receiveShadow geometry={nodes.back.geometry} material={materials.back} />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LOGO.geometry}
                        material={materials.logo}
                        position={[-0.142, 0.72, 0.017]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LOGO_1.geometry}
                        material={materials.logo_1}
                        position={[1.481, 0.558, 0.622]}
                    />
                </group>
            </group>
        </>
    )
}

useGLTF.preload('/3d/mongo.glb')