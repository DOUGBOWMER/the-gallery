import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Bench = (props) => {
    let bench, texture;
    
    const [ref] = useBox(() => ({
        type: "static",
        args: [5.5, 2.5, 0.01],
        position: [0, 0, 0],
        // rotation: [-Math.PI /2 , 0, -Math.PI /8]
     }))

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/SpecialBench2/scene.gltf", draco())

    // texture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/SpecialBench/textures/Scene_-_Root_baseColor2.jpg"), []);
    // texture.flipY=false;
    
    return (  

            <group ref={ref}>
              <group
                scale={[0.08, 0.08, 0.08]} 
                rotation={[-Math.PI /2 , 0, -Math.PI /8]}
                position={[-6, 0, 2]}
              >
                <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>
                <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_2.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_3.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_4.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_5.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_6.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_7.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_8.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_9.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_10.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>
              </group>  
            </group>  
    );
}

export default Bench;