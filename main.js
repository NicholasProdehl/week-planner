var $addEntry = document.querySelector('.addEntryBtn');
var $submit = document.querySelector('#submit');
var $modalPage = document.querySelector('.modal-page');

$addEntry.addEventListener('click', function (event) {
  $modalPage.className = 'modal-page';

});
