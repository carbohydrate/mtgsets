import mtgJsonSetGTC from '../../mtgjson/AllSetFiles/GTC.json' assert { type: 'json' };
import mtgJsonSetDGM from '../../mtgjson/AllSetFiles/DGM.json' assert { type: 'json' };
import mtgJsonSetTHS from '../../mtgjson/AllSetFiles/THS.json' assert { type: 'json' };
import mtgJsonSetBNG from '../../mtgjson/AllSetFiles/BNG.json' assert { type: 'json' };
import mtgJsonSetJOU from '../../mtgjson/AllSetFiles/JOU.json' assert { type: 'json' };
import mtgJsonSetKTK from '../../mtgjson/AllSetFiles/KTK.json' assert { type: 'json' };
import mtgJsonSetFRF from '../../mtgjson/AllSetFiles/FRF.json' assert { type: 'json' };
import mtgJsonSetDTK from '../../mtgjson/AllSetFiles/DTK.json' assert { type: 'json' };
import mtgJsonSetBFZ from '../../mtgjson/AllSetFiles/BFZ.json' assert { type: 'json' };
import mtgJsonSetOGW from '../../mtgjson/AllSetFiles/OGW.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run7 = () => {
    const sets: Set[] = [mtgJsonSetGTC.data, mtgJsonSetDGM.data, mtgJsonSetTHS.data, mtgJsonSetBNG.data, mtgJsonSetJOU.data, mtgJsonSetKTK.data, mtgJsonSetFRF.data, mtgJsonSetDTK.data, mtgJsonSetBFZ.data, mtgJsonSetOGW.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
