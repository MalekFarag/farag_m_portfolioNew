// Hamburger Menu functions

const nav        = document.querySelector('.headNav'),
      burgerIcon = document.querySelector('.burgerMenu'),
      line1      = document.querySelector('.bl1'),
      line2      = document.querySelector('.bl2'),
      line3      = document.querySelector('.bl3'),
      navItems   = document.querySelectorAll('.navItem'),
      logo       = document.querySelector('.logo');

//Toggle show nav
    //change color of logo + burger

    function toggleNav(){
        nav.classList.toggle('showNav');
        burgerIcon.classList.toggle('moveB');
        //logo.classList.toggle('colorChange');
        line1.classList.toggle('colorChange');
        line1.classList.toggle('rotate1');

        line2.classList.toggle('hide');

        line3.classList.toggle('colorChange');
        line3.classList.toggle('rotate3');

        navItems.forEach( item =>{
            item.classList.toggle('showItem');
        })
    }

    // window.addEventListener('scroll', function(){
    //     var y = window.scrollY;
    //     if(nav.classList.contains('showNav')){
    //         window.scrollTo(y);
    //     }
    // })

    burgerIcon.addEventListener('click', toggleNav);




//scroll-to section