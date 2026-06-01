 import * as THREE from "../js/three.module.js";
export default function Pezcado1({x,y,z} ){ 

 // Geometrias
  // Cuerpo
    const cuerpo = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
         new THREE.MeshBasicMaterial({ color: 0xAD564B })
    );
    //scene.add(cuerpo);

    // Cola
    const cola = new THREE.Mesh(
        new THREE.ConeGeometry(1, 2, 32),
         new THREE.MeshBasicMaterial({ color: 0xAD564B })
    );
    cola.rotation.z = Math.PI / 2;
    cola.position.x = -2;
    //scene.add(cola);

    // Aleta superior
    const aleta1 = new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 1, 16),
         new THREE.MeshBasicMaterial({ color: 0xAD564B })
         );
    aleta1.position.set(0, 1.5, 0);
    //scene.add(aleta1);

    // Aleta inferior (la otra ala)
    const aleta2 = new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 1, 16),
         new THREE.MeshBasicMaterial({ color: 0xAD564B })
        
    );
    aleta2.rotation.x = Math.PI;
    aleta2.position.set(0, -1.5, 0);
    //scene.add(aleta2);

    // Ojo derecho
    const ojo1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    ojo1.position.set(1, 0.3, 1);
    //scene.add(ojo1);

    const pupila1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    pupila1.position.set(1.1, 0.3, 1.2);
    //scene.add(pupila1);

    // Ojo izquierdo (el otro ojo)
    const ojo2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    ojo2.position.set(1, 0.3, -1);
    //scene.add(ojo2);

    const pupila2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    pupila2.position.set(1.1, 0.3, -1.2);
    //scene.add(pupila2);


    const PEPE = new THREE. Group();
    PEPE.add(meshCaja,meshCintaV,meshCintaH,meshEsfera,meshEsfera2,meshEsfera3,meshEsfera4);
    PEPE.position.set(x,y,z);
    
    return PEPE;
    
    }