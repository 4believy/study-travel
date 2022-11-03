slider = document.querySelector(".destinations-slider");
slide = document.querySelectorAll(".destinations-slide");
slidePagination = document.querySelectorAll(".destinations-pagination-button");
arrowLeft = document.querySelector(".slider-arrow-left");
arrowRight = document.querySelector(".slider-arrow-right");

slide[0].addEventListener("click", function () {
    slider.classList.add("left");
    slider.classList.remove("center", "right");
    slide[1].style.cursor = "pointer";
    slide[0].style.cursor = "default";
    slidePagination[0].style.opacity = "1";
    slidePagination[1].style.opacity = ".5";
    slidePagination[2].style.opacity = ".5";
  }
);

slide[1].addEventListener("click", function () {
    slider.classList.add("center");
    slider.classList.remove("left", "right");
    slide[0].style.cursor = "pointer";
    slide[1].style.cursor = "";
    slide[2].style.cursor = "pointer";
    slidePagination[0].style.opacity = ".5";
    slidePagination[1].style.opacity = "1";
    slidePagination[2].style.opacity = ".5";
  }
);

slide[2].addEventListener("click", function () {
    slider.classList.add("right");
    slider.classList.remove("left", "center");
    slide[1].style.cursor = "pointer";
    slide[2].style.cursor = "default";
    slidePagination[0].style.opacity = ".5";
    slidePagination[1].style.opacity = ".5";
    slidePagination[2].style.opacity = "1";
  }
);

arrowLeft.addEventListener("click", function () {
    if (slider.classList.contains("right")) {
      slider.classList.add("center");
      slider.classList.remove("right");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = "1";
      slidePagination[2].style.opacity = ".5";
      arrowRight.style.opacity = "1";
    } else {
      slider.classList.add("left");
      slider.classList.remove("center", "right");
      slidePagination[0].style.opacity = "1";
      slidePagination[1].style.opacity = ".5";
      slidePagination[2].style.opacity = ".5";
      arrowLeft.style.opacity = ".5";
    }
  }
);

arrowRight.addEventListener("click", function () {
    if (slider.classList.contains("left")) {
      slider.classList.add("center");
      slider.classList.remove("left");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = "1";
      slidePagination[2].style.opacity = ".5";
      arrowLeft.style.opacity = "1";      
    } else {
      slider.classList.add("right");
      slider.classList.remove("left", "center");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = ".5";
      slidePagination[2].style.opacity = "1";
      arrowRight.style.opacity = ".5";
    }
  }
);