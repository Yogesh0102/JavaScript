var alarmSound=new Audio();
alarmSound.src='clock/alarm.wav';
var alarmTimer;
function setAlarm(button)
{
	var ms=document.getElementById('alarmTime').valueAsNumber; // it gives milliseconds
	if(isNaN(ms))
	{          
		//if date is not mentioned properly
		alert('Invalid Date');
		return;
	}
	var alarm=new Date(ms);
	var alarmTime=new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
	//find diff between current and given alarmtime
	var differenceInMs=alarmTime.getTime()-(new Date()).getTime();
	if(differenceInMs<0)
	{
		alert('specified time is already passed');
		return;
	}
	alarmTimer=setTimeout(initAlarm, differenceInMs);//it is a method which should call after some seconds
	button.innerText='Cancel Alarm';
	button.setAttribute('onclick','cancelAlarm(this);');
};
function cancelAlarm(button)
{
	button.innerText='Set Alarm';
	button.setAttribute('onclick','setAlarm(this);')
	clearTimeout(alarmTimer);
};
function initAlarm()
{
	alarmSound.play()
	document.getElementById('alarmOptions').style.display=''; //need to show that all options
	//when the alarm is on these buttons will be show on the screen
}
function stopAlarm() 
{
	alarmSound.pause();
	alarmSound.currentTime=0;
	document.getElementById('alarmOptions').style.display='none'; //when alarm stops then button will hide
	cancelAlarm(document.getElementById('alarmButton'));
}
function snooze()
{
	stopAlarm();
	setTimeout(initAlarm,36000);
}