// import SignupPage from '../pages/SignupPages'
import signup from '../pages/SignupPages'


describe('Cadastro', () => {
    
    //var signup = new SignupPage

    // before(function () {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })


    // beforeEach(function () {
    //     cy.log('Tudo aqui é executado sempre ANTES de cada caso de teste')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de cada caso de teste')
    // })
    // after(function () {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })


    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })

    it('Usuario deve se tornar um entragador', function() {
        
        // var deliver = {
        //     name: 'Márcio Neves',
        //     cpf: '84452155635',
        //     email: 'senaneves@gmail.com',
        //     whatsapp: '999999999',
        //     address: {
        //         postalcode: '41254270',
        //         street: 'Estrada do Mandu',
        //         number: '560',
        //         datails: 'Ap1401',
        //         district: 'São Rafael',
        //         city_state: 'Salvador/BA'
        //     },
        //     delivery_method: 'Moto',
        //     cnh: 'cnh-digital.jpg'
        // }

        

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF invalido', function() {

        


        // var deliver = {
        //     name: 'Márcio Neves',
        //     cpf: '844521556AA',
        //     email: 'senaneves@gmail.com',
        //     whatsapp: '999999999',
        //     address: {
        //         postalcode: '41254270',
        //         street: 'Estrada do Mandu',
        //         number: '560',
        //         datails: 'Ap1401',
        //         district: 'São Rafael',
        //         city_state: 'Salvador/BA'
        //     },
        //     delivery_method: 'Moto',
        //     cnh: 'cnh-digital.jpg'
        // }

        signup.go()
        signup.fillForm(this.deliver.cpf_invalido)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})