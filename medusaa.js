import * as THREE from "../js/three.module.js"; 

export default function medusa({x,y,z}){
    

var sub = new THREE.Group();
//scene.add(sub);


 //cuerp0
 //cabea medza

var geometry = new THREE.SphereGeometry( 10, 32, 32 ); 
var material = new THREE.MeshLambertMaterial({ 
    color:0xCF6BD6,
    transparent:true,
    opacity:0.8
});
var cabeza = new THREE.Mesh(geometry,material);
//scene.add(cabeza);
cabeza.position.set(0,25,0);


// puntos cabeza
var geometry = new THREE.SphereGeometry( 0.7, 32, 32 ); 
var material = new THREE.MeshLambertMaterial({ 
    color:0xE49BE8,
    transparent:2,
    opacity:0.8
});
var p11 = new THREE.Mesh(geometry,material);
//scene.add(p11);
p11.position.set(9.5,29,0);

var p22 = new THREE.Mesh(geometry,material);
//scene.add(p22);
p22.position.set(-9.5,29,0);

var p33 = new THREE.Mesh(geometry,material);
//scene.add(p33);
p33.position.set(6,29,8);

var p44 = new THREE.Mesh(geometry,material);
//scene.add(p44);
p44.position.set(6,29,-7.9);

var p55 = new THREE.Mesh(geometry,material);
//scene.add(p55);
p55.position.set(-6,29,8);

var p66 = new THREE.Mesh(geometry,material);
//scene.add(p66);
p66.position.set(-6,29,-7.9);


// borde medusa
var geometry2 = new THREE.CylinderGeometry( 9, 11, 4, 32, 1, true );
var material2 = new THREE.MeshLambertMaterial({ 
    color:0xBB4AC2,
    transparent:true,
    opacity:0.7,
    side: THREE.DoubleSide
});
var borde = new THREE.Mesh(geometry2,material2);
//scene.add(borde);
borde.position.set(0,18,0);

//tentaculos
var tentaculoGeo = new THREE.CylinderGeometry( 0.8, 0.8, 20, 16 );
var tentaculoMat = new THREE.MeshLambertMaterial({ 
    color:0xCF6BD6,
    transparent:true,
    opacity:0.8
});


//tentaculos medusa

var t1 = new THREE.Mesh(tentaculoGeo, tentaculoMat);
//scene.add(t1);
t1.position.set(-5,10,0);

var t2 = new THREE.Mesh(tentaculoGeo, tentaculoMat);
//scene.add(t2);
t2.position.set(0,10,4);

var t3 = new THREE.Mesh(tentaculoGeo, tentaculoMat);
//scene.add(t3);
t3.position.set(5,10,-4);

var t4 = new THREE.Mesh(tentaculoGeo, tentaculoMat);
//scene.add(t4);
t4.position.set(-3,10,-5);

var t5 = new THREE.Mesh(tentaculoGeo, tentaculoMat);
//scene.add(t5);
t5.position.set(3,10,5);





   const MED = new THREE.Group();
   MED.add(cabeza,p11,p22,p33,p44,p55,p66,borde,t1,t2,t3,t4,t5);
   MED.position.set(x,y,z);

   return MED;
}