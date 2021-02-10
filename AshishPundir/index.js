// below code takes care of read more and less link behaviour on main page

document.querySelector(".clickMore").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.add("hide");
  document.querySelector(".more").classList.remove("hide");
  var x = window.matchMedia("only screen and (max-width: 600px)");
  if (x.matches)
  { // If media query matches
    document.querySelector(".mainPage").style.paddingTop= "0px";

   }
   else
   {

    }


});

document.querySelector(".clickLess").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.remove("hide");
  document.querySelector(".more").classList.add("hide");
  var x = window.matchMedia("only screen and (max-width: 600px)");
  if (x.matches)
  { // If media query matches
    document.querySelector(".mainPage").style.paddingTop= "20vh";

   }
   else
   {

    }
});


document.querySelector("#bgButton").addEventListener("click",function()
{
  var element = document.body;
  element.classList.toggle("bright");

  var links = document.querySelectorAll("a");
  for(var i=0; i<links.length; i++)
  {
    links[i].classList.toggle("bright");
  }

});
