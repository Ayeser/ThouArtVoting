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