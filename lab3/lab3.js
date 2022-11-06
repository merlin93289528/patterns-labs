var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType[AuthorizationType["LoginAndPassword"] = 0] = "LoginAndPassword";
    AuthorizationType[AuthorizationType["SMS"] = 1] = "SMS";
    AuthorizationType[AuthorizationType["Service"] = 2] = "Service";
})(AuthorizationType || (AuthorizationType = {}));
var LoginPasswordAuthorization = /** @class */ (function () {
    function LoginPasswordAuthorization() {
    }
    LoginPasswordAuthorization.prototype.execute = function (data) {
        if (data.login == 'root' && data.password == '123') {
            return 'Привіт!';
        }
        return 'Access denied!';
    };
    return LoginPasswordAuthorization;
}());
var SMSAuthorization = /** @class */ (function () {
    function SMSAuthorization() {
    }
    SMSAuthorization.prototype.execute = function () {
        console.log('SMS code: 123');
        return 'Привіт!';
    };
    return SMSAuthorization;
}());
var ServiceAuthorization = /** @class */ (function () {
    function ServiceAuthorization() {
    }
    ServiceAuthorization.prototype.execute = function () {
        console.log('Connection...');
        console.log('Success!');
        return 'Привіт!';
    };
    return ServiceAuthorization;
}());
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeStrategy = function (data) {
        return this.strategy.execute(data);
    };
    return Context;
}());
function main() {
    var strategy = AuthorizationType.LoginAndPassword;
    var data = { login: 'root', password: '123' };
    var context = new Context();
    if (strategy == AuthorizationType.LoginAndPassword) {
        context.setStrategy(new LoginPasswordAuthorization());
    }
    else if (strategy == AuthorizationType.SMS) {
        context.setStrategy(new SMSAuthorization());
    }
    else if (strategy == AuthorizationType.Service) {
        context.setStrategy(new ServiceAuthorization());
    }
    var result = context.executeStrategy(data);
    console.log(result);
}
main();
