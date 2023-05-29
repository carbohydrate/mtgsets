import mtgJsonSetDST from '../../mtgjson/AllSetFiles/DST.json' assert { type: 'json' };
import mtgJsonSet5DN from '../../mtgjson/AllSetFiles/5DN.json' assert { type: 'json' };
import mtgJsonSetCHK from '../../mtgjson/AllSetFiles/CHK.json' assert { type: 'json' };
import mtgJsonSetBOK from '../../mtgjson/AllSetFiles/BOK.json' assert { type: 'json' };
import mtgJsonSetSOK from '../../mtgjson/AllSetFiles/SOK.json' assert { type: 'json' };
import mtgJsonSetRAV from '../../mtgjson/AllSetFiles/RAV.json' assert { type: 'json' };
import mtgJsonSetGPT from '../../mtgjson/AllSetFiles/GPT.json' assert { type: 'json' };
import mtgJsonSetDIS from '../../mtgjson/AllSetFiles/DIS.json' assert { type: 'json' };
import mtgJsonSetCSP from '../../mtgjson/AllSetFiles/CSP.json' assert { type: 'json' };
import mtgJsonSetTSP from '../../mtgjson/AllSetFiles/TSP.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run4 = () => {
    const sets: Set[] = [mtgJsonSetDST.data, mtgJsonSet5DN.data, mtgJsonSetCHK.data, mtgJsonSetBOK.data, mtgJsonSetSOK.data, mtgJsonSetRAV.data, mtgJsonSetGPT.data, mtgJsonSetDIS.data, mtgJsonSetCSP.data, mtgJsonSetTSP.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
