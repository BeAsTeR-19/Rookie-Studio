import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function MacBook() {
  const { scene } = useGLTF('/macbook_ultra_concept.glb')

  return (
    <group position={[0, -0.3, 0]}>
      <primitive object={scene} scale={5.5} rotation={[0.05, -0.3, 0]} />
    </group>
  )
}

function Loader() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #e5e7eb',
        borderTopColor: '#3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
    </div>
  )
}

export default function Laptop3D() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [2.5, 2, 3.5], fov: 30 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={0.3} />
          
          <MacBook />
          
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
