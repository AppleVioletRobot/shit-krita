// Mobile browsers can fire window resize events when opening/closing native
// Save/Share UI. Those height-only viewport changes must not destructively
// rescale the drawing. Let genuine width changes (rotation/window resizing)
// through to studio.js, but swallow height-only resize events first.
(()=>{
  let lastWidth=window.innerWidth;
  window.addEventListener('resize',e=>{
    const width=window.innerWidth;
    if(Math.abs(width-lastWidth)<2){
      e.stopImmediatePropagation();
      return;
    }
    lastWidth=width;
  },true);
})();
