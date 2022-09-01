const loadPhones = () => {
     const slug = window.location.search.split("=")[1];
     const url = `https://openapi.programming-hero.com/api/phone/${slug}`;

     fetch(url)
          .then((res) => res.json())
          .then((data) => {
               displayPhones(data.data);
          });
};

const displayPhones = (data) => {
     const displayPhons = document.querySelector(".phone-container-wrapper");
     const newElement = document.createElement("div");
     const newTableElement = document.createElement("div");
     newTableElement.classList.add("tableWrapper");

     newElement.innerHTML = `
            <h1 class="phone_name">${data.name}</h1>
                  <div class="image_wrapper">
                        <img class="product_image" src="${data.image}" alt="" />
                  </div>
                  <div>
                        <p class="brand" >Brand:- ${data.brand}</p>
                  </div>
     `;

     newTableElement.innerHTML = `
            <table>
                    <tr>
                         <td>First Release</td>
                         <td>${
                              data.releaseDate
                                   ? data.releaseDate
                                   : "Comming Soon"
                         } </td>
                    </tr>
                    <tr>
                         <th>Main Features</th>
                         <th></th>
                    </tr>
                    <tr>
                         <td>Stroage</td>
                         <td>${data.mainFeatures.storage}</td>
                    </tr>
                    <tr>
                         <td>Display size</td>
                         <td>${data.mainFeatures.displaySize}</td>
                    </tr>

                    <tr>
                         <td>Memory</td>
                         <td>${data.mainFeatures.memory}</td>
                    </tr>
                    <tr>
                         <td>Sensor</td>
                         <td>${data.mainFeatures.chipSet}</td>
                    </tr>

                    <tr>
                         <th>Connectivity</th>
                         <th></th>
                    </tr>
                    <tr>
                         <td>WLAN</td>
                         <td>${
                              data.others ? data.others.WLAN : "not specified"
                         }</td>
                    </tr>
                    <tr>
                         <td>Bluethoot</td>
                         <td>${
                              data.others
                                   ? data.others.Bluetooth
                                   : "not specified"
                         }</td>
                    </tr>
                    <tr>
                         <td>GPS</td>
                         <td>${
                              data.others ? data.others.GPS : "not specified"
                         }</td>
                    </tr>
                    <tr>
                         <td>NFC</td>
                         <td>${
                              data.others ? data.others.NFC : "not specified"
                         }</td>
                    </tr>
                    <tr>
                         <td>Radio</td>
                         <td>${
                              data.others ? data.others.Radio : "not specified"
                         }</td>
                    </tr>
            </table>
     `;

     displayPhons.appendChild(newElement);
     displayPhons.appendChild(newTableElement);
};

loadPhones();
