(function() {
  let form = document.getElementById('form');
  form.addEventListener('submit', sendPostData);

  function sendPostData(e) {
    e.preventDefault();

    let name = form.elements['one'];
    let age = form.elements['two'];
    let data = new FormData();
    data.append('name', name.value);
    data.append('age', age.value);

    fetch("server.php", {
      method: "POST",
      body: data
    }).then(res => {
      return res.text();
    }).then(data => {
      let result = document.getElementById('result');
      name.value = '';
      age.value = '';
      result.textContent = data;
    });
  }
})();
