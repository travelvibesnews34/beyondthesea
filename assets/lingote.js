import * as THREE from "../js/three.module.js"; 

export default function lingote({x,y,z}){
    

//Base 
var base = new THREE.BoxGeometry(5.5, 1, 2)
var texture = new THREE.TextureLoader().load("./assets/oro.jpeg");
var mat01 = new THREE.MeshLambertMaterial({map: texture});
var mesh01 = new THREE.Mesh(base,mat01);
mesh01.position.set(0, 1, 0);
//scene.add(mesh01);
mesh01.castShadow = true;
mesh01.rotation.y= -1.5708;

   const LIN = new THREE.Group();
   LIN.add(mesh01);
   LIN.position.set(x,y,z);
   
   return LIN;
}




