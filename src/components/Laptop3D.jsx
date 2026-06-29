import { Canvas } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function MacBook({ screenUrl, projectName, projectCategory, projectColor }) {
  const { scene } = useGLTF('/macbook_ultra_concept.glb')

  return (
    <group position={[0, -0.3, 0]}>
      <primitive object={scene} scale={5} rotation={[0.05, -0.3, 0]} />
      
      {/* Screen content anchored to the laptop display */}
      <Html
        transform
        occlude
        position={[-0.24, 0.75, 0.08]}
        rotation={[-0.22, 0, 0]}
        scale={0.27}
        style={{
          width: '300px',
          height: '190px',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '6px',
          overflow: 'hidden',
          background: '#000',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}>
          <iframe
            src={screenUrl}
            title={projectName}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </Html>
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

export default function Laptop3D({ 
  screenUrl = 'https://pilotcompasstest.com',
  projectName = 'PilotCompassTest.com',
  projectCategory = 'EdTech / SaaS',
  projectColor = '#0070F3'
}) {
  return (
    <div style={{ width: '100%', height: '550px', position: 'relative' }}>
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
          
          <MacBook
            screenUrl={screenUrl}
            projectName={projectName}
            projectCategory={projectCategory}
            projectColor={projectColor}
          />
          
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
