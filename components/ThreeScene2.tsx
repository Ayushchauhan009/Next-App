// Import necessary React components and styles

"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




interface ThreeSceneProps {
    width: number;
    height: number;
  }
  
  const ThreeScene2: React.FC<ThreeSceneProps> = ({ width, height }) => {
    const sceneRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      const controls = new OrbitControls(camera, renderer.domElement);
  
      renderer.setSize(width, height);
      renderer.setClearColor(0xffffff);
  
      const loader = new GLTFLoader();
      loader.load('/MediumPoly.glb', (gltf) => {
        const container = new THREE.Object3D();
        container.scale.set(20, 20, 20);
        container.add(gltf.scene);
  
        // Check for animations and play them if needed
        const animations = gltf.animations;
        if (animations && animations.length) {
          const mixer = new THREE.AnimationMixer(container);
          const action = mixer.clipAction(animations[0]); // Adjust index as needed
          action.play();
  
          // Update the animation in your render loop
          const animate = () => {
            requestAnimationFrame(animate);
            mixer.update(0.01); // Adjust the time delta as needed
            renderer.render(scene, camera);
          };
  
          animate();
        }
  
        scene.add(container);
  
        // Add lights to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1); // Hemisphere light
        hemisphereLight.position.set(0, 20, 0); // Adjust the position as needed
  
        scene.add(ambientLight);
        scene.add(hemisphereLight);
      });
  
      camera.position.set(10, 30, 25);
      camera.lookAt(scene.position);
  
      // Set up controls
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.enableZoom = false;
      // controls.zoomSpeed = 0.5; 
  
      // Render loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Append the renderer to the DOM
      if (sceneRef.current) {
        sceneRef.current.appendChild(renderer.domElement);
        sceneRef.current.classList.add('three-scene-container');
      }
      // Handle window resize
      const handleResize = () => {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        sceneRef.current?.removeChild(renderer.domElement);
      };
      
    }, [width, height]);
  
    return <div className='-mt-6 rounded-[8px] cursor-pointer -ml-2 ' ref={sceneRef} />;
  };
  
  export default ThreeScene2;
  