//Selecting hearts' container
const lifeBlock = document.getElementById('life-block');
//Hover effect, paints all hearts from start to the one hovered over included when mouse enters element
document.addEventListener('mouseover', (e)=> {
    const heart = e.target;
    const heartID = getID(heart.id);
    if (heart.classList.contains('life-unit') && !heart.classList.contains('painted')) {
        hoverHeart(heartID);
    }
});

//Hover effect, clears all hearts when exiting

document.addEventListener('mouseout', (e)=> {
    const heart = e.target;
    if (heart.classList.contains('life-unit')) {
        resetHoverHearts();
    }
});


// Paints hearts when clicking a heart and cleans camps when clicking outside the hearts box

document.addEventListener('click', (e)=> {
    const heart = e.target;
    const heartID = getID(heart.id);
    if (heart.classList.contains('life-unit')) {
        resetHearts();
        paintHeart(heartID);
    } else {
        resetHearts();
    }
});


//Paint hearts when clicked ---> Adds painted class for checking later if it has to be cleaned when hovering or not
const paintHeart = (id) => {

    for (let i = 1; i <= id; i++) {
        let heart = document.getElementById(`life-${i}`);
        heart.classList.add('life-full');
        heart.classList.add('painted');
    }
}


// Paint hearts when hover

const hoverHeart = (id) => {

    for (let i = 1; i <= id; i++) {
        let heart = document.getElementById(`life-${i}`);
        heart.classList.add('life-full');
    }
}



//Reset colors when click outside 


const resetHearts = () => {
    for (let i = 0; i < lifeBlock.children.length; i++) {
        lifeBlock.children[i].classList.remove('life-full');
        lifeBlock.children[i].classList.remove('painted');
    }
}


//Reset colors when hovering out

const resetHoverHearts = () => {
    const lifeBlock = document.getElementById('life-block');
    for (let i = 0; i < lifeBlock.children.length; i++) {
        if (!lifeBlock.children[i].classList.contains('painted')) 
            lifeBlock.children[i].classList.remove('life-full');
    }
}

//get ID number from string ---> input "life-1" --> output "1"

const getID = (str) => str.slice(5);