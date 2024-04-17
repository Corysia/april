export class Debug {

    private static _instance: Debug;
    private static production: boolean = process.env.NODE_ENV === "production";

    public static get instance(): Debug
    {
        if (!Debug._instance)
        {
            Debug._instance = new Debug();
        }
        return Debug._instance;
    }

    public static log(message: string): void
    {
        if (!Debug.production)
        {
            console.log(message);
        }
    }

    public static error(message: string): void
    {
        if (!Debug.production)
        {
            console.error(message);
        }
    }

    public static warn(message: string): void
    {
        if (!Debug.production)
        {
            console.warn(message);
        }
    }
}