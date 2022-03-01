/* ---- Search Input Field ---- */
const searchMobile = () => {

    // ---- get input values
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value

    // ---- clear previous search
    searchField.value = ""

    // ---- load API data for results
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
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

        // ---- div create
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
                        <button onclick="mobileDetails('${mobile.slug}')" class="btn btn-primary" type="button">Details</button>
                    </div>
                </div>
            </div>
        `

        // --- append results on div
        searchResult.appendChild(createDiv)
    })
}

/* ---- Load Details of API Data ---- */
const mobileDetails = mobileSlug => {

    // ---- load API data for details
    const url = `https://openapi.programming-hero.com/api/phone/${mobileSlug}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobileDetails(data.data))
}

/* ---- Display Mobile Details ---- */
const displayMobileDetails = mobile => {

    // ---- get search details section
    const mobileDetails = document.getElementById("mobile-details")

    // ---- clear previous result of details
    mobileDetails.textContent = ""

    // ---- div create
    const createDiv = document.createElement('div')
    createDiv.classList.add("col")

    // ---- create HTML for show details
    createDiv.innerHTML = `
        <div class="card mb-3 w-50 mx-auto py-3">
            <div class="row g-0">
                <div class="col-md-6 d-flex align-items-center">
                    <img src="${mobile.image}" class="rounded mx-auto d-block" alt="...">
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <div class="card-body">
                        <h5 class="card-title pb-1 border-bottom border-2">${mobile.name}</h5>
                        <p class="card-title pb-1 border-bottom border-2">${mobile.releaseDate}</p>
                        <p class="card-text pb-1 border-bottom border-2">${mobile.brand}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    // --- append details on div
    mobileDetails.appendChild(createDiv)
}