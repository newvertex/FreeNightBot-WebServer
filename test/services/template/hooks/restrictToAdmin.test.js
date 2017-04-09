'use strict';

const assert = require('assert');
const restrictToAdmin = require('../../../../src\services\template\hooks\restrictToAdmin.js');

describe('template restrictToAdmin hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictToAdmin()(mockHook);

    assert.ok(mockHook.restrictToAdmin);
  });
});
