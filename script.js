function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

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
  