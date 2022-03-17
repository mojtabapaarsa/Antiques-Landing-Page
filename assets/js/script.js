$('.owl-carousel').owlCarousel({
  loop:true,
  
  responsiveClass:true,
  
  responsive:{
      0:{
          items:1,
          stagePadding: 0,
          nav:true,
          margin:20
      },
      600:{
          items:2,
          stagePadding: 0,
          nav:false,
          margin:10
      },
      1000:{
          items:2,
          nav:true,
          loop:false,
          stagePadding: 80,
          margin:30
      } ,
      1220:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 80,
        margin:30
    }
  }
})