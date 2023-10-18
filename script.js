function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleGmail(){
  const gmailaddress = document.querySelector(".gmail-address");
  gmailaddress.classList.toggle("open")

  const gmail = document.querySelector(".gmail");
  gmail.classList.toggle("open")

  const underline = document.querySelector(".gmail-underline");
  underline.classList.toggle("open")
}

function toggleFacebook(){
  const gmailaddress = document.querySelector(".facebook-address");
  gmailaddress.classList.toggle("open")

  const gmail = document.querySelector(".facebook");
  gmail.classList.toggle("open")

  const underline = document.querySelector(".facebook-underline");
  underline.classList.toggle("open")
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
  