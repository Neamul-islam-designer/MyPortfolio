const nav = document.querySelector('#navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

// document.getElementById('downloadButton').addEventListener('click', function() {
//   // Assuming CV file name is "cv.pdf"
//   var link = document.createElement('a');
//   link.href = 'https://drive.google.com/file/d/1iFXDsf6SSVSVSeBLj_u8hsku-y20tzld/view?usp=sharing';
//   link.download = 'https://drive.google.com/file/d/1iFXDsf6SSVSVSeBLj_u8hsku-y20tzld/view?usp=sharing';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });

