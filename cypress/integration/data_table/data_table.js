import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('url git',()=>{

cy.visit('https://automationexercise.com/')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})
Given('datalari kullanarak sayfaya gir',(dataTable)=>{

    cy.get('.login-form > form > [type="email"]').
    type(dataTable.rawTable[1][0])
    
    cy.get('[type="password"]').type(dataTable.rawTable[1][1])


})
Given('login butonuna tikla',()=>{

        cy.get('.login-form > form > .btn').click()
})
Then('sayfaya girdigini onayla',()=>{

    cy.get(':nth-child(10) > a').should('contain.text','Logged')
})

