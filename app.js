

$(document).ready(function(){
  $(".card").click(handleCardClick);
})

function handleCardClick(){
  $(".card").addClass("open disabled");
}
