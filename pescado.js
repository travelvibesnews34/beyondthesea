import * as THREE from "../js/three.module.js"; 

export default function pescado({x,y,z}){
    

// Cuerpo
var cuerpo = new THREE.SphereGeometry(1.8, 32, 32);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(cuerpo, mat01);
//scene.add(mesh01);
mesh01.position.set(0, 2, 0);


// Aletas
// Aleta superior
var aletaSup = new THREE.ConeGeometry(0.8, 0.5, 32);
var mat02 = new THREE.MeshLambertMaterial({
    color: 0xFF4500, side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(aletaSup, mat02);
//scene.add(mesh02);
mesh02.position.set(0, 3.6, 0);
mesh02.rotation.z = -1.5708;

// Aleta izquierda
var aletaIzq = new THREE.ConeGeometry(0.8, 2, 2.9);
var mesh03 = new THREE.Mesh(aletaIzq, mat02);
//scene.add(mesh03);
mesh03.position.set(-2, 2, 0);
mesh03.rotation.z = 90;

// Aleta derecha
var mesh04 = new THREE.Mesh(aletaIzq, mat02);
//scene.add(mesh04);
mesh04.position.set(2, 2, 0);
mesh04.rotation.z = -90;


// Cola
var cola = new THREE.ConeGeometry(1.2, 2, 2);
var mat03 = new THREE.MeshLambertMaterial({
    color: 0xFF4500, side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(cola, mat03);
//scene.add(mesh05);
mesh05.position.set(0, 2, -2.2);
mesh05.rotation.x = -1.5708;


// Ojos
var ojo = new THREE.SphereGeometry(0.4, 16, 16);
var mat04 = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, side: THREE.DoubleSide
});

// Ojo izquierdo
var mesh06 = new THREE.Mesh(ojo, mat04);
//scene.add(mesh06);
mesh06.position.set(-0.7, 2.5, 1.5);

// Ojo derecho
var mesh07 = new THREE.Mesh(ojo, mat04);
//scene.add(mesh07);
mesh07.position.set(0.7, 2.5, 1.5);



// Pupilas
var pupila = new THREE.SphereGeometry(0.2, 16, 16);
var mat05 = new THREE.MeshBasicMaterial({ 
    color: 0x000000, side: THREE.DoubleSide
 });

// Pupila izquierda
var mesh08 = new THREE.Mesh(pupila, mat05);
//scene.add(mesh08);
mesh08.position.set(-0.7, 2.5, 1.8);

// Pupila derecha
var mesh09 = new THREE.Mesh(pupila, mat05);
//scene.add(mesh09);
mesh09.position.set(0.7, 2.5, 1.8);

//Boca
var boca = new THREE.TorusGeometry(0.7, 0.1, 80, 80, 3.1416); 
var mat06 = new THREE.MeshBasicMaterial({ 
    color: 0x000000, side: THREE.DoubleSide 
}); 
var mesh10 = new THREE.Mesh(boca, mat06);
//scene.add(mesh10);
mesh10.position.set(0, 1.8, 1.6); 
mesh10.rotation.x = 3.1416; 
 

   const PE = new THREE.Group();
   PE.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10);
   PE.position.set(x,y,z);

   return PE;
}

