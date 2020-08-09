var progress = 0;
document.onreadystatechange = function()
{
	if(document.readyState == "interactive")
	{
		var allElement = $("*");
		var length = allElement.length;
		for(var i=0; i<length; i++)
		{
			set_element(allElement[i], length);
		}
	}
}

function set_element(element, totalElement)
{
	var percentage = 100 / totalElement;
	if($(element).length==1)
	{
		$("#Loaderfill").animate({width:progress+percentage+"%"},2,function(){
			if(document.getElementById("Loaderfill").style.width=="100%")
			{
				$(".loader-container").fadeOut(500);
			}
		});
		progress = progress + percentage;
	}
}