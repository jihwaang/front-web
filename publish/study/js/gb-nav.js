// hide and show global nav depending on scroll

var scrollTop = 0;
const navBar = document.querySelector('.header');
const subNavBar = document.querySelector('.sub-header');
const bottomNavBar = document.querySelector('.gb-bottom-nav');
const menuBtn = document.querySelector('#menuBtn');
const topTitle = document.querySelector('.top-title');
const topCategoryTitle = document.querySelector('.top-category-title');

window.addEventListener('scroll', () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(currentScrollTop > scrollTop){
        // navBar.style.top = '-60px';
        // subNavBar.style.zIndex = '1';
        // subNavBar.style.top = '0';
        subNavBar.style.top = '-60px';
        subNavBar.style.borderBottom = '0';
        subNavBar.style.zIndex = '0';
        bottomNavBar.style.bottom = '-60px';

        if(topTitle !== null)
            topTitle.style.top = '60px';

        if(topCategoryTitle !== null)
            topCategoryTitle.style.top = '60px';
    }else{
        navBar.style.top = '0';
        subNavBar.style.top = '60px';
        subNavBar.style.zIndex = '1';
        bottomNavBar.style.bottom = '0';

        if(topTitle !== null)
            topTitle.style.top = '100px';

        if(topCategoryTitle !== null)
            topCategoryTitle.style.top = '100px';

    }
    
    if(currentScrollTop == 0) {
        subNavBar.style.borderBottom = '1px solid #949494';
    }
    scrollTop = currentScrollTop;
});
//

// on menuBtn Click, adjust z-index 
menuBtn.addEventListener('click', () => {
    
    if(topTitle !== null && topTitle !== undefined){
        let main = document.querySelector('main');
        if(topTitle.style.zIndex !== '0'){
            topTitle.style.transition = '';
            topTitle.style.zIndex = '0';
            main.style.zIndex = '-1';
        }else {
            topTitle.style.transition = 'all 0.7s ease';
            topTitle.style.zIndex = '1';
            main.removeAttribute('style');
            //style.removeProperty('z-index');
        }
    }

    // adjust global bottom nav bar z-index
    if(bottomNavBar.style.zIndex != '-1'){
        bottomNavBar.style.zIndex = '-1'
    }else{
        bottomNavBar.style.zIndex = '1';
    }
});
//

