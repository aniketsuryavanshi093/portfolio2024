"use client"
import { Html } from '@react-three/drei';
import React from 'react';
import { Spinner } from '@nextui-org/react';

const CanvasLoader = () => (
    <Html>
        <Spinner size="sm" />
    </Html>
);

export default CanvasLoader;
