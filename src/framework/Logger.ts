
export enum LogLevel {
    NONE = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
    TRACE = 5
}

export enum LogTimestampFormat {
    OFF = 0,
    LOCAL = 1,
    ISO = 3
}
/**
 * Represents a utility class for debugging purposes.
 *
 * @class Logger
 * @static
 * @module framework
 */
export class Logger {

    private static _instance: Logger;
    private static production: boolean = process.env.NODE_ENV === "production";
    private static _logLevel: LogLevel = LogLevel.ERROR;
    private static _timestampFormat: LogTimestampFormat = LogTimestampFormat.ISO;

    public static get instance(): Logger {
        if (!Logger._instance) {
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
    public static info(message?: any, ...optionalParams: any[]): void {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.INFO)
                console.log(`[${Logger.timestamp}] ${message}`, ...optionalParams);
    }

    /**
     * Logs a message to the console if the application is not in production mode.
     * 
     * @param message - The message to be logged.
     * @returns void
     */
    public static debug(message?: any, ...optionalParams: any[]): void {

        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.DEBUG)
                console.log(`[${Logger.timestamp}] ${message}`, ...optionalParams);
    }

    /**
     * Logs an error message to the console if the application is not in production mode.
     * 
     * @param message - The error message to be logged.
     * @returns void
     */
    public static error(message?: any, ...optionalParams: any[]): void {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.ERROR)
                console.error(`[${Logger.timestamp}] ${message}`, ...optionalParams);
    }

    /**
     * Logs a warning message to the console if the application is not in production mode.
     * 
     * @param message - The warning message to be logged.
     * @returns void
     */
    public static warn(message?: any, ...optionalParams: any[]): void {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.WARN)
                console.warn(`[${Logger.timestamp}] ${message}`, ...optionalParams);
    }

    /**
     * Clears the console.
     * 
     * @returns void
     */
    public static clear(): void {
        console.clear();
    }

    /**
     * Marks a time point in the console.
     * 
     * @param label - The label to be used for the time point.
     * @returns void
     */
    public static time(label: string): void {
        if (!Logger.production)
            console.time(label);
    }

    /**
     * Marks the end of a time point in the console.
     * 
     * @param label - The label of the time point.
     * @returns void
     */
    public static timeEnd(label: string): void {
        if (!Logger.production)
            console.timeEnd(label);
    }

    public static group(label: string): void {
        if (!Logger.production)
            console.group(label);
    }

    public static groupEnd(): void {
        if (!Logger.production)
            console.groupEnd();
    }

    // TODO: understand how this works
    public static trace(message?: any, ...optionalParams: any[]): void {
        if (!Logger.production)
            if (Logger.logLevel >= LogLevel.TRACE)
                console.trace(message, ...optionalParams);
    }

    public static groupCollapsed(label: string): void {
        if (!Logger.production)
            console.groupCollapsed(label);
    }

    public static dir(message?: any, ...optionalParams: any[]): void {
        if (!Logger.production)
            console.dir(message, ...optionalParams);
    }

    public static dirxml(value: any): void {
        if (!Logger.production)
            console.dirxml(value);
    }

    public static table(tabularData: any, properties?: string[]): void {
        if (!Logger.production)
            console.table(tabularData, properties);
    }

    /**
     * Sets the log level.
     * @param level The desired log level.
     * @see LogLevel
     */
    public static set logLevel(level: LogLevel) {
        Logger._logLevel = level;
    }

    /**
     * Gets the current log level.
     * @returns The current log level.
     * @see LogLevel
     */
    public static get logLevel(): LogLevel {
        return Logger._logLevel;
    }

    private static get timestamp(): string {
        if (Logger._timestampFormat === LogTimestampFormat.ISO)
            return new Date().toISOString();
        else if (Logger._timestampFormat === LogTimestampFormat.LOCAL)
            return new Date().toLocaleString();
        return '';
    }

    /**
     * Sets the format of the timestamp used in log messages.
     * @param format The desired timestamp format.
     * @default LogTimestampFormat.ISO
     * @see LogTimestampFormat
     */
    public static set timestampFormat(format: LogTimestampFormat) {
        Logger._timestampFormat = format;
    }
}