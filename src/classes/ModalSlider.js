import {tns} from "tiny-slider";

export default class ModalSlider {
    constructor(data, modalBlock, slides) {
      this.data = data;
      this.modalBlock = modalBlock;
      this.slides = slides;
      this.modalOverlay = document.querySelector(".modal-overlay");
  
      this.slides.forEach(slide => {
        slide.addEventListener("click", (e) => {
          let inner = this.modalBlock.querySelector(".modal-inner");
  
          let item = e.target.closest(".for-modal-slide");
          let img = item.querySelector("img").src.replace("http://localhost:5500/", "");
          let p = item.querySelector("p");

          inner.innerHTML = `
          <div class="${this.modalBlock.className.replace(" hide","-slide")}">
            <img src=${img} />
            <p>${p.innerText}</p>
          </div>
          `;
      
          this.modalOverlay.classList.toggle("hide");
          this.modalBlock.classList.toggle("hide");
      
          this.data.forEach(info => {
            if(info.img != img) {
              this.createRestItems(inner, info.img, info.p)
            }
          })
      
          tns({
            container: inner,
            items: 1,
            slideBy: 'page',
            mode : "gallery",
            loop : true,
            controls : true,
            nav : false,
            prevButton : this.modalBlock.querySelector(".prev"),
            nextButton : this.modalBlock.querySelector(".next"),
          });
        })
      })
  
      window.addEventListener("click", e => {
        if(!this.modalBlock.classList.contains("hide")) {
          let outOfModal = (e.target.classList.contains("modal-overlay") || e.target.closest("div").classList.contains("tns-normal"));
        
          if(outOfModal) {
            let innerChildren = this.modalBlock.querySelector(".tns-outer");
            innerChildren.className = (this.modalBlock.className + "-inner") + " modal-inner";
            innerChildren.id = "";
            innerChildren.innerHTML = "";
        
            this.modalBlock.classList.add("hide");
            this.modalOverlay.classList.add("hide");
          }
        }
      });
    }
  
    createRestItems(block, img, p) {
      block.innerHTML += `
      <div class="modal__certificate-slide">
        <img src=${img} />
        <p>${p}</p>
      </div>
      `;
    }
  }