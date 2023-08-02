describe("Log in and Sign up test", () => {
    it('test', () => {

        let Email;

        function generateRandomEmail() {
            const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
            const randomDomain = domains[Math.floor(Math.random() * domains.length)];

            const usernameLength = Math.floor(Math.random() * 10) + 5; 
            let username = '';
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

            for (let i = 0; i < usernameLength; i++) {
                username += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return username + '@' + randomDomain;
        }

        
        const randomEmail = generateRandomEmail();
       



        const FirstNameList = ["ahmad", "mohammad", "ali"]
        const LastNameList = ["anas", "omar", "abed "]
        let randomIndex = Math.floor((Math.random() * 3))
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")

        cy.get('#firstname').type(FirstNameList[randomIndex])
        cy.get('#lastname').type(LastNameList[randomIndex])
        cy.get('#email_address').type(randomEmail)

        cy.get('#password').type("ASDasd!@#")
        cy.get('#password-confirmation').type("ASDasd!@#")

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        Email = randomEmail

        cy.visit("https://magento.softwaretestingboard.com/customer/account/logout/")

        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type(Email)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("ASDasd!@#")

        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    });
})