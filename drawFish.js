
const {main,fish,generate_params,draw_svg,draw_svg_anim} = require('./fishdraw.js');
const fs = require('fs');
let polylines = main('Really cool fish');
const fishDrawn = draw_svg_anim(polylines);
fs.writeFile('./fish.svg',fishDrawn,()=>{});
