import { expect } from "@playwright/test";
import { BasePage } from "../Utils/BasePage";

export class LoginPage extends BasePage {

    async UserLogin(email: string, password: string) {

       // await expect(this.page).toHaveTitle(/Ndosi Test Automation/i);
        
        await this.EnterText(this.page.locator('#login-email'), email);

        await this.EnterText(this.page.locator('#login-password'), password);

        await this.ClickElement(this.page.getByRole('button', {name: 'Login'}));

    }

}