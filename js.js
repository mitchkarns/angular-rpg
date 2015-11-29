var att = 1;
var def = 1;
var rcv = 1;
var exp = 0;
var money = 0;
var exp_thresh = 10;
var stam_max = 20;
var stam_cur = 0;
var hp = 100;
var level = 1;
var percent_gain = 25;

function updateExp(e){
	exp += e;
	if (exp >= exp_thresh){
		exp = exp - exp_thresh;
		level += 1;
		exp_thresh = exp_thresh + Math.floor(level * level / 20);
	}
}

function recover(){
	if (stam_cur < stam_max){
		stam_cur = stam_cur + rcv;
		if (stam_cur > stam_max)
			stam_cur = stam_max;
	}
}

function mission1Click(){
	var req_stam = 10 + Math.floor(level * level / 20);
	var p = $(this).children(".percent").text();
	if (req_stam < stam_cur){
		stam_cur = stam_cur - req_stam;
		money += 10;
		if (parseInt(p) < 100){
			updateExp(3);
			var per = parseInt(p.substr(0, p.length - 1)) + 10;
			if (per > 100)
				per = 100;
			$(this).children(".percent").text(per + "%");
		}
	}
}

function shop(){
	var req_money = $(this).children(".price").text();
	if (money >= req_money){
	}
}


function update(){
	recover();
	$("#def").text(def);
	$("#att").text(att);
	$("#exp").text(exp);
	$("#exp_thresh").text(exp_thresh);
	$("#level").text(level);
	$("#stam_cur").text(stam_cur);
	$("#hp").text(hp);
	$("#money").text(money);
}
function setClicks(){
	$(".mission1").click(mission1Click);
}
window.setInterval(update, 100);
setClicks();
