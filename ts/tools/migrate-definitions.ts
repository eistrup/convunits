import { join, resolve } from 'path';
import { readdirSync, readFileSync, writeFile } from 'fs';

const definitionsPath = join(resolve(__dirname, '../../definitions'));
const definitionsPath2 = join(resolve(__dirname, '../../definitions'));
//read quantities
readdirSync(definitionsPath).forEach((file: string) => {
    if (file == 'volumetricFlowRate.json') {
        const definition = JSON.parse(readFileSync(join(definitionsPath, file)).toString());
        const definitionUnits = {};

        Object.entries(definition['units']).map(([unitKey, unitDefinition]) => {
            const transf = unitDefinition['transformations'];

            unitDefinition['transformations'] = transf.map((t) => {
                if (t[0] == 'factor') {
                    t[1] = t[1] / 1000;
                }
                return t;
            });

            definitionUnits[unitKey] = unitDefinition;
        });

        // definition["units"] = definitionUnits;

        const json = JSON.stringify(definition);
        writeFile(join(definitionsPath2, file), json, function (err) {
            if (err) return console.log(err);
        });
    }
});
