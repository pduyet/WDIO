let userName = "//input[@id='user-name']"
let password = "//input[@id='password']"
let btnLogin = "//input[@id='login-button']"

class LoginPage {
    get username() {
        return $(userName)
    }
    get password() {
        return $(password)
    }
    get loginButton() {
        return $(btnLogin)
    }
    async login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click()
    }
}
export default new LoginPage();