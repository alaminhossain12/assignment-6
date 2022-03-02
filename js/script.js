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
