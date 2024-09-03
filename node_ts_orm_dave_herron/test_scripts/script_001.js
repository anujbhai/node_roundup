function greeter(person) {
    return "Hello, " + person;
}
var user = [0, 1, 2];
// greeter(user)
var list = [1, 2, 3];
var KeyValue = /** @class */ (function () {
    function KeyValue() {
    }
    Object.defineProperty(KeyValue.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (_k) {
            this._key = _k;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_v) {
            this._value = _v;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValue;
}());
var kv = new KeyValue();
kv.key = 1;
kv.value = "value";
