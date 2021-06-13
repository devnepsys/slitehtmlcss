const slides = document.querySelectorAll('.slide')

for(const slide of slides){ /*first way to go through the loop*/
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide)=>{ /*second way to go through the loop*/
        slide.classList.remove('active');
    })
}

