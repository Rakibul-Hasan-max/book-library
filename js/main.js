document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText === '') {
        displayError()
    }
    else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs, data.numFound));
    }
}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = (docs,numberOfBooks) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs.length === 0) {
        displayError()
    }
    docs.slice(0, 20).forEach(docs => {
        console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
        const totalBook = document.getElementById("numberOfBooks");
        totalBook.innerText = `Total Books Found: ${numberOfBooks}`;
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" style="height: 300px;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Title: ${docs.title}</h5>
                    <p class="card-text"><span class="card-text-bold">Author:</span> ${docs.author_name}</p>
                    <p class="card-text"><span class="card-text-bold">Publisher:</span> ${docs.publisher}</p>
                    <p class="card-text"><span class="card-text-bold">First Published:</span> ${docs.first_publish_year}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}