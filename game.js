export function applyGate(count,gate){const n=gate.op==='+'?count+gate.value:gate.op==='-'?count-gate.value:count*gate.value;return Math.max(1,Math.floor(n))}
export function pickWinner(player,rival){return player===rival?'draw':player>rival?'player':'rival'}
export function stageGates(stage){return [{op:'+',value:2+stage%5},{op:stage%3===0?'*':'-',value:stage%3===0?2:1+stage%4}]}
