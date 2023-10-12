import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('url git',()=>{

cy.visit('https://www.google.com')

})


Given('arama yapilacak {string}',(capitals)=>{

    cy.get('#APjFqb').type(capitals)
    cy.get('.FPdoLc > center > .gNO89b').click({force:true})
    })


    Given('arama yapildigini kontrol et {string}',(capitals)=>{

        cy.title().should('include', capitals)
        cy.get('#APjFqb').should('include', capitals)
    })
