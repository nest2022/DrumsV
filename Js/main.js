const tomN2 = document.getElementById('modal1');
const open2 = document.getElementById('selector1');

const tomN1 = document.getElementById('modal2');
const open1 = document.getElementById('selector2');

const tomP = document.getElementById('modal3');
const open3 = document.getElementById('selector3');

const redoble = document.getElementById('modal4');
const open4 = document.getElementById('selector4');

const bombo = document.getElementById('modal5');
const open5 = document.getElementById('selector5');

const splash = document.getElementById('modal6');
const open6 = document.getElementById('selector6');

const ride = document.getElementById('modal7');
const open7 = document.getElementById('selector7');

const clash = document.getElementById('modal8');
const open8 = document.getElementById('selector8');

const hithat = document.getElementById('modal9');
const open9 = document.getElementById('selector9');
let isOpen = false; 

open2.addEventListener('mouseenter', () => {
    if (!isOpen) {
        tomN2.showModal(); 
        isOpen = true;
    }
});

open2.addEventListener('mouseleave', () => {
    if (isOpen) {
        tomN2.close(); 
        isOpen = false;
    }
});

open1.addEventListener('mouseenter', () => {
    if (!isOpen) {
        tomN1.showModal(); 
        isOpen = true;
    }
});

open1.addEventListener('mouseleave', () => {
    if (isOpen) {
        tomN1.close(); 
        isOpen = false;
    }
});

open3.addEventListener('mouseenter', () => {
    if (!isOpen) {
        tomP.showModal(); 
        isOpen = true;
    }
});

open3.addEventListener('mouseleave', () => {
    if (isOpen) {
        tomP.close(); 
        isOpen = false;
    }
});

open4.addEventListener('mouseenter', () => {
    if (!isOpen) {
        redoble.showModal(); 
        isOpen = true;
    }
});

open4.addEventListener('mouseleave', () => {
    if (isOpen) {
        redoble.close(); 
        isOpen = false;
    }
});

open5.addEventListener('mouseenter', () => {
    if (!isOpen) {
        bombo.showModal(); 
        isOpen = true;
    }
});

open5.addEventListener('mouseleave', () => {
    if (isOpen) {
        bombo.close(); 
        isOpen = false;
    }
});

open6.addEventListener('mouseenter', () => {
    if (!isOpen) {
        splash.showModal(); 
        isOpen = true;
    }
});

open6.addEventListener('mouseleave', () => {
    if (isOpen) {
        splash.close(); 
        isOpen = false;
    }
});

open7.addEventListener('mouseenter', () => {
    if (!isOpen) {
        ride.showModal(); 
        isOpen = true;
    }
});

open7.addEventListener('mouseleave', () => {
    if (isOpen) {
        ride.close(); 
        isOpen = false;
    }
});

open8.addEventListener('mouseenter', () => {
    if (!isOpen) {
        clash.showModal(); 
        isOpen = true;
    }
});

open8.addEventListener('mouseleave', () => {
    if (isOpen) {
        clash.close(); 
        isOpen = false;
    }
});

open9.addEventListener('mouseenter', () => {
    if (!isOpen) {
        hithat.showModal(); 
        isOpen = true;
    }
});

open9.addEventListener('mouseleave', () => {
    if (isOpen) {
        hithat.close(); 
        isOpen = false;
    }
});

