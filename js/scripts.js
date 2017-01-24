$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var accountName = $('#name').val();
    var intialDeposit = $('#init-deposit').val();
    $('#result').text("");
    $("h2").prepend(accountName + "'s ")
    $("#result").append(intialDeposit)
  });

  $("form#change-account").submit(function(event) {
    event.preventDefault();
    var deposit = $("#deposit").val();
    var withdrawl = $("#withdrawl").val();
    var balance = $("#result").val();
    $("#result").text("");
  });
});
