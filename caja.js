import * as THREE from "../js/three.module.js"; 

export default function caja({x,y,z}){
    

//caja
var caja = new THREE.BoxGeometry(1.352,1.362,1.405);
var texture = new THREE.TextureLoader().load("./assets/madera.jpg");
var mat01 = new THREE.MeshLambertMaterial({map: texture});
var mesh01 = new THREE.Mesh(caja,mat01);
mesh01.position.set(0.000,0.947,0.000);
//scene.add(mesh01);
mesh01.castShadow = true; 


//tapa de arriba 
var tapaa = new THREE.BoxGeometry(1.452,0.269,1.552);
var texture = new THREE.TextureLoader().load("./assets/madera2.jpeg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh02 = new THREE.Mesh(tapaa,mat02);
mesh02.position.set(0.000,1.700,0.000);
//scene.add(mesh02);
mesh02.castShadow = true; 



//tapa de abajo
var tapab = new THREE.BoxGeometry(1.452,0.269,1.552);
var texture = new THREE.TextureLoader().load("./assets/madera2.jpeg");
var mat03 = new THREE.MeshLambertMaterial({map: texture});
var mesh03 = new THREE.Mesh(tapab,mat03);
mesh03.position.set(0.000,0.284,0.000);
//scene.add(mesh03);
mesh03.castShadow = true; 

   const CA = new THREE.Group();
   CA.add(mesh01,mesh02,mesh03);
   CA.position.set(x,y,z);

   return CA;
}

