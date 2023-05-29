import mtgJsonSetVOW from '../../mtgjson/AllSetFiles/VOW.json' assert { type: 'json' };
import mtgJsonSetNEO from '../../mtgjson/AllSetFiles/NEO.json' assert { type: 'json' };
import mtgJsonSetSNC from '../../mtgjson/AllSetFiles/SNC.json' assert { type: 'json' };
import mtgJsonSetDMU from '../../mtgjson/AllSetFiles/DMU.json' assert { type: 'json' };
import mtgJsonSetBRO from '../../mtgjson/AllSetFiles/BRO.json' assert { type: 'json' };
import mtgJsonSetONE from '../../mtgjson/AllSetFiles/ONE.json' assert { type: 'json' };
import mtgJsonSetMOM from '../../mtgjson/AllSetFiles/MOM.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run10 = () => {
    const sets: Set[] = [mtgJsonSetVOW.data, mtgJsonSetNEO.data, mtgJsonSetSNC.data, mtgJsonSetDMU.data, mtgJsonSetBRO.data, mtgJsonSetONE.data, mtgJsonSetMOM.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
