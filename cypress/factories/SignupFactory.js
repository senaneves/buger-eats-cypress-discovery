var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '999999999',
            address: {
                postalcode: '41254270',
                street: 'Estrada do Mandu',
                number: '560',
                datails: 'Ap1401',
                district: 'São Rafael',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }

}