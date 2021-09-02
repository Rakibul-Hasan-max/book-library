const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.slice(0, 20).forEach(docs => {
        console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
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