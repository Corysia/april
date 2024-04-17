
export enum LogLevel
{
    NONE = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
    TRACE = 5
}
/**
 * Represents a utility class for debugging purposes.
 *
 * @class Debug
 */
export class Logger {

    private static _instance: Logger;
    private static production: boolean = process.env.NODE_ENV === "production";
    private static _logLevel: LogLevel = LogLevel.ERROR;
    private static _withTimestamps: boolean = true;

    public static get instance(): Logger
    {
        if (!Logger._instance)
        {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    }

    /**
     * Logs a message to the console if the application is not in production mode.
     * 
     * @param message - The message to be logged.
     * @returns void
     */
    public static info(message?: any, ...optionalParams: any[]): void
    {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.INFO)
                if (Logger._withTimestamps)
                    console.log(`[${new Date().toISOString()}] ${message}`, ...optionalParams);
                else
                    console.log(message, ...optionalParams);
    }

    /**
     * Logs a message to the console if the application is not in production mode.
     * 
     * @param message - The message to be logged.
     * @returns void
     */
    public static debug(message?: any, ...optionalParams: any[]): void
    {
    
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.DEBUG)
                if (Logger._withTimestamps)
                    console.log(`[${new Date().toISOString()}] ${message}`, ...optionalParams);
                else
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
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.ERROR)
                if (Logger._withTimestamps)
                    console.error(`[${new Date().toISOString()}] ${message}`, ...optionalParams);
                else
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
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.WARN)
                if (Logger._withTimestamps)
                    console.warn(`[${new Date().toISOString()}] ${message}`, ...optionalParams);
                else
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
        if (!Logger.production)
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
        if (!Logger.production)
            console.timeEnd(label);
    }

    public static group(label: string): void
    {
        if (!Logger.production)
            console.group(label);
    }

    public static groupEnd(): void
    {
        if (!Logger.production)
            console.groupEnd();
    }

    // TODO: understand how this works
    public static trace(message?: any, ...optionalParams: any[]): void
    {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.TRACE)
                console.trace(message, ...optionalParams);
    }

    public static groupCollapsed(label: string): void
    {
        if (!Logger.production)
            console.groupCollapsed(label);
    }

    public static dir(message?: any, ...optionalParams: any[]): void
    {
        if (!Logger.production)
            console.dir(message, ...optionalParams);
    }

    public static dirxml(value: any): void
    {
        if (!Logger.production)
            console.dirxml(value);
    }

    public static table(tabularData: any, properties?: string[]): void
    {
        if (!Logger.production)
            console.table(tabularData, properties);
    }

    public static set logLevel(level: LogLevel)
    {
        Logger._logLevel = level;
    }

    public static get logLevel(): LogLevel
    {
        return Logger._logLevel;
    }
}