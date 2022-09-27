import signupFactory from '../factories/SignupFactory';
import SignupPage from '../pages/SignupPage';
import signup from '../pages/SignupPage';
//nome da suite de teste

/**
 * arrow function: () => {}
 * função com palavra reservada: function(){}
 */

describe('Signup', ()=>{

/*
    before(
    function(){
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de teste.');
    })

    beforeEach(
        function(){
            cy.log('Tudo aqui é executado uma única vez ANTES de CADA caso de teste.');
        })

    after(
        function(){
            cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de teste.');
    })

    afterEach(
        function(){
            cy.log('Tudo aqui é executado uma única vez DEPOIS de CADA caso de teste.');
    })
*/

/*beforeEach(
    function(){
        /**
         * fixture('deliver') - não preciso passar a extensão pq o cypress já identifica
         * trabalha de forma sincrona
         * then pega o resultado, passando um parametro
         
        cy.fixture('deliver').then((deliver_result)=>{
            this.deliver = deliver_result
        })
    })*/

    //implementação do cenario
    it('User should be deliver', function(){
       
        var deliver = signupFactory.deliver();

       //criando a massa de teste
       /*var deliver = {
        name: 'Papito',
        cpf: '00000000056',
        email: 'papito@hotmail.com',
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

    }*/
    
    signup.go();
    signup.fillForm(deliver);
    signup.submit();

   /* const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShouldBe(expectedMessage);*/
        

    })

    it('Incorrect document', function(){
      
        var deliver = signupFactory.deliver();
        deliver.cpf = 'ascv123456';
        //criando a massa de teste
        /*var deliver = {
            name: 'Papito',
            cpf: '00000014141MM',
            email: 'papito@hotmail.com',
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

        }*/

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');
        
    })

    it('Incorrect email', function(){

        var deliver = signupFactory.deliver();

        deliver.email = 'user.com.br'
        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.');
        
    })

    //contexto
    context('Required fields', function(){
        //massa de teste esperada
        //array de mensagens
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            //aqui não vamos preencher os campos pq queremos testar obrigatoriedade deles
            signup.go();
            signup.submit();
        })

        //vai percorrer o forumlário e quando falhar na validação de um campo, ele vai continuar com a validação dos outros campos
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output);
            })
        })
    })

    /*
    it('Required fields', function(){
        signup.go();
        signup.submit();

        signup.alertMessageShouldBe('É necessário informar o nome');
        signup.alertMessageShouldBe('É necessário informar o CPF');
        signup.alertMessageShouldBe('É necessário informar o email');
        signup.alertMessageShouldBe('É necessário informar o CEP');
        signup.alertMessageShouldBe('É necessário informar o número do endereço');
        signup.alertMessageShouldBe('Selecione o método de entrega');
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH');

    })*/
})