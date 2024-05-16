window.addEventListener("load", function () {
  const dataUrl = "./apis/cards.json";

  fetch(dataUrl)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((result) => {
      let donation_list = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        const money = data.card_money
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        const test = `
            <div class="left-div-style br-12 contents-card-style">
                <a href="${data.url}">
                <div class="left-card-contents">
                    <div class="card-contents-img" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;"></div>
                    <div class="card-contents-info">
                    <strong class="card-info-strong">${data.card_title}</strong>
                    <span class="card-info-span">${data.card_subtext}</span>
                    <div class="progress-container">
                        <div class="progress-bar">
                        <div class="current-progress-bar" style="width: ${data.card_percent};"></div>
                        </div>
                        <div class="progress-info">
                        <div>
                            <span class="text-num-style progress-info-money">${money}원</span>
                        </div>
                        <div>
                            <span class="text-num-style progress-info-percent">${data.card_percent}</span>
                        </div>
                        </div>
                    </div>
                    <button type="button" class="card-tag">
                        <span>#</span>
                        <span>${data.card_tag}</span>
                    </button>
                    </div>
                </div>
                </a>
            </div>`;

        donation_list = donation_list + test;
      }

      const whereTag = document.querySelector(".main-donation-list");
      whereTag.innerHTML = donation_list;

      const elementsStrong =
        document.getElementsByClassName("card-info-strong");
      const elementsSpan = document.getElementsByClassName("card-info-span");

      for (let i = 0; i < elementsStrong.length; i++) {
        console.log(elementsStrong[i].offsetHeight);

        if (elementsStrong[i].offsetHeight !== 34) {
          elementsSpan[i].classList.add("card-sub-style");
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
