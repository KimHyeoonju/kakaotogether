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

        const test = `
                      <div class="swiper-slide">
                        <a href="${data.url}">
                          <div class="left-swiper-contents br-12">
                            <div class="left-swiper-img" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
                            </div>
                            
                            <div class="left-swiper-info">
                              <strong>${data.card_title}</strong>
                              <span>${data.card_subtext}</span>
                              <button type="button" class="swiper-tag">
                                <span>#</span>
                                <span>모두의행동</span>
                              </button>
                              <em class="progress-count">
                              
                              <svg xmlns="http://www.w3.org/2000/svg" class="material-symbols-outlined" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ad4cfe">
                              <path d="m355.46-97.39-70.38-116.3-132.54-29.7 12.23-135.53L74.93-480l89.84-101.08-12.23-135.53 132.54-29.7 70.38-116.3L480-809.46l124.54-53.15 70.38 116.3 132.54 29.7-12.23 135.53L885.07-480l-89.84 101.08 12.23 135.53-132.54 29.7-70.38 116.3L480-150.54 355.46-97.39ZM429-349.85 653.15-573 616-609.38l-187 186-85-84.77L306.85-471 429-349.85Z"/>
                              </svg>
                                ${data.count} 명 행동중
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
