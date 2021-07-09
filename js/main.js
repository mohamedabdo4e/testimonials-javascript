const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imageBorder = document.querySelector('.image-border');
const headingBorder = document.querySelector('.heading-border');
const pragraphBorder = document.querySelector('.pragraph-border');
let current = 0;

let imgArr = [1,2,3,4,5];
let nameArr = ['john','SANDY','AMY','TYRELL','WANDA']
let pragraphArr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
                    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'\t anything embarrassing hidden in the middle of text.',
                    'Lorem Ipsum has been the industry\'\s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                  ]

let contentAll = (n)=>{
        imageBorder.src = `img/test${imgArr[n]}.jpg`;
        headingBorder.textContent = nameArr[n];
        pragraphBorder.textContent = pragraphArr[n];

}

let startSlide = ()=>{
        contentAll(0);
}

let slideRight = ()=>{
    contentAll(current+1);
    current++;
}

let slideLeft = ()=>{
    contentAll(current-1);
    current--;
}     


arrowRight.addEventListener('click',function(){
    if(current === imgArr.length-1){
        current = -1;
   }
   slideRight();
});
arrowLeft.addEventListener('click',function(){
    if(current === 0){
        current = imgArr.length;
   }
   slideLeft();
})




startSlide();













