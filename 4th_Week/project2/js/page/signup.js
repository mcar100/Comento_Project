export const moveToSignupPage = () => {
  const page = document.querySelector(".phone-middle");
  const title = document.querySelector(".title");
  const insertedPage = document.querySelector(".input-form");

  if (page) {
    const signupPage = `
    <form class="input-form" onsubmit="return false">
      <div class="input-container">
        <label for="username">이름</label>
        <input
          type="text"
          id="username"
          placeholder="2글자 이상, 한글만 입력"
          maxlength="10"
        />
      </div>
      <div class="input-container">
        <label for="userId">아이디</label>
        <div class="id-container">
          <input
            type="text"
            id="userId"
            placeholder="4글자 이상, 영문/숫자만"
            maxlength="10"
          />
          <button class="checkID-button">중복</button>
        </div>
      </div>
      <div class="input-container">
        <label for="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="8~16 글자, 영문/숫자/특수문자 포함"
          maxlength="20"
        />
      </div>
      <div class="input-container">
        <label for="passwordConfirm">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호 재입력"
          maxlength="20"
        />
      </div>
      <div class="input-container">
        <label for="phonenumber">휴대폰 번호</label>
        <input
          type="text"
          id="phonenumber"
          placeholder="000-0000-0000"
          maxlength="15"
        />
      </div>
      <div class="button-container">
        <button class="submit-button" type="submit">가입하기</button>
      </div>
  
    </form>
    `;
    title.textContent = "Sign up";
    page.insertAdjacentHTML("beforeend", signupPage);

    if (insertedPage) {
      page.removeChild(insertedPage);
    }
  } else {
    throw new Error("page not found");
  }
};
