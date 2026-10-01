import { BasePage } from "../Utils/BasePage";

export class DashboardPage extends BasePage {

    async ClickMenu() {

        await this.ClickElement(this.page.getByRole('button', {name: 'Menu'}));
    }

    async ClickMyProfile() {

        await this.ClickElement(this.page.getByRole('button', {name: 'My Profile'}));
    }

}