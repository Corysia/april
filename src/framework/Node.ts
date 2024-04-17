import { Entity } from "./Entity";
import { SceneManager } from "./SceneManager";

export class Node implements Entity
{
    private _onBeforeRenderObserver: Observer<Scene>;
    private _onAfterRenderObserver: Observer<Scene>;
    private _enabled = true;
    public constructor()
    {
        console.debug("Initializing Node");
        const scene = SceneManager.instance.scene;
        this._onBeforeRenderObserver = scene.onBeforeRenderObservable.add(this.update);
        this._onAfterRenderObserver = scene.onAfterRenderObservable.add(this.lateUpdate);
    this.start();
    }

    public start(): void
    {
        console.debug("calling start on Node");
    }

    public update(): void
    {
        console.debug("calling update on Node");
      // TODO document why this method 'update' is empty
    }

    public lateUpdate(): void
    {
        // TODO:: document why this method 'lateUpdate' is empty
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
        const scene = SceneManager.instance.scene;
        if (value) {
            this._onBeforeRenderObserver = scene.onBeforeRenderObservable.add(this.update);
            this._onAfterRenderObserver = scene.onAfterRenderObservable.add(this.lateUpdate);
        } else {
            if (this._onBeforeRenderObserver) {
                scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
            }
            if (this._onAfterRenderObserver) {
                scene.onAfterRenderObservable.remove(this._onAfterRenderObserver);
            }
        }
        this._enabled = value;
    }
}