var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default{

    deliver: function(){

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email(firstName);

        var data = {
            name: `${firstName} ${lastName}`, 
            cpf: cpf.generate(),
            email: `${email}`,
            whatsapp: '11999999999',
            address: {
                postalcode: '75040-040',
                street: 'Avenida Presidente Kennedy',
                number: '100',
                details: 'apt 1',
                district: 'Maracanã',
                state: 'Anápolis/GO'
            },
    
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data;
    }
}