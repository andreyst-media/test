(function () {
    let page = document.getElementsByClassName("page")[0];
    let number = 0;

    let popUp = document.createElement("div"),
        popUpInner = document.createElement("div"),
        popUpInnerText = document.createElement("span");

    let closeBtn = document.createElement("button");
    closeBtn.classList.add("close-button");

    closeBtn.addEventListener("click", function () {
        setTimeout(function(){
            popUp.classList.remove("opacity");

            setTimeout(function(){
                popUp.classList.remove("d-flex");
            },1500)
        },500)
    })

    popUp.classList.add("popup");
    popUpInner.classList.add("popup__inner");

    popUp.append(popUpInner);
    popUpInner.append(closeBtn,popUpInnerText)
    page.append(popUp);

    function startHTML() {
        let addCardButton = document.createElement("a");
        addCardButton.innerHTML = "Добавить карточку";
        addCardButton.href = "#";
        addCardButton.className = "add-btn";

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkbox");

        let cardsList = document.createElement("div");
        cardsList.classList.add("cards-list");

        addCardButton.addEventListener("click", function (ev) {
            ev.preventDefault();
            addCard(cardsList)
        });

        checkBox.addEventListener("change", function (ev) {
            changeStyleCards(ev.target, cardsList);
        })

        page.append(addCardButton, checkBox, cardsList);

        for (let i = 0; i < 4; i++) {
            addCard(cardsList);
        }

        closePopUp();
    }

    function addCard(cardContainer) {
        number++;
        let card = document.createElement("div");
        card.innerHTML = "<div>" + String(number) + "</div>";
        card.classList.add("cards-list__item");

        card.addEventListener("click", function (ev) {
            openPopUp(ev.target);
        })
        cardContainer.append(card);
    }

    function changeStyleCards(target, cardsList) {
        if (target.checked) {
            cardsList.classList.add("checked");
        } else {
            cardsList.classList.remove("checked");
        }
    }

    function openPopUp(card) {

        popUpInnerText.innerHTML = "<span>" + card.innerHTML + "</span>";
        popUp.classList.add("d-flex");
        setTimeout(function(){
            popUp.classList.add("opacity");
        },500)
    }

    function closePopUp() {
        document.addEventListener('click', function (e) {
            if (e.target === popUp && e.target !== popUpInner) {
                setTimeout(function(){
                    popUp.classList.remove("opacity");
                    setTimeout(function(){
                        popUp.classList.remove("opacity");

                        setTimeout(function(){
                            popUp.classList.remove("d-flex");
                        },1500)
                    },500)
                },500)
            }
        });
    }

    startHTML();
})();
