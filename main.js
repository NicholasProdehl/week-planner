var $addEntry = document.querySelector('.addEntryBtn');
var $submit = document.querySelector('#submit');
var $modalContainer = document.getElementById('modalContainer');

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'container';
});

$submit.addEventListener('click', function (event) {
  $modalContainer.className = 'hidden';
});
