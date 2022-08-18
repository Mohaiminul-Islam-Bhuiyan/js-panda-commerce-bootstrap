//task 2

const h2Tags = document.getElementsByTagName('h2')
for (const h2 of h2Tags) {
    h2.style.color = 'lightblue';
}

// document.getElementsByTagName('h2').style.color = 'lightblue';


//task 3

// const bagpackSection = document.getElementById('bagpack')
// for (const bagpack of bagpackSection){
//     document.body.style.backgroundColor = "tomato" ;
// }

document.getElementById('bagpack').style.backgroundColor = 'tomato';

//task 4
const cards = document.getElementsByClassName('card');
for (const card of cards){
    card.style.borderRadius = '30px';
}

//task 5
function cnsole(){
    console.log('hi from js');
}

//task 6
const buyButton = document.getElementsByClassName('panda-btn-buy-now')
for (const btn of buyButton){
    btn.addEventListener('click', function(event){
        btn.parentElement.removeChild(event.target);
    })
}

//task 7
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text =  event.target.value;
    const btnSubmit = document.getElementById('btn-submit')
    if (text === 'email'){
        btnSubmit.removeAttribute('disabled');
    }
    else{
        btnSubmit.setAttribute('disabled', true);
    }
})

//task 8
//shoes section
const shoe1 = document.getElementById('shoe-img-1')
shoe1.addEventListener('mouseenter', function(){
    shoe1.src = 'images/shoes/shoe-2.png';
})
shoe1.addEventListener('mouseleave', function(){
    shoe1.src = 'images/shoes/shoe-1.png';
})

const shoe2 = document.getElementById('shoe-img-2')
shoe2.addEventListener('mouseenter', function(){
    shoe2.src = 'images/shoes/shoe-3.png';
})
shoe2.addEventListener('mouseleave', function(){
    shoe2.src = 'images/shoes/shoe-2.png';
})
const shoe3 = document.getElementById('shoe-img-3')
shoe3.addEventListener('mouseenter', function(){
    shoe3.src = 'images/shoes/shoe-1.png';
})
shoe3.addEventListener('mouseleave', function(){
    shoe3.src = 'images/shoes/shoe-3.png';
})

// bagpack section 
const bag1 = document.getElementById('bag-img-1');
bag1.addEventListener('mouseenter', function(){
    bag1.src = 'images/bags/bag-2.png'
})
bag1.addEventListener('mouseleave', function(){
    bag1.src = 'images/bags/bag-1.png'
})

const bag2 = document.getElementById('bag-img-2');
bag2.addEventListener('mouseenter', function(){
    bag2.src = 'images/bags/bag-3.png'
})
bag2.addEventListener('mouseleave', function(){
    bag2.src = 'images/bags/bag-2.png'
})

const bag3 = document.getElementById('bag-img-3');
bag3.addEventListener('mouseenter', function(){
    bag3.src = 'images/bags/bag-1.png'
})
bag3.addEventListener('mouseleave', function(){
    bag3.src = 'images/bags/bag-3.png'
})

//task 9
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = 'lightgray';
})
subscribe.addEventListener('click', function(){
    subscribe.style.backgroundColor = '#fceae8';
})