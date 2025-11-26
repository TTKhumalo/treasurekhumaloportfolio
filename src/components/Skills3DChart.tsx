import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Skill {
  name: string;
  value: number;
  color: string;
}

interface Skills3DChartProps {
  skills: Skill[];
}

const Skills3DChart = ({ skills }: Skills3DChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8b9dc3);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(8, 6, 12);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(10, 10, 10);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    // Grid background
    const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0xcccccc);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Platform base
    const platformGeometry = new THREE.BoxGeometry(14, 0.8, 6);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.7,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -1.6;
    platform.castShadow = true;
    platform.receiveShadow = true;
    scene.add(platform);

    // Create bars
    const barSpacing = 2.8;
    const startX = -((skills.length - 1) * barSpacing) / 2;
    
    barsRef.current = [];

    skills.forEach((skill, index) => {
      const barHeight = (skill.value / 100) * 5;
      const x = startX + index * barSpacing;

      // White cylinder (background)
      const whiteCylinderGeometry = new THREE.CylinderGeometry(0.4, 0.4, 5, 32);
      const whiteCylinderMaterial = new THREE.MeshStandardMaterial({
        color: 0xf5f5f5,
        roughness: 0.2,
        metalness: 0.1,
      });
      const whiteCylinder = new THREE.Mesh(whiteCylinderGeometry, whiteCylinderMaterial);
      whiteCylinder.position.set(x, 0.9, 0);
      whiteCylinder.castShadow = true;
      whiteCylinder.receiveShadow = true;
      scene.add(whiteCylinder);

      // Colored cylinder (skill value)
      const coloredCylinderGeometry = new THREE.CylinderGeometry(0.4, 0.4, barHeight, 32);
      const coloredCylinderMaterial = new THREE.MeshStandardMaterial({
        color: skill.color,
        roughness: 0.3,
        metalness: 0.2,
      });
      const coloredCylinder = new THREE.Mesh(coloredCylinderGeometry, coloredCylinderMaterial);
      coloredCylinder.position.set(x, -1.6 + barHeight / 2 + 0.4, 0);
      coloredCylinder.castShadow = true;
      coloredCylinder.receiveShadow = true;
      scene.add(coloredCylinder);
      
      barsRef.current.push(coloredCylinder);
    });

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        targetRotation.y += deltaX * 0.01;
        targetRotation.x += deltaY * 0.01;
        targetRotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotation.x));
        
        rotationVelocity.x = deltaY * 0.001;
        rotationVelocity.y = deltaX * 0.001;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);

    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Auto-rotation when not dragging
      if (!isDragging) {
        targetRotation.y += 0.003;
        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;
      }

      // Smooth camera rotation
      const currentRotationY = Math.atan2(camera.position.x, camera.position.z);
      const currentRotationX = Math.asin(camera.position.y / Math.sqrt(
        camera.position.x ** 2 + camera.position.y ** 2 + camera.position.z ** 2
      ));

      const newRotationY = currentRotationY + (targetRotation.y - currentRotationY) * 0.1;
      const newRotationX = currentRotationX + (targetRotation.x - currentRotationX) * 0.1;

      const radius = 15;
      camera.position.x = radius * Math.sin(newRotationY) * Math.cos(newRotationX);
      camera.position.y = radius * Math.sin(newRotationX) + 6;
      camera.position.z = radius * Math.cos(newRotationY) * Math.cos(newRotationX);
      camera.lookAt(0, 0, 0);

      // Animate bars (gentle pulse)
      barsRef.current.forEach((bar, index) => {
        const scale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.02;
        bar.scale.set(scale, 1, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [skills]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[600px] rounded-lg overflow-hidden shadow-elegant cursor-grab active:cursor-grabbing"
    />
  );
};

export default Skills3DChart;
