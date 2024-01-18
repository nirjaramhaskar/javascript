document.getElementById('colorButton').addEventListener('click', function() {
    var currentColor = this.style.backgroundColor;
  
    if (currentColor.toLowerCase() === 'yellow') {
      this.style.backgroundColor = 'blue';
    } else {
      this.style.backgroundColor = 'yellow';
    }
  });
  