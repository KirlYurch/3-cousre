import * as S from "./PopExit.Styled.js";

export default function PopExit() {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#"> 
            <S.PopExitGroup>
              <S.PopExitYes id="exitYes">
                <S.PopExitYesA href="modal/signin.html">Да, выйти</S.PopExitYesA>{" "}
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <S.PopExitNoA href="main.html">Нет, остаться</S.PopExitNoA>{" "}
              </S.PopExitNo>
            </S.PopExitGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
