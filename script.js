const heart = document.getElementById('life-1');
// document.addEventListener('mouseover', (e)=> {
//     let cor = e.target;
//     console.log(cor);
//     if (cor.classList.contains('life-unit')) {
//         cor.classList.toggle('life-full');
//     }
//     // heart.classList.toggle('life-full');
// });

// document.addEventListener('mouseout', (e)=> {
//     let cor = e.target;
//     console.log(cor);
//     if (cor.classList.contains('life-unit')) {
//         cor.classList.toggle('life-full');
//     }
//     // heart.classList.toggle('life-full');
// });

document.addEventListener('click', (e)=> {
    const heart = e.target;
    // console.log(heart);
    const heartID = getID(heart.id);
    // console.log(heartID);
    if (heart.classList.contains('life-unit')) {
        // console.log('yes');
        resetHearts();
        paintHeart(heartID);
    } else {
        resetHearts();
    }
});


//Paint hearts when clicked
const paintHeart = (id) => {
    // console.log(`life-${id}`);
    let heart = document.getElementById(`life-${id}`);
    // console.log(heart);
    for (let i = 1; i <= id; i++) {
        let heart = document.getElementById(`life-${i}`);
        console.log();
        heart.classList.add('life-full');
    }
}


//Reset colors when click outside
const resetHearts = () => {
    const lifeBlock = document.getElementById('life-block');
    for (let i = 0; i < lifeBlock.children.length; i++) {
        lifeBlock.children[i].classList.remove('life-full');
    }
}



//get ID number from string

const getID = (str) => str.slice(5);