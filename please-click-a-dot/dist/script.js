var container, stats;
var camera, scene, projector, renderer;
var particleMaterial;
var particle;
var objects = [];
init();
animate();

renderer.setClearColor(0x010203);
 
var light = new THREE.HemisphereLight(0x00faff, 0xff00ff, 1);
light.position.set(0, 250, 10);
scene.add(light);
  function init() {
  container = document.createElement('div');
  document.body.appendChild(container);
  var info = document.createElement('div');
  container.appendChild(info);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,
        1, 1000);
    camera.position.z = 900;
    

  //circles start here
 
  
  
    
    
    
  scene = new THREE.Scene();
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 25;
    object.position.y = Math.random() * -300;
    object.position.z = Math.random() * 5; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.cnn.com/2017/07/10/asia/nepal-menstruation-hut-deaths-outrage/index.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 200;
    object.position.y = Math.random() * -300;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.npr.org/sections/goatsandsoda/2016/12/20/506306964/15-year-old-girl-found-dead-in-a-menstrual-hut-in-nepal"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 400;
    object.position.y = Math.random() * 400;
    object.position.z = Math.random() * 400; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.dailymail.co.uk/news/article-5264071/Menstruating-Nepal-Woman-dies-exile-freezing-hut.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  } 
    
   var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 400;
    object.position.y = Math.random() * 100;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://myrepublica.nagariknetwork.com/news/achham-once-again-reports-chhaupadi-death/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }  
    
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 25;
    object.position.y = Math.random() * -300;
    object.position.z = Math.random() * 5; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.independent.co.uk/news/world/asia/nepal-woman-period-death-fire-hut-menstruation-hut-illegal-parbati-bogati-a8760911.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
   var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 25;
    object.position.y = Math.random() * 30;
    object.position.z = Math.random() * 20; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.wateraid.org/us/media/wateraid-saddened-by-death-of-19-year-old-banished-to-a-shed-during-menstruation"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 200;
    object.position.y = Math.random() * 40;
    object.position.z = Math.random() * 300; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.aljazeera.com/news/2019/01/nepal-woman-sons-suffocate-death-banned-menstrual-hut-190111055118784.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * -200;
    object.position.y = Math.random() * 400;
    object.position.z = Math.random() * 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.nytimes.com/2018/06/19/world/asia/nepal-women-menstruation-period.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
     
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * -200;
    object.position.y = Math.random() * 400;
    object.position.z = Math.random() * 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://english.khabarhub.com/2019/02/58987/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }  
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 300;
    object.position.y = Math.random() * 400;
    object.position.z = Math.random() * 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://english.khabarhub.com/2019/02/58987/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }  
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 100;
    object.position.y = Math.random() * -600;
    object.position.z = Math.random() * 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.nytimes.com/2018/06/19/world/asia/nepal-women-menstruation-period.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * -900;
    object.position.y = Math.random() * 200;
    object.position.z = Math.random() * 800; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://thehimalayantimes.com/nepal/15-girls-women-died-in-chhausheds-in-13-yrs/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
 
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 200;
    object.position.y = Math.random() * -400;
    object.position.z = Math.random() * 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://thediplomat.com/2018/01/nepals-deadly-chhaupadi-custom/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
    
 var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 600;
    object.position.y = Math.random() * 800;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.news.com.au/lifestyle/real-life/teen-girl-dies-in-menstruation-hut-in-achham-district-in-nepal/news-story/9be0b382f479880fa6c246fc860f67f3"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
    
       
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * -300;
    object.position.y = Math.random() * 100;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://kathmandupost.com/national/2019/03/22/women-are-still-dying-after-being-sent-to-menstruation-huts-but-no-one-is-filing-complaints"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
     
    
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 25;
    object.position.y = Math.random() * 800;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://kathmandupost.com/national/2019/12/06/police-arrest-brother-in-law-of-parbati-budha-who-died-in-a-menstruation-hut-in-achham"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }   
    
    
    
    
    
    
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = 200;
    object.position.y = 200;
    object.position.z = 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.buzzfeednews.com/article/rosebuchanan/a-teenager-died-in-a-cyclone-after-she-was-segregated-from?bfsource=relatedmanual"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = 200;
    object.position.y = 50;
    object.position.z = 400; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://edition.cnn.com/2019/01/10/health/menstrual-hut-death-nepal-intl/index.html"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = 0;
    object.position.y = 50;
    object.position.z = 400; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.teenvogue.com/story/a-nepali-teen-on-her-period-died-after-being-banished-to-a-hut"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
 var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = 300;
    object.position.y = 50;
    object.position.z = 400; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://en.wikipedia.org/wiki/Chhaupadi"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
 
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = -90;
    object.position.y = 50;
    object.position.z = 600; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.theguardian.com/global-development/video/2016/apr/01/menstruating-nepalese-women-confined-to-a-cowshed-video"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = -300;
    object.position.y = -200;
    object.position.z = 200; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.reuters.com/article/us-nepal-women-rights-trfn/eight-in-10-girls-in-western-nepal-forced-to-sleep-outside-during-periods-idUSKBN1YE00B"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }
  
  var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 400;
    object.position.y = Math.random() * 100;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6287853/"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }  
    
    
    var geometry = new THREE.SphereGeometry(10, 10, 10);
  for (var i = 0; i < 1; i++) {
    var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      color: 0xD92121,
      opacity: 1000
    }));
    object.position.x = Math.random() * 400;
    object.position.y = Math.random() * 100;
    object.position.z = Math.random() * 500; //POSITION? RANDOMIZE?
    console.log(object);
    switch (i) {
      case 0:
        object.userData = {
          URL: "https://www.researchgate.net/profile/Chun_Bae_Kim/publication/281310480_Chhaupadi_Culture_and_Reproductive_Health_of_Women_in_Nepal/links/59928b6c458515a8a24bd46a/Chhaupadi-Culture-and-Reproductive-Health-of-Women-in-Nepal.pdf"
        };
        break;
    }
    scene.add(object);
    objects.push(object);
  }    
  //circles end here


  
  projector = new THREE.Projector();
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  //
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 -
    1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
  projector.unprojectVector(vector, camera);
  var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position)
    .normalize());
  var intersects = raycaster.intersectObjects(objects);
  if (intersects.length > 0) {
    window.open(intersects[0].object.userData.URL);
  }
}
function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  renderer.render(scene, camera);
}


 particle = new THREE.Object3D();
        scene.add(particle);
        var geometry = new THREE.SphereGeometry(1, 0);
        var material = new THREE.MeshBasicMaterial();
         for (var i = 0; i < 5000; i++) {
          var mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
          mesh.position.multiplyScalar(90 + (Math.random() * 700));
          mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
          particle.add(mesh);
        }