function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


let currentPage = location.href;
let page = ["#main","#about", "#project", "#contact"];
// listen for changes
setInterval(function()
{
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        
        // do your thing..
    }
}, 500);

function upArrow(){
  var stringindex;
  var elementindex;
  for( elementindex=0 ; elementindex<page.length; elementindex++ ){
    stringindex = currentPage.indexOf(page[elementindex]);
    if(stringindex >= 0){
      break;
    }
  }
  if(stringindex != -1 && elementindex>0){
    var newpage = currentPage.replace(page[elementindex], page[elementindex-1]);
    location.href= newpage;
  }
}

function downArrow(){
  var stringindex = currentPage.indexOf(page[0]);
  
  var elementindex;
  for( elementindex=0 ; elementindex<page.length; elementindex++ ){
    stringindex = currentPage.indexOf(page[elementindex]);
    if(stringindex >= 0){
      break;
    }
  }
  if(stringindex != -1 && elementindex<page.length-1){
    newpage = currentPage.replace(page[elementindex], page[elementindex+1]);
    location.href= newpage;
  }else{
    newpage = currentPage.concat("/");
    newpage = newpage.concat(page[1]);
    location.href= newpage;
  }
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
  