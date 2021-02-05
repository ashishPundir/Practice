// below code takes care of read more and less link behaviour on main page

document.querySelector(".clickMore").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.add("hide");
  document.querySelector(".more").classList.remove("hide");
  var x = window.matchMedia("(max-width: 600px)");
  if (x.matches)
  { // If media query matches
    window.scrollBy(0, 400);
   }
   else
   {

    }


});

document.querySelector(".clickLess").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.remove("hide");
  document.querySelector(".more").classList.add("hide");
});
