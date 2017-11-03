var siz = 6 ;
var colors = rand_colors(siz) ;

var squares = document.getElementsByClassName("square") ;
var ans = colors[rand_no()] ;
var msgDisplay = document.getElementById("msg") ;
document.getElementById("rgb").textContent = ans ;
var head = document.querySelector(".head") ;
for(var i=0;i<colors.length;i++)
{
	squares[i].style.background = colors[i] ;

	squares[i].addEventListener("click" , function(){
		if(this.style.background === ans) 
			{ msgDisplay.textContent = "Correct" ;
				new_colorB.textContent = "Play Again" ;
			  rightanswer() ;

			}
		else {
		 	this.style.background = "#232323" ;
		 	msgDisplay.textContent = "Nope" ;
		 }
	});
}

var new_colorB = document.querySelector(".newcolors") ;

new_colorB.addEventListener("click" , function(){
	new_colorB.textContent = "New Colors" ;
	colors = rand_colors(siz) ;
	 ans = colors[rand_no()] ;
	document.getElementById("rgb").textContent = ans ;
	for(var i=0;i<squares.length;i++) 
		{
			if(siz==3 && i>=3) squares[i].style.background = "#232323" ;
			else squares[i].style.background = colors[i] ;
		}

	head.style.background = "steelblue" ;
	msgDisplay.textContent = "" ;
})

var easyb = document.getElementById("easy") ;
var hardb = document.getElementById("hard") ;

easyb.addEventListener("click" , function(){
	siz = 3 ;
	this.classList.add("selected") ;
	hardb.classList.remove("selected") ;
	for(var q=3;q<squares.length;q++)
		squares[q].style.background = "#232323" ;
	utility() ;
}) ;

hardb.addEventListener("click" , function(){
	siz = 6 ;
	this.classList.add("selected") ;
	easyb.classList.remove("selected") ;
	utility();
}) ;

function utility()
{
	new_colorB.textContent = "New Colors" ;
	colors = rand_colors(siz) ;
	 ans = colors[rand_no()] ;
	document.getElementById("rgb").textContent = ans ;
	for(var i=0;i<colors.length;i++) 
		squares[i].style.background = colors[i] ;
	head.style.background = "steelblue" ;
	msgDisplay.textContent = "" ;
}


function rightanswer()
{
	for(var j=0;j<squares.length;j++)
	{
		squares[j].style.background = ans ;
	}
	document.querySelector(".head").style.background = ans ;
}

function rand_no()
{
	return ( Math.floor( Math.random()*colors.length ) ) ;
}

function rand_colors(si)
{
	var arr=[] ;
	for(var k=0;k<si;k++)
	{
			arr.push(rand_color()) ;
	}
	return arr ;
}

function rand_color()
{
	var r = Math.floor(Math.random()*256) ;
	var g = Math.floor(Math.random()*256) ;
	var b = Math.floor(Math.random()*256) ;
	return ( "rgb(" +r+ ", " +g+ ", " +b+ ")" ) ;
}