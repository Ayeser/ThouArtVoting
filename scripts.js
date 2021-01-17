 function appendPanel(t) {
    console.log(t);
    $(".panels")
    .append(`<div class="panel panel${t}"><p>${t}</></div>`)
}

function startPage() {
for (i=1;i<5;i++) {
    appendPanel(i)
};
$('.panel').click(toggleOpen);
}

    function toggleOpen() {
      console.log('Hello again');
      $(".panel").removeClass("open")
    $(this).addClass('open')
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    const endpoint = 'https://raw.githubusercontent.com/Ayeser/ThouArtVoting/main/bestOfBook.json';

    const books = [];
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => books.push(...data));
    
    function findMatches(wordToMatch, books) {
      return books.filter(selection => {
        const regex = new RegExp(wordToMatch, 'gi');
        return selection.book.match(regex)
      });
    }
    
    // function numberWithCommas(x) {
    //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }
    
    function displayMatches() {
      const matchArray = findMatches(this.value, books);
      const html = matchArray.map(selection => {
        const regex = new RegExp(this.value, 'gi');
        const bookName = selection.book.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${bookName}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;
    }
    
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);