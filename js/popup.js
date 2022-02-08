const openButton = document.getElementByClass("product_img");
const modal = document.querySelector(".product_box");
const overlay = modal.querySelector(".product_overlay");
const closeBtn = modal.querySelector(".product_outb");
const openModal = () => {
    modal.classList.remove("product_hidden");
}
const closeModal = () => { 
    modal.classList.add("product_hidden");
}
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);