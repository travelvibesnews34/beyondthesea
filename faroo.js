import * as THREE from "../js/three.module.js"; 

export default function faro({x,y,z}){
    

var sub = new THREE.Group();
//scene.add(sub);


//base faro


var geometry = new THREE.BoxGeometry( 80, 2, 70 ); 
var material = new THREE.MeshLambertMaterial({color:0xF8C8DC});
var base = new THREE.Mesh(geometry,material);
//scene.add(base);
base.position.set(0,0,0);


//torre
var geometry2 = new THREE.CylinderGeometry( 15, 15, 80, 32 );
var material2 = new THREE.MeshLambertMaterial({color:0xFF9BB3});
var torre = new THREE.Mesh(geometry2,material2);
//scene.add(torre);
torre.position.set(0,42,0);

//arriba
var geometry3 = new THREE.ConeGeometry( 18, 20, 32 );
var material3 = new THREE.MeshLambertMaterial({color:0xFF6F91});
var techo = new THREE.Mesh(geometry3,material3);
//scene.add(techo);
techo.position.set(0,91,0);



//luz faro
var geometry4 = new THREE.SphereGeometry( 6, 32, 32 );
var material4 = new THREE.MeshLambertMaterial({
    color:0xFFF5F8,
    emissive:0xFFD1DC
});
var luz = new THREE.Mesh(geometry4,material4);
//scene.add(luz);
luz.position.set(0,98,0);


//puerta 
var puertaGeo = new THREE.BoxGeometry( 10, 15, 2 );
var puertaMat = new THREE.MeshLambertMaterial({color:0xFFB6C1});
var puerta = new THREE.Mesh(puertaGeo, puertaMat);
//scene.add(puerta);
puerta.position.set(0,7.2,14);


//ventanas
var ventanaGeo = new THREE.BoxGeometry(8,10,1);
var ventanaMat = new THREE.MeshLambertMaterial({color:0xFFFFFF});

// Ventana 1 frente
var ventana1 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana1);
ventana1.position.set(0,30,15);
//2
var ventana11 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana11);
ventana11.position.set(0,50,15);
//3
var ventana12 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana12);
ventana12.position.set(0,70,15);

// Ventana 2 lado derecho
var ventana2 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana2);
ventana2.position.set(15,50,0);

// Ventana 3 lado izquierdo
var ventana3 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana3);
ventana3.position.set(-15,50,10);

// Ventana 4 parte trasera
var ventana4 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana4);
ventana4.position.set(0,70,-15);

var ventana5 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana5);
ventana5.position.set(0,50,-15);

var ventana6 = new THREE.Mesh(ventanaGeo, ventanaMat);
//scene.add(ventana6);
ventana6.position.set(0,30,-15);









   const FAR = new THREE.Group();
   FAR.add(base,techo,torre,luz,puerta,ventana1,ventana11,ventana12,ventana2,ventana3,ventana4,ventana5,ventana6,);
   FAR.position.set(x,y,z);

   return FAR;
}
