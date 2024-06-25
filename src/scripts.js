// reveal button 1
document.getElementById('reveal-button-1').addEventListener('click', function() {
  var additionalText = document.getElementById('reveal-text-1');
  if (additionalText.classList.contains('hidden')) {
      additionalText.classList.remove('hidden');
      additionalText.classList.add('bg-blue-fade'); // Add the fade class
  }
  this.remove();
});

// reveal button 2
document.getElementById('reveal-button-2').addEventListener('click', function() {
  var additionalText = document.getElementById('reveal-text-2');
  if (additionalText.classList.contains('hidden')) {
      additionalText.classList.remove('hidden');
      additionalText.classList.add('bg-blue-fade'); // Add the fade class
  }
  this.remove();
});

document.getElementById('reveal-button-3').addEventListener('click', function() {
  var additionalText = document.getElementById('reveal-text-3');
  if (additionalText.classList.contains('hidden')) {
      additionalText.classList.remove('hidden');
      additionalText.classList.add('bg-blue-fade'); // Add the fade class
  }
  this.remove();
});

document.getElementById('reveal-button-4').addEventListener('click', function() {
  var additionalText = document.getElementById('reveal-text-4');
  if (additionalText.classList.contains('hidden')) {
      additionalText.classList.remove('hidden');
      additionalText.classList.add('bg-blue-fade'); // Add the fade class
  }
  this.remove();
});
