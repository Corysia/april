import "@babylonjs/inspector";
import { SceneManager } from "./framework/SceneManager";
import { ThirdPersonController } from "./framework/ThirdPersonController";
import { Logger, LogLevel } from "./framework/Logger";

class Main {
    
    constructor() { 
        this.addEventListeners();
    }

    private addEventListeners() {
        let manager = SceneManager.instance;
        let engine = manager.engine;
        let scene = manager.scene;
        let player = new ThirdPersonController();

        window.addEventListener("resize", function () {
            engine.resize();
        });

        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+F
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.code === "KeyF") {
                engine.switchFullscreen(false);
            }
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.code === "KeyI") {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        engine.runRenderLoop(function () {
            scene.render();
        });

        Logger.logLevel = LogLevel.DEBUG;
        Logger.info("Application initialized.");
        Logger.warn("this is a warning");
        Logger.error("this is an error");
    
        // disable temporarily
        player.enabled = false;
    }
}

new Main();