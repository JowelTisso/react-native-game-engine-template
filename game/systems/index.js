import Camera from "./camera";
import Particles from "./particles";
import Removal from "./removal";
import Rotation from "./rotation";
import Timeline from "./timeline";
import HUD from "./hud";
import GamepadController from "./gamepad-controller";
import SwipeController from "./swipe-controller";
import Physics from "./physics";
import Spawn from "./spawn";

export default [
	GamepadController(),
	SwipeController()(),
	Camera({ pitchSpeed: -0.01, yawSpeed: 0 }),
	Particles,
	Removal,
	Rotation,
	Timeline,
	Spawn,
	Physics,
	HUD
];
