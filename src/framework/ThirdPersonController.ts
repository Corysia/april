
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
        Debug.log("ThirdPersonController::start()");
    }

    public update(): void
    {
        super.update();
        // TODO: update camera and player mesh position/rotation based on user input
    }
}