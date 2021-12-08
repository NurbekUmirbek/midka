$("#animation1").animate({
    marginLeft: "5px",
    fontSize: "1.2em",
    
 })
 
 $(".header").animate(
     {
        
         width:215
         
     }, 3000
 )

 $(".aside_div1").mouseenter(
    function(){
      $(this).find(".aside_div1_a").animate({marginLeft:'20px',  fontSize: "1.5em"},'slow', )
    });
  $(".aside_div1").mouseleave(
    function() {
      $(this).find(".aside_div1_a").animate({marginLeft:'0px', fontSize: "1em"},'slow')
    });
