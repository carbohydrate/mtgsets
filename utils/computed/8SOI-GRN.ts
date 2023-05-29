import mtgJsonSetSOI from '../../mtgjson/AllSetFiles/SOI.json' assert { type: 'json' };
import mtgJsonSetEMN from '../../mtgjson/AllSetFiles/EMN.json' assert { type: 'json' };
import mtgJsonSetKLD from '../../mtgjson/AllSetFiles/KLD.json' assert { type: 'json' };
import mtgJsonSetAER from '../../mtgjson/AllSetFiles/AER.json' assert { type: 'json' };
import mtgJsonSetAKH from '../../mtgjson/AllSetFiles/AKH.json' assert { type: 'json' };
import mtgJsonSetHOU from '../../mtgjson/AllSetFiles/HOU.json' assert { type: 'json' };
import mtgJsonSetXLN from '../../mtgjson/AllSetFiles/XLN.json' assert { type: 'json' };
import mtgJsonSetRIX from '../../mtgjson/AllSetFiles/RIX.json' assert { type: 'json' };
import mtgJsonSetDOM from '../../mtgjson/AllSetFiles/DOM.json' assert { type: 'json' };
import mtgJsonSetGRN from '../../mtgjson/AllSetFiles/GRN.json' assert { type: 'json' };
import { Set } from '../../src/mtgjson-types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run8 = () => {
    const sets: Set[] = [mtgJsonSetSOI.data, mtgJsonSetEMN.data, mtgJsonSetKLD.data, mtgJsonSetAER.data, mtgJsonSetAKH.data, mtgJsonSetHOU.data, mtgJsonSetXLN.data, mtgJsonSetRIX.data, mtgJsonSetDOM.data, mtgJsonSetGRN.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
