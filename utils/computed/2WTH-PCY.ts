import mtgJsonSetWTH from '../../mtgjson/AllSetFiles/WTH.json' assert { type: 'json' };
import mtgJsonSetTMP from '../../mtgjson/AllSetFiles/TMP.json' assert { type: 'json' };
import mtgJsonSetSTH from '../../mtgjson/AllSetFiles/STH.json' assert { type: 'json' };
import mtgJsonSetEXO from '../../mtgjson/AllSetFiles/EXO.json' assert { type: 'json' };
import mtgJsonSetUSG from '../../mtgjson/AllSetFiles/USG.json' assert { type: 'json' };
import mtgJsonSetULG from '../../mtgjson/AllSetFiles/ULG.json' assert { type: 'json' };
import mtgJsonSetUDS from '../../mtgjson/AllSetFiles/UDS.json' assert { type: 'json' };
import mtgJsonSetMMQ from '../../mtgjson/AllSetFiles/MMQ.json' assert { type: 'json' };
import mtgJsonSetNEM from '../../mtgjson/AllSetFiles/NEM.json' assert { type: 'json' };
import mtgJsonSetPCY from '../../mtgjson/AllSetFiles/PCY.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run2 = () => {
    const sets: Set[] = [mtgJsonSetWTH.data, mtgJsonSetTMP.data, mtgJsonSetSTH.data, mtgJsonSetEXO.data, mtgJsonSetUSG.data, mtgJsonSetULG.data, mtgJsonSetUDS.data, mtgJsonSetMMQ.data, mtgJsonSetNEM.data, mtgJsonSetPCY.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
