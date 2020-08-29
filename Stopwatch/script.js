var ms=0;
var s=0;
var m=0;
var timer;
var stopwatchEL=document.querySelector('.stopwatch');
var lapContainer=document.querySelector('.laps');
function start()
{
	if(!timer)
	{
		timer=setInterval(run,10) //  here we initialise this will call the given method "run()" timer. the intervsl should be 10 because i want to call 100 times in a second
    }
}
function run()
{
	stopwatchEL.textContent=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s : s)+":"+(ms<10 ? "0"+ms : ms);
	ms++;
	if(ms==100)
	{
		ms=0;
		s++;
	}
	if(s==60)
	{
		s=0;
		m++;
	}
}
function pause()
{
	clearInterval(timer); //No button is button is working after clicking this button because the timer is still having the value 1 so we need to make it false
	timer=false;
}
function stop()
{
	clearInterval(timer);
	timer=false;
	ms=0;
	s=0;
	m=0;
	stopwatchEL.textContent=(m<10 ? "0"+m : m)+":"+(s<10 ? "0"+s : s)+":"+(ms<10 ? "0"+ms : ms);
}
function restart()
{
	stop();
	start();
}
function getTimer()
{
	return stopwatchEL.textContent=(m<10 ? "0"+m : m)+" : "+(s<10 ? "0"+s : s)+":"+(ms<10 ? "0"+ms : ms);
}
function lap()
{
	if(timer)
	{
		var l=document.createElement('li');
		l.innerText=getTimer();
		lapContainer.appendChild(l);
	}
}
function reset()
{
	lapContainer.innerHTML='';
}