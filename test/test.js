
const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function(){
    it('Si la palabra original es un palimodro, se devuelve la misma palabra', function(){
         const translation = platzom("Programar");
         expect (translation).to.equal("Program");
    });
     it('Si la palabra termina en "ar", se le quitan los dos caracteres', function(){
         const translation1 = platzom("Zorro");
         const translation2 = platzom("Zarpar");

         expect(translation1).to.equal("Zorrope");
         expect(translation2).to.equal("Zarppe");
        
    });
      it('Si la palabra inicia con Z, se le añade "Pe" al final', function(){
        const translation3 = platzom("abecedario");
        expect(translation3).to.equal("abece-dario");
    });
});