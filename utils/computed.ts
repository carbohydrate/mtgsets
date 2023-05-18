import * as fs from 'fs';
import { run1 } from './computed/1ARN-VIS.ts';
import { run2 } from './computed/2WTH-PCY.ts';
import { run3 } from './computed/3INV-MRD.ts';
import { run4 } from './computed/4DST-TSP.ts';
import { run5 } from './computed/5TSB-ARB.ts';
import { run6 } from './computed/6ZEN-RTR.ts';
import { run7 } from './computed/7GTC-OGW.ts';
import { run8 } from './computed/8SOI-GRN.ts';
import { run9 } from './computed/9RNA-MID.ts';
import { run10 } from './computed/10VOW-MOM.ts';

export interface ComputedValue {
    code: string;
    c: number;
    u: number;
    r: number;
    m: number;
};

const runAll = () => {
    const allComputedSetValues: ComputedValue[] = [];

    allComputedSetValues.push(...run1());
    allComputedSetValues.push(...run2());
    allComputedSetValues.push(...run3());
    allComputedSetValues.push(...run4());
    allComputedSetValues.push(...run5());
    allComputedSetValues.push(...run6());
    allComputedSetValues.push(...run7());
    allComputedSetValues.push(...run8());
    allComputedSetValues.push(...run9());
    allComputedSetValues.push(...run10());

    console.log('allComputedSetValues: ', allComputedSetValues);

    console.log('writing out to src/data/computed.json');

    fs.writeFileSync('src/data/computed.json', JSON.stringify(allComputedSetValues));

    console.log('finished');
};

runAll();
