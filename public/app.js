// // When you click the Save Article button
$(document).on("click", ".saveArticle", function () {
  //   // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/save/" + thisId,
    data: {
      saved: true
    }
  })   // With that done
    .then(
      location.reload(true)
    );
});

$(document).on("click", ".deleteArticle", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/articles/delete/" + thisId,
  }).then(
    location.reload(true)
  )
})

$(document).on("click", "#saveNote", function() {
  event.preventDefault();
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: $("#newNote").val()
    }
  }).then(function(data) {
    console.log(data.note.body);
    $('#noteModal').modal('toggle')
  });
  $("#newNote").val("");
})

$(document).on("click", ".deleteNote", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/notes/delete/" + thisId,
  }).then(function(data) {
    console.log(data.note);
    $('#noteModal').modal('toggle')
  })
})

$(document).on("click", ".addNote", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "GET",
    url: "articles/" + thisId
  })
  .then(function(data) {
    console.log(data);
    if(data.note) {
      $("#noteBody").text(data.note.body);
    }
  })
})
