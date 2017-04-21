module.exports = function(){
  this.When(/^visitamos la página "([^"]*)"$/, function (site, callback) {
    browser.get(site).then(callback);
  });

  this.Given(/^que estamos en la página "([^"]*)"$/, function (site, callback) {
    browser.get(site).then(callback);
  });

  this.Given(/^podemos ver el campo "([^"]*)"$/, function (idCampo, callback) {
    browser.driver.findElement(by.id(idCampo)).then(function(foundElement){
      callback();
    }, function(){
      callback(new Error('No se encuentra el campo ' + idCampo));
    });
  });

  this.Given(/^podemos ver el botón "([^"]*)"$/, function (idBoton, callback) {
    browser.driver.findElement(by.id(idBoton)).then(function(foundElement){
      callback();
    }, function(){
      callback(new Error('No se encuentra el botón ' + idBoton));
    });
  });

  this.Then(/^se muestra un mensaje de error$/, function (callback) {
      browser.driver.findElement(by.selector(''));

         // Write code here that turns the phrase above into concrete actions
       callback(null, 'pending');
   });


  this.When(/^escribimos "([^"]*)" en el campo "([^"]*)"$/, function (valor, idCampo, callback) {
    browser.driver.findElement(by.id(idCampo)).then(function(foundElement){
      foundElement.sendKeys(valor).then(callback);
    }, function(){
      callback(new Error('No se encuentra el campo ' + idCampo));
    });
  });

  this.Then(/^el campo "([^"]*)" muestra el valor "([^"]*)"$/, function (idCampo, valorEsperado, callback) {
    browser.driver.findElement(by.id(idCampo)).then(function(foundElement){
      foundElement.getAttribute('value').then(function(valorDelCampo){
        if(valorDelCampo){
          if(valorDelCampo === valorEsperado){
            callback();
          }else{
            callback(new Error('El campo ' + idCampo + ' tiene el valor ' + valorDelCampo + ' y se esperaba ' + valorEsperado));
          }
        }else{
          foundElement.getText().then(function(texto){
            if(texto === valorEsperado){
              callback();
            }else{
              callback(new Error('El campo ' + idCampo + ' tiene el texto ' + texto + ' y se esperaba ' + valorEsperado));
            }
          });
        }
      });
    }, function(){
      callback(new Error('No se encuentra el campo ' + idCampo));
    });
  });

  this.When(/^pulsamos el botón "([^"]*)"$/, function (idBoton, callback) {
    browser.driver.findElement(by.id(idBoton)).then(function(foundElement){
      foundElement.click().then(function(){
        callback();
      });
    }, function(){
      callback(new Error('No se encuentra el botón ' + idBoton));
    });
  });
}
