// display details of selected phone 
const detailContainer = document.getElementById('display-detail');

// Function for Spinner 
const spinner = (displayStyle) => {
  document.getElementById("spinner-border").style.display = displayStyle;
};
spinner('none');

// Search Phone Name 
const searchPhone = () => {
  spinner('block');
  const searchValue = document.getElementById("search-field").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhones(data.data));
  //   Clear input field, detail container
  document.getElementById("search-field").value = "";
  detailContainer.innerHTML = '';
  detailContainer.classList.remove('display-detail');
  heading('detail-heading', 'none');
}

const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("display-search"); 
  // Limit display upto 20
  const phoneQunatity = phones.slice(0, 20);
  if(phoneQunatity <= 0){
      heading('display-error', 'block');
      heading('search-heading', 'none');
      heading('detail-heading', 'none');
      detailContainer.innerHTML = '';
      detailContainer.classList.remove('display-detail');
      phonesContainer.textContent = ''; 
      phonesContainer.classList.remove('display-search') ;
  }else {        
      phonesContainer.classList.add('display-search') ;
      // Display serach result    
      phonesContainer.textContent = '';   
  for (const phone of phoneQunatity) {
      const div = document.createElement('div')
      div.classList.add('col')
      div.innerHTML = `
          <div class="card">
              <img src="${phone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h4 class="card-title">${phone.phone_name}</h4>
                  <h5 class="card-title">${phone.brand}</h5>
                  <button onclick="loadPhoneDetails('${phone.slug}')">Explore</button>
              </div>
          </div> 
      `;
      phonesContainer.appendChild(div);
    }
    spinner('none');
    // Display Section errors
  heading('search-heading', 'block');
  heading('display-error', 'none');
  }
};