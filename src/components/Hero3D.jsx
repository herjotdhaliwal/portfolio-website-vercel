import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function FloatingShape() {
  const meshRef = useRef()

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = pointer.y * 0.3 + clock.elapsedTime * 0.1
      meshRef.current.rotation.y = pointer.x * 0.3 + clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#7c3aed"
          wireframe
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div style={{
      position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
      width: '45%', height: '60%', zIndex: 0, pointerEvents: 'none',
    }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#818cf8" />
        <FloatingShape />
      </Canvas>
    </div>
  )
}
