
import { Node } from "./Node";

export class ThirdPersonController extends Node
{
    public constructor()
    {
        super();
        console.debug("Initializing ThirdPersonController");
    }

    public override start(): void
    {
        console.debug("calling start on ThirdPersonController");
    }

    public update(): void
    {
        super.update();
        console.debug("updating ThirdPersonController");
        // TODO: update camera and player mesh position/rotation based on user input
    }
}