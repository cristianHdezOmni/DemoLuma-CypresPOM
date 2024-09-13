class CreateAccountFormPage{
    elements = {
        firstNameInput: ()=> cy.get('#firstname'),
        lastNameInput: ()=> cy.get('#lastname'),
        signUpCheck: ()=> cy.get('#is_subscribed'),
        allowRemoteCheck: ()=> cy.get('#assistance_allowed_checkbox'),
        emailInput: ()=> cy.get('#email_address'),
        passwordInput: ()=> cy.get('#password'),
        confirmPasswordInput: ()=> cy.get('#password-confirmation'),
        createAccountButton: ()=> cy.get('#form-validate > .actions-toolbar > div.primary > #send2 > span')
    };

    completeAccountForm(firstName, lastName, email, passwor){
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.signUpCheck().click();
        this.elements.allowRemoteCheck().click();
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(passwor);
        this.elements.confirmPasswordInput().type(passwor);
        this.elements.createAccountButton().click();
    }

}
export default CreateAccountFormPage;