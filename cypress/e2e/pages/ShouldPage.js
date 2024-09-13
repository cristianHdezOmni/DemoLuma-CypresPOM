class ShouldPage{
    elements = {
        successMessage:()=>cy.get('#maincontent > div.page.messages > div:nth-child(2) > div:nth-child(1) > div > div')
    };
    SuccessfulPurchaseMessage(message){
        this.elements.successMessage().should("contain.text",message);
    }
}

export default ShouldPage;