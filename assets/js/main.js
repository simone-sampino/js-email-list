const endPointUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

fetch(endPointUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
