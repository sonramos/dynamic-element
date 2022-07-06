import flags from './model/flags.js';

function loadFlags(){
    const flagBase = flags;

    for (const flag of flagBase){
        const flagView = document.querySelector(".flag-view");

        const flagCard = showFlag(flag);

        flagView.insertAdjacentHTML("beforeend", flagCard);
    }

}

function showFlag(flag){
    return `<div class="flag col-2 my-2 text-center">
    <img src="${flag.image}" alt="${flag.name}">
    <p>${flag.name}}</p>
  </div>`
}

loadFlags()