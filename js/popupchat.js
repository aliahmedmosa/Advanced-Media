(function($) {
    $(document).ready(function() {
        $(".chatbox").click(function(){
            $(".dropchat").addClass("show");
          });
        
          $(".close").click(function(){
            $(".dropchat").removeClass("show");
          });
    });
})(jQuery);