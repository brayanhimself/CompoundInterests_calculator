document.getElementById('calculate').addEventListener('click', function(){
  const value = parseFloat(document.getElementById('value').value);
  const fee = parseFloat(document.getElementById('fee').value) / 100;
  const time = parseFloat(document.getElementById('time').value);

  const total = value * Math.pow(1 + fee, time);

  document.getElementById('total').textContent = "R$" + total.toFixed(2).replace('.', ',');
})