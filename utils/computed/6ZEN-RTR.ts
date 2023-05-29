import mtgJsonSetZEN from '../../mtgjson/AllSetFiles/ZEN.json' assert { type: 'json' };
import mtgJsonSetWWK from '../../mtgjson/AllSetFiles/WWK.json' assert { type: 'json' };
import mtgJsonSetROE from '../../mtgjson/AllSetFiles/ROE.json' assert { type: 'json' };
import mtgJsonSetSOM from '../../mtgjson/AllSetFiles/SOM.json' assert { type: 'json' };
import mtgJsonSetMBS from '../../mtgjson/AllSetFiles/MBS.json' assert { type: 'json' };
import mtgJsonSetNPH from '../../mtgjson/AllSetFiles/NPH.json' assert { type: 'json' };
import mtgJsonSetISD from '../../mtgjson/AllSetFiles/ISD.json' assert { type: 'json' };
import mtgJsonSetDKA from '../../mtgjson/AllSetFiles/DKA.json' assert { type: 'json' };
import mtgJsonSetAVR from '../../mtgjson/AllSetFiles/AVR.json' assert { type: 'json' };
import mtgJsonSetRTR from '../../mtgjson/AllSetFiles/RTR.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run6 = () => {
    const sets: Set[] = [mtgJsonSetZEN.data, mtgJsonSetWWK.data, mtgJsonSetROE.data, mtgJsonSetSOM.data, mtgJsonSetMBS.data, mtgJsonSetNPH.data, mtgJsonSetISD.data, mtgJsonSetDKA.data, mtgJsonSetAVR.data, mtgJsonSetRTR.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
