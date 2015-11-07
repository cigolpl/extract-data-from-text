'use strict';

var should = require('should');
var Extractor = require('./../lib/index');

describe('extract data', function() {

  describe('extract emails', function() {
    it('should get emails', function (done) {
      var text = 'lorem ipsum a@domain.com aaa';
      should(Extractor.emails(text)).be.instanceOf(Array);
      should(Extractor.emails(text)[0]).be.equal('a@domain.com');

      var text = 'lorem ipsum a@domain.com aaa b@domain.com a@domain.com';
      should(Extractor.emails(text)[0]).be.equal('a@domain.com');
      should(Extractor.emails(text)[1]).be.equal('b@domain.com');

      var text = 'lorem ipsum a@domain.com)';
      should(Extractor.emails(text)[0]).be.equal('a@domain.com');
      done();
    })

    it('should not find emails', function (done) {
      var text = '';
      should(Extractor.emails(text)).be.instanceOf(Array).and.have.length(0);
      done();
    })
  });

  describe('extract phone numbers', function() {
    it('should get phones', function (done) {
      var text = 'aa 666000888';
      should(Extractor.phones(text)).be.instanceOf(Array);
      should(Extractor.phones(text)[0]).be.equal('666000888');

      var text = 'aa 666000888';
      should(Extractor.phones(text)).be.instanceOf(Array);
      should(Extractor.phones(text)[0]).be.equal('666000888');

      var text = '+1 123456789';
      should(Extractor.phones(text)[0]).be.equal('+1123456789');

      var text = '+1 123 456 789';
      should(Extractor.phones(text)[0]).be.equal('+1123456789');

      var text = '+1-123-456-789';
      should(Extractor.phones(text)[0]).be.equal('+1123456789');

      var text = '+1 123 456 789 john john +1 432 456 789 aaa';
      should(Extractor.phones(text)[0]).be.equal('+1123456789');
      should(Extractor.phones(text)[1]).be.equal('+1432456789');
      should(Extractor.phones(text)[1]).be.equal('+1432456789');

      done();
    })

    it('should not find phones', function (done) {
      var text = '';
      should(Extractor.phones(text)).be.instanceOf(Array).and.have.length(0);
      done();
    })
  });
});
