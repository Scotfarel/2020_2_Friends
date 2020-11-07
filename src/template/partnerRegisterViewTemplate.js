/**
 * Templating html-code using handlebars templater for register.
 */
export const renderRegisterView = () => window.Handlebars.compile(`
<div class="regestration-page__background">
<div class="regestration-page__input-block">
    <div class="js-login-errors text-error"></div>
    <input type="text" class="common-input js-input-login" placeholder="Логин:" ></input>
    <div class="js-email-errors text-error"></div>
    <input type="text" class="common-input js-input-email" placeholder="Email": ></input>
    <div class="js-password-errors text-error"></div>
    <input type="text" class="common-input js-input-password" placeholder="Пароль:" ></input>
    <input type="text" class="common-input js-input-password-second" placeholder="Повторите пароль:"></input>
    <button class="proceed-button js-submit-reg">Зарегестрироваться</button>
    <button class="js-to-login link info-button">Войти</button>
</div>
</div>`
)