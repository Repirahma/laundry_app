document.getElementById('hitung').addEventListener('click', function() {
  const kg = document.getElementById('kg').value;
  const jenis = document.getElementById('jenis').value;
  let hargaPerKg;

  if (jenis === 'kering') {
    hargaPerKg = 5000; // 5rb/kg
  } else if (jenis === 'setrika') {
    hargaPerKg = 10000; // 10rb/kg
  }

  const totalHarga = kg * hargaPerKg;
  document.getElementById('total').textContent = totalHarga;

  // Menyimpan riwayat transaksi
  saveHistory(kg, jenis, totalHarga);
});

function saveHistory(kg, jenis, total) {
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const transaction = {
    kg,
    jenis,
    total
  };

  history.push(transaction);
  localStorage.setItem('history', JSON.stringify(history));
  displayHistory();
}

function displayHistory() {
  const historyList = document.getElementById('history-list');
  const history = JSON.parse(localStorage.getItem('history')) || [];
  
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.kg} Kg - ${item.jenis === 'kering' ? 'Cuci Kering' : 'Cuci Setrika'} - ${item.total} IDR`;
    historyList.appendChild(li);
  });
}

// Menampilkan riwayat transaksi saat aplikasi dimuat
displayHistory();
