function tab (event, target) {
    let el = event.target;
    let page = document.querySelector(`#${target}`);

    let tabs = document.querySelectorAll(".tabs li");
    let pages = document.querySelectorAll(".page");

    tabs.forEach(e => {
        if (e == el)
            e.classList.add('active');
        else e.classList.remove('active');
    })

    pages.forEach (e => {
        if (e == page)
            e.classList.add('page-active');
        else e.classList.remove('page-active');
    })
}