const card = document.querySelector(".row");

const request = fetch ('https://restcountries.com/v3.1/all')
 .then(response => response.json())
  .then(data => data.forEach(country => {
      card.innerHTML += `
      <div class="col-md-3"><div class="cardd1"><img src="${country.flags.png}" alt=""></div>
      <div class="musi"><h4 style="margin-top:50px">${country.name.common}</h4>

       <ul><li>${country.popilation}</li>
           <li>${country.region}</li>
           <li>${country.capital}</li>
       </ul>
   </div>

   
      `
  }));
  
