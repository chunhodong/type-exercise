class EagerLogger {
    private static uniqueObject:EagerLogger = new EagerLogger();

    private constructor(){

    }

    static getLogger():EagerLogger{
        return EagerLogger.uniqueObject;
    }
}