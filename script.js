const acessKey= "TWOBHQZHirryTCPzs-VzBbrPduQCU348hmbjqur3hPE";

const searchForm= document.getElementById("search-form");  
const searchBox= document.getElementById("search-box");
const searchResult= document.getElementById("search-result");
const showMoreBtn= document.getElementById("show-more-btn");
let keyword= "";
let pag=1;
async function searchImages() {
keyword= searchBox.value;
 const url= 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acessKey}';
 const response = await fetch(url);
 const data = await response.json();

 console.log(data);
}

searchForm.addEventListener("submit", (e) =>{
    e.preventdefault();
    page=1;
    searchImages();
})