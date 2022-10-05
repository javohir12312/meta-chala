let elLi = document.querySelector(".story__item");
let elLi2 = document.querySelector(".story__item2");
let elRadio = document.querySelector(".story__radio");
let elRadio2 = document.querySelector(".story__radio2");
let elRadio3 = document.querySelector(".story__radio3");
let elList = document.querySelector(".wave__list-story")


elRadio.addEventListener("click", function(){

  if(elRadio.checked == true){
    elLi.classList.add("bg-primary")
  } else if(elRadio.checked == false){
    elLi.classList.remove("bg-black");
  }
})


elRadio2.addEventListener("change", function(){

  if(elRadio2.checked == true){
    elLi2.classList.add("bg-success")
  } else if(elRadio2.checked == false){
    elLi2.classList.remove("bg-black");
  }
})