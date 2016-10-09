var makerURL = "https://maker.ifttt.com/trigger/messageMe/with/key/cdDvnftpuF1GWM-k27C3Ph";

function submit(){
	var title = $("#title").val();
	var msg = $("#msg").val();

	var send = {
		"value1": title,
		"value2": msg,
	}

	$.post(makerURL,send);

	$("#title").val("");
	$("#msg").val("");
}