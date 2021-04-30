import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

// gsap.set(".moon-things",{display:"block"});

export let afterTL = gsap.timeline();
afterTL.to(".moon-things",{opacity:1},"flames")
afterTL.to("#space-ship",{opacity:0},"flames")
afterTL.to("#moon", {alpha:1, duration:4, scale:1.3, y:"-=1200", x:"-=300"})
afterTL.to("#moon", {alpha:1, duration:4, scale:5, 
    motionPath: {
    path: "#moonPath",
    align:"#moonPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90
}})




// MotionPathHelper.create("#moon");