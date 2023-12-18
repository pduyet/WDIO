class LoginPage {
    get username(){
        return $("//input[@id='user-name']")
    }
    get password(){
        return $("//input[@id='password']")
    }
    get loginButton(){
        return  $("//input[@id='login-button']")
    }
    get messageBox(){
        return $('#flash')
    }
 async login(username, password){
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click()
    }
 }
 export default new LoginPage();