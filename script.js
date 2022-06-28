const contentHeadline = document.querySelector(".content__headline");
const contentText = document.querySelector(".content__text");
const sliderOne = document.querySelector(".sliderOne");
const sliderTwo = document.querySelector(".sliderTwo");
const imageContainer = document.querySelector(".imageContainer");

let number = 1;

function changeSlide() {
  if (this == sliderOne) {
    number--;
    if (number < 1) {
      number = 3;
    }
  } else {
    number++;
  }

  if (number === 2) {
    imageContainer.style.background = `url(./images/desktop-image-hero-${number}.jpg)`;
    contentHeadline.innerHTML = `We are available all across the globe`;
    contentText.innerHTML = `With stores all over the world, it's easy for you to
    find furniture for your home or place of business. Locally, we’re in most
    major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`;
  } else if (number === 3) {
    imageContainer.style.background = `url(./images/desktop-image-hero-${number}.jpg)`;
    contentHeadline.innerHTML = `Manufactured with the best materials`;
    contentText.innerHTML = `Our modern furniture store provide a
    high level of quality. Our company has invested in advanced technology to
    ensure that every product is made as perfect and as consistent as possible.
    With three decades of experience in this industry, we understand what
    customers want for their home and office.`;
  } else {
    number = 1;
    imageContainer.style.background = `url(./images/desktop-image-hero-${number}.jpg)`;
    contentHeadline.innerHTML = `Discover innovative ways to decorate`;
    contentText.innerHTML = `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`;
  }
}

sliderOne.addEventListener("click", changeSlide);
sliderTwo.addEventListener("click", changeSlide);
