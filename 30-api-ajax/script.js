// document.getElementById('get-btn').addEventListener('click', getAjax);

// function getAjax() {
  
//   const xhr = new XMLHttpRequest();

//   console.log(xhr);
  
//   xhr.onload = () => {
//       if(xhr.status === 200) {
//         document.getElementById('response').textContent = xhr.responseText;
//       }
//   }
//   xhr.open('GET', 'text.txt', true);
//   xhr.send();
// }

document.querySelector('.get-json').addEventListener('click', getJson);

function getJson() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(this.status === 200) {
      const res = JSON.parse(this.responseText);
      console.log(res);
      let response = '';

      res.forEach(user => response += `Username: ${user.username}, E-mail: ${user.email}<br>`);
      document.querySelector('.response').innerHTML = response;

      // document.querySelector('.response').textContent = res;
    }
  }
  xhr.open('GET', 'users.json', true);
  xhr.send();
}