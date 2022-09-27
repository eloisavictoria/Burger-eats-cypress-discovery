
/**primeiro arquivo de teste criado na mão
 * Describe - nome da suite de teste
 * ()=> função em javascript
 */
describe('home page', ()=>{
    /**criando caso de teste 
     * it - palavra reservada para poder criar um caso de teste
     * dentro dos parenteses vem o nome do caso de teste
    */
    it('app deve estar online', ()=>{
        /**novo bloco de função 
         * cy - comando do cypress
         * viewport - ajustando a resolução
        */
        cy.viewport(1440, 900)
        
        //comando que fará o cypresse acessar o site
        cy.visit('https://buger-eats.vercel.app/')

        /**busca o elemento h1 na página
         * should - fala que um elemento deveria conter determinada informação
         * have.text - deve ter o texto
         * validando se o elemento h1 tem o slogan
        */
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        
    })
})