import * as THREE from "../js/three.module.js"; 

export default function salva2({x,y,z}){
  
    


// Aro principal
var aro = new THREE.TorusGeometry(2, 0.6, 30, 100);
var mat1 = new THREE.MeshLambertMaterial({
    color: 0xEDDD4E, side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(aro, mat1);
//scene.add(mesh1);
mesh1.rotation.x = -1.5708;


// Lineas blancas
var linea = new THREE.TorusGeometry(2, 0.61, 30, 100, 0.5236);
var mat02 = new THREE.MeshLambertMaterial({
    color: 0xffffff
});

// l 1
var mesh2 = new THREE.Mesh(linea, mat02);
//scene.add(mesh2);
mesh2.rotation.x = -1.5708;
mesh2.rotation.z = 0;

// l 2
var mesh3 = new THREE.Mesh(linea, mat02);
//scene.add(mesh3);
mesh3.rotation.x = -1.5708;
mesh3.rotation.z = 1.5708;

// l 3
var mesh4 = new THREE.Mesh(linea, mat02);
//scene.add(mesh4);
mesh4.rotation.x = -1.5708;
mesh4.rotation.z = 3.1416;

// l4
var mesh5 = new THREE.Mesh(linea, mat02);
//scene.add(mesh5);
mesh5.rotation.x = -1.5708;
mesh5.rotation.z = 4.7124;




   const M2 = new THREE.Group();
   M2.add(mesh1,mesh2,mesh3,mesh4,mesh5);
   M2.position.set(x,y,z);

   return M2;
}
