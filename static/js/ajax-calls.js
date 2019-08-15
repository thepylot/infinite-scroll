
jQuery(document).on('submit', '#contact-form',function(e){
    e.preventDefault();

    jQuery.ajax({
        type:'POST',
        url:'/',
        data:{
            email:$('#email').val(),
            message:$('#message').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()

        },
        success:function(json){
           document.getElementById("contact-form").reset();
           
          $( "#send" ).addClass( "onclic", 250, validate);
          validate();
          callback();
  

  function validate() {
    setTimeout(function() {
      $( "#send" ).removeClass( "onclic" );
      $( "#send" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#send" ).removeClass( "validate" );
      }, 1250 );
    }            
       },

        error : function(xhr,errmsg,err) {
       jQuery('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
           " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
       console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
   }
    });
});