import { BasePage } from "../Utils/BasePage";

export class HomePage extends BasePage{

    async OpenNdosiPage() {

        await this.GoToUrl('/');
    }

    async VerifySite() {

        await this.VerifyElementVisibility(this.page.getByRole('heading', {name: /Welcome\s*back/i}));
    }

    async NevigateToLoginForm() {

        await this.ClickElement(this.page.getByRole('button', {name:'Login'}));
    }
}