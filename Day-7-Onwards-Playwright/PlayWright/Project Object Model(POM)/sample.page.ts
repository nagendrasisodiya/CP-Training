class sample{
    usernameTF:string
    passwordTF:string
    SubmitBtn:any
    page:any

    constructor(page) {
        this.page = page
        this.usernameTF=page.locator('//input[@id="username"]')
        this.passwordTF=page.locator('//input[@id="password"]')
        this.SubmitBtn=page.locator('//button[@id="submit"]')
    }

    async performLogin(url:string, username:string, password:string) {
        await this.page.goto(url)
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SubmitBtn.click()
        await this.page.waitForTimeout(2000)    }
}

export default sample