//var particles = document.querySelectorAll(".particle");

//var root = document.querySelector(".particle");

//particles.forEach(element => {
//    element.addEventListener("animationiteration", () => {
//        var random = Math.floor(Math.random() * 500)+50 +'px';
//        root.style.setProperty('--randomFloat1', random);
//        console.log(random);
//    });
//
//});

function setRandom(string, min, max, donvi, name) {
  var particles = document.querySelectorAll(name);
  particles.forEach((par) => {
    par.style.setProperty(
      string,
      Math.floor(Math.random() * (max - min)) + min + donvi
    );

    par.addEventListener("animationiteration", () => {
      par.style.setProperty(
        string,
        Math.floor(Math.random() * (max - min)) + min + donvi
      );
    }); 
  });
}

setRandom("--randomFloat-tx", 10, 90, "vw", ".particle");
setRandom("--randomFloat-size", 7, 17, "vh", ".particle");

