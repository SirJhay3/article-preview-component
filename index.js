const share = document.querySelector('.share');
let isClicked = false;


function handleClick(e) {
    // Get the elements
    const holder = e.currentTarget;
    const arrow = e.target;
    const details = holder.closest('.details');
    const person = details.firstElementChild;
    const socials = person.nextElementSibling

    // check for the window width to apply the required style
    if (window.innerWidth < 1023) {
        smallScreen();
    } else {
        bigScreen();
    }

    // function for screens below 1024px
    function smallScreen() {
        if (isClicked) {
            isClicked = false;
            person.style.visibility = 'visible';
            socials.style.visibility = 'hidden';
            details.style.backgroundColor = 'white';
            holder.style.backgroundColor = 'var(--Light-Grayish-Blue)';
            arrow.style.color = 'var(--Desaturated-Dark-Blue)';
        } else {
            isClicked = true;
            person.style.visibility = 'hidden';
            socials.style.visibility = 'visible';
            details.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            holder.style.backgroundColor = 'var(--Grayish-Blue)';
            arrow.style.color = 'white';
            
        }
    }

    // function for screens above 1024px
    function bigScreen() {
        if (isClicked) {
            isClicked = false;
            socials.style.visibility = 'hidden';
            holder.style.backgroundColor = 'var(--Light-Grayish-Blue)';
            arrow.style.color = 'var(--Desaturated-Dark-Blue)';
            holder.style.transition = 'all .6s'
            socials.style.transition = 'all .3s';
            
        } else {
            isClicked = true;
            socials.style.visibility = 'visible';
            socials.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            socials.style.borderRadius = '10px';
            holder.style.backgroundColor = 'var(--Grayish-Blue)';
            arrow.style.color = 'white';
            holder.style.transition = 'all .6s';
            socials.style.transition = 'all .3s';
            
        }
    }
    
    function handleResize () {
        if (isClicked && window.innerWidth > 1023) {
            details.style.backgroundColor = 'unset';
            person.style.visibility = 'visible';
            socials.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            socials.style.borderRadius = '10px';
        }
        if(isClicked && window.innerWidth < 1023) {
            details.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            person.style.visibility = 'hidden';
            holder.style.transition = 'none';
            socials.style.transition = 'none';
        }
    }

    // handle window resize
    window.addEventListener('resize', handleResize);
}
// event listeners
share.addEventListener('click', handleClick)