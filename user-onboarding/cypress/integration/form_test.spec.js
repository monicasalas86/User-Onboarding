describe('User Form', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
    const error = () => cy.get('div[class=errors]')

    describe('can type in inputs', () => {
        it('can type name', () => {
            nameInput()
                .should('have.value', '')
                .type('Monica')
                .should('have.value', 'Monica')
        })
        it('can type email', () => {
            emailInput()
                .should('have.value', '')
                .type('moni@moni.com')
                .should('have.value', 'moni@moni.com')
        })
        it('can type password', () => {
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })
    })

    it('can check off Terms of Service', () => {
        termsInput().click()
    })

    describe('Submitting a form', () => {
        it('User can submit a new form', () => {
            nameInput().type('Monica')
            emailInput().type('mo@mo.com')
            passwordInput().type('password12')
            termsInput().click()
            submitBtn().click()
        })
        it('Checking form validation if left empty', () => {
            nameInput().type('Moni')
            emailInput().type('moni')
            error().siblings('div:nth-of-type(2)').should('exist')

            
        })
    })


})
// DANGER ZONE!!