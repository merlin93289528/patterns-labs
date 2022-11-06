var SearchEngineService = /** @class */ (function () {
    function SearchEngineService() {
    }
    SearchEngineService.prototype.searchRequest = function (text) {
        return ['apple', 'plum', 'orange'];
    };
    return SearchEngineService;
}());
var SearchEngineLogger = /** @class */ (function () {
    function SearchEngineLogger(service) {
        this.service = service;
        this.log = [];
    }
    SearchEngineLogger.prototype.searchRequest = function (text) {
        this.log.push({
            request: text,
            date: new Date().getTime()
        });
        return this.service.searchRequest(text);
    };
    SearchEngineLogger.prototype.getLogs = function () {
        return this.log;
    };
    return SearchEngineLogger;
}());
var SearchEngine = /** @class */ (function () {
    function SearchEngine(service) {
        this.service = service;
    }
    SearchEngine.prototype.searchRequest = function (req) {
        return this.service.searchRequest(req);
    };
    return SearchEngine;
}());
function main() {
    var searchEngineService = new SearchEngineService();
    var searchEngineLogger = new SearchEngineLogger(searchEngineService);
    var searchEngine = new SearchEngine(searchEngineLogger);
    searchEngine.searchRequest('sss');
    searchEngine.searchRequest('aaa');
    searchEngine.searchRequest('ddd');
    console.log(searchEngineLogger.getLogs());
}
main();
