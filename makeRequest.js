var makerURL = "https://maker.ifttt.com/trigger/reportIssue/with/key/cdDvnftpuF1GWM-k27C3Ph";

function submit(){
	var title = $("#title").val();
	var issue = $("#issue").val();

	var send = {
		"value1": title,
		"value2": issue,
	}

	$.post(makerURL,send);;

	$("#title").val("");
	$("#issue").val("");
}
