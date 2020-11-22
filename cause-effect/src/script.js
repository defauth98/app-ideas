const app = document.querySelector("#app");

const peoples = [
  {
    name: "Daniel Ribeiro Vassão Neto",
    smallName: "Daniel Ribeiro",
    street: "Adolfo Tognnet",
    city: "Pariquera-Açu",
    state: "São Paulo",
    country: "Brasil",
    telephone: "+55 (13)99754-7340",
    birthday: "24/03",
  },
  {
    name: "Patricia Franco Cavalheiro",
    smallName: "Patricia Franco",
    street: "Rua Principal",
    city: "Londrina",
    state: "Paraíba",
    country: "Brasil",
    telephone: "+55 (14)7326-3482",
    birthday: "23/06",
  },
  {
    name: "Adruzilo Estêvão Gonçalves",
    smallName: "Adruzilo Estêvão",
    street: "Rua São Jorge",
    city: "Bento Gonçaves",
    state: "Rio Grande do sul",
    country: "Brasil",
    telephone: "+55 (96)3293-7808",
    birthday: "23/04",
  },
  {
    name: "Dioclene Nogueira Juventino",
    smallName: "Dioclene Nogueira",
    street: "Rua Vinte E Dois",
    city: "São Lourenço da Mata",
    state: "Alagoas",
    country: "Brazil",
    telephone: "+55 (83)5444-0496",
    birthday: "31/12",
  },
  {
    name: "Evelise Pinto Almeida",
    smallName: "Evelise Pinto",
    street: "Rua Piauí",
    city: "Passos",
    state: "Santa Catarina",
    country: "Brazil",
    telephone: "+55 (35)7244-2160",
    birthday: "27/01",
  },
  {
    name: "Isaías Viana Nogueira",
    smallName: "Isaías Viana",
    street: "Rua Santa Maria",
    city: "Umuarama",
    state: "São Paulo",
    country: "Brazil",
    telephone: "+55 (90)0907-6292",
    birthday: "11/02",
  },
  {
    name: "Lauro Alves Sales da Cunha",
    smallName: "Lauro Alves",
    street: "Avenida Brasil",
    city: "Gravataí",
    state: "Amazonas",
    country: "Brazil",
    telephone: "+55 (53)4667-9224",
    birthday: "30/04",
  },
  {
    name: "Deondina Castro Dias",
    smallName: "Deondina Castro",
    street: "Rua Três",
    city: "Rondonópolis",
    state: "Distrito Federal",
    country: "Brazil",
    telephone: "+55 (12)6512-4324",
    birthday: "08/01",
  },
];

peoples.map((people) => {
  const smallNameContainer = document.createElement("div");
  const smallname = document.createElement("p");
  const icon = document.createElement("i");
  const peopleContainer = document.createElement("div");

  const peopleName = document.createElement("p");
  const peopleStreet = document.createElement("p");
  const peopleCity = document.createElement("p");
  const peopleState = document.createElement("p");
  const peopleCountry = document.createElement("p");
  const peopleTelephone = document.createElement("p");
  const peopleBirthday = document.createElement("p");

  const name = document.createElement("p");
  const street = document.createElement("p");
  const city = document.createElement("p");
  const state = document.createElement("p");
  const country = document.createElement("p");
  const telephone = document.createElement("p");
  const birthday = document.createElement("p");

  const nameWrapper = document.createElement("div");
  const streetWrapper = document.createElement("div");
  const cityWrapper = document.createElement("div");
  const stateWrapper = document.createElement("div");
  const countryWrapper = document.createElement("div");
  const telephoneWrapper = document.createElement("div");
  const birthdayWrapper = document.createElement("div");

  icon.classList.add("fa");
  icon.classList.add("fa-circle-o");
  icon.style.margin = "10px";
  icon.style.cursor = "pointer";

  smallNameContainer.classList.add("smallNameContainer");

  smallname.textContent = people.smallName;
  smallname.classList.add("smallName");

  smallNameContainer.appendChild(icon);
  smallNameContainer.appendChild(smallname);

  smallNameContainer.addEventListener("click", () => {
    const circle = icon.classList.contains("fa-circle-o");

    if (circle) {
      icon.classList.remove("fa-circle-o");
      icon.classList.add("fa-angle-down");
      smallNameContainer.style.color = "#7cc48f";
    } else {
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-circle-o");
      smallNameContainer.style.color = "#000";
    }

    peopleContainer.style.display === "none"
      ? (peopleContainer.style.display = "grid")
      : (peopleContainer.style.display = "none");
  });

  peopleContainer.classList.add("peopleContainer");

  peopleName.classList.add("info");
  peopleStreet.classList.add("info");
  peopleCity.classList.add("info");
  peopleState.classList.add("info");
  peopleCountry.classList.add("info");
  peopleTelephone.classList.add("info");
  peopleBirthday.classList.add("info");

  name.classList.add("label");
  street.classList.add("label");
  city.classList.add("label");
  state.classList.add("label");
  country.classList.add("label");
  telephone.classList.add("label");
  birthday.classList.add("label");

  nameWrapper.classList.add("line");
  streetWrapper.classList.add("line");
  cityWrapper.classList.add("line");
  stateWrapper.classList.add("line");
  countryWrapper.classList.add("line");
  telephoneWrapper.classList.add("line");
  birthdayWrapper.classList.add("line");

  name.textContent = "Nome: ";
  street.textContent = "Rua: ";
  city.textContent = "Cidade: ";
  state.textContent = "Estado: ";
  country.textContent = "País: ";
  telephone.textContent = "Telefone: ";
  birthday.textContent = "Aniversário: ";

  peopleStreet.textContent = people.street;
  peopleName.textContent = people.name;
  peopleCity.textContent = people.city;
  peopleState.textContent = people.state;
  peopleCountry.textContent = people.country;
  peopleTelephone.textContent = people.telephone;
  peopleBirthday.textContent = people.birthday;

  nameWrapper.appendChild(name);
  nameWrapper.appendChild(peopleName);

  streetWrapper.appendChild(street);
  streetWrapper.appendChild(peopleStreet);

  cityWrapper.appendChild(city);
  cityWrapper.appendChild(peopleCity);

  stateWrapper.appendChild(state);
  stateWrapper.appendChild(peopleState);

  countryWrapper.appendChild(country);
  countryWrapper.appendChild(peopleCountry);

  telephoneWrapper.appendChild(telephone);
  telephoneWrapper.appendChild(peopleTelephone);

  birthdayWrapper.appendChild(birthday);
  birthdayWrapper.appendChild(peopleBirthday);

  peopleContainer.appendChild(nameWrapper);
  peopleContainer.appendChild(streetWrapper);
  peopleContainer.appendChild(cityWrapper);
  peopleContainer.appendChild(stateWrapper);
  peopleContainer.appendChild(countryWrapper);
  peopleContainer.appendChild(telephoneWrapper);
  peopleContainer.appendChild(birthdayWrapper);

  peopleContainer.style.animation = "move 1s";
  peopleContainer.style.animationFillMode = "backwards";
  peopleContainer.style.display = "none";

  app.appendChild(smallNameContainer);
  app.appendChild(peopleContainer);
});
