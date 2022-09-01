const loadPhones = async () => {
     const url = "https://openapi.programming-hero.com/api/phones?search=a";

     const getPhones = await fetch(url);
     const data = await getPhones.json();
     displayPhones(data.data);
};
loadPhones();

const loadSearchedPhones = async (searchPhone) => {
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;

     const getPhones = await fetch(url);
     const data = await getPhones.json();
     newSearch(data.data, searchPhone);
};

const displayPhones = (data) => {
     const getThePhoneWrapper = document.querySelector(".phone-container");

     data.forEach((data) => {
          const newElement = document.createElement("div");
          newElement.classList.add("phone-card");
          newElement.innerHTML = `
          
                  <img src="${data.image}" alt="" />
                  <h3>${data.phone_name}</h3>
                  <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Delectus voluptas itaque ratione, ut facilis
                        impedit.
                  </p>

                  <button onclick="getSlug('${data.slug}')">Show details</button>
          
          `;

          getThePhoneWrapper ? getThePhoneWrapper.appendChild(newElement) : "";
     });
};

const getSlug = async (slug) => {
     const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
     const getUrl = await fetch(url);
     const data = await getUrl.json();
     getDeatilsofPhone(data.data);
};

const getDeatilsofPhone = (data) => {
     window.location.href = `post.html?slug=${data.slug}`;
};

const getSearch = () => {
     const input = document.getElementById("input");
     const inputValue = input.value;
     input.value = "";
     loadSearchedPhones(inputValue);
};

const newSearch = (data, value) => {
     const phoneContainer = document.querySelector(".phone-containers");
     const notFoundMessage = document.getElementById("not-found-message");
     const inputValue = document.getElementById("inputValue");

     if (data.length === 0) {
          phoneContainer.innerHTML = "";
          notFoundMessage.style.display = "block";
          inputValue.innerHTML = `"${value}"`;
          return;
     } else {
          notFoundMessage.style.display = "none";
          phoneContainer.innerHTML = "";
          data.forEach((data) => {
               const newDiv = document.createElement("div");
               newDiv.classList.add("phone-card");
               newDiv.innerHTML = `
               
               <img src="${data.image}" alt="" />
               <h3>${data.phone_name}</h3>
               <button onclick="getSlug('${data.slug}')">Show details</button>
               
               `;
               phoneContainer.appendChild(newDiv);
          });
     }
};

document.getElementById("search")?.addEventListener("click", getSearch);
