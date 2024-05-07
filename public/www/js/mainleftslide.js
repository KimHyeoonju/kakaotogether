window.addEventListener("load", function () {
  const dataUrl = "./apis/cards.json";

  fetch(dataUrl)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((result) => {
      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        // 템플릿 문법 필요 (html)
        const test = `<div class="swiper-slide">
            <a href="${data.url}" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
              <p class="slide-title">
                ${data.card_title}
              </p>
            </a>
          </div>`;
        slideTags = slideTags + test;
      }

      // 2. 자료를 이용해서 슬라이드에 배치할 html 을 만든다.
      // 원하는 장소에 출력해 보자.
      const whereTag = document.querySelector(".topslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      // 3. html 완성후 swiper 를 생성한다.
      // 기본코드를 넣어보자.
      const topSlide = new Swiper(".topslide", {
        // 대소문자 주의!
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          // el : Element, html 대상
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // 4. 마우스 들어왔는지 확인
      //   추후 마우스 들어왔을 때 멈추기 기능 추가
      const slideArea = document.querySelector(".topslide");
      slideArea.addEventListener("mouseenter", function () {
        console.log("마우스 올렸어요.");
      });
      slideArea.addEventListener("mouseleave", function () {
        console.log("마우스 빠졌어요.");
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
