// DOM
const ulEl = document.getElementById("email-list");

const endPointUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

// fetch con ciclo for per creare 10 email
for (let i = 0; i < 10; i++) {
  fetch(endPointUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const liEl = document.createElement("li");
      console.log(liEl);

      liEl.innerText = data.response;
      ulEl.appendChild(liEl);
    });
}
