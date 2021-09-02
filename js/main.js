const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    docs.forEach(docs => {
        console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/554106-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Title: ${docs.title.slice(0, 20)}</h5>
                    <p class="card-text">Author: ${docs.author_name}</p>
                    <p class="card-text">Publisher: ${docs.publisher}</p>
                    <p class="card-text">First published: ${docs.first_publish_year}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}