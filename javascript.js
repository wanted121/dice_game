document.querySelector("h1").style.fontSize="5rem";
function refresh()
{
    const n=Math.floor((Math.random()*6)+1);
    const m=Math.floor((Math.random()*6)+1);
    const image1="images/dice"+n+".png";
    const image2="images/dice"+m+".png";
    const avi=document.querySelector(".refesh");
    console.log("n="+n+" m="+m);
    if(n>m)
    {
      //  document.querySelector(".refesh").innerHTML="Player 1 Win";
        avi.innerHTML="Player 1 Win";
        console.log("Player 1 Win");
        document.querySelectorAll("img")[0].setAttribute("src",image1);
        document.querySelectorAll("img")[1].setAttribute("src",image2);
        
    }
    else if(m>n)
    {
      //  document.querySelector(".refesh").innerHTML="Player 2 Win";
        avi.innerHTML="Player 2 Win";
        console.log("Player 2 Win");
        document.querySelectorAll("img")[0].setAttribute("src",image1);
        document.querySelectorAll("img")[1].setAttribute("src",image2);

    }    
    else
    {
        console.log("Draw");
        document.querySelector(".refesh").innerHTML="Match Draw";
        document.querySelectorAll("img")[0].setAttribute("src",image1);
        document.querySelectorAll("img")[1].setAttribute("src",image2);
    }
}