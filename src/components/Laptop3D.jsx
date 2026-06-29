import { Canvas } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function MacBook({ screenUrl, projectName, projectCategory, projectColor }) {
  const { scene } = useGLTF('/macbook_ultra_concept.glb')

  return (
    <group>
      <primitive object={scene} scale={2.5} rotation={[0, -0.3, 0]} />
      
      {/* Screen content anchored to the laptop display */}
      <Html
        transform
        occlude
        position={[0, 0.42, 0.08]}
        rotation={[-0.15, 0, 0]}
        scale={0.28}
        style={{
          width: '320px',
          height: '200px',
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
          position: 'relative',
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
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            padding: '8px 12px',
          }}>
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: `${projectColor}30`,
              color: projectColor,
              fontWeight: 600,
            }}>
              {projectCategory}
            </span>
            <div style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#fff',
              marginTop: '2px',
              fontFamily: 'system-ui',
            }}>
              {projectName}
            </div>
          </div>
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
          camera={{ position: [2, 1.5, 3], fov: 35 }}
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
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
