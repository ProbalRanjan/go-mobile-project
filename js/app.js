/* ---- Search Input Field ---- */
const searchMobile = () => {

    // ---- get input values
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value

    // ---- clear previous search
    searchField.value = ""

    // ---- error messages
    if (searchText === "") {
        const emptySearch = document.getElementById("empty-search")
        emptySearch.classList = "alert alert-danger w-50 mt-4 mx-auto d-block"
    }
    else {
        document.getElementById("empty-search").classList = "d-none"

        // ---- load API data for results
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
    }
}

/* ---- Display all Results ---- */
const displaySearchResult = mobiles => {

    // ---- get search result section
    const searchResult = document.getElementById("serach-result")

    // ---- clear previous result
    searchResult.textContent = ""

    // ---- get each result
    mobiles?.slice(0, 20).forEach(mobile => {

        // ---- div create
        const createDiv = document.createElement('div')
        createDiv.classList.add("col")

        // ---- create HTML for show results
        createDiv.innerHTML = `
            <div class="card h-100 py-2">
                <img src="${mobile.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${mobile.phone_name}</h5>
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

    // ---- load more button
    const loadBotton = document.getElementById("load-btn")
    loadBotton.classList = "btn btn-primary mt-4 mx-auto d-block"
    document.body.appendChild(loadBotton)

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
        <div class="card mb-3 mx-auto py-3">
            <div class="row g-0">
                <div class="col-md-6 col-12 d-flex align-items-center">
                    <img src="${mobile.image}" class="rounded mx-auto d-block w-50" alt="...">
                </div>
                <div class="col-md-6 col-12 d-flex align-items-center">
                    <div class="card-body">
                        <h5 class="card-title pb-1 border-bottom border-2 fw-bold">${mobile.name}</h5>
                        <p class="card-text pb-1 border-bottom border-2"><span class="fw-bold">Brand: </span> ${mobile.brand}</p>
                        <p class="card-title pb-1 border-bottom border-2"><span class="fw-bold">Release Date: </span> ${mobile.releaseDate ? mobile.releaseDate : "Coming soon."}</p>
                        <p class="card-text pb-1 border-bottom border-2"><span class="fw-bold">Display: </span> ${mobile.mainFeatures.displaySize}</p>
                        <p class="card-text pb-1 border-bottom border-2"><span class="fw-bold">Storage: </span> ${mobile.mainFeatures.storage}</p>
                        <p class="card-text pb-1 border-bottom border-2"><span class="fw-bold">Chip: </span> ${mobile.mainFeatures.chipSet}</p>
                        <p class="card-text pb-1 border-bottom border-2"><span class="fw-bold">Memory: </span> ${mobile.mainFeatures.memory}</p>
                        <p class="card-text pb-1"><span class="fw-bold">Sensors: </span>
                        <p class="border-bottom border-2">${mobile.mainFeatures.sensors[0]},
                        ${mobile.mainFeatures.sensors[1]},
                        ${mobile.mainFeatures.sensors[2]},
                        ${mobile.mainFeatures.sensors[3]},
                        ${mobile.mainFeatures.sensors[4]},
                        ${mobile.mainFeatures.sensors[5]}</p>
                        </p>
                        <p class="card-text pb-1"><span class="fw-bold">Others:</span>
                        <p>WLAN: ${mobile.others?.WLAN ? mobile.others.WLAN : "No"}</p>
                        <p>Bluetooth: ${mobile.others?.Bluetooth ? mobile.others.Bluetooth : "No"}</p>
                        <p>GPS: ${mobile.others?.GPS ? mobile.others.GPS : "No"}</p>
                        <p>NFC: ${mobile.others?.NFC ? mobile.others.NFC : "No"}</p>
                        <p>Radio: ${mobile.others?.Radio ? mobile.others.Radio : "No"}</p>
                        <p>USB: ${mobile.others?.USB ? mobile.others.USB : "No"}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `

    // --- append details on div
    mobileDetails.appendChild(createDiv)
}