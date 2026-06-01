import * as THREE from "../js/three.module.js"; 

export default function piedras({x,y,z}){
    

//piedra1
var piedra1 = new THREE.DodecahedronGeometry(0.638,1);
var texture = new THREE.TextureLoader().load("./assets/piedra.jpg");
var mat01 = new THREE.MeshLambertMaterial({map: texture});
var mesh01 = new THREE.Mesh(piedra1,mat01);
mesh01.position.set(-0.095,0.523,0.442);
//scene.add(mesh01);
mesh01.castShadow = true; 


//piedra2
var piedra2 = new THREE.DodecahedronGeometry(0.638,1);
var texture = new THREE.TextureLoader().load("./assets/piedra.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh02 = new THREE.Mesh(piedra2,mat02);
mesh02.position.set(-0.970,0.608,-0.063);
//scene.add(mesh02);
mesh02.castShadow = true;



//piedra3
var piedra3 = new THREE.DodecahedronGeometry(0.638,1);
var texture = new THREE.TextureLoader().load("./assets/piedra.jpg");
var mat03 = new THREE.MeshLambertMaterial({map: texture});
var mesh03 = new THREE.Mesh(piedra3,mat03);
mesh03.position.set(0.827,0.463,0.496);
//scene.add(mesh03);
mesh03.castShadow = true;


   const PI = new THREE.Group();
   PI.add(mesh01,mesh02,mesh03);
   PI.position.set(x,y,z);

   return PI;
}

