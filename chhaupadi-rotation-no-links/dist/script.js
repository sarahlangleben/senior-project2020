$(function(){
      var renderer, scene, camera;
      var controls;
      var W, H;
      var cube;
      var particle;


      init();
  
      function init(){
        W = window.innerWidth;
        H = window.innerHeight;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, W/H, .1, 3000);
        camera.position.z = 400;
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })

        renderer.setClearColor(0x010203);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(W,H);
        
        document.getElementById("canvas").appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(  
            camera, 
            renderer.domElement
        );
        controls.maxDistance = 800;
        controls.minDistance = 30;
        controls.target.z = 100;
       
        //first parameter is the camera and second parameter is the canvas or renderer.domElement

        particle = new THREE.Object3D();
        scene.add(particle);

        var geometry = new THREE.SphereGeometry(1, 0);
        var material = new THREE.MeshBasicMaterial();

        for (var i = 0; i < 3000; i++) {
          var mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
          mesh.position.multiplyScalar(90 + (Math.random() * 700));
          mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
          particle.add(mesh);
        }
        
        //person 1
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(100,0,100);
        scene.add(cube);
        
var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(600,10,100);
        scene.add(cube);  

        
var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(600,100,700);
        scene.add(cube); 
        
var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-200,100,-200);
        scene.add(cube); 

        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-200,400,-500);
        scene.add(cube); 
           
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-200,-300,-500);
        scene.add(cube);
         var geometry2 = new 
        
THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-200,-300,-800);
        scene.add(cube);    
        
        //person 2
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-20,200,100);
        scene.add(cube);
        
        //person 3
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-150,90,150);
        scene.add(cube);
        
         //person 3
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-200,0,50);
        scene.add(cube);

           //person 4
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-400,0,200);
        scene.add(cube);
        
         //person 5
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-450,100,100);
        scene.add(cube);
        
        
                 //person 6
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(-650,100,300);
        scene.add(cube);
       
        
        //person 7
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(650,0,100);
        scene.add(cube);
        
                //person 8
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(900,400,-700);
        scene.add(cube);
        
        //person 9
        var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(700,500,100);
        scene.add(cube);
        
var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(50,200,300);
        scene.add(cube);        
        
        
        
     var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(400,700,400);
        scene.add(cube);        
        
        
var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(2,800,100);
        scene.add(cube);        
        
 var geometry2 = new THREE.SphereGeometry(10,10,10);
        var material2 = new THREE.MeshBasicMaterial({color: 0xD92121});
        cube = new THREE.Mesh(geometry2,material2);
        cube.position.set(300,300,500);
        scene.add(cube);   
        
        
        
        //dont touch this lol 
        window.addEventListener("resize", function(){
          var W = window.innerWidth;
          var H = window.innerHeight;
          renderer.setSize(W,H);
          camera.aspect = W/H;
          camera.updateProjectionMatrix();
        })

        requestAnimationFrame(animate);
        renderer.render(scene, camera); 
      }
  
//rotating speed of particles 
      function animate(){
        cube.rotation.x +=.005;
        cube.rotation.y +=.005;
        particle.rotation.y +=.005;
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
      }
      })