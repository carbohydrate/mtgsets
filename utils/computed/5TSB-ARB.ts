import mtgJsonSetTSB from '../../mtgjson/AllSetFiles/TSB.json' assert { type: 'json' };
import mtgJsonSetPLC from '../../mtgjson/AllSetFiles/PLC.json' assert { type: 'json' };
import mtgJsonSetFUT from '../../mtgjson/AllSetFiles/FUT.json' assert { type: 'json' };
import mtgJsonSetLRW from '../../mtgjson/AllSetFiles/LRW.json' assert { type: 'json' };
import mtgJsonSetMOR from '../../mtgjson/AllSetFiles/MOR.json' assert { type: 'json' };
import mtgJsonSetSHM from '../../mtgjson/AllSetFiles/SHM.json' assert { type: 'json' };
import mtgJsonSetEVE from '../../mtgjson/AllSetFiles/EVE.json' assert { type: 'json' };
import mtgJsonSetALA from '../../mtgjson/AllSetFiles/ALA.json' assert { type: 'json' };
import mtgJsonSetCON from '../../mtgjson/AllSetFiles/CON_.json' assert { type: 'json' };
import mtgJsonSetARB from '../../mtgjson/AllSetFiles/ARB.json' assert { type: 'json' };
import { Set } from '../../src/types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run5 = () => {
    const sets: Set[] = [mtgJsonSetTSB.data, mtgJsonSetPLC.data, mtgJsonSetFUT.data, mtgJsonSetLRW.data, mtgJsonSetMOR.data, mtgJsonSetSHM.data, mtgJsonSetEVE.data, mtgJsonSetALA.data, mtgJsonSetCON.data, mtgJsonSetARB.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
