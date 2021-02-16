$(".fa-star").click(function()
{
  var i=$(this).index();
  $(".fa-star").each(function(){
    var j=$(this).index();
    if (j<=i)
    {
      $(this).addClass("fas");
    }
    else {
       $(this).removeClass("fas");
    }
  });
});
