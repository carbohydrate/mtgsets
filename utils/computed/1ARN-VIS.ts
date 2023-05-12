import mtgJsonSetARN from '../../mtgjson/AllSetFiles/ARN.json' assert { type: "json" };
import mtgJsonSetATQ from '../../mtgjson/AllSetFiles/ATQ.json' assert { type: "json" };
import mtgJsonSetLEG from '../../mtgjson/AllSetFiles/LEG.json' assert { type: "json" };
import mtgJsonSetDRK from '../../mtgjson/AllSetFiles/DRK.json' assert { type: "json" };
import mtgJsonSetFEM from '../../mtgjson/AllSetFiles/FEM.json' assert { type: "json" };
import mtgJsonSetICE from '../../mtgjson/AllSetFiles/ICE.json' assert { type: "json" };
import mtgJsonSetHML from '../../mtgjson/AllSetFiles/HML.json' assert { type: "json" };
import mtgJsonSetALL from '../../mtgjson/AllSetFiles/ALL.json' assert { type: "json" };
import mtgJsonSetMIR from '../../mtgjson/AllSetFiles/MIR.json' assert { type: "json" };
import mtgJsonSetVIS from '../../mtgjson/AllSetFiles/VIS.json' assert { type: "json" };
import { Set } from '../../src/types.ts';
import { setSizeRarity } from './_helpers.ts';
import { ComputedValue } from '../computed.ts';

export const run1 = () => {
    const sets: Set[] = [mtgJsonSetARN.data, mtgJsonSetATQ.data, mtgJsonSetLEG.data, mtgJsonSetDRK.data, mtgJsonSetFEM.data, mtgJsonSetICE.data, mtgJsonSetHML.data, mtgJsonSetALL.data, mtgJsonSetMIR.data, mtgJsonSetVIS.data];

    const computedSetValues: ComputedValue[] = [];
    sets.map(set => {
        const computedValues = setSizeRarity(set);

        computedSetValues.push(computedValues);
    });

    return computedSetValues;
};
