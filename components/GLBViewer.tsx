// // GLBViewer.tsx
// import { Suspense } from 'react';
// import {  useGLTF } from 'drei';
// import { GLTF } from 'three/examples/jsm/Addons.js';
// // import { DeviceOrientationControls } from 'three';

// interface GLBViewerProps {
//   glbFilePath: string;
// }

// const GLBViewer: React.FC<GLBViewerProps> = ({ glbFilePath }) => {
//   const gltf: GLTF | undefined = useGLTF(glbFilePath);

//   if (!gltf) {
//     return null;
//   }

//   // Use the loaded GLTF model for further rendering logic

//   return (
//     <Suspense fallback={null}>
//       {/* Your rendering logic for the loaded GLTF model */}
//       <primitive object={gltf.scene} />
//     </Suspense>
//   );
// };

// export default GLBViewer;
