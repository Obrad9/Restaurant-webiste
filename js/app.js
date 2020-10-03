const navList = document.querySelector('.nav__list');
const wrap = document.querySelector('.wrap');

function toggle() {
    if(navList.style.transform == 'scaleY(1)') {
        navList.style.transform = 'scaleY(0)';
        wrap.style.opacity = '1';
        // navList.style.display = 'none';
    } else {
        // navList.style.display = 'block';
        navList.style.transform = 'scaleY(1)';
        wrap.style.opacity = '0.4';
    }
}