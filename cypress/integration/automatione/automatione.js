import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('Url git', ()=>{
    cy.visit('https://automationexercise.com/')
})
And('Login tikla',() => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a')
    .click()
})

And('Username ve password gir',() => {
    cy.get('.login-form > form > [type="email"]')
    .type('istanbul@evim.com')
    cy.get('[type="password"]')
    .type('12345')
})

And('Login butonuna tikla',() => {
    cy.get('.login-form > form > .btn').click()
})
And('giris yapildigini onayla',() => {
    cy.get('b').should('contains.text','istanbul')
})


