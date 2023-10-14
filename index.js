var time=60;
var sc=0;
var hit;

(function first()
{
    let btn=document.querySelector("#btn");
    btn.addEventListener("click",function()
    {
    var playerval=document.querySelector("#name").value;
    sessionStorage.setItem("player",playerval);
    let main=document.querySelector("#main").innerHTML=`<div id="back">
    <div id="panel">
        <div class="elem">
            <h2>Hit</h2>
            <div id="hit" class="box">0</div>
        </div>
        <div class="elem">
            <h2>Timer</h2>
            <div id="timer" class="box">60</div>
        </div>
        <div class="elem">
            <h2>Score</h2>
            <div id="score" class="box">0</div>
        </div>
    </div>
    <div id="pbtm">
    <h1>Waiting For While...<h1>
    </div>`;
    })

    setTimeout(()=>
    {
        makebubble();
        getnewhit();
        game();
        timer();
    },10000)
})()

function score()
{
    sc += 10;
    var score=document.querySelector("#score");
    score.innerHTML=sc;
}

function makebubble()
{
    var c="";
    for(var i=0;i<=215;i++)
    {
        var num=Math.floor(Math.random()*10);
        c += `<div class="bubble">${num}</div>`;
    }

    document.querySelector('#pbtm').innerHTML=c;
}
function timer()
{
    var timer=document.querySelector('#timer');
    var gametimer=setInterval(function()
    {
        if(time>0)
        {
            time--;
            timer.innerHTML=time;
        }
        else{
            var highsc;
            
            var high=localStorage.getItem("Highest");
            var final=document.querySelector("#score").innerHTML;
            // var pname;
            if(final>high)
            {
                localStorage.setItem("Highest",final);
                localStorage.setItem("player",sessionStorage.getItem("player"));
                highsc=localStorage.getItem("Highest");
                // pname=localStorage.getItem("palyer");
            }
            else
            {
                highsc=localStorage.getItem("Highest");
                // pname=localStorage.getItem("palyer");
            }
            // var sco=localStorage.getItem("Highest");
            document.querySelector("#pbtm").innerHTML=`<div class="pro">
            <div>
                <h2 class="gameover">Game Over</h2>
            </div>
            <div class="scoreboard">
                <h2>Highest Score</h2>
                <h2>${localStorage.getItem("player")}</h2>
                <h2>${highsc}</h2>
            </div>
            <div class="scoreboard">
                <h2>Your Score</h2>
            <h3>${sc}</h3>
            </div>
        </div>`;
        }
    },1000)

}

function getnewhit()
{
    hit=document.querySelector("#hit");
    hit.innerHTML=Math.floor(Math.random()*10);
}

function game()
{
    var pbtm=document.querySelector("#pbtm");
    pbtm.addEventListener("click",function(dets)
    {
        var clicknum=Number(dets.target.textContent);
        var hitnum=Number(hit.innerHTML);
        if(clicknum === hitnum)
        {
            score();
            makebubble();
            getnewhit();
        }
    })
}