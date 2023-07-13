window.addEventListener('scroll', function() {
    var fixedMenu = document.querySelector('.fixed-menu');
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;
  
    if (scrollPosition >= viewportHeight) {
      fixedMenu.classList.add('show');
    } else {
      fixedMenu.classList.remove('show');
    }
  });

  const arrayLocations = ['https://da.diceseloaqui.com/',
                          'https://drive.google.com/drive/folders/16y5VHpmNSpiYJ0SS6tC7Vsr7vrMWQzkx',
                          'https://drive.google.com/drive/folders/11WZ_AnTH60KNIO3M8jeagCtOIXNxdxKf',
                          'https://drive.google.com/drive/folders/1MdrNfCMFrDCaQ44XNx7UXXoaTbA0shQm',
                          'https://drive.google.com/drive/folders/1gLrfY0kyarEsHvsZpf62aauL1jJKzoFZ'
                         ];

const elementsPortfolio = document.querySelectorAll(".location");
const optionsMenu = document.querySelectorAll('.option-menu');
const checkHiidenMenu = document.getElementById('showmenu');

elementsPortfolio.forEach((element, index) => {
  element.addEventListener('click', () => {
    window.open(arrayLocations[index], '_blank');
  })
});

optionsMenu.forEach(option => {
  option.addEventListener('click', () =>{
    checkHiidenMenu.checked = false;
  })
});

document.getElementById("download-button").addEventListener("click", function() {
  var link = document.createElement('a');
  link.href = '../resources/CV-PEDRO_DANIEL_GOMEZ_NOVERON.pdf';
  link.download = 'CV-PEDRO_DANIEL_GOMEZ_NOVERON.pdf';
  link.click();
});