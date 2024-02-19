let selectLeft=document.querySelector('.left-select');
let selectright=document.querySelector('.right-select');
let mainContainer=document.querySelector('.container-main');
let i=0;
selectLeft.addEventListener('click',()=>{
    mainContainer.scrollBy({
        left:-520,
        behavior: "smooth"
    })
    if(i===0||i===2){
         mainContainer.scrollBy({
             left:1560 ,
             behavior: "smooth"
         })
    }
    i--
    if(i===-1){
        return i=2
    }
    console.log(i)
})
selectright.addEventListener('click',()=>{
    mainContainer.scrollBy({
        left:520 ,
        behavior: "smooth"
    })
    if(i===2){
        mainContainer.scrollBy({
            left:-1560 ,
            behavior: "smooth"
        })
    }
    i++
    console.log(i)
    if(i===3){
       return i=0;
    }
})
