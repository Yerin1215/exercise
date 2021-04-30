import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./flightPath"
import { moonZoomInTL } from "./moonZoom"
import { landingTL } from "./landing"
import { afterTL } from "./after"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({paused:true});

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(spaceShipTL)
        .add(liftOffTL)
        .addLabel("marker")
        .add(flightTL ,"zoomFlight")
        .add(moonZoomInTL,"zoomFlight")
        .add(landingTL)
        .add(afterTL);

        mainTL.play("marker");
        // mainTL.play();


console.log(numberThing);

// GSDevTools.create();


