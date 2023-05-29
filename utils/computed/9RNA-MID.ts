import mtgJsonSetRNA from '../../mtgjson/AllSetFiles/RNA.json' assert { type: 'json' };
import mtgJsonSetWAR from '../../mtgjson/AllSetFiles/WAR.json' assert { type: 'json' };
import mtgJsonSetELD from '../../mtgjson/AllSetFiles/ELD.json' assert { type: 'json' };
import mtgJsonSetTHB from '../../mtgjson/AllSetFiles/THB.json' assert { type: 'json' };
import mtgJsonSetIKO from '../../mtgjson/AllSetFiles/IKO.json' assert { type: 'json' };
import mtgJsonSetZNR from '../../mtgjson/AllSetFiles/ZNR.json' assert { type: 'json' };
import mtgJsonSetKHM from '../../mtgjson/AllSetFiles/KHM.json' assert { type: 'json' };
import mtgJsonSetSTX from '../../mtgjson/AllSetFiles/STX.json' assert { type: 'json' };
import mtgJsonSetAFR from '../../mtgjson/AllSetFiles/AFR.json' assert { type: 'json' };
import mtgJsonSetMID from '../../mtgjson/AllSetFiles/MID.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run9 = () => {
    const sets: Set[] = [mtgJsonSetRNA.data, mtgJsonSetWAR.data, mtgJsonSetELD.data, mtgJsonSetTHB.data, mtgJsonSetIKO.data, mtgJsonSetZNR.data, mtgJsonSetKHM.data, mtgJsonSetSTX.data, mtgJsonSetAFR.data, mtgJsonSetMID.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
