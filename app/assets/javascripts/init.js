(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready


  $(document).on('page:load', function(){
      $('.slider').slider({full_width: true});
    });
})(jQuery); // end of jQuery name space