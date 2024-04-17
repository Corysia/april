import "@babylonjs/inspector";
import { SceneManager } from "./framework/SceneManager";
import { ThirdPersonController } from "./framework/ThirdPersonController";
import { Logger, LogLevel, LogTimestampFormat } from "./framework/Logger";

class Main {

    constructor() {
        Logger.logLevel = LogLevel.TRACE;
        Logger.timestampFormat = LogTimestampFormat.LOCAL;
        Logger.debug("Main::constructor()");
        SceneManager.startRenderLoop();
        this.addEventListeners();
    }

    private addEventListeners() {
        let manager = SceneManager.instance;
        let engine = manager.engine;
        let scene = manager.scene;
        let player = new ThirdPersonController();

        window.addEventListener("keydown", (ev) => {
            switch (ev.code) {
                case "KeyF":
                    if (ev.shiftKey && ev.ctrlKey && ev.altKey) {
                        engine.switchFullscreen(false);
                    }
                    break;
                case "KeyI":
                    if (ev.shiftKey && ev.ctrlKey && ev.altKey) {
                        if (scene.debugLayer.isVisible()) {
                            scene.debugLayer.hide();
                        } else {
                            scene.debugLayer.show();
                        }
                    }
                    break;
                default:
                    break;
            }
        });

        Logger.info("Application initialized.");
        Logger.warn("this is a warning");
        Logger.error("this is an error");
        player.enabled = false;
    }
}

new Main();