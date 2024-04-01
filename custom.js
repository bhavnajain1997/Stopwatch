var startBtn = document.querySelector('.start-btn');
var stopBtn = document.querySelector('.stop-btn');
var clearBtn = document.querySelector('.clear-btn');
var timer = document.querySelector('.timer');
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var seconds = document.querySelector('.seconds');
var count = 0
var sec = 0;
var hrs = 0;
var min = 0;
var number ;
// startBtn.addEventListener('click', function(){
    
//     number = setInterval(() => {
//         var time = new Date()
//         // count ++;
//          //console.log(count)
//          timer.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
//     },100)
    
// })
startBtn.addEventListener('click',function(){
  number = setInterval(()=>{
      
  if(sec < 60){
    sec ++
    // console.log(sec)
    seconds.innerHTML = sec;
  }  
  else if(min < 60){
    min ++
    sec = 0;
    minute.innerHTML = min;
  }
  else if(hrs < 100){
    hrs ++
    sec = 0;
    min = 0;
    hour.innerHTML = hrs;
  }
  
  },1)
})
stopBtn.addEventListener('click',function(){
    clearInterval(number)
})

clearBtn.addEventListener('click',function(){
   timer.innerHTML = "00:00:00";
   
})

