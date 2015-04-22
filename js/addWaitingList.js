var submitBtns = $("a[data-submit-btn=true]")

submitBtns.on("click", function(e){
  e.preventDefault();

  var email = $(this).closest(".input-group").find("input").val();

  $.ajax({
    method: "POST",
    url: "https://evening-shelf-3541.herokuapp.com/api/waiting_lists",
    data: { "email": email }
  }).done(function(response){
    console.log(response);
    if (response.success) {
      $('#email-success-modal').modal('show');
    } else {
      $('#email-failed-modal').modal('show');
    };
  }).fail(function(response){
    console.log(response);
  })
});
