
var lbutton = document.querySelector('.start');
var lbutton1 = document.querySelector('.pause');
var lbutton2 = document.querySelector('.continue');
var rbutton = document.querySelector('.clear');

var stimer = document.querySelector('.timer_small');
var btimer = document.querySelector('.timer_big');
var time = stimer.innerHTML;
var arr = time.split('');
var hundred = arr[0];
var dozen = arr[1];
var unit = arr[2];
var time2 = btimer.innerHTML;
var arr2 = time2.split(':');
var hour = arr2[0];
var hour1 = hour.split('');
var hour1_1 = hour1[0];
var hour1_2 = hour1[1];
var minute = arr2[1];
var minute1 = minute.split('');
var minute1_1 = minute1[0];
var minute1_2 = minute1[1];
var second = arr2[2];
var second1 = second.split('');
var second1_1 = second1[0];
var second1_2 = second1[1];


function startTimer() {
  

  function count () {  
      unit++;
      document.querySelector('.start').style.display = 'none';
      document.querySelector('.continue').style.display = 'none';
      document.querySelector('.pause').style.display = 'inline-block';
      if (hundred == ' ') { document.querySelector('.timer_small').innerHTML = '0'+dozen+unit;
      } else { document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit;
       }   
      document.querySelector('.timer_big').innerHTML = '0'+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2; 

      if(unit>9) {
        unit = 0;
        dozen++;
        document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit;      
      } 
      if(dozen>9) {
        dozen = 0;
        hundred++;
        document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit;
      }  
      if(hundred>9) {
        hundred = 0;
        second1_2++;
        document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit; 
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      }
      if(second1_2>9) {
        second1_2 = 0;
        second1_1++;
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      } 
      if(second1_1>5) {
        second1_1 = 0;
        minute1_2++;
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      }
      if(minute1_2>9) {
        minute1_2 = 0;
        minute1_1++;
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      }
      if(minute1_1>5) {
        minute1_1 = 0;
        hour1_2++;
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      }
      if(hour1_2>9) {
        hour1_2 = 0;
        hour1_1++;
        document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
      }
  }

  var k = setInterval(count, 1);    

  function clear () {
  console.log('main');
  document.querySelector('.start').style.display = 'inline-block';
  document.querySelector('.continue').style.display = 'none';
  document.querySelector('.pause').style.display = 'none';
  clearInterval(k);
  hundred = '0';
  dozen = '0';
  unit = '0';
  second1_1 = '0';
  second1_2 = '0';
  minute1_1 = '0';
  minute1_2 = '0';
  hour1_1 = '0';
  hour1_2 = '0';
  document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit;
  document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
  }

  rbutton.addEventListener('click',clear); 

  function pause () {
  console.log('main');
  document.querySelector('.pause').style.display = 'none';
  document.querySelector('.continue').style.display = 'inline-block';
  clearInterval(k);
  document.querySelector('.timer_small').innerHTML = ' '+hundred+dozen+unit;
  if (hour1_1 == ' ') { document.querySelector('.timer_big').innerHTML = '0'+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
  } else { document.querySelector('.timer_big').innerHTML = ' '+hour1_1+hour1_2+':'+minute1_1+minute1_2+':'+second1_1+second1_2;
  }  
  }

  lbutton1.addEventListener('click',pause);
  
  lbutton2.addEventListener('click', startTimer);

}  

lbutton.addEventListener('click',startTimer);


