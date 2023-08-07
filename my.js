function testGs() {
  const url = 'https://script.google.com/macros/s/AKfycbyfrKeL6342nld4LUOAKar0Nd6CLnYfqdMFerC_oOvb2Xf9DfcddLD-vr0bFhOgouv0BQ/exec'
  
  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById('app').textContent = d[0].status;
    })
}

document.getElementById('btn').addEventListener("click", testGs);
