class HomePage{
    elements = {
        menuOptionCreateAccount: ()=>cy.get('a').contains('Create an Account')
    };

    accessCreateAccount(){
        this.elements.menuOptionCreateAccount().click()
    }
}

export default HomePage;