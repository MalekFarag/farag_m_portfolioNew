//Gallery Functions
//lightbox





// portfolio switch functions
    const projList = document.querySelectorAll('.projList li'),
          projDivs = document.querySelectorAll('.projView .projInfo');

          function listClick(){
              let itemName = this.classList[1];
              console.log(projDivs);
              projList.forEach(item => item.classList.remove('active'));
              document.querySelector('.' + itemName).classList.add('active');
          }

          function projSwap(){
            listClick;
            let divName = this.classList[1].split('li')[1];
            let projName = '.proj' + divName;

            projDivs.forEach(div => div.classList.remove('view'));

            document.querySelector(projName).classList.add('view');
          }
          projList.forEach( item => item.addEventListener('click', projSwap));