// Shit Krita is a portrait-first drawing object. Mobile browser UI, native
// Save/Share sheets and phone rotation can all fire window resize events.
// Once the canvas has been established, none of those transient viewport
// changes should destructively rescale the drawing. Desktop keeps the normal
// responsive resize behaviour from studio.js.
(()=>{
  const mobile=matchMedia('(pointer: coarse)').matches && Math.min(screen.width,screen.height)<=760;
  if(!mobile)return;
  window.addEventListener('resize',e=>{
    e.stopImmediatePropagation();
  },true);
})();
