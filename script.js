/*
 **--------- Project22: Link Transition Hover Effect ---------
 
 Goal: Stripe website has some cool navigation hover effect but in this example, we're going to give all link elements simple navigation effect.

 **
 */

//1. getting all the links in the page
const triggers = document.querySelectorAll("a");
//2. create the highlight effect
//The way we do is we apply transform, width, height to all link when we hover over one of them, dynamically.
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect(); //this will give us x, y, height and width
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
