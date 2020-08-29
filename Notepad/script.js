function changeFont(font)
{
	document.getElementById('content').style.fontFamily=font.value
}
function changeSize(n)
{
	var s=document.getElementById('content');
	s.style.fontSize=n.value+'px';
}
function Bold()
{
	var bol=document.getElementById('content').style.fontWeight;
	if(bol=='normal')
	{
		document.getElementById('content').style.fontWeight='bold';
	}
	else
	{
		document.getElementById('content').style.fontWeight='normal';
	}
}
function Italic()
{
	var ita=document.getElementById('content').style.fontStyle;
	if(ita=='normal')
	{
		document.getElementById('content').style.fontStyle='italic';
	}
	else
	{
		document.getElementById('content').style.fontStyle='normal';
	}
}
function Underline()
{
	var bol=document.getElementById('content').style.textDecoration;
	if(bol!=='underline')
	{
		document.getElementById('content').style.textDecoration='underline';
	}
	else
	{
		document.getElementById('content').style.textDecoration='none';
	}
}
function reset()
{
	document.getElementById('content').style.fontStyle="Normal";
	document.getElementById('content').style.textDecoration="none";
	document.getElementById('content').style.fontWeight="Normal";
}
function clear()
{
	document.getElementById("content ").innerHTML="";
}