import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

function MacBook() {
  const { scene } = useGLTF('/macbook_ultra_concept.glb')
  const groupRef = useRef()
  const originalColors = useRef(new Map())

  useEffect(() => {
    const html = document.documentElement

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const mat = child.material
        if (!originalColors.current.has(child.uuid)) {
          originalColors.current.set(child.uuid, mat.color.clone())
        }
      }
    })

    function updateColors() {
      const isDark = html.classList.contains('dark')
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          const mat = child.material
          const orig = originalColors.current.get(child.uuid)
          if (!orig) return

          const gray = orig.r * 0.299 + orig.g * 0.587 + orig.b * 0.114

          if (isDark) {
            if (gray > 0.7) {
              mat.color.set(new THREE.Color(0.12, 0.12, 0.14))
            } else if (gray > 0.3) {
              mat.color.set(new THREE.Color(0.18, 0.18, 0.2))
            }
          } else {
            mat.color.copy(orig)
          }
          mat.needsUpdate = true
        }
      })
    }

    updateColors()

    const observer = new MutationObserver(updateColors)
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [scene])

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
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
    <div style={{ width: '100%', height: '650px', position: 'relative' }}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [2.5, 2.5, 3.5], fov: 30 }}
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
