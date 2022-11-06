class User {
    public login: string;
    private password: string;
    public email: string;

    constructor(login: string, password: string, email: string) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
}

class Calendar {
    public eventList: Array<SimpleEvent>;

    constructor(eventList: Array<SimpleEvent>) {
        this.eventList = eventList;
    }

    addNewEvent(newEvent: SimpleEvent) {
        this.eventList.push(newEvent);
    }

    copyEvent(eventId: number, newDate: Date) {
        let newEvent: SimpleEvent = this.eventList[eventId].clone();
        newEvent.eventDate = newDate;
        this.eventList.push(newEvent);
        return newEvent;
    }

    showAllEvents() {
        return this.eventList;
    }
}

abstract class SimpleEvent {
    public eventDate: Date;
    public eventDescription: string;
    protected secretKey: string;
    public participantList: Array<User>;

    constructor(
        eventDate: Date, 
        eventDescription: string, 
        secretKey: string, 
        participantList: Array<User>
    ) {
        this.eventDate = eventDate;
        this.eventDescription = eventDescription;
        this.secretKey = secretKey;
        this.participantList = participantList;
    }

    abstract clone(): SimpleEvent;
}

class Meeting extends SimpleEvent {
    public startTime: Date;
    public endTime: Date;

    constructor(
        eventDate: Date, 
        eventDescription: string, 
        secretKey: string, 
        participantList: Array<User>,
        startTime: Date,
        endTime: Date
    ) {
        super(
            eventDate, 
            eventDescription, 
            secretKey, 
            participantList
        );
        this.startTime = startTime;
        this.endTime = endTime;
    }

    clone(): SimpleEvent {
        return new Meeting(
            this.eventDate, 
            this.eventDescription, 
            this.secretKey, 
            this.participantList,
            this.startTime,
            this.endTime
        )
    }
}

class Birthday extends SimpleEvent {
    public birthdayBoy: User;

    constructor(
        eventDate: Date, 
        eventDescription: string, 
        secretKey: string, 
        participantList: Array<User>,
        birthdayBoy: User
    ) {
        super(
            eventDate, 
            eventDescription, 
            secretKey, 
            participantList
        );
        this.birthdayBoy = birthdayBoy;
    }

    clone(): SimpleEvent {
        return new Birthday(
            this.eventDate, 
            this.eventDescription, 
            this.secretKey, 
            this.participantList,
            this.birthdayBoy
        )
    }
}

function main() {
    const firstMeeting: Meeting = new Meeting(
        new Date('1995-12-17T03:24:00'),
        'first meeting',
        '#$@FGY',
        [
            new User(
                'alex',
                'qwerty123',
                'alex@gmail.com'
            ),
            new User(
                'steve',
                'asd123',
                'steve@gmail.com'
            )
        ],
        new Date('1995-12-17T03:24:00'),
        new Date('1995-12-17T05:24:00')
    );

    const secondMeeting: Meeting = new Meeting(
        new Date('2003-12-17T03:24:00'),
        'second meeting',
        'FSKG@$!1',
        [
            new User(
                'max',
                'qwerty123',
                'max@gmail.com'
            ),
            new User(
                'molly',
                'asd123',
                'molly@gmail.com'
            )
        ],
        new Date('2003-12-17T03:24:00'),
        new Date('2003-12-17T06:24:00')
    );

    const myBirthday: Birthday = new Birthday(
        new Date('2003-02-07T03:24:00'),
        'my birthday',
        'SMTH!#',
        [
            new User(
                'max',
                'qwerty123',
                'max@gmail.com'
            ),
            new User(
                'molly',
                'asd123',
                'molly@gmail.com'
            )
        ],
        new User (
            'misha',
            'pass123',
            'misha@proton.com'
        )
    );

    const calendar: Calendar = new Calendar([firstMeeting, secondMeeting, myBirthday]);

    let newEvent: SimpleEvent = calendar.copyEvent(0, new Date('2022-12-12T12:12:00'));
    console.log(newEvent);
    console.log(calendar.eventList);
}

main()