const index = require('../app')
const  should = require('should')
const supertest = require('supertest')

describe('Тесты', function(){

    it('Проверка статуса главной страницы', function(done){
        supertest('http://localhost:8080')
            .get('/user')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            });

    })

    

    it('Проверка времени < 500ms', function(done){
        this.timeout(500)
        setTimeout(done, 300)
      })

})