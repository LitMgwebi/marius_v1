import { useLottie, useLottieInteractivity } from "lottie-react";
import computerAnimation from "../../assets/computer-animation.json";

const style = {
	height: 550,
};

const options = {
	animationData: computerAnimation,
};

function Animation() {
	const lottieObj = useLottie(options, style);
	const AnimationSettings = useLottieInteractivity({
		lottieObj,
		mode: "scroll",
		actions: [
		  {
			visibility: [0.4, 1],
			type: "seek",
			frames: [0, 150],
		  },
		],
	  });

	return AnimationSettings;
}

export default Animation;