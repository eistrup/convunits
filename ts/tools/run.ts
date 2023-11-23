import { Convert } from "convunits";
const result = new Convert(1).from('m').to('ft')
console.log(result.evaluate()) // 3.28084
console.log(result.asString()) // "1*3.28084"