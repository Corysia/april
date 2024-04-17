
export enum LogLevel
{
    NONE = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    TRACE = 4
}
/**
 * Represents a utility class for debugging purposes.
 *
 * @class Debug
 */
export class Debug {

    private static _instance: Debug;
    private static production: boolean = process.env.NODE_ENV === "production";
    private static _logLevel: LogLevel = LogLevel.ERROR;

    public static get instance(): Debug
    {
        if (!Debug._instance)
        {
            Debug._instance = new Debug();
        }
        return Debug._instance;
    }

    /**
     * Logs a message to the console if the application is not in production mode.
     * 
     * @param message - The message to be logged.
     * @returns void
     */
    public static log(message?: any, ...optionalParams: any[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.log(message, ...optionalParams);
    }

    /**
     * Logs an error message to the console if the application is not in production mode.
     * 
     * @param message - The error message to be logged.
     * @returns void
     */
    public static error(message?: any, ...optionalParams: any[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.ERROR)
                console.error(message, ...optionalParams);
    }

    /**
     * Logs a warning message to the console if the application is not in production mode.
     * 
     * @param message - The warning message to be logged.
     * @returns void
     */
    public static warn(message?: any, ...optionalParams: any[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.WARN)
                console.warn(message, ...optionalParams);
    }

    /**
     * Clears the console.
     * 
     * @returns void
     */
    public static clear(): void
    {
        console.clear();
    }

    /**
     * Marks a time point in the console.
     * 
     * @param label - The label to be used for the time point.
     * @returns void
     */
    public static time(label: string): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.time(label);
    }

    /**
     * Marks the end of a time point in the console.
     * 
     * @param label - The label of the time point.
     * @returns void
     */
    public static timeEnd(label: string): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.timeEnd(label);
    }

    public static group(label: string): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.group(label);
    }

    public static groupEnd(): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.groupEnd();
    }

    // TODO: understand how this works
    public static trace(message?: any, ...optionalParams: any[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.TRACE)
                console.trace(message, ...optionalParams);
    }

    public static groupCollapsed(label: string): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.groupCollapsed(label);
    }

    public static dir(message?: any, ...optionalParams: any[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.dir(message, ...optionalParams);
    }

    public static dirxml(value: any): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.dirxml(value);
    }

    public static table(tabularData: any, properties?: string[]): void
    {
        if (!Debug.production)
            if (Debug.logLevel <= LogLevel.INFO)
                console.table(tabularData, properties);
    }

    public static set logLevel(level: LogLevel)
    {
        Debug._logLevel = level;
    }

    public static get logLevel(): LogLevel
    {
        return Debug._logLevel;
    }
}