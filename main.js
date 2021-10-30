var $addEntry = document.querySelector('.button');
var $submit = document.querySelector('#submit');
var $modalContainer = document.getElementById('modalContainer');

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'container';
});
var dataObj = {};

$submit.addEventListener('click', function (event) {
  $modalContainer.className = 'hidden';
  dataObj.dayOfWeek = document.getElementById('dayOfWeek').value;
  dataObj.time = document.getElementById('time').value;
  dataObj.textInput = document.getElementById('textInput').value;
  event.preventDefault();
});

window.addEventListener('submit', function (event) {

});
