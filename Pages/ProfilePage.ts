import { BasePage } from "../Utils/BasePage";

export class ProfilePage extends BasePage {

     async ClickEditProfile() {
        await this.ClickElement(this.page.getByRole('button', {name: 'Edit Profile'}));
    }

     async UploadProfilePicture() {
        await this.page.locator('#profilePicture').setInputFiles('Test-data/TheGoat');
    }

     async ClickSaveChanges() {
        await this.ClickElement(this.page.getByRole('button', {name: 'Save Changes'}));
    }


    async EditGithubName(username: string) {
        await this.EnterText(this.page.getByPlaceholder('e.g. octat'), username);
    }
     
    
    
    
    // Remember to Assert weather the picture was uploaded successfully!!.

}