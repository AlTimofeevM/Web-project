const index = require('../app')
const  should = require('should')
const supertest = require('supertest')
const imdb  = require('imdb-api')
const db = require('../controllers/dbController.js')
const chai = require('chai')
const expect = chai.expect;


describe('Тесты', function(){

    it('Нужна авторизация для пользовтелей', function(done){
        supertest('http://localhost:8080')
            .get('/user')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            });

    })

    it('Нужна авторизация для фильмов', function(done){
        supertest('http://localhost:8080')
            .get('/film/titanic')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            });

    })
    
    it('Проверка поиска фильма (Titanic): ', async () => {
        let Film = await imdb.get({name: 'Titanic'}, {apiKey: '94de8488'}).catch(console.log)
        const result = Film.year
        expect(result).to.equal(1997)
      });

      it('Проверка поиска пользователя ', async () => {
        let User = await db.findUserByToken("google-oauth2|102248226356414436609")
        const result = User.FirstName + ' ' + User.LastName
        expect(result).to.equal('Alexandr Timofeev')
      });
      
    it('Проверка времени < 500ms', function(done){
        this.timeout(500)
        setTimeout(done, 300)
      })

})