
class SignupPage{

    go(){
        //cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')//checkpoint pra garantir que você passou por essa tela antes de prosseguir com as outras etapas
    
    }

    fillForm(deliver){
         //preenchendo os campos
         cy.get('input[name="fullName"]').type(deliver.name);
         cy.get('input[name="cpf"]').type(deliver.cpf);
         cy.get('input[name="email"]').type(deliver.email);
         cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
         
         cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
         cy.get('input[type=button][value="Buscar CEP"]').click();
         cy.get('input[name="address-number"]').type(deliver.address.number); 
         cy.get('input[name="address-details"]').type(deliver.address.details);
 
         //verificando se os campos que preenchem sozinhos, estão com o valor que consta na nossa massa de dados
         cy.get('input[name="address"]').should('have.value', deliver.address.street);
         cy.get('input[name="district"]').should('have.value', deliver.address.district);
         cy.get('input[name="city-uf"]').should('have.value', deliver.address.state);
     
 
         cy.contains('.delivery-method li', deliver.delivery_method).click();
 
         //^seleciona todo o atributo que começa com a palavra pesquisada
         //$ seleciona tudo que termina com a palavra pesquisada
         //* seleciona tudo aquilo que contem a palavra pesquisada.
         cy.get('input[accept^="image"]').attachFile('/image/' + deliver.cnh);
 
    }

    submit(){
        //cy.get('form button[type="submit"]').click();
        cy.get('form button[class="button-success"]').click();
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage);
    }

    alertMessageShouldBe(expectedMessage){
         //cy.get('.alert-error').should('have.text', expectedMessage);

         //comnbina as informações, vai olhar a classe alert-error e ver se qual possui o texto que foi passado
         cy.contains('.alert-error', expectedMessage).should('be.visible');
    }

}

export default new SignupPage;
