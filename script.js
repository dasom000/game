const INK='#4A2F27', OUT='#7A5548';
const S=(w=4)=>`stroke="${INK}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"`;

/* ===== 부품 ===== */
function body(shape,c){
  const st=`fill="${c}" stroke="${OUT}" stroke-width="3.5"`;
  if(shape==='square') return `<rect x="42" y="60" width="116" height="110" rx="30" ${st}/>`;
  if(shape==='tall') return `<rect x="50" y="46" width="100" height="126" rx="50" ${st}/>`;
  if(shape==='flat') return `<path d="M100 76 C160 76 178 112 174 140 C170 166 140 172 100 172 C60 172 30 166 26 140 C22 112 40 76 100 76Z" ${st}/>`;
  if(shape==='melt') return `<path d="M100 58 C150 58 162 96 160 126 L160 150 Q152 176 140 160 Q132 182 118 164 Q104 186 92 164 Q78 182 66 162 Q52 178 40 152 L40 126 C38 96 50 58 100 58Z" ${st}/>`;
  if(shape==='fluff') return `<path d="M100 54 q14 -8 24 4 q16 -4 22 12 q16 6 12 22 q12 12 2 26 q6 18 -10 26 q-4 18 -24 18 q-12 12 -26 6 q-14 6 -26 -6 q-20 0 -24 -18 q-16 -8 -10 -26 q-10 -14 2 -26 q-4 -16 12 -22 q6 -16 22 -12 q10 -12 24 -4Z" ${st}/>`;
  return `<path d="M100 56 C150 56 166 98 162 130 C158 162 132 172 100 172 C68 172 42 162 38 130 C34 98 50 56 100 56Z" ${st}/>`;
}
function ears(t,c){
  const st=`fill="${c}" stroke="${OUT}" stroke-width="3.5"`;
  switch(t){
    case 'cat': return `<path d="M54 80 L60 40 L86 64 Z" ${st} stroke-linejoin="round"/><path d="M146 80 L140 40 L114 64 Z" ${st} stroke-linejoin="round"/><path d="M62 70 L64 52 L76 63Z" fill="#FFB3C6" opacity=".7"/><path d="M138 70 L136 52 L124 63Z" fill="#FFB3C6" opacity=".7"/>`;
    case 'bunny': return `<ellipse cx="78" cy="34" rx="12" ry="32" ${st}/><ellipse cx="122" cy="34" rx="12" ry="32" ${st}/><ellipse cx="78" cy="36" rx="5" ry="20" fill="#FFB3C6" opacity=".6"/><ellipse cx="122" cy="36" rx="5" ry="20" fill="#FFB3C6" opacity=".6"/>`;
    case 'droop': return `<ellipse cx="60" cy="64" rx="11" ry="30" ${st} transform="rotate(-55 60 64)"/><ellipse cx="140" cy="64" rx="11" ry="30" ${st} transform="rotate(55 140 64)"/>`;
    case 'bear': return `<circle cx="58" cy="64" r="17" ${st}/><circle cx="142" cy="64" r="17" ${st}/><circle cx="58" cy="64" r="8" fill="#000" opacity=".08"/><circle cx="142" cy="64" r="8" fill="#000" opacity=".08"/>`;
    case 'dog': return `<path d="M58 66 Q28 70 32 118 Q50 114 62 92Z" fill="#C99A78" stroke="${OUT}" stroke-width="3.5"/><path d="M142 66 Q172 70 168 118 Q150 114 138 92Z" fill="#C99A78" stroke="${OUT}" stroke-width="3.5"/>`;
    case 'hamster': return `<circle cx="64" cy="66" r="12" ${st}/><circle cx="136" cy="66" r="12" ${st}/><circle cx="64" cy="66" r="6" fill="#FFB3C6" opacity=".7"/><circle cx="136" cy="66" r="6" fill="#FFB3C6" opacity=".7"/>`;
    case 'sprout': return `<path d="M100 56 Q100 36 100 30" stroke="#5DAE4B" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M100 36 Q84 22 76 34 Q88 44 100 36Z" fill="#9BD98A" stroke="${OUT}" stroke-width="2.5"/><path d="M100 34 Q116 18 126 30 Q112 42 100 34Z" fill="#9BD98A" stroke="${OUT}" stroke-width="2.5"/>`;
    case 'tuft': return `<path d="M92 58 Q96 40 100 56 Q104 38 110 58" stroke="${OUT}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    case 'frog': return `<circle cx="72" cy="66" r="20" ${st}/><circle cx="128" cy="66" r="20" ${st}/>`;
    case 'owl': return `<path d="M50 74 L52 42 L76 62Z" ${st} stroke-linejoin="round"/><path d="M150 74 L148 42 L124 62Z" ${st} stroke-linejoin="round"/>`;
  }
  return '';
}
const L=82,R=118;
function eyes(t,y=110){
  switch(t){
    case 'dot': return `<circle cx="${L}" cy="${y}" r="6" fill="${INK}"/><circle cx="${R}" cy="${y}" r="6" fill="${INK}"/><circle cx="${L+2}" cy="${y-2}" r="2" fill="#fff"/><circle cx="${R+2}" cy="${y-2}" r="2" fill="#fff"/>`;
    case 'sparkle': return `<ellipse cx="${L}" cy="${y}" rx="8" ry="10" fill="${INK}"/><ellipse cx="${R}" cy="${y}" rx="8" ry="10" fill="${INK}"/><circle cx="${L+3}" cy="${y-4}" r="3.5" fill="#fff"/><circle cx="${R+3}" cy="${y-4}" r="3.5" fill="#fff"/><circle cx="${L-3}" cy="${y+4}" r="1.5" fill="#fff"/><circle cx="${R-3}" cy="${y+4}" r="1.5" fill="#fff"/>`;
    case 'star': return `<path d="M${L} ${y-10} l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#FFB938" stroke="${INK}" stroke-width="2"/><path d="M${R} ${y-10} l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#FFB938" stroke="${INK}" stroke-width="2"/>`;
    case 'happy': return `<path d="M${L-7} ${y+3} Q${L} ${y-7} ${L+7} ${y+3}" ${S()}/><path d="M${R-7} ${y+3} Q${R} ${y-7} ${R+7} ${y+3}" ${S()}/>`;
    case 'sleepy': return `<path d="M${L-8} ${y} Q${L} ${y+6} ${L+8} ${y}" ${S()}/><path d="M${R-8} ${y} Q${R} ${y+6} ${R+8} ${y}" ${S()}/>`;
    case 'flat': return `<path d="M${L-8} ${y} L${L+8} ${y}" ${S()}/><path d="M${R-8} ${y} L${R+8} ${y}" ${S()}/>`;
    case 'blank': return `<circle cx="${L}" cy="${y}" r="9" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="${R}" cy="${y}" r="9" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="${L}" cy="${y}" r="2.5" fill="${INK}"/><circle cx="${R}" cy="${y}" r="2.5" fill="${INK}"/>`;
    case 'tired': return `<path d="M${L-9} ${y} L${L+9} ${y}" ${S()}/><path d="M${R-9} ${y} L${R+9} ${y}" ${S()}/><path d="M${L-8} ${y-9} L${L+6} ${y-5}" ${S(3)}/><path d="M${R+8} ${y-9} L${R-6} ${y-5}" ${S(3)}/>`;
    case 'teary': return `<ellipse cx="${L}" cy="${y}" rx="8" ry="10" fill="${INK}"/><ellipse cx="${R}" cy="${y}" rx="8" ry="10" fill="${INK}"/><circle cx="${L+3}" cy="${y-4}" r="3" fill="#fff"/><circle cx="${R+3}" cy="${y-4}" r="3" fill="#fff"/><path d="M${L-8} ${y+7} Q${L} ${y+13} ${L+8} ${y+7}" stroke="#8FCBF5" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M${R-8} ${y+7} Q${R} ${y+13} ${R+8} ${y+7}" stroke="#8FCBF5" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    case 'angry': return `<circle cx="${L}" cy="${y+2}" r="6" fill="${INK}"/><circle cx="${R}" cy="${y+2}" r="6" fill="${INK}"/><path d="M${L-10} ${y-12} L${L+8} ${y-6}" ${S()}/><path d="M${R+10} ${y-12} L${R-8} ${y-6}" ${S()}/>`;
    case 'cry': return `<path d="M${L-8} ${y-6} L${L+6} ${y} L${L-8} ${y+6}" ${S()}/><path d="M${R+8} ${y-6} L${R-6} ${y} L${R+8} ${y+6}" ${S()}/>`;
    case 'spiral': return `<path d="M${L} ${y} m-1 0 a2 2 0 1 1 3 0 a5 5 0 1 1 -8 0 a8 8 0 1 1 13 0" ${S(3)}/><path d="M${R} ${y} m-1 0 a2 2 0 1 1 3 0 a5 5 0 1 1 -8 0 a8 8 0 1 1 13 0" ${S(3)}/>`;
    case 'wink': return `<ellipse cx="${L}" cy="${y}" rx="7" ry="9" fill="${INK}"/><circle cx="${L+2}" cy="${y-3}" r="3" fill="#fff"/><path d="M${R-8} ${y+2} Q${R} ${y-6} ${R+8} ${y+2}" ${S()}/>`;
    case 'owl': return `<circle cx="${L}" cy="${y-2}" r="15" fill="#fff" stroke="${OUT}" stroke-width="3"/><circle cx="${R}" cy="${y-2}" r="15" fill="#fff" stroke="${OUT}" stroke-width="3"/><circle cx="${L+2}" cy="${y-2}" r="7" fill="${INK}"/><circle cx="${R-2}" cy="${y-2}" r="7" fill="${INK}"/><circle cx="${L+4}" cy="${y-5}" r="2.5" fill="#fff"/><circle cx="${R}" cy="${y-5}" r="2.5" fill="#fff"/>`;
  }
  return '';
}
function mouth(t,y=126){
  switch(t){
    case 'w': return `<path d="M93 ${y} Q96 ${y+5} 100 ${y} Q104 ${y+5} 107 ${y}" ${S(3)}/>`;
    case 'smile': return `<path d="M94 ${y} Q100 ${y+7} 106 ${y}" ${S(3)}/>`;
    case 'open': return `<path d="M91 ${y-2} Q100 ${y+12} 109 ${y-2} Z" fill="#E86A7E" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
    case 'flat': return `<path d="M95 ${y+2} L105 ${y+2}" ${S(3)}/>`;
    case 'sad': return `<path d="M92 ${y+4} Q100 ${y-4} 108 ${y+4}" ${S(3)}/>`;
    case 'o': return `<ellipse cx="100" cy="${y+2}" rx="4" ry="5" fill="${INK}"/>`;
    case 'yawn': return `<ellipse cx="100" cy="${y+4}" rx="9" ry="12" fill="#E86A7E" stroke="${INK}" stroke-width="2.5"/>`;
    case 'wail': return `<path d="M88 ${y-2} Q100 ${y+18} 112 ${y-2} Z" fill="#E86A7E" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
    case 'wavy': return `<path d="M90 ${y+2} q3 -4 6 0 t6 0 t6 0 t6 0" ${S(3)}/>`;
    case 'beak': return `<path d="M92 ${y-4} L108 ${y-4} L100 ${y+6} Z" fill="#FFA94D" stroke="${OUT}" stroke-width="2.5" stroke-linejoin="round"/>`;
    case 'grit': return `<rect x="90" y="${y-3}" width="20" height="9" rx="3" fill="#fff" stroke="${INK}" stroke-width="2.5"/><path d="M96 ${y-3} v9 M104 ${y-3} v9" stroke="${INK}" stroke-width="2"/>`;
    case 'tongue': return `<path d="M93 ${y} Q100 ${y+6} 107 ${y}" ${S(3)}/><path d="M97 ${y+3} Q100 ${y+12} 103 ${y+3}" fill="#FF8FA3" stroke="${INK}" stroke-width="2"/>`;
  }
  return '';
}
const X={
  sparkle:`<path d="M156 62 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4z" fill="#FFD84D" stroke="#E0A800" stroke-width="1.5"/>`,
  sparkles:`<path d="M156 62 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4z" fill="#FFD84D"/><path d="M32 70 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3z" fill="#FFD84D"/><path d="M168 140 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2z" fill="#FFD84D"/>`,
  heart:`<path d="M152 70 c-6 -8 6 -14 8 -6 c2 -8 14 -2 8 6 l-8 8z" fill="#FF8FA3"/>`,
  note:`<text x="150" y="74" font-size="26" fill="#A88BF0">♪</text>`,
  sweat:`<path d="M152 86 Q158 98 152 104 Q146 98 152 86Z" fill="#A9D8FA" stroke="#7FB8E0" stroke-width="1.5"/>`,
  sweat2:`<path d="M152 86 Q158 98 152 104 Q146 98 152 86Z" fill="#A9D8FA"/><path d="M44 92 Q49 102 44 107 Q39 102 44 92Z" fill="#A9D8FA"/>`,
  zzz:`<text x="146" y="70" font-size="20" font-family="sans-serif" font-weight="bold" fill="#A88BF0">z</text><text x="160" y="50" font-size="26" font-family="sans-serif" font-weight="bold" fill="#A88BF0">Z</text>`,
  dots:`<circle cx="150" cy="62" r="3" fill="#C9A99B"/><circle cx="160" cy="62" r="3" fill="#C9A99B"/><circle cx="170" cy="62" r="3" fill="#C9A99B"/>`,
  tears:`<path d="M78 120 Q74 136 78 148" stroke="#8FCBF5" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M122 120 Q126 136 122 148" stroke="#8FCBF5" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  steam:`<path d="M58 54 q-6 -8 0 -16 q6 -8 0 -16" stroke="#E0D0C8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M142 54 q6 -8 0 -16 q-6 -8 0 -16" stroke="#E0D0C8" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  anger:`<path d="M146 64 l8 0 m-4 -4 l0 8 M158 56 l6 6 m0 -6 l-6 6" stroke="#FF6B6B" stroke-width="4" stroke-linecap="round"/>`,
  scribble:`<path d="M30 52 c10 -14 26 0 14 8 c-12 8 -20 -10 -6 -14 c14 -4 18 14 4 16 c-12 2 -10 -12 0 -10" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
  bag:`<path d="M150 102 L136 150" stroke="#E8A877" stroke-width="5" stroke-linecap="round"/><rect x="150" y="98" width="34" height="44" rx="10" fill="#FFC59A" stroke="${OUT}" stroke-width="3"/><path d="M158 98 Q167 86 176 98" stroke="${OUT}" stroke-width="3" fill="none"/>`,
  house:`<g transform="translate(10 18)"><path d="M0 18 L18 4 L36 18 Z" fill="#FF8FA3" stroke="${OUT}" stroke-width="2"/><rect x="5" y="17" width="26" height="20" rx="2" fill="#FFF1B8" stroke="${OUT}" stroke-width="2"/><rect x="14" y="25" width="8" height="12" fill="#FFC59A"/></g>`,
  speed:`<path d="M18 110 L4 110 M22 126 L2 126 M18 142 L6 142" stroke="#C9A99B" stroke-width="4" stroke-linecap="round"/>`,
  belly:`<ellipse cx="100" cy="140" rx="36" ry="30" fill="#fff"/>`,
  owlBelly:`<path d="M80 136 q5 5 10 0 q5 5 10 0 q5 5 10 0 q5 5 10 0 M86 150 q5 5 10 0 q5 5 10 0 q5 5 10 0" stroke="${OUT}" stroke-width="2" fill="none" opacity=".5"/>`,
  cheeks:`<ellipse cx="60" cy="130" rx="16" ry="12" fill="#FFE0C7" stroke="${OUT}" stroke-width="2"/><ellipse cx="140" cy="130" rx="16" ry="12" fill="#FFE0C7" stroke="${OUT}" stroke-width="2"/>`,
  ghost:`<g opacity=".85"><path d="M150 40 q0 -16 14 -16 q14 0 14 16 l0 18 l-5 -4 l-5 4 l-4 -4 l-5 4 l-4 -4 l-5 4z" fill="#fff" stroke="${OUT}" stroke-width="2"/><circle cx="160" cy="38" r="2" fill="${INK}"/><circle cx="168" cy="38" r="2" fill="${INK}"/></g>`,
  blanket:`<path d="M24 148 Q100 124 176 148 L176 182 L24 182Z" fill="#CDEBFF" stroke="${OUT}" stroke-width="3"/><path d="M50 160 l10 0 M80 154 l10 0 M120 154 l10 0 M150 160 l10 0" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
  coffee:`<g transform="translate(148 132)"><path d="M8 -6 q-4 -6 0 -12 M16 -6 q-4 -6 0 -12" stroke="#D8C8C0" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M26 8 q10 0 10 8 t-10 8" stroke="${OUT}" stroke-width="3" fill="none"/><rect x="0" y="0" width="26" height="32" rx="5" fill="#fff" stroke="${OUT}" stroke-width="3"/><rect x="5" y="10" width="16" height="10" rx="3" fill="#FF8FA3"/></g>`,
  coffee2:`<g transform="translate(14 132)"><rect x="0" y="0" width="26" height="32" rx="5" fill="#fff" stroke="${OUT}" stroke-width="3"/><rect x="5" y="10" width="16" height="10" rx="3" fill="#A9D8FA"/></g>`,
  eyebags:`<path d="M74 122 Q82 127 90 122" stroke="#B9A3E0" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M110 122 Q118 127 126 122" stroke="#B9A3E0" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  glasses:`<circle cx="82" cy="110" r="14" fill="rgba(255,255,255,.35)" stroke="${INK}" stroke-width="3"/><circle cx="118" cy="110" r="14" fill="rgba(255,255,255,.35)" stroke="${INK}" stroke-width="3"/><path d="M96 108 Q100 104 104 108" stroke="${INK}" stroke-width="3" fill="none"/>`,
  nightcap:`<path d="M92 64 Q110 18 166 34 Q150 48 152 74 Q124 58 92 64Z" fill="#A9C2EE" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M94 62 Q124 54 154 72" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="168" cy="34" r="10" fill="#fff" stroke="${OUT}" stroke-width="3"/>`,
  cushion:`<ellipse cx="100" cy="174" rx="84" ry="20" fill="#FFB3C6" stroke="${OUT}" stroke-width="3"/>`,
  box:`<path d="M30 132 L10 112 L58 112 L72 132Z" fill="#E8BD8E" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M170 132 L190 112 L142 112 L128 132Z" fill="#E8BD8E" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M30 132 L170 132 L164 186 L36 186Z" fill="#D9A877" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M84 150 h32" stroke="#B8875A" stroke-width="4" stroke-linecap="round"/>`,
  carrot:`<g transform="translate(100 156) rotate(-25)"><path d="M-9 -12 L9 -12 L0 22Z" fill="#FFA94D" stroke="${OUT}" stroke-width="2.5" stroke-linejoin="round"/><path d="M-4 -12 Q-12 -26 -2 -24 Q0 -32 4 -22 Q14 -26 6 -12" fill="#7CC46A" stroke="${OUT}" stroke-width="2"/></g>`,
  spikes:`<path d="M60 70 L68 44 L82 60 L92 34 L106 56 L118 36 L128 60 L142 46 L142 76 L60 76Z" fill="#7CC46A" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M150 152 Q190 150 186 116 Q176 138 154 134Z" fill="#B5E6A5" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/>`,
  crown:`<path d="M72 60 L78 28 L92 46 L100 20 L108 46 L122 28 L128 60 Z" fill="#FFD84D" stroke="#C99A00" stroke-width="3" stroke-linejoin="round"/><circle cx="100" cy="46" r="5" fill="#FF6B81"/><circle cx="84" cy="52" r="3.5" fill="#7FB8FF"/><circle cx="116" cy="52" r="3.5" fill="#7FB8FF"/>`,
  cape:`<path d="M58 92 Q16 150 28 182 L172 182 Q184 150 142 92Z" fill="#FF6B81" stroke="#C94461" stroke-width="3" stroke-linejoin="round"/>`,
  halo:`<ellipse cx="100" cy="30" rx="30" ry="8" fill="none" stroke="#FFD84D" stroke-width="6"/><ellipse cx="100" cy="30" rx="30" ry="8" fill="none" stroke="#FFF6C2" stroke-width="2"/>`,
  wings:`<path d="M46 112 Q4 76 12 118 Q0 140 28 140 Q22 160 50 148Z" fill="#fff" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/><path d="M154 112 Q196 76 188 118 Q200 140 172 140 Q178 160 150 148Z" fill="#fff" stroke="${OUT}" stroke-width="3" stroke-linejoin="round"/>`,
  wand:`<path d="M150 150 L176 112" stroke="${OUT}" stroke-width="4" stroke-linecap="round"/><path d="M178 98 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1z" fill="#FFD84D" stroke="#C99A00" stroke-width="2"/>`,
  rbdef:`<defs><linearGradient id="rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC1D6"/><stop offset=".35" stop-color="#FFF1B8"/><stop offset=".65" stop-color="#C9F0E1"/><stop offset="1" stop-color="#D6CCFF"/></linearGradient></defs>`,
  tie:`<path d="M60 70 Q100 52 140 70" stroke="#FF6B81" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M140 70 l14 -10 l-2 14z" fill="#FF6B81"/>`,
  mic:`<g transform="translate(150 118) rotate(20)"><rect x="-4" y="0" width="8" height="34" rx="3" fill="#7A7A8C"/><circle cx="0" cy="-4" r="10" fill="#C7C0D2" stroke="${OUT}" stroke-width="2.5"/></g>`
};
const blush=`<ellipse cx="64" cy="128" rx="10" ry="6" fill="#FF9AAE" opacity=".55"/><ellipse cx="136" cy="128" rx="10" ry="6" fill="#FF9AAE" opacity=".55"/>`;
function build(o){
  const [c,,hi]=o.col;
  const j=k=>(k||[]).map(x=>X[x]).join('');
  const feet=(o.shape==='melt'||o.noFeet)?'':`<ellipse cx="64" cy="172" rx="12" ry="6" fill="${c}" stroke="${OUT}" stroke-width="3"/><ellipse cx="136" cy="172" rx="12" ry="6" fill="${c}" stroke="${OUT}" stroke-width="3"/>`;
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${o.noShadow?'':'<ellipse cx="100" cy="186" rx="54" ry="7" fill="#000" opacity=".06"/>'}
    ${j(o.pre)}${ears(o.ears,c)}${body(o.shape||'blob',c)}
    <ellipse cx="78" cy="80" rx="14" ry="7" fill="${hi}" opacity=".9" transform="rotate(-20 78 80)"/>
    ${j(o.mid)}${o.noBlush?'':blush}${eyes(o.eyes)}${mouth(o.mouth)}${feet}${j(o.post)}</svg>`;
}

/* ===== 팔레트 ===== */
const P={
  yellow:['#FFF1B8',0,'#FFFCEB'], green:['#D9F5D0',0,'#F4FFF0'], brown:['#F3D9C4',0,'#FFF3EA'], cream:['#FFF0DE',0,'#FFFAF3'],
  orange:['#FFE0C7',0,'#FFF7F0'], white:['#FFFFFF',0,'#FFFFFF'], purple:['#E6DBFF',0,'#F8F4FF'], dino:['#B5E6A5',0,'#E8FBE0'],
  blue:['#CDEBFF',0,'#F2FAFF'], pink:['#FFD1DC',0,'#FFF6F8'], gray:['#E4E0EA',0,'#F6F4F9'], owl:['#D9C2A8',0,'#F2E6D8'],
  mint:['#CFF3EA',0,'#F0FFFB'], navy:['#4A5578',0,'#6B789E'], peach:['#FFD6CC',0,'#FFF2EE'], lilac:['#F1D9F7',0,'#FCF5FE'],
  gold:['#FFE9A8',0,'#FFF8DC'], rainbow:['url(#rb)',0,'#ffffff']
};

/* ===== 캐릭터 도감 =====  c: 흔함 70% / r: 희귀 25% / l: 전설 5% */
const chars=[
  {id:'chick',  r:'c', name:'삐약이',    col:P.yellow, ears:'tuft',   eyes:'sparkle', mouth:'beak', post:['sparkle'], say:'출근 완료! 삐약!'},
  {id:'sprout', r:'c', name:'새싹이',    col:P.green,  ears:'sprout', eyes:'happy',   mouth:'w',    post:['heart'],   say:'오늘도 파릇파릇~'},
  {id:'tofu',   r:'c', name:'두부',      col:P.white,  eyes:'dot', mouth:'o', shape:'square', say:'아직 말랑해요'},
  {id:'frog',   r:'c', name:'개굴이',    col:P.mint,   ears:'frog',   eyes:'dot',     mouth:'tongue', say:'개굴… 괜찮아요'},
  {id:'hams',   r:'c', name:'볼빵빵',    col:P.peach,  ears:'hamster',eyes:'dot',     mouth:'w', mid:['cheeks'], say:'간식… 있어요?'},
  {id:'yawn',   r:'c', name:'하품이',    col:P.cream,  ears:'hamster',eyes:'sleepy',  mouth:'yawn', post:['zzz'], say:'하아암…'},
  {id:'dog',    r:'c', name:'멍뭉이',    col:P.cream,  ears:'dog',    eyes:'blank',   mouth:'flat', post:['dots'], say:'멍…'},
  {id:'bear',   r:'c', name:'커피곰',    col:P.brown,  ears:'bear',   eyes:'tired',   mouth:'smile', post:['coffee'], say:'커피 수혈 중'},
  {id:'melt',   r:'c', name:'녹는이',    col:P.pink,   eyes:'flat', mouth:'wavy', shape:'melt', post:['sweat2'], say:'녹는 중…'},
  {id:'cloud',  r:'c', name:'구름이',    col:P.gray,   eyes:'sleepy', mouth:'wavy', shape:'fluff', post:['scribble'], say:'머리가 뿌얘요'},
  {id:'boxcat', r:'c', name:'상자냥',    col:P.white,  ears:'cat',    eyes:'blank',   mouth:'w', post:['box'], noFeet:true, say:'여기 숨어 있을래'},
  {id:'carrot', r:'c', name:'당근토끼',  col:P.white,  ears:'bunny',  eyes:'dot',     mouth:'w', post:['carrot'], say:'당근 먹고 힘낼게'},
  {id:'sigh',   r:'c', name:'축처진귀',  col:P.blue,   ears:'droop',  eyes:'teary',   mouth:'sad', post:['sweat'], say:'집…가고…싶어…'},

  {id:'sleepy', r:'r', name:'꿀잠냥',    col:P.cream,  ears:'cat',    eyes:'sleepy',  mouth:'w', shape:'flat', pre:['cushion'], post:['nightcap','zzz'], noFeet:true, noShadow:true, say:'집에 갈래요…'},
  {id:'dino',   r:'r', name:'공룡콩',    col:P.dino,   eyes:'sparkle', mouth:'open', pre:['spikes'], say:'크앙! 퇴근!'},
  {id:'peng',   r:'r', name:'멍펭이',    col:P.navy,   eyes:'blank',   mouth:'beak', mid:['belly'], noBlush:true, post:['ghost'], say:'영혼 가출…'},
  {id:'angry',  r:'r', name:'부글이',    col:P.pink,   ears:'bear',   eyes:'angry',   mouth:'grit', post:['anger','steam'], say:'퇴근 언제야!!'},
  {id:'owl',    r:'r', name:'야근부엉',  col:P.owl,    ears:'owl',    eyes:'owl',     mouth:'beak', mid:['owlBelly'], post:['coffee'], noBlush:true, say:'오늘도 야근…?'},
  {id:'zombie', r:'r', name:'좀비곰',    col:P.purple, ears:'bear',   eyes:'spiral',  mouth:'wavy', mid:['eyebags'], post:['coffee','coffee2'], say:'커피… 더…'},
  {id:'party',  r:'r', name:'회식토끼',  col:P.lilac,  ears:'bunny',  eyes:'wink',    mouth:'open', pre:['tie'], post:['mic','note'], say:'한 곡 뽑겠습니다~'},
  {id:'burrito',r:'r', name:'이불러버',  col:P.blue,   ears:'cat',    eyes:'sleepy',  mouth:'smile', post:['blanket'], noFeet:true, say:'이불 밖은 위험해'},

  {id:'king',   r:'l', name:'칼퇴대왕',  col:P.gold,   ears:'cat',    eyes:'star',    mouth:'open', pre:['cape'], post:['crown','sparkles'], say:'6시 정각! 칼퇴다!'},
  {id:'angel',  r:'l', name:'퇴근천사',  col:P.white,  ears:'bunny',  eyes:'happy',   mouth:'smile', pre:['wings','halo'], post:['sparkles'], say:'집으로 인도할게요'},
  {id:'rainbow',r:'l', name:'무지개말랑',col:P.rainbow,eyes:'sparkle', mouth:'w', shape:'fluff', pre:['rbdef'], post:['wand','sparkles','house'], say:'소원 = 퇴근, 접수 완료!'}
];
chars.forEach(c=>c.svg=build(c));
const R_INFO={c:{label:'흔함',cls:'c'},r:{label:'희귀',cls:'r'},l:{label:'전설',cls:'l'}};
const pool={c:chars.filter(x=>x.r==='c'),r:chars.filter(x=>x.r==='r'),l:chars.filter(x=>x.r==='l')};

const comments=[
  [10,'아직 출근 모드! 쌩쌩하네요'],[20,'이 정도면 오늘 컨디션 최고'],[30,'커피 한 잔이면 버틸 수 있어요'],
  [40,'간식 타임이 필요해 보여요'],[50,'절반 왔어요, 조금만 더!'],[60,'슬슬 영혼이 빠져나가는 중'],
  [70,'시계를 자꾸 보게 되죠?'],[80,'머릿속엔 퇴근 생각뿐'],[90,'이 정도면 집 가도 되겠지…?'],
  [99,'가방 이미 쌌잖아요'],[100,'당장 퇴근하세요!!! 집이 부릅니다']
];

/* ===== 장식 ===== */
const waiting=build({col:P.yellow,eyes:'dot',mouth:'smile'}).replace('</svg>','<text x="148" y="72" font-size="30" font-family="sans-serif" font-weight="bold" fill="#C9A99B">?</text></svg>');



/* ===== 도감 저장 ===== */
let dex={};
try{dex=JSON.parse(localStorage.getItem('gohome-dex')||'{}')}catch(e){}
const saveDex=()=>{try{localStorage.setItem('gohome-dex',JSON.stringify(dex))}catch(e){}};
let justNew=null;
function renderDex(){
  const grid=document.getElementById('grid');
  grid.innerHTML=chars.map(c=>{
    const n=dex[c.id]||0;
    return `<div class="slot ${c.r} ${n?'':'locked'}" data-i="${chars.indexOf(c)}" title="${n?c.name:'???'}">${c.svg}
      ${c.r!=='c'?`<span class="t">${R_INFO[c.r].label}</span>`:''}${n?`<span class="n">×${n}</span>`:''}${justNew===c.id?'<span class="new">NEW</span>':''}</div>`;
  }).join('');
  const got=chars.filter(c=>dex[c.id]).length;
  document.getElementById('dexCount').textContent=`수집 ${got} / ${chars.length}`;
  document.getElementById('tiers').innerHTML=['c','r','l'].map(k=>{
    const t=pool[k].length,g=pool[k].filter(c=>dex[c.id]).length;
    return `<span class="${g===t?'ok':''}">${R_INFO[k].label} ${g}/${t}${g===t?' ✓':''}</span>`;
  }).join('');
  document.getElementById('dex').classList.toggle('done',got===chars.length);
  return got;
}
renderDex();
const dexEl=document.getElementById('dex'),dexBody=document.getElementById('dexBody'),dexTg=document.getElementById('dexToggle');
function fitDex(){dexBody.style.maxHeight=dexBody.scrollHeight+'px';}
function setDex(open){dexEl.classList.toggle('collapsed',!open);dexTg.setAttribute('aria-expanded',open);if(open){fitDex();document.getElementById('dexDot').classList.remove('on');}try{localStorage.setItem('gohome-dex-fold',open?'1':'0')}catch(e){}}
let dexOpen=false;try{dexOpen=localStorage.getItem('gohome-dex-fold')==='1'}catch(e){}
setDex(dexOpen);
dexTg.addEventListener('click',()=>setDex(dexEl.classList.contains('collapsed')));
window.addEventListener('resize',()=>{if(!dexEl.classList.contains('collapsed'))fitDex();});

/* ===== 게임 ===== */
const $=id=>document.getElementById(id);
const cr=$('cr'),card=$('card'),btn=$('btn'),bar=$('bar');
const pick=a=>a[Math.floor(Math.random()*a.length)];
cr.innerHTML=waiting;
const DURATION=4000;
let holding=false,start=0,pct=0,raf=0,last=null;

function setPct(p){pct=p;bar.style.width=p+'%';$('pct').textContent=Math.floor(p);}
function loop(t){
  if(!holding) return;
  const p=Math.min(100,(t-start)/DURATION*100);
  setPct(p);cr.style.setProperty('--sp',(0.35-p*0.0028)+'s');
  if(p>=100){release();return;}
  raf=requestAnimationFrame(loop);
}
function press(e){
  e.preventDefault(); if(holding) return;
  holding=true;bar.style.transition='';btn.classList.add('down');$('btnTxt').textContent='으아아아…';
  card.className='card';$('rar').className='rar';$('cname').textContent='';
  $('say').textContent='두근두근…';$('comment').textContent='얼마나 가고 싶은 거예요…?';
  cr.className='creature shake';cr.innerHTML=waiting;
  start=performance.now();setPct(0);raf=requestAnimationFrame(loop);
}
function roll(){
  const x=Math.random();
  return pick(pool[x<0.05?'l':x<0.30?'r':'c']);
}
function release(){
  if(!holding) return;
  holding=false;cancelAnimationFrame(raf);btn.classList.remove('down');
  const p=Math.floor(pct);
  if(p<1){cr.className='creature idle';$('btnTxt').textContent='꾹 누르고 있다가 떼세요';$('say').textContent='너무 살짝 눌렀어요!';$('pct').textContent='--';bar.style.width=0;return;}
  const c=roll(), isNew=!dex[c.id];
  dex[c.id]=(dex[c.id]||0)+1;saveDex();justNew=isNew?c.id:null;
  last={c,p};
  cr.className='creature pop';cr.innerHTML=c.svg;
  setTimeout(()=>{if(!holding) cr.className='creature idle';},620);
  card.className='card'+(c.r==='r'?' rare':c.r==='l'?' legend':'');
  $('rar').className='rar '+c.r;$('rar').textContent=(c.r==='l'?'✨ ':'')+R_INFO[c.r].label+(isNew?' · NEW!':'');
  $('cname').textContent=c.name;$('say').textContent=c.say;
  $('comment').textContent=comments.find(x=>p<=x[0])[1];
  $('btnTxt').textContent='한 번 더 눌러볼까요?';
  $('saves').classList.remove('hide');
  bar.style.transition='width .6s ease';bar.style.width=0;setTimeout(()=>bar.style.transition='',650);
  const before=chars.filter(x=>dex[x.id]).length-(isNew?1:0);
  const got=renderDex();
  if(dexEl.classList.contains('collapsed')){if(isNew)document.getElementById('dexDot').classList.add('on');}else fitDex();
  if(c.r==='l'){flash();toast('✨ 전설 등장! ✨','l');burst(40,['⭐','✨','👑','💛','🌈']);}
  else if(c.r==='r'){toast('희귀 등장!','r');burst(22,['💜','✨','💙','⭐']);}
  else burst(p>=100?24:8,p>=100?['🏠','💗','✨','🎉']:['💗','✨','🌸','🫧']);
  if(got===chars.length&&before<chars.length) setTimeout(()=>{toast('🎉 도감 완성! 🎉','d');burst(50,['🎉','🏆','💗','⭐','✨']);},1400);
}
function flash(){const f=document.createElement('div');f.className='flash';document.body.appendChild(f);setTimeout(()=>f.remove(),950);}
function toast(t,k){const e=document.createElement('div');e.className='toast '+k;e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1650);}
function burst(n,items){
  const r=cr.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  for(let k=0;k<n;k++){
    const s=document.createElement('span');s.className='bit';s.textContent=pick(items);
    const a=Math.random()*Math.PI*2,d=100+Math.random()*180;
    s.style.left=x+'px';s.style.top=y+'px';
    s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');
    s.style.setProperty('--r',(Math.random()*120-60)+'deg');
    document.body.appendChild(s);setTimeout(()=>s.remove(),1750);
  }
}
btn.addEventListener('pointerdown',press);
window.addEventListener('pointerup',release);
window.addEventListener('pointercancel',release);
btn.addEventListener('contextmenu',e=>e.preventDefault());
btn.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat) press(e);});
btn.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter') release();});

/* ===== 이미지 저장 ===== */
function rr(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function loadSvg(svg){return new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);});}
const RCOL={c:'#8FC79A',r:'#8C9CFF',l:'#FFB938'};
const bgOf=r=>r==='l'?'#FFF6D6':r==='r'?'#EEF0FF':'#FFF0F3';
function showImage(url,name){$('shot').src=url;$('dl').href=url;$('dl').download=name;$('modal').classList.add('on');}
async function busyRun(b,label,fn){if(b.disabled)return;const t=b.textContent;b.disabled=true;b.textContent=label;try{await document.fonts.load('60px Jua');await document.fonts.load('bold 44px Gaegu');await fn();}catch(e){alertBox();}finally{b.disabled=false;b.textContent=t;}}
function alertBox(){$('comment').textContent='이 화면에선 이미지를 만들 수 없어요. 캡처해 주세요!';}

// 1) 결과 사진
$('save').addEventListener('click',()=>busyRun($('save'),'만드는 중…',async()=>{
  if(!last) return;
  const W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;
  const ctx=cv.getContext('2d');const {c,p}=last;
  ctx.fillStyle=bgOf(c.r);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';rr(ctx,60,60,W-120,H-120,60);ctx.fill();
  ctx.textAlign='center';ctx.fillStyle='#4A2018';ctx.font='64px Jua';ctx.fillText('집 가고 싶은 만큼 누르세요!',W/2,180);
  ctx.drawImage(await loadSvg(c.svg),W/2-280,220,560,560);
  ctx.font='40px Jua';ctx.fillStyle=RCOL[c.r];rr(ctx,W/2-80,800,160,64,32);ctx.fill();
  ctx.fillStyle='#fff';ctx.fillText(R_INFO[c.r].label,W/2,846);
  ctx.fillStyle='#4A2F27';ctx.font='60px Jua';ctx.fillText(c.name,W/2,940);
  ctx.font='44px Jua';ctx.fillStyle='#8B6F64';ctx.fillText('오늘의 퇴근 욕구',W/2,1020);
  ctx.font='150px Jua';ctx.fillStyle='#4A2018';ctx.fillText(p+'%',W/2,1170);
  ctx.font='40px Jua';ctx.fillStyle='#B79586';ctx.fillText(comments.find(x=>p<=x[0])[1],W/2,1240);
  showImage(cv.toDataURL('image/png'),`퇴근욕구_${c.name}.png`);
}));

// 2) 움짤 (GIF)
async function makeGif(c,head,big,sub){
  const img=await loadSvg(c.svg);
  const W=360,H=450,cv=document.createElement('canvas');cv.width=W;cv.height=H;
  const ctx=cv.getContext('2d',{willReadFrequently:true});
  const enc=GIFENC.GIFEncoder(), N=24;
  for(let i=0;i<N;i++){
    const t=i/N*Math.PI*2;
    ctx.fillStyle=bgOf(c.r);ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#fff';rr(ctx,14,14,W-28,H-28,28);ctx.fill();
    ctx.textAlign='center';ctx.font='22px Jua';ctx.fillStyle='#8B6F64';ctx.fillText(head,W/2,52);
    if(c.r!=='c'){
      ctx.save();ctx.translate(W/2,190);ctx.rotate(t/2);ctx.fillStyle=c.r==='l'?'rgba(255,216,77,.35)':'rgba(140,170,255,.28)';
      for(let k=0;k<12;k++){ctx.rotate(Math.PI/6);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-14,-150);ctx.lineTo(14,-150);ctx.closePath();ctx.fill();}
      ctx.restore();
    }
    ctx.save();ctx.translate(W/2,300);ctx.rotate(Math.sin(t)*0.06);
    const dy=-(1-Math.cos(t))*8, sq=1+Math.sin(t*2)*0.02;
    ctx.scale(1/sq,sq);ctx.drawImage(img,-120,-230+dy,240,240);ctx.restore();
    ctx.font='28px Jua';ctx.fillStyle='#4A2F27';ctx.fillText(c.name,W/2,345);
    ctx.font=(sub?'34px':'64px')+' Jua';ctx.fillStyle='#4A2018';ctx.fillText(big,W/2,sub?392:412);
    if(sub){ctx.font='20px Jua';ctx.fillStyle='#B79586';ctx.fillText(sub,W/2,420);}
    const data=ctx.getImageData(0,0,W,H).data;
    const pal=GIFENC.quantize(data,256), idx=GIFENC.applyPalette(data,pal);
    enc.writeFrame(idx,W,H,{palette:pal,delay:60});
    if(i%6===5) await new Promise(r=>setTimeout(r,0));
  }
  enc.finish();
  const blob=new Blob([enc.bytes()],{type:'image/gif'});
  return await new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(blob);});
}
$('saveGif').addEventListener('click',()=>busyRun($('saveGif'),'만드는 중…',async()=>{
  if(!last) return;
  showImage(await makeGif(last.c,'오늘의 퇴근 욕구',last.p+'%'),`퇴근욕구_${last.c.name}.gif`);
}));

// 도감 캐릭터 사진
async function makeCharPng(c){
  const W=1080,H=1080,cv=document.createElement('canvas');cv.width=W;cv.height=H;const ctx=cv.getContext('2d');
  ctx.fillStyle=bgOf(c.r);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';rr(ctx,50,50,W-100,H-100,60);ctx.fill();
  ctx.textAlign='center';ctx.font='40px Jua';ctx.fillStyle=RCOL[c.r];rr(ctx,W/2-80,110,160,64,32);ctx.fill();
  ctx.fillStyle='#fff';ctx.fillText(R_INFO[c.r].label,W/2,156);
  ctx.drawImage(await loadSvg(c.svg),W/2-290,190,580,580);
  ctx.fillStyle='#4A2F27';ctx.font='72px Jua';ctx.fillText(c.name,W/2,860);
  ctx.font='42px Jua';ctx.fillStyle='#6B4038';ctx.fillText('“'+c.say+'”',W/2,930);
  ctx.font='30px Jua';ctx.fillStyle='#B79586';ctx.fillText('집 가고 싶은 만큼 누르세요!',W/2,990);
  return cv.toDataURL('image/png');
}

// 도감 상세 팝업
let shC=null;
function openSheet(c){
  shC=c;const n=dex[c.id]||0;
  $('shRar').className='rar '+c.r;$('shRar').textContent=(c.r==='l'?'✨ ':'')+R_INFO[c.r].label;
  $('shCr').innerHTML=c.svg;$('shName').textContent=c.name;$('shSay').textContent='“'+c.say+'”';
  $('shMeta').textContent=`지금까지 ${n}번 만났어요`;
  document.querySelector('.sheet-box').className='sheet-box '+c.r;
  $('sheet').classList.add('on');
}
function miniToast(t){const e=document.createElement('div');e.className='mini-toast';e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1650);}
$('grid').addEventListener('click',e=>{
  const s=e.target.closest('.slot');if(!s) return;
  const c=chars[+s.dataset.i];
  if(!dex[c.id]){miniToast('아직 못 만난 친구예요 🙈');return;}
  openSheet(c);
});
$('sheetX').addEventListener('click',()=>$('sheet').classList.remove('on'));
$('sheet').addEventListener('click',e=>{if(e.target.id==='sheet')$('sheet').classList.remove('on');});
$('shPng').addEventListener('click',()=>busyRun($('shPng'),'만드는 중…',async()=>{showImage(await makeCharPng(shC),`퇴근친구_${shC.name}.png`);}));
$('shGif').addEventListener('click',()=>busyRun($('shGif'),'만드는 중…',async()=>{showImage(await makeGif(shC,R_INFO[shC.r].label+' 친구','“'+shC.say+'”',`${dex[shC.id]||0}번 만남`),`퇴근친구_${shC.name}.gif`);}));

// 3) 도감 이미지
$('saveDex').addEventListener('click',()=>busyRun($('saveDex'),'만드는 중…',async()=>{
  const imgs=await Promise.all(chars.map(c=>loadSvg(c.svg)));
  const cols=6,S=150,G=20,rows=Math.ceil(chars.length/cols);
  const W=1080,top=270,H=top+rows*(S+G)+60;
  const cv=document.createElement('canvas');cv.width=W;cv.height=H;const ctx=cv.getContext('2d');
  const got=chars.filter(c=>dex[c.id]).length, done=got===chars.length;
  ctx.fillStyle=done?'#FFF3C4':'#FFE9EF';ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#4A2018';ctx.font='64px Jua';ctx.fillText('나의 퇴근 친구 도감',W/2,110);
  ctx.font='40px Jua';ctx.fillStyle='#4A2F27';ctx.fillText(`수집 ${got} / ${chars.length}`,W/2,175);
  ctx.font='30px Jua';ctx.fillStyle='#8B6F64';
  ctx.fillText(['c','r','l'].map(k=>`${R_INFO[k].label} ${pool[k].filter(c=>dex[c.id]).length}/${pool[k].length}`).join('  ·  '),W/2,225);
  const left=(W-(cols*S+(cols-1)*G))/2;
  chars.forEach((c,i)=>{
    const x=left+(i%cols)*(S+G), y=top+Math.floor(i/cols)*(S+G), n=dex[c.id]||0;
    ctx.fillStyle=n?(c.r==='l'?'#FFFBEA':'#fff'):'#F6EEF0';rr(ctx,x,y,S,S,30);ctx.fill();
    if(c.r!=='c'){ctx.lineWidth=6;ctx.strokeStyle=c.r==='l'?'#FFD84D':'#C3D2FF';rr(ctx,x+3,y+3,S-6,S-6,27);ctx.stroke();}
    if(n){ctx.drawImage(imgs[i],x+10,y+6,S-20,S-20);ctx.font='22px Jua';ctx.textAlign='right';ctx.fillStyle='#B79586';ctx.fillText('×'+n,x+S-12,y+S-10);}
    else{ctx.font='56px Jua';ctx.textAlign='center';ctx.fillStyle='#D9C2C8';ctx.fillText('?',x+S/2,y+S/2+20);}
    ctx.textAlign='center';
  });
  if(done){ctx.save();ctx.translate(W-170,120);ctx.rotate(-0.2);ctx.strokeStyle='#FF5F7E';ctx.lineWidth=6;rr(ctx,-110,-40,220,80,16);ctx.stroke();ctx.fillStyle='#FF5F7E';ctx.font='44px Jua';ctx.fillText('도감 완성!',0,15);ctx.restore();}
  showImage(cv.toDataURL('image/png'),'퇴근친구_도감.png');
}));
$('close').addEventListener('click',()=>$('modal').classList.remove('on'));
$('modal').addEventListener('click',e=>{if(e.target.id==='modal')$('modal').classList.remove('on');});
