function showCarousel() {
  // Toggle the visibility of the first carousel
 /*  $('.first-owl-carousel').slideToggle({
  
  }
    
    
  ); */
  $('.first-owl-carousel').owlCarousel({
    loop: true,
    items: 12,
    nav: false,
    autoplay: false,
    
    responsiveBaseElement: "body",
    responsive: {
      0: {
        items: 6,
       },
      600: {
        items: 6,
     
      },
      1000: {
        items: 8,
     
      }
    }
  });
}

$(document).ready(function() {

 
// Initialize Owl Carousels
var $secondCarousel = $('.second-owl-carousel');

$secondCarousel.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
 rtl:true,
  autoplayTimeout: 4000,
  responsiveBaseElement: "body",
  responsive: {
    0: {
      items: 1 ,// Display one item on phone screens
     rtl:true,
      
    },
    768: {
      items: 2 ,
      rtl:true,
   
      // Display two items on larger screens
    },
    992: {
      items: 3 ,
      rtl:true,
   
    // Display three items on even larger screens
    }
  }
});



});


//when I click on the logo-1 the page called page1-content doesnt show ,can you help
  $(document).ready(function () {
    $('#ic').on('click', function () {
      $('.image-container').hide();  
 
      $(".bigjuly").hide();
      $(".i_bigjuly").show();
$("#page1-content").show();
 
  
  $(".i_bigjuly").animate({
 
  left: '220px',
  top:'200px',
  
  height: '300px',
  width: '300px'
},1000); 

      /*  var pageToShow = $(this).data('page'); */
     /*  $('.new-page-content').removeClass('visible'); */
   /*    $('#' + pageToShow + '-content').addClass('visible'); */
      /* $('.image-container').hide(); */
    });

    $('.back-btn').on('click', function () {
      $('.new-page-content').removeClass('visible');
      $('.image-container').show();
      $(".bigjuly").show();
      $(".i_bigjuly").hide();
    });
  });

  $(document).ready(function () {
    $('.image-wrapper').on('click', function () {
      var imageText = $(this).find('.image-text-i');
      $('.image-text-i').not(imageText).removeClass('show-text-i');
      imageText.toggleClass('show-text-i');
 
    });
  }); 


  $(document).ready(function() {
 
 

    let owl = $('.second-owl-carousel');  



 
 
 
 








    $('.second-owl-carousel').on('click', '.carousel-image', function () {
      var pageToShow = $(this).data('page');
      $('.image-container').hide();
      $('#' + pageToShow).addClass('show');
      $(".bigjuly").hide();
    });

    $('.back-btn').on('click', function () {
      $('.carousel-item-content').removeClass('show');
      $('.image-container').show();
      $(".bigjuly").show();
    });



     $(".item-link").click(function(){ 
     })

     $(".seromroghani").click(function(){ 
 
        owl.trigger("to.owl.carousel",[0,200,true]);
     
 

      });
      
     


      $(".creamoxidan").click(function(){ 
       
        owl.trigger("to.owl.carousel",[1,200,true]);
      
       });
       
       $(".item-link").click(function(){
         
       })

       $(".poodrdekolore").click(function(){
        
             
        owl.trigger("to.owl.carousel",[2,200,true]);
      
       });
       $(".item-link").click(function(){ 
       })


       $(".variasion").click(function(){
        
            
        owl.trigger("to.owl.carousel",[3,200,true]);
       });
       $(".item-link").click(function(){ 
       })


       $(".eyebrow").click(function(){
           
        owl.trigger("to.owl.carousel",[4,200,true]);
       
        });

       $(".rangemo").click(function(){
        
              
        owl.trigger("to.owl.carousel",[5,200,true]);
       });
       $(".item-link").click(function(){ 
       })

 

       $(".serommo").click(function(){
       
             
        owl.trigger("to.owl.carousel",[6,200,true]);
       });
       $(".item-link").click(function(){ 
       })

       $(".losion").click(function(){
       
               
        owl.trigger("to.owl.carousel",[7,200,true]);
       });
       $(".item-link").click(function(){ 
       })


       $(".spray").click(function(){
         
               
        owl.trigger("to.owl.carousel",[8,200,true]);
       });
       $(".item-link").click(function(){ 
       })


       $(".argan").click(function(){
         
              
        owl.trigger("to.owl.carousel",[9,200,true]);
       });
       $(".item-link").click(function(){ 
       })

       $(".spray2").click(function(){
     
             
        owl.trigger("to.owl.carousel",[10,200,true]);
       });
       $(".item-link").click(function(){ 
       })
  });
 
 