var $addEntry = document.querySelector('.addEntryBtn');
var $submit = document.querySelector('#submit');
var $modalContainer = document.getElementById('modalContainer');
var $form = document.forms[0];

$addEntry.addEventListener('click', function (event) {
  $modalContainer.className = 'container';
});
var dataObj = {};

$submit.addEventListener('click', function (event) {
  $modalContainer.className = 'hidden';
  dataObj.dayOfWeek = document.getElementById('dayOfWeek').value;
  dataObj.time = document.getElementById('time').value;
  dataObj.textInput = document.getElementById('textInput').value;
  console.log(dataObj);
  event.preventDefault();
});

window.addEventListener('submit', function (event) {

});
