$(document).ready(function() {
  var $btns = $('.btn').click(function(){
    if(this.id == 'all'){
      $('#basket > div').show();
    } else {
      // 'el' holds the id of the button that was clicked on
      // show everything with the clicked class
      var $el = $('.' + this.id).show();
//hide everything without the clicked class
      $('#basket > div').not($el).hide();
    }
    // remove green coloring on unclicked buttons
    $btns.removeClass('active');
    // add green color to show active button
    $(this).addClass('active');
  })

  $("#acc1").accordion({
    collapsible: true,
    heightStyle: "content"
  })


  $("#submit").click(function() {
    //couldn't get the button style to change
    // $(this).attr('btn-danger','btn-success'),
    $(this).addClass('btn-press'),
    document.getElementById('submit').innerHTML = "Thank You";
  })
})
