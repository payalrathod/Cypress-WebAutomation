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
    cy.visit('/provideBaseURL') //if url is provided in configuration put only '/'
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    
    //Theory
    // get() - find elements on the page by locator globally
    // find() - find child elements by locator
    // contains() -  find by HTML text and by text and locator

    cy.contains('Sign In') //if 2 buttons are with same name, it clicks only the first one
    cy.contains('[status="warning"]','Sign In') //use locator to find other button

    cy.contains('nb-card','Horizontal form').find('button')
    cy.contains('nb-card','Horizontal form').contains('Sign In')
    cy.contains('nb-card','Horizontal form').get('button')  //finds all buttons on the page

    //cypress chains and DOM
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign In')
      .parents('form')
      .find('nb-checkbox')
      .click()
  })

  //only is used to run only the below test case rest will be ignored.
  it.only('save subject of the command', () => {
    //put the code of the test
    
    cy.visit('/provideBaseURL') //if url is provided in configuration put only '/'
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //validate values on the screen
    cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    //cant do things like this ie either of the command will work at a time
    // const usingTheGrid = cy.contains('nb-card','Using the Grid')
    // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
    // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

    // 1 Cypress Alias
    cy.contains('nb-card','Using the Grid').as('usingTheGrid')
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    // 2 Cypress then() methods
    cy.contains('nb-card','Using the Grid').then(usingTheGridForm => {
      cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
      cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
    })
    
  })
})
