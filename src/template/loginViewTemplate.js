export const renderLoginView = () => {
    return window.Handlebars.compile(`
        <div class="login_page">
            <div class="col-container">
                <img src="assets/img/logo.png" class="log_image">
                <input type="email" class="input_text" placeholder="Логин:">
                <input type="password" class="input_text" placeholder="Пароль:">
                <div class="signup">
                    <a href="" class="link">Зарегистрироваться</a>
                </div>
                <div>
                    <button class="login">Войти</button>
                </div>
            </div>
        </div>`
    )
}
