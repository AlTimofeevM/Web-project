const index = require('../app')
const  should = require('should')
const supertest = require('supertest')
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
    
    it('Проверка поиска фильма по Id : ', async () => {
        let Film = await db.findFilmById('5c1529e3b81479265802dbef')
        const result = Film.Name
        expect(result).to.equal('Kostroma')
      });

      it('Проверка поиска пользователя по Token', async () => {
        let User = await db.findUserByToken("google-oauth2|102248226356414436609")
        const result = User.FirstName + ' ' + User.LastName
        expect(result).to.equal('Alexandr Timofeev')
      });

      it('Проверка поиска пользователя по Id', async () => {
        let User = await db.findUserById('5c13c02401ea172a184d87b5')
        const result = User.FirstName + ' ' + User.LastName
        expect(result).to.equal('Alexandr Timofeev')
      });

      it('Проверка наличия фильма у пользователя', async () => {
        const result = await db.isFilm("google-oauth2|102248226356414436609",'Kostroma')
        expect(result).to.equal(true)
      });
      
    it('Проверка времени < 500ms', function(done){
        this.timeout(500)
        setTimeout(done, 300)
      })

})