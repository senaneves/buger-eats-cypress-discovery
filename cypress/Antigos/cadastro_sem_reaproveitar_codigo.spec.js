import SignupPage from '../pages/SignupPages'


describe('Cadastro', ()=>{
    it('Usuario deve se tornar um entragador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1')
        .should('have.text', 'Cadastre-se para  fazer entregas') // embora seja uma verificação é um checkpoint

        var deliver = {
            name: 'Márcio Neves',
            cpf: '84452155635',
            email: 'senaneves@gmail.com',
            whatsapp: '999999999',
            address: {
                postalcode: '41254270',
                street:'Estrada do Mandu',
                number: '560',
                datails: 'Ap1401',
                district: 'São Rafael',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.datails)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('form button[type=submit]').click()

        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('.swal2-container div[class="swal2-html-container"]').should('have.text', expectedMessage)

    })

    it('CPF invalido', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1')
        .should('have.text', 'Cadastre-se para  fazer entregas') // embora seja uma verificação é um checkpoint

        var deliver = {
            name: 'Márcio Neves',
            cpf: '844521556AA',
            email: 'senaneves@gmail.com',
            whatsapp: '999999999',
            address: {
                postalcode: '41254270',
                street:'Estrada do Mandu',
                number: '560',
                datails: 'Ap1401',
                district: 'São Rafael',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.datails)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('form button[type=submit]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })
})