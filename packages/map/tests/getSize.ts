import {assert} from 'chai';
import {empty, getSize, set, remove} from '../src';

suite('Map', () => {
  suite('getSize()', () => {
    test('returns 0 when the map empty', () => {
      assert.strictEqual(getSize(empty()), 0);
    });

    test('returns the correct size after adding entries', () => {
      var map1 = set('x', 1, empty());
      var map2 = set('x', 2, map1);
      var map3 = set('y', 1, map1);
      assert.strictEqual(getSize(map1), 1);
      assert.strictEqual(getSize(map2), 1);
      assert.strictEqual(getSize(map3), 2);
    });

    test('returns the correct size after removing entries', () => {
      var map = set('x', 1, empty());
      map = set('y', 3, map);
      map = set('z', 5, map);
      assert.strictEqual(getSize(map = remove('x', map)), 2);
      assert.strictEqual(getSize(map = remove('y', map)), 1);
      assert.strictEqual(getSize(remove('z', map)), 0);
    });
  });
});