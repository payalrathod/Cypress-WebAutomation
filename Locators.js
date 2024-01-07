/// <reference types="cypress" />

describe('First test suite', () => {
  
  it('first test', () => {
    cy.visit('/provideBaseURL') //if url is provided in configuration put only '/'
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    
    //by Tag Name
    cy.get('input')

    //by ID
    cy.get('#inputEmail1')

    //by Class value
    cy.get('.input-full-width')

    //by Attribute name
    cy.get('[fullwidth]')

    //by Attribute and value
    cy.get('[placeholder="Email"]')

    //by entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by two Attributes
    cy.get('[placeholder="Email"][fullwidth]') //no space between values

    //by tag, attribute id and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    //by cypress test ID
    cy.get('[data-cy="inputEmail1"]')
  })
  
  it('second test', () => {
    //put the code of the test
  })
  
  it('third test', () => {
    //put the code of the test
  })
})
