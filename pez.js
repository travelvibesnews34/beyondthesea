import * as THREE from "../js/three.module.js"; 

export default function pez({x,y,z}){
    
// GRUPO DEL PEZ
var pez = new THREE.Group();
//scene.add(pez);

//  CUERPO
var cuerpo = new THREE.SphereGeometry(2, 32, 32);
var mat01 = new THREE.MeshLambertMaterial({ color: 0xFF2900 });
var mesh01 = new THREE.Mesh(cuerpo, mat01);
mesh01.scale.set(1.5, 1, 1);
mesh01.position.set(0, 2, 0);
//pez.add(mesh01);

//  PICOS
var picoGeo = new THREE.BoxGeometry(0.5, 3, 3);
var mat02 = new THREE.MeshLambertMaterial({ color: 0xF6FF00 });

var mesh02 = new THREE.Mesh(picoGeo, mat02);
mesh02.position.set(-0.8, 2, 0);
//pez.add(mesh02);

var mesh03 = new THREE.Mesh(picoGeo, mat02);
mesh03.position.set(0.8, 2, 0);
//pez.add(mesh03);

//  COLA
var cola = new THREE.BoxGeometry(1.5, 2, 0.3);
var mat03 = new THREE.MeshLambertMaterial({ color: 0xF6FF00 });

var mesh04 = new THREE.Mesh(cola, mat03);
mesh04.position.set(-3, 2, 0);
//pez.add(mesh04);

//  ALETA SUPERIOR
var aletaSup = new THREE.SphereGeometry(0.7, 16, 16);
var mesh05 = new THREE.Mesh(aletaSup, mat03);
mesh05.scale.set(1, 0.5, 1);
mesh05.position.set(0, 3.9, 0);
//pez.add(mesh05);

//  ALETAS LATERALES
var aletaSide = new THREE.SphereGeometry(0.6, 16, 16);

var mesh06 = new THREE.Mesh(aletaSide, mat03);
mesh06.scale.set(1, 0.5, 3);
mesh06.position.set(0.5, 2, 1.5);
//pez.add(mesh06);

var mesh07 = new THREE.Mesh(aletaSide, mat03);
mesh07.scale.set(1, 0.5, 3);
mesh07.position.set(0.5, 2, -1.5);
//pez.add(mesh07);

//  OJOS
var ojo = new THREE.SphereGeometry(0.5, 16, 16);
var mat04 = new THREE.MeshBasicMaterial({ color: 0xffffff });

var mesh08 = new THREE.Mesh(ojo, mat04);
mesh08.position.set(2, 2.5, 0.9);
//pez.add(mesh08);

var mesh09 = new THREE.Mesh(ojo, mat04);
mesh09.position.set(2, 2.5, -0.9);
//pez.add(mesh09);

// PUPILAS
var pupila = new THREE.SphereGeometry(0.2, 16, 16);
var mat05 = new THREE.MeshBasicMaterial({ color: 0x000000 });

var mesh10 = new THREE.Mesh(pupila, mat05);
mesh10.position.set(2.45, 2.5, 0.9);
//pez.add(mesh10);

var mesh11 = new THREE.Mesh(pupila, mat05);
mesh11.position.set(2.45, 2.5, -0.9);
//pez.add(mesh11);

// BOCA
var boca = new THREE.TorusGeometry(0.3, 0.08, 20, 50);
var mat06 = new THREE.MeshBasicMaterial({ color: 0x000000 });

var mesh12 = new THREE.Mesh(boca, mat06);
mesh12.scale.set(1, 0.6, 0.6);
mesh12.position.set(3, 1.9, 0);
mesh12.rotation.y = Math.PI / 2;
//pez.add(mesh12);


pez.rotation.y = -1.5708;



   const PEZ = new THREE.Group();
   PEZ.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12);
   PEZ.position.set(x,y,z);

   return PEZ;
}

