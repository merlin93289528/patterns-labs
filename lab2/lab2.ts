interface ISearchEngineService {
    searchRequest(text: string): Array<string>;
}

class SearchEngineService implements ISearchEngineService {
    searchRequest(text: string): string[] {
        return ['apple', 'plum', 'orange'];
    }
}

class SearchEngineLogger implements ISearchEngineService {
    private service: ISearchEngineService;
    public log: Array<Object>;

    constructor(service: ISearchEngineService) {
        this.service = service;
        this.log = [];
    }

    searchRequest(text: string): string[] {
        this.log.push({
            request: text,
            date: new Date().getTime()
        })
        return this.service.searchRequest(text)
    }

    getLogs() {
        return this.log;
    }
}

class SearchEngine {
    protected service: ISearchEngineService;

    constructor(service: ISearchEngineService) {
        this.service = service;
    }

    searchRequest(req: string) {
        return this.service.searchRequest(req);
    }
}

function main() {
    const searchEngineService = new SearchEngineService();
    const searchEngineLogger = new SearchEngineLogger(searchEngineService);
    const searchEngine = new SearchEngine(searchEngineLogger);

    searchEngine.searchRequest('sss');
    searchEngine.searchRequest('aaa');
    searchEngine.searchRequest('ddd');
    console.log(searchEngineLogger.getLogs());
}

main()