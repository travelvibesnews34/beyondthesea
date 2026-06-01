import * as THREE from "../js/three.module.js"; 

export default function salvavidas({x,y,z}){
    
// Aro principal
var aro = new THREE.TorusGeometry(2, 0.6, 30, 100);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0xff0000, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(aro, mat01);
//scene.add(mesh01);
mesh01.rotation.x = -1.5708;


// Líneas blancas
var linea = new THREE.TorusGeometry(2, 0.61, 30, 100, 0.5236);
var mat02 = new THREE.MeshLambertMaterial({
    color: 0xffffff
});

// línea 1
var mesh02 = new THREE.Mesh(linea, mat02);
//scene.add(mesh02);
mesh02.rotation.x = -1.5708;
mesh02.rotation.z = 0;

// línea 2
var mesh03 = new THREE.Mesh(linea, mat02);
//scene.add(mesh03);
mesh03.rotation.x = -1.5708;
mesh03.rotation.z = 1.5708;

// línea 3
var mesh04 = new THREE.Mesh(linea, mat02);
//scene.add(mesh04);
mesh04.rotation.x = -1.5708;
mesh04.rotation.z = 3.1416;

// línea 4
var mesh05 = new THREE.Mesh(linea, mat02);
//scene.add(mesh05);
mesh05.rotation.x = -1.5708;
mesh05.rotation.z = 4.7124;


   const SA = new THREE.Group();
   SA.add(mesh01,mesh02,mesh03,mesh04,mesh05);
   SA.position.set(x,y,z);

   return SA;
}

