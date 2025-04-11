"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Object3D, Vector3 } from "three";

// Definición de tipos para las propiedades de las partículas
interface ParticleProps {
  position: [number, number, number];
  color: string;
  size: number;
  speed: [number, number, number];
}

// Componente que representa un punto flotante
const Particle = ({ position, color, size, speed }: ParticleProps) => {
  const ref = useRef<Object3D>(null!);
  const [offset] = useState<number>(() => Math.random() * 1000);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + offset;

    if (ref.current) {
      ref.current.position.x = position[0] + Math.sin(t * speed[0]) * 2;
      ref.current.position.y = position[1] + Math.cos(t * speed[1]) * 2;
      ref.current.position.z = position[2] + Math.sin(t * speed[2]) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

// Propiedades para el componente que genera múltiples partículas
interface ParticleCloudProps {
  count?: number;
}

// Componente que genera múltiples partículas
const ParticleCloud = ({ count = 100 }: ParticleCloudProps) => {
  const particles = [];

  // Colores de la marca
  const colors = [
    "#FF6725", // naranja
    "#FFCE4A", // amarillo
    "#FF9A8B", // rosa claro
    "#4AA8FF", // azul claro
    "#A3E635", // verde lima
    "#D946EF", // magenta
    "#F43F5E", // rosa
    "#8B5CF6", // púrpura
    "#EC4899", // rosa fuerte
    "#3B82F6", // azul
    "#10B981", // esmeralda
    "#EF4444", // rojo
    "#F97316", // naranja
    "#6366F1", // índigo
    "#8D8D8D", // gris
  ];

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 40;
    const z = (Math.random() - 0.5) * 5;

    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 0.05; // Tamaño fijo pequeño para todos los puntos
    const speed: [number, number, number] = [
      Math.random() * 0.1 + 0.05, // Velocidad más lenta para movimiento sutil
      Math.random() * 0.1 + 0.05,
      Math.random() * 0.05 + 0.02,
    ];

    particles.push(
      <Particle
        key={i}
        position={[x, y, z]}
        color={color}
        size={size}
        speed={speed}
      />
    );
  }

  return <>{particles}</>;
};

// Propiedades para el componente principal
interface AnimatedBackground3DProps {
  children: ReactNode;
}

// Componente principal del fondo animado
const AnimatedBackground3D = ({ children }: AnimatedBackground3DProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Solo renderizamos el canvas en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isMounted && (
        <div
          className="absolute inset-0 -z-10"
          style={{ height: "100%", minHeight: "100vh" }}
        >
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ParticleCloud count={80} />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
      )}
      {children}
    </div>
  );
};

export default AnimatedBackground3D;

// Nota: Para usar este componente, necesitas instalar:
// npm install three @react-three/fiber
