if(window.matchMedia("(max-width: 767px)").matches){
    // The viewport is less than 768 pixels wide
    $('#heading').html("Karma is for Desktop")
    $('#subheading').html("...since it uses your webcam. But get a link sent to your email that you can check out later!")    
    $('#submit-button').html("Send Link")    
    $('#p1').css('display', 'none')
    $('#p2').css('padding-top', '20px')
} 
