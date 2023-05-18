import mtgJsonSetINV from '../../mtgjson/AllSetFiles/INV.json' assert { type: 'json' };
import mtgJsonSetPLS from '../../mtgjson/AllSetFiles/PLS.json' assert { type: 'json' };
import mtgJsonSetAPC from '../../mtgjson/AllSetFiles/APC.json' assert { type: 'json' };
import mtgJsonSetODY from '../../mtgjson/AllSetFiles/ODY.json' assert { type: 'json' };
import mtgJsonSetTOR from '../../mtgjson/AllSetFiles/TOR.json' assert { type: 'json' };
import mtgJsonSetJUD from '../../mtgjson/AllSetFiles/JUD.json' assert { type: 'json' };
import mtgJsonSetONS from '../../mtgjson/AllSetFiles/ONS.json' assert { type: 'json' };
import mtgJsonSetLGN from '../../mtgjson/AllSetFiles/LGN.json' assert { type: 'json' };
import mtgJsonSetSCG from '../../mtgjson/AllSetFiles/SCG.json' assert { type: 'json' };
import mtgJsonSetMRD from '../../mtgjson/AllSetFiles/MRD.json' assert { type: 'json' };
import { Set } from '../../src/types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run3 = () => {
    const sets: Set[] = [mtgJsonSetINV.data, mtgJsonSetPLS.data, mtgJsonSetAPC.data, mtgJsonSetODY.data, mtgJsonSetTOR.data, mtgJsonSetJUD.data, mtgJsonSetONS.data, mtgJsonSetLGN.data, mtgJsonSetSCG.data, mtgJsonSetMRD.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
