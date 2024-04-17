import { Entity } from "./Entity";
import { SceneManager } from "./SceneManager";

export class Node implements Entity
{
    public constructor()
    {
        console.debug("Initializing Node");
        SceneManager.instance.scene.registerBeforeRender(() => {
            this.update();
        });
        this.start();
    }

    public start(): void
    {
        console.debug("calling start on Node");
    }

    public update(): void
    {
      // TODO document why this method 'update' is empty
    }

    public destroy(): void
    {
        console.debug("calling destroy on Node");
        this.enabled = false;
        // TODO: isn't there a dispose that needs to be called?
    }

    public set enabled(value: boolean)
    {
        console.debug("setting enabled on Node", value);
        if (value) {
            SceneManager.instance.scene.registerBeforeRender(() => {
                this.update();
            });
        } else {
            SceneManager.instance.scene.unregisterBeforeRender(() => {
                this.update();
            });
        }
    }
}