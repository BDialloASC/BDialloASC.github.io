$(document).ready( function(){
	newWord();
});


$("#getWord").click(function(){
	newWord();
})

function newWord(){
	$("#wordoday").text("");
	//Gets a random word
	$.ajax({
		url:"http://randomword.setgetgo.com/get.php",
		success:function(word){
			//add random word to growing list
			$("#wordoday").append("<h1>" +word+"</h1>");
			getdef(word);
		}
	});


}


function getgif(word){
	$("#wordgif").text('');
	$.ajax({
		url:"http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + word,
		success:function(gif){
			console.log(gif["data"][0]["images"]["original"]["url"]);
			$("#wordgif").append("<img src ='" + gif["data"][0]["images"]["original"]["url"] + "'></img>");
			console.log("success");
		}
	});


}


function getdef(word){
	$("#worddef").text(''); 
    //'Accept: application/json'
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://wordsapiv1.p.mashape.com/words/soliloquy", true);
	xhr.setRequestHeader('X-Mashape-Key', 'knQ1lPimxfmshpEdvHUZxF7CWVL9p13wRUvjsnM68Rzx1FOdzB');
	apiurl = "https://wordsapiv1.p.mashape.com/words/soliloquy"
	$.ajax({
		url:apiurl,
		success:function(def){
			console.log(def);
			//$("#worddef").append("<p>" + gif["data"][0]["images"]["original"]["url"] + "</p>");
			//console.log("success");
		}
	});

}