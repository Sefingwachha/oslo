document.addEventListener("DOMContentLoaded", function () {
  new Splide("#logo-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    gap: "1rem",
    pauseOnHover: true,
    pauseOnFocus: false,
    pagination: false,
    arrows: false,
    perPage: 5,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1200: {
        perPage: 4,
        gap: "1.3rem",
      },
      992: {
        perPage: 4,
      },
      768: {
        perPage: 2,
      },
    },
  }).mount(window.splide.Extensions);
});

// image slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    drag: "free",
    focus: "center",
    gap: "2rem",
    pauseOnHover: true,
    pauseOnFocus: false,
    pagination: false,
    arrows: false,
    perPage: 5,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1200: {
        perPage: 4,
      },
      992: {
        perPage: 4,
      },
      768: {
        perPage: 2,
      },
    },
  }).mount(window.splide.Extensions);
});

// service slide

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    direction: "ttb",
    height: "38rem",
    type: "loop",
    // wheel: true,
    drag: "free",
    gap: "15rem",
    pagination: false,
    arrows: false,
    perPage: 4,
    breakpoints: {
      1200: {
        perPage: 4,
      },
      1140: {
        perPage: 3,
        gap: "15rem",
      },
      992: {
        perPage: 3,
        gap: "20rem",
      },
      768: {
        perPage: 2,
        height: "30rem",
        gap: "5rem",
      },
      468: {
        perPage: 1,
        height: "15rem",
        gap: "5rem",
      },
    },
  });

  splide.mount();
});

// testomonial

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pagination: false,
    arrows: false,
  }).mount();
});

// history

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#my-splide", {
    perPage: 3,
    perMove: 1,
    gap: "35px",
    pagination: false,
    padding: {
      left: "105px",
      right: "150px",
    },
    breakpoints: {
      1024: {
        perPage: 3,
        padding: {
          left: "20px",
          right: "0px",
        },
      },
      768: {
        perPage: 2,
        padding: {
          left: "20px",
          right: "0px",
        },
      },

      576: {
        perPage: 1,
        padding: {
          left: "20px",
          right: "20px",
        },
      },
    },
  }).mount();
});

// faq


$(document).ready(function () {
  $(".accordion-button").on("click", function () {
    const accordionItem = $(this).closest(".accordion-item");
    const accordionContent = accordionItem.find(".accordion-collapse");
    const isActive = accordionItem.hasClass("active");

    // Remove active class from all other accordion items
    $(".accordion-item").each(function () {
      if (!$(this).is(accordionItem)) {
        $(this).removeClass("active");
        $(this).find(".accordion-collapse").removeClass("show");
        $(this).find(".accordion-button").addClass("collapsed");
      }
    });

    // Toggle the active state of the clicked accordion item
    if (isActive) {
      accordionItem.removeClass("active");
      accordionContent.removeClass("show");
      $(this).addClass("collapsed");
    } else {
      accordionItem.addClass("active");
      accordionContent.addClass("show");
      $(this).removeClass("collapsed");
    }
  });
});


// about scroll

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#client-logo-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    gap: "1rem",
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1200: {
        perPage: 4,
      },
      992: {
        perPage: 4,
      },
      768: {
        perPage: 2,
      },
    },
  });

  splide.mount(window.splide.Extensions);
});

// cart-quantity

function increase() {
  let quantityElement = document.getElementById("quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = quantity + 1;
}

function decrease() {
  let quantityElement = document.getElementById("quantity");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantityElement.textContent = quantity - 1;
  }
}

function reset() {
  let quantityElement = document.getElementById("quantity");
  quantityElement.textContent = 1;
}

// card

document.addEventListener("DOMContentLoaded", function () {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardWrapper = this.closest(".card-wrapper");
      cardWrapper.remove();
    });
  });
});

//  product filter

function Filtering() {
  const buttons = document.querySelectorAll('.btns button');
  const blocks = document.querySelectorAll('.single');

  buttons.forEach(button => {
      button.addEventListener('click', (e) => {
          const targetMenu = e.target.dataset.menu;

          buttons.forEach(btn => btn.classList.remove('active'));

          e.target.classList.add('active');

          blocks.forEach(block => {
              block.classList.remove('active');
              block.classList.add('hidden');
          });

          blocks.forEach(block => {
              if (block.dataset.menu === targetMenu) {
                  block.classList.add('active');
                  block.classList.remove('hidden');
              }
          });
      });
  });
}

document.addEventListener('DOMContentLoaded', Filtering);

