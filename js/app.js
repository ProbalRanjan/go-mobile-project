/* ---- Search Input Field ---- */
const searchMobile = () => {
    // ---- get input values
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;

    // ---- clear previous search
    searchField.value = "";

    // ---- load API data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

/* ---- Display all Results ---- */
const displaySearchResult = mobiles => {
    // ---- get search result section
    const searchResult = document.getElementById("serach-result")

    // ---- clear previous result
    searchResult.textContent = ""

    // ---- get each result
    mobiles.forEach(mobile => {
        const createDiv = document.createElement('div')
        createDiv.classList.add("col")

        // ---- create HTML for show results
        createDiv.innerHTML = `
            <div class="card h-100 py-2">
                <img src="${mobile.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                    <p class="card-text">${mobile.brand}</p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button onclick="mobileDetailes" class="btn btn-primary" type="button">Details</button>
                    </div>
                </div>
            </div>
        `
        searchResult.appendChild(createDiv)
    })
}
