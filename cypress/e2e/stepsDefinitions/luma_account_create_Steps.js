import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";
import CreateAccountFormPage from "../pages/CreateAccountFormPage";
import ShouldPage from "../pages/ShouldPage";

let homePage = new HomePage();
let createAccountFormPage = new CreateAccountFormPage();
let shouldPage = new ShouldPage();

Given("que el usuario se dirige a la página customer account create",async function() {
    cy.viewport(1920, 1080);
    cy.visit("/");
    homePage.accessCreateAccount();
});

When("el usuario diligencia el formulario con los campos obligatorios", async function(dataTable) {
    const testData = dataTable.hashes();  
    console.log('value testData: ',testData);
    createAccountFormPage.completeAccountForm(testData[0].first_name,testData[0].last_name, testData[0].email, testData[0].password);


});

Then("la cuenta debe ser creada exitosamente y mostrar el siguiente mensaje {string}", async function(mensaje) {
    shouldPage.SuccessfulPurchaseMessage(mensaje);
});