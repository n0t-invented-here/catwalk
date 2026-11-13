# How it works

`createLife` is the character's state machine: a square box with a top-left in the bounds' coordinates, in one of four states (`ground` with a mood and a direction until a time, `fall` with a vertical speed, `carried`, `landed` until a time).
It reads the bounds, the box size, the scale, the bottom and the model through functions each step, so a resize, a settings change or a model swap takes effect on the next frame.
On the ground it draws the next mood from the model when the current one ends.

`createModelScene` draws the model: a level camera whose height is computed so that the model's ground plane projects onto the canvas's last pixel rows, at any scale (the model, the camera distance and the canvas scale together, so the framing never changes); the model fitted under it as the spec says; its clips by name, with blending; and a triangle pick for `solidAt`.
`framing.ts` in the core has the same camera as numbers, so the fitted model's width, head height and foot line on the canvas come out from its vertices and triangles without a render.

`createCharacter` joins the two on a canvas it appends to the page, moved with `translate3d` every frame the position changes.
The canvas takes no pointer events, so the page under it works as if the canvas were not there.
On every pointer move the point is tested against the model with a triangle pick; over the model the canvas takes events and shows the hand, so the press lands on it.
That is one move of lag before a press on the model counts, and never a stolen click beside it.

Characters on the same ground share a ground (`ground.ts`), one `requestAnimationFrame` loop that steps every life with the others in view, runs `separate` over the standing ones (pairs at one level, half the overlap each, until nothing moves) and then lets each character draw.
A life's floor is the ground or the highest head of a standing character whose body is under the life's centre and whose head was not above the feet when the step began, so a fall never passes through a head and a character beside another never climbs it; a standing character whose floor is gone falls, and one on a head moves with it.
Head and feet are both taken at a model's centre depth, so a rider's drawn feet meet its mount's drawn head.

