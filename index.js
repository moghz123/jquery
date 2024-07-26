$('.open').on('click',function () {
    let navebar= $('#navbar').outerWidth()
    let leftvalue=$('#navbar').css('left');
    console.log(leftvalue);
    if (leftvalue=='-198.725px') {
        $('.open').animate({left:`${navebar}`},500)
        $('#navbar').animate({left:`0px`},500)
    }
})
$('.close').on('click',function () {
    let navebar= $('#navbar').outerWidth()
    $('#navbar').animate({left:`-${navebar}`},500)
    $('.open').animate({left:`0px`},500)
})
$('.title').click(function () {
    $('.slide-down').not($(this).next()).slideUp(500)
   $(this).next().slideToggle(500)
})

//counter
let d=document.querySelector('.days')
let h=document.querySelector('.hour')
let m=document.querySelector('.min')
let s=document.querySelector('.sec')
let year= new Date().getFullYear();
let theTime=new Date(`january 1 ${year+1} 07:00:00`)
function getDate() {
    const curntDay=new Date()
let diff =theTime-curntDay;
    const day=Math.floor(diff/1000/60/60/24)
    const hour=Math.floor(diff/1000/60/60)%24
    const min=Math.floor(diff/1000/60)%60
    const sec=Math.floor(diff/1000)%60
    d.innerHTML=`<h1>${day}day</h1>`;
    h.innerHTML=`<h1>${hour}hour</h1>`;
    m.innerHTML=`<h1>${min}min</h1>`;
    s.innerHTML=`<h1>${sec}s</h1>`;

}
getDate()

setInterval(getDate, 1000)
//text area
let textArea = document.getElementById('massage')
let count = document.getElementById('count')
let maxLenght =textArea.getAttribute('maxlength')
textArea.oninput=function () {
   count.innerHTML=maxLenght-this.value.length
}