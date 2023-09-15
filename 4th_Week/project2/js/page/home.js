export const moveToHomePage = (userData) => {
  const page = document.querySelector(".phone-middle");
  const title = document.querySelector(".title");
  const insertedPage = document.querySelector(".input-form");

  if (page) {
    const homepage = `
    <form class="input-form" onsubmit="return false">
      <div class="input-container">
        <label for="username">이름</label>
        <input
        type="text"
        id="username"
        value="${userData.username}"
        disabled
      />
      </div>
      <div class="input-container">
        <label for="userId">아이디</label>
        <input
        type="text"
        id="userId"
        value="${userData.userId}"
        disabled
      />
      </div>
      <div class="input-container">
        <label for="password">비밀번호</label>
        <input
        type="text"
        id="password"
        value="${userData.password}"
        disabled
      />
      </div>
      <div class="input-container">
        <label for="phonenumber">휴대폰 번호</label>
        <input
        type="text"
        id="phonenumber"
        value="${userData.phonenumber}"
        disabled
      />
      </div>
      <div class="button-container">
        <button class="back-button">돌아가기</button>
      </div>
    </form>
    `;

    title.textContent = `환영합니다, ${userData.username}님!`;
    page.insertAdjacentHTML("beforeend", homepage);

    if (insertedPage) {
      page.removeChild(insertedPage);
    }
  } else {
    throw new Error("page not found");
  }
};
