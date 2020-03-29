class EagerLogger {
    constructor() {
    }
    static getLogger() {
        return EagerLogger.uniqueObject;
    }
}
EagerLogger.uniqueObject = new EagerLogger();
