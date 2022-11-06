var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
    return User;
}());
var Calendar = /** @class */ (function () {
    function Calendar(eventList) {
        this.eventList = eventList;
    }
    Calendar.prototype.addNewEvent = function (newEvent) {
        this.eventList.push(newEvent);
    };
    Calendar.prototype.copyEvent = function (eventId, newDate) {
        var newEvent = this.eventList[eventId].clone();
        newEvent.eventDate = newDate;
        this.eventList.push(newEvent);
        return newEvent;
    };
    Calendar.prototype.showAllEvents = function () {
        return this.eventList;
    };
    return Calendar;
}());
var SimpleEvent = /** @class */ (function () {
    function SimpleEvent(eventDate, eventDescription, secretKey, participantList) {
        this.eventDate = eventDate;
        this.eventDescription = eventDescription;
        this.secretKey = secretKey;
        this.participantList = participantList;
    }
    return SimpleEvent;
}());
var Meeting = /** @class */ (function (_super) {
    __extends(Meeting, _super);
    function Meeting(eventDate, eventDescription, secretKey, participantList, startTime, endTime) {
        var _this = _super.call(this, eventDate, eventDescription, secretKey, participantList) || this;
        _this.startTime = startTime;
        _this.endTime = endTime;
        return _this;
    }
    Meeting.prototype.clone = function () {
        return new Meeting(this.eventDate, this.eventDescription, this.secretKey, this.participantList, this.startTime, this.endTime);
    };
    return Meeting;
}(SimpleEvent));
var Birthday = /** @class */ (function (_super) {
    __extends(Birthday, _super);
    function Birthday(eventDate, eventDescription, secretKey, participantList, birthdayBoy) {
        var _this = _super.call(this, eventDate, eventDescription, secretKey, participantList) || this;
        _this.birthdayBoy = birthdayBoy;
        return _this;
    }
    Birthday.prototype.clone = function () {
        return new Birthday(this.eventDate, this.eventDescription, this.secretKey, this.participantList, this.birthdayBoy);
    };
    return Birthday;
}(SimpleEvent));
function main() {
    var firstMeeting = new Meeting(new Date('1995-12-17T03:24:00'), 'first meeting', '#$@FGY', [
        new User('alex', 'qwerty123', 'alex@gmail.com'),
        new User('steve', 'asd123', 'steve@gmail.com')
    ], new Date('1995-12-17T03:24:00'), new Date('1995-12-17T05:24:00'));
    var secondMeeting = new Meeting(new Date('2003-12-17T03:24:00'), 'second meeting', 'FSKG@$!1', [
        new User('max', 'qwerty123', 'max@gmail.com'),
        new User('molly', 'asd123', 'molly@gmail.com')
    ], new Date('2003-12-17T03:24:00'), new Date('2003-12-17T06:24:00'));
    var myBirthday = new Birthday(new Date('2003-02-07T03:24:00'), 'my birthday', 'SMTH!#', [
        new User('max', 'qwerty123', 'max@gmail.com'),
        new User('molly', 'asd123', 'molly@gmail.com')
    ], new User('misha', 'pass123', 'misha@proton.com'));
    var calendar = new Calendar([firstMeeting, secondMeeting, myBirthday]);
    var newEvent = calendar.copyEvent(0, new Date('2022-12-12T12:12:00'));
    console.log(newEvent);
    console.log(calendar.eventList);
}
main();
