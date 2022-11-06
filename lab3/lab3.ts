enum AuthorizationType {
    LoginAndPassword,
    SMS,
    Service
}

interface Strategy {
    execute(data?: Object): string
}

class LoginPasswordAuthorization implements Strategy {
    execute(data: {login: string, password: string}): string {
        if (data.login == 'root' && data.password == '123') {
            return 'Привіт!';
        }
        return 'Access denied!';
    }
}

class SMSAuthorization implements Strategy {
    execute(): string {
        console.log('SMS code: 123');
        return 'Привіт!';
    }
}

class ServiceAuthorization implements Strategy {
    execute(): string {
        console.log('Connection...');
        console.log('Success!');
        return 'Привіт!';
    }
}

class Context {
    private strategy: Strategy;

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data?: Object) {
        return this.strategy.execute(data);
    }
}

function main() {
    const strategy: AuthorizationType = AuthorizationType.LoginAndPassword;
    const data: Object = {login: 'root', password: '123'};
    const context = new Context();

    if (strategy == AuthorizationType.LoginAndPassword) {
        context.setStrategy(new LoginPasswordAuthorization());
    } else if (strategy == AuthorizationType.SMS) {
        context.setStrategy(new SMSAuthorization());
    } else if (strategy == AuthorizationType.Service) {
        context.setStrategy(new ServiceAuthorization());
    }

    let result = context.executeStrategy(data);
    console.log(result);
}

main()