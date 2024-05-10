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
        const cunt = data.count
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        const test = `
                      <div class="swiper-slide">
                        <a href="${data.url}">
                          <div class="left-swiper-contents br-12">
                            <div class="left-card-img" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
                            </div>
                            
                            <div class="left-swiper-info">
                              <strong>${data.card_title}</strong>
                              <span>${data.card_subtext}</span>
                              <button type="button" class="swiper-tag">
                                <span>#</span>
                                <span>모두의행동</span>
                              </button>
                              <em class="progress-count">
                              
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" width="14" height="14" opacity="1" class="sc-62ee9b1b-0 gsIhNz material-symbols-outlined";><g fill="none" fill-rule="evenodd"><path d="m15.414.566 2.934 2.933L22.5 3.5a2 2 0 0 1 2 2v4.15l2.934 2.936a2 2 0 0 1 0 2.828L24.5 18.35 24.5 22.5a2 2 0 0 1-2 2h-4.15l-2.936 2.934a2 2 0 0 1-2.828 0L9.65 24.5 5.5 24.5a2 2 0 0 1-2-2v-4.152L.565 15.414a2 2 0 0 1 0-2.828L3.499 9.65 3.5 5.5a2 2 0 0 1 2-2h4.151L12.586.565a2 2 0 0 1 2.828 0z" fill="#ad4cfe"></path><path d="M18.02 9.62a1 1 0 0 1 1.677 1.082l-.068.106-6.066 8.21a1 1 0 0 1-1.443.175l-.09-.085-3.506-3.73a1 1 0 0 1 1.366-1.456l.091.086 2.685 2.857 5.354-7.246z" fill="#fff" fill-rule="nonzero"></path></g></svg>
                                ${cunt} 명 행동중
                              </em>
                            </div>
                          </div>
                        </a>
                      </div>
                      
                      
                      `;
        slideTags = slideTags + test;
      }

      // 2. 자료를 이용해서 슬라이드에 배치할 html 을 만든다.
      // 원하는 장소에 출력해 보자.
      const whereTag = document.querySelector(".left-swiper .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      // 3. html 완성후 swiper 를 생성한다.
      // 기본코드를 넣어보자.
      const leftSwiper = new Swiper(".left-swiper", {
        // 대소문자 주의!
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // pagination > type : 슬라이드 페이지 수 카운터 형태
        pagination: {
          // el : Element, html 대상
          el: ".swiper-pagination",
          type: "fraction",
        },
      });

      // 4. 마우스 들어왔는지 확인
      //   추후 마우스 들어왔을 때 멈추기 기능 추가
      const slideArea = document.querySelector(".left-swiper");
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
