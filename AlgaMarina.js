 import * as THREE from "../js/three.module.js";
export default function AlgaMarina({x,y,z} ){


// Geometrias
        var geometry1 = new THREE.CylinderGeometry(0.8,0.8,8,20);
        var material = new THREE.MeshLambertMaterial({color: 0x9BC46C});
        var mesh1 = new THREE.Mesh(geometry1, material);
        //mesh1.position.set(0, 4, 0);

        var geometry2 = new THREE.CylinderGeometry(1,4,1);
        var mesh2 = new THREE.Mesh(geometry2, material);
        mesh2.position.set(1.4, 1.3, 0);
        //geometry2.translate(0,-1.8,0);

        var geometry3 = new THREE.CylinderGeometry(1,3,1);
        var mesh3 = new THREE.Mesh(geometry2, material);
        //mesh3.position.set(-1.4, 1.3, 0);

        //patita1 izq
        
         var geometry4 = new THREE.CylinderGeometry(0.3,0.8,3,20);
        var mesh4 = new THREE.Mesh(geometry4, material);
        mesh4.position.set(-1.5, 3, 0);
        //mesh4.rotation.set(0,0,1);

        //patita2 izq
        var geometry5 = new THREE.CylinderGeometry(0.3,0.8,4.5,20);
        var mesh5 = new THREE.Mesh(geometry5, material);
        mesh5.position.set(-1.8, 6, 0);
       // mesh5.rotation.set(0,0,1);

        //patita3 Der1
        var geometry6 = new THREE.CylinderGeometry(0.3,0.8,4.5,20);
        var mesh6 = new THREE.Mesh(geometry6, material);
        mesh6.position.set(1.8, 2, 0);
        //mesh6.rotation.set(0,3,1);

      //patita Der2
        var geometry7 = new THREE.CylinderGeometry(0.3,0.8,3,20);
        var mesh7 = new THREE.Mesh(geometry7, material);
        mesh7.position.set(1.5, 7, 0);
        //mesh7.rotation.set(0,3,1);


        //bolitas
       var geometry8 = new THREE.SphereGeometry(0.5);
        var material1 = new THREE.MeshLambertMaterial({color: 0xffffff});
        var mesh8 = new THREE.Mesh(geometry8, material1);
        //mesh8.position.set(-3.1, 4, 0);

        var geometry9 = new THREE.SphereGeometry(0.5);
        var mesh9 = new THREE.Mesh(geometry9, material1);
        //mesh9.position.set(-4.1, 7.5, 0);

        var geometry10 = new THREE.SphereGeometry(0.5);
        var mesh10 = new THREE.Mesh(geometry10, material1);
        //mesh10.position.set(3, 8.1, 0);

         var geometry11 = new THREE.SphereGeometry(0.5);
        var mesh11 = new THREE.Mesh(geometry11, material1);
        //mesh11.position.set(4, 3.5, 0);

           //se añaden las geometrias a la escena
        const gr1 = new THREE.Group();
        gr1.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11);
        //scene.add(mesh);
   
    gr1.position.set(x,y,z);
    
    return gr1;
    
    }





