// Event bubbling and  capturing in Dome Tree
/**
 * TODO: Event Propagation
 *
 * ! Event bubbling
 * * It mean the event is passed from the children to it grand parent till the top of the dom element level.
 *
 * ! Event Capturing or Event Tricking
 * * It means the passed from the parent to it ancestor child.
 */

// * It mean use capture is enabled
// * Default case is the bubbling event if we don't pass any boolean value true
document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    console.log("It is bubbling grant parent click");
  },
  true // Capturing event
);
document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("It is bubbling  parent click");
  },
  false // Bubbling event
);
document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("It is bubbling child click");
  },
  true // Capturing event
);
