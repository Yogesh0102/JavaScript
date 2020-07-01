function showTime()
{
	var date=new Date();
	var hrs=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();
	var session="AM"
	if(hrs==0)
	{
		hrs=12;
	}
	if(hrs>12)
	{
		hrs=hrs-12;
		session="PM";
	}
	if(hrs<10)
	{
		hrs="0"+hrs;
	}
	if(min<10)
	{
		min="0"+min;
	}
	if(sec<10)
	{
		sec="0"+sec;
	}
	var time=hrs + " : " + min+" :  " + sec+" "+session;
	document.getElementById("MyClockDisplay").innerText=time;
	document.getElementById("MyClockDisplay").textContent=time;
	setTimeout(showTime,1000);
}
showTime();
setInterval(showTime,1000);