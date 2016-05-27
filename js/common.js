function inHtml(url, targetId)
{
//	event = event || window.event;
	$.ajax({
		type:"get",
		dataType:"html",
		url:url,
		async:false,
		success: function(mag)
		{
			$("#"+targetId).html(mag);
		}
	});
	
}
