
import { Debug } from "./Debug";
import { Node } from "./Node";

export class ThirdPersonController extends Node
{
    public constructor()
    {
        super();
        Debug.log("ThirdPersonController::constructor()");
    }

    public override start(): void
    {
        Debug.trace("ThirdPersonController::start()");
    }

    public update(): void
    {
        Debug.trace("ThirdPersonController::update()");
        super.update();
        // TODO: update camera and player mesh position/rotation based on user input
    }
}