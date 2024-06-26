import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import { Logger } from "./Logger";

export class SceneManager
{
    private static _instance: SceneManager;
    private _scene: Scene;
    private _engine: Engine;

    
    public constructor()
    {
        Logger.debug("SceneManager::constructor()");
        let canvas = SceneManager.createCanvas();
        this._engine = SceneManager.createEngine(canvas);
        this._scene = SceneManager.createScene(this._engine, canvas);
        
        window.addEventListener("resize", function () {
            SceneManager.resize();
        });
    }

    private static createCanvas(): HTMLCanvasElement {
        document.getElementById("canvas")?.remove();
        let canvas = document.createElement("canvas");
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.id = "canvas";
        document.body.appendChild(canvas);
        return canvas;
    }

    private static createEngine(canvas: HTMLCanvasElement): Engine {
        if (canvas == null || canvas === undefined) {
            throw new Error("Canvas is null or undefined");
        }// TODO: create a WebGPU engine
        try {
            return new Engine(canvas, true);
        } catch (error) {
            Logger.error("Error creating engine:" + error);
            throw error;
        }
    }

    private static createScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
        // This creates a basic Babylon Scene object (non-mesh)
        let scene = new Scene(engine);

        // This creates and positions a free camera (non-mesh)
        let camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'sphere' shape. Params: name, options, scene
        let sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;

        // Our built-in 'ground' shape. Params: name, options, scene
        let ground = MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

        return scene;
    }

    public static get instance(): SceneManager {
        if (!SceneManager._instance) {
            SceneManager._instance = new SceneManager();
        }
        
        return SceneManager._instance;
    }

    private static resize(): void {
        SceneManager.instance._engine.resize();
    }

    public get engine(): Engine {
        return SceneManager._instance._engine;
    }

    public get scene(): Scene {
        return SceneManager._instance._scene;
    }

    /**
     * Starts the render loop.
     */
    public static startRenderLoop() {
        try {
            SceneManager.instance.engine.runRenderLoop(() => {
                SceneManager.instance.scene.render();
            });    
        } catch (error) {
            Logger.error("Failed to start render loop:", error);
            Logger.trace(error);
        }
    }

    /**
     * Stops the render loop and animations.
     */
    public static stopRenderLoop() {
        try {
            SceneManager.instance.engine.stopRenderLoop();
        } catch (error) {
            Logger.error("Failed to stop render loop:", error);
            Logger.trace(error);
        }

        try {
            SceneManager.instance.scene.stopAnimation();
        } catch (error) {
            Logger.error("Failed to stop animations:", error);
            Logger.trace(error);
        }
    }
}