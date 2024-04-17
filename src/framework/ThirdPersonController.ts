
import { Logger } from "./Logger";
import { Node } from "./Node";

export class ThirdPersonController extends Node
{
    public constructor()
    {
        super();
        Logger.debug("ThirdPersonController::constructor()");
    }

    public override start(): void
    {
        Logger.debug("ThirdPersonController::start()");
    }

    public update(): void
    {
        Logger.debug("ThirdPersonController::update()");
        super.update();
        // TODO: update camera and player mesh position/rotation based on user input
    }
}