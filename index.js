(function () {
    let button = document.getElementById('button'),
        popUp = document.getElementById('popUp');

    button.addEventListener('click', function () {
        this.classList.toggle('hidden');
        popUp.classList.toggle('open');
    })
    
    document.addEventListener('click', function (ev) {
        if (popUp.classList.contains('open')) {
            if (ev.target !== popUp) {
                popUp.classList.toggle('open');
                button.classList.toggle('hidden');
            }
        }

        if (ev.target === button) {
            console.log(ev.target)
            button.classList.add('hidden');
            popUp.classList.add('open');
        }
    })
})();
