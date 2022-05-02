import {tns} from "tiny-slider";
import ModalSlider from "../../classes/ModalSlider";
import IMask from 'imask';

// Sliders Block

let certifSlider = tns({
    container: '.certificate__slider-inner',
    items: 3,
    gutter : 20,
    slideBy: 'page',
    loop : true,
    controls : true,
    nav : false,
    prevButton : ".certificate__slider-prev",
    nextButton : ".certificate__slider-next",
    responsive : {
      768 : {
        items : 3
      },
      540 : {
        items : 2
      },
      0 : {
        items : 1,
        gutter: 0,
        center : true
      }
    }
});
  
let newsSlider = tns({
    container: '.news__slider-inner',
    items: 4.35,
    slideBy: 'page',
    loop : true,
    controls : true,
    nav : false,
    prevButton : ".news__slider-prev",
    nextButton : ".news__slider-next",
    gutter : 20,
    responsive : {
      992 : {
        items : 4.35
      },
      576 : {
        items : 3
      },
      350 : {
        items : 2,
        gutter : 20
      },
      0 : {
        items : 1,
        gutter : 0
      }
    }
});

let modalBlock = document.querySelector(".modal__certificate");
let certificationSlides = document.querySelectorAll(".certificate__slide");
let certificateInfo = [
  {
    img : "assets/images/sertificate-slide-1.png",
    p : "Лицензия на деятельность по технической защите конфиденциальной информации"
  },
  {
    img : "assets/images/sertificate-slide-2.png",
    p : "Система сертификации средств защиты информации"
  },
  {
    img : "assets/images/sertificate-slide-3.png",
    p : "Сертификат соответствия 2204"
  }
];

new ModalSlider(certificateInfo, modalBlock, certificationSlides);

//

// Search Btn Block

let searchLi = document.querySelector(".menu__item_search");

searchLi.addEventListener("click", e => {
  searchLi.classList.add("active");
})

searchLi.addEventListener("keydown", e => {
  if(e.key == "Enter") searchLi.classList.remove("active");
})

//

// Forms Block

const phoneInputs = document.querySelectorAll("[name='phone']")
phoneInputs.forEach(item => {
  IMask(item, {
    mask : "+{7}(000)000-00-00"
  })
})

const formInputs = document.querySelectorAll("form input");
formInputs.forEach(input => {
  input.addEventListener("input", function() {
    if(this.value.length != 0) this.classList.add("active");
    else this.classList.remove("active");
  })
})

const forms = document.querySelectorAll("form");
const successBlock = document.querySelector(".phone-modal__success");
const phoneModal = document.querySelector(".phone-modal");

forms.forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    phoneModal.classList.add("success");
    successBlock.classList.remove("hide");
    phoneForm.classList.add("hide");
    showSuccessBlock();

    form.querySelectorAll("input").forEach(input => input.value = "")
  });
})

//

// Show Phone Modal Block

const phoneButton = document.querySelector(".show-phone-modal");
const overlay = document.querySelector(".modal-overlay");
const phoneForm = document.querySelector(".phone-modal__form-block");

phoneButton.addEventListener("click", () => {
  successBlock.classList.add("hide");
  phoneForm.classList.remove("hide");
  phoneModal.classList.remove("success");

  phoneModal.classList.remove("up-hide");
  overlay.classList.remove("hide");

  phoneModal.addEventListener("transitionend", function modalTransition() {
    window.addEventListener("click", function hideModal(e) {
      if(e.target == overlay || e.target.closest(".phone-modal__close")) {
        phoneModal.classList.add("up-hide");
        overlay.classList.add("hide");

        window.removeEventListener("click", hideModal);
        phoneModal.removeEventListener("transitionend", modalTransition);
      }
    })
  })
});

function showSuccessBlock() {
  phoneModal.classList.remove("up-hide");
  overlay.classList.remove("hide");

  phoneModal.addEventListener("transitionend", function modalTransition() {
    window.addEventListener("click", function hideModal(e) {
      if(e.target == overlay || e.target.closest(".phone-modal__close")) {
        phoneModal.classList.add("up-hide");
        overlay.classList.add("hide");

        window.removeEventListener("click", hideModal);
        phoneModal.removeEventListener("transitionend", modalTransition);
      }
    })
  })
}

//

// Show Подробнее Block

const moreBtns = document.querySelectorAll(".show-safety-modal");
const moreModal = document.querySelector(".safety-modal");

moreBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    overlay.classList.remove("hide");
    moreModal.classList.remove("opacity-hide");
    
    moreModal.addEventListener("transitionend", function modalTransition() {
      window.addEventListener("click", function hideModal(e) {
        if(e.target == overlay || e.target.closest(".safety-modal__close")) {
          moreModal.classList.add("opacity-hide");
          overlay.classList.add("hide");
  
          window.removeEventListener("click", hideModal);
          moreModal.removeEventListener("transitionend", modalTransition);
        }
      })
    })
  })
})

//

// Show News Block

const newsItems = document.querySelectorAll(".news__slide img");
const newsModal = document.querySelector(".news-modal");
newsItems.forEach(item => {
  item.addEventListener("click", () => {
    let title = item.nextElementSibling;
    newsModal.querySelector("h3").innerText = title.innerText;

    overlay.classList.remove("hide");
    newsModal.classList.remove("opacity-hide");

    newsModal.addEventListener("transitionend", function modalTransition() {
      window.addEventListener("click", function hideModal(e) {
        if(e.target == overlay || e.target.closest(".news-modal__close")) {
          newsModal.classList.add("opacity-hide");
          overlay.classList.add("hide");
  
          window.removeEventListener("click", hideModal);
          newsModal.removeEventListener("transitionend", modalTransition);
        }
      })
    })
  })
});

//

// Burger Menu Block

const burger = document.querySelector(".menu--burger");
const menu = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
  overlay.classList.remove("hide");
  burger.classList.add("active");
  menu.classList.add("show");

  burger.addEventListener("transitionend", function modalTransition() {
    window.addEventListener("click", function hideModal(e) {
      if(e.target == overlay) {
        menu.classList.remove("show");
        burger.classList.remove("active");
        overlay.classList.add("hide");

        window.removeEventListener("click", hideModal);
        burger.removeEventListener("transitionend", modalTransition);
      }
    })
  })
})

//
