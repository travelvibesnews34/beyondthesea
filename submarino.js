import * as THREE from "../js/three.module.js"; 

export default function submarino({x,y,z}){
    

var sub = new THREE.Group();
//scene.add(sub);


//cuerpo
var cuerpo = new THREE.CapsuleGeometry(2.632,4.632,2.383);
var mat01 = new THREE.MeshLambertMaterial({
    color:0x426DF5, side:THREE.DoubleSide, 
});

var mesh01 = new THREE.Mesh(cuerpo,mat01);
//sub.add(mesh01);
mesh01.position.set(0.000,1.920,0.000);
mesh01.rotation.z= -1.5708;


//ventanas
var ventana = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh02 = new THREE.Mesh(ventana,mat02);
mesh02.position.set(1.680,2.431,-1.669);
//sub.add(mesh02);
mesh02.castShadow = true; 

var ventana2 = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh03 = new THREE.Mesh(ventana2,mat02);
mesh03.position.set(-0.20,2.431,-1.669);
//sub.add(mesh03);
mesh03.castShadow = true;

var ventana3 = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh04 = new THREE.Mesh(ventana3,mat02);
mesh04.position.set(-2.100,2.431,-1.669);
//sub.add(mesh04);
mesh04.castShadow = true;

var ventana4 = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh05 = new THREE.Mesh(ventana4,mat02);
mesh05.position.set(1.680,2.431,1.669);
//sub.add(mesh05);
mesh05.castShadow = true;

var ventana4 = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh06 = new THREE.Mesh(ventana4,mat02);
mesh06.position.set(-0.20,2.431,1.669);
//sub.add(mesh06);
mesh06.castShadow = true;


var ventana5 = new THREE.TetrahedronGeometry(1, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh07 = new THREE.Mesh(ventana5,mat02);
mesh07.position.set(-2.100,2.431,1.669);
//sub.add(mesh07);
mesh07.castShadow = true;


//ventana de enfrente
var ventanae = new THREE.TetrahedronGeometry(1.5, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat02 = new THREE.MeshLambertMaterial({map: texture});
var mesh08 = new THREE.Mesh(ventanae,mat02);
mesh08.position.set(4.150,2.080,0.022);
//sub.add(mesh08);
mesh08.castShadow = true;
mesh08.rotation.y= -1.5708;


//cuadro de arriba
var cuadro = new THREE.BoxGeometry(1.472,1.000,3.370);
var mat03 = new THREE.MeshLambertMaterial({
    color:0xFFFF03, side:THREE.DoubleSide, 
});

var mesh09 = new THREE.Mesh(cuadro,mat03);
//sub.add(mesh09);
mesh09.position.set(0.226,4.522,0.040);
mesh09.rotation.y= -1.5708;


//periscopio vertical
var periscopiov = new THREE.BoxGeometry(0.541,1.915,0.522);
var mat04 = new THREE.MeshLambertMaterial({
    color:0x878787, side:THREE.DoubleSide, 
});

var mesh10 = new THREE.Mesh(periscopiov,mat04);
//sub.add(mesh10);
mesh10.position.set(0.000,5.851,0.040);


//periscopio horizontal
var periscopioh = new THREE.BoxGeometry(0.537,1.000,0.556);
var mat05 = new THREE.MeshLambertMaterial({
    color:0xFFFF03, side:THREE.DoubleSide, 
});

var mesh11 = new THREE.Mesh(periscopioh,mat05);
//sub.add(mesh11);
mesh11.position.set(0.230,6.536,0.040);
mesh11.rotation.z= -1.5708;


//lente
var lente = new THREE.TetrahedronGeometry(0.2, 20)
var texture = new THREE.TextureLoader().load("./assets/vidrio.jpg");
var mat06 = new THREE.MeshLambertMaterial({map: texture});
var mesh12 = new THREE.Mesh(lente,mat06);
mesh12.position.set(0.650,6.519,0.040);
//sub.add(mesh12);
mesh12.castShadow = true;
mesh12.rotation.y= -1.5708;


//parte de atrás cola
var cola1 = new THREE.BoxGeometry(0.860,0.596,1.163);
var mat06 = new THREE.MeshLambertMaterial({
    color:0x878787, side:THREE.DoubleSide, 
});

var mesh13 = new THREE.Mesh(cola1,mat06);
//sub.add(mesh13);
mesh13.position.set(-5.100,1.852,0.000);
mesh13.rotation.z= -1.5708;

var cola2 = new THREE.BoxGeometry(0.434,0.353,0.594);
var mat07 = new THREE.MeshLambertMaterial({
    color:0xFFFF03, side:THREE.DoubleSide, 
});

var mesh14 = new THREE.Mesh(cola2,mat07);
//sub.add(mesh14);
mesh14.position.set(-5.700,1.852,0.000);
mesh14.rotation.y= -1.5708;

var cola3 = new THREE.BoxGeometry(0.428,0.353,0.938);
var mat08 = new THREE.MeshLambertMaterial({
    color:0xFFFF03, side:THREE.DoubleSide, 
});

var mesh15 = new THREE.Mesh(cola3,mat08);
//sub.add(mesh15);
mesh15.position.set(-6.100,1.852,0.000);
mesh15.rotation.x= -1.5708;


sub.rotation.y = -1.5708;





   const SUB = new THREE.Group();
   SUB.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15);
   SUB.position.set(x,y,z);

   return SUB;
}

