'use client';

import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ShaderMaterial, Vector2, OrthographicCamera } from 'three'

const MeshGradientMaterial = new ShaderMaterial({
  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new Vector2() }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float u_time;
    uniform vec2 u_resolution;
    varying vec2 vUv;

    vec3 colorA = vec3(1.00, 0.65, 0.50); // Peach
    vec3 colorB = vec3(0.90, 0.10, 0.30); // Red
    vec3 colorC = vec3(1.00, 0.85, 0.40); // Yellow
    vec3 colorD = vec3(0.30, 0.70, 0.70); // Teal

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 distortedUV = uv + 0.1 * vec2(sin(u_time * 0.1 + uv.x * 5.0), cos(u_time * 0.1 + uv.y * 5.0));
      
      vec3 color = mix(
        mix(colorA, colorB, distortedUV.x),
        mix(colorC, colorD, distortedUV.y),
        sin(u_time * 0.1) * 0.5 + 0.5
      );
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
})

function MeshGradient() {
  const materialRef = useRef<ShaderMaterial>(MeshGradientMaterial)
  const { size } = useThree()

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.getElapsedTime()
      materialRef.current.uniforms.u_resolution.value.set(size.width, size.height)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={materialRef} {...MeshGradientMaterial} />
    </mesh>
  )
}

const Background: React.FC = () => {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}>
        <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
          <MeshGradient />
        </Canvas>
      </div>
    )
  }

export default Background
