export class LoginPage1 {

    constructor(private page: any) { }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/v1/");
    }
    async login(username: string, password: string, Firstname: string, LastName: string, PostName: any) {

        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.getByRole('button', { name: 'LOGIN' }).click();


        await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await this.page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await this.page.getByRole('link', { name: '2' }).click();
        await this.page.getByRole('link', { name: 'CHECKOUT' }).click();
        await this.page.locator('[data-test="firstName"]').fill(Firstname);
        await this.page.locator('[data-test="lastName"]').fill(LastName);
        await this.page.locator('[data-test="postalCode"]').fill(PostName);
        await this.page.getByRole('button', { name: 'CONTINUE' }).click();
        await this.page.getByRole('link', { name: 'FINISH' }).click();

        await this.page.getByRole('button', { name: 'Open Menu' }).click();
        await this.page.getByRole('link', { name: 'Logout' }).click();

        //await this.page.pause();
    }
}