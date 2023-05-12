import * as fs from 'fs';
import { run1 } from './computed/1ARN-VIS.ts';
import { run2 } from './computed/2WTH-PCY.ts';

// import mtgJsonSetINV from '../mtgjson/AllSetFiles/INV.json' assert { type: 'json' };
// import mtgJsonSetPLS from '../mtgjson/AllSetFiles/PLS.json' assert { type: 'json' };
// import mtgJsonSetAPC from '../mtgjson/AllSetFiles/APC.json' assert { type: 'json' };
// import mtgJsonSetODY from '../mtgjson/AllSetFiles/ODY.json' assert { type: 'json' };
// import mtgJsonSetTOR from '../mtgjson/AllSetFiles/TOR.json' assert { type: 'json' };
// import mtgJsonSetJUD from '../mtgjson/AllSetFiles/JUD.json' assert { type: 'json' };
// import mtgJsonSetONS from '../mtgjson/AllSetFiles/ONS.json' assert { type: 'json' };
// import mtgJsonSetLGN from '../mtgjson/AllSetFiles/LGN.json' assert { type: 'json' };
// import mtgJsonSetSCG from '../mtgjson/AllSetFiles/SCG.json' assert { type: 'json' };
// import mtgJsonSetMRD from '../mtgjson/AllSetFiles/MRD.json' assert { type: 'json' };
// import mtgJsonSetDST from '../mtgjson/AllSetFiles/DST.json' assert { type: 'json' };
// import mtgJsonSet5DN from '../mtgjson/AllSetFiles/5DN.json' assert { type: 'json' };
// import mtgJsonSetCHK from '../mtgjson/AllSetFiles/CHK.json' assert { type: 'json' };
// import mtgJsonSetBOK from '../mtgjson/AllSetFiles/BOK.json' assert { type: 'json' };
// import mtgJsonSetSOK from '../mtgjson/AllSetFiles/SOK.json' assert { type: 'json' };
// import mtgJsonSetRAV from '../mtgjson/AllSetFiles/RAV.json' assert { type: 'json' };
// import mtgJsonSetGPT from '../mtgjson/AllSetFiles/GPT.json' assert { type: 'json' };
// import mtgJsonSetDIS from '../mtgjson/AllSetFiles/DIS.json' assert { type: 'json' };
// import mtgJsonSetCSP from '../mtgjson/AllSetFiles/CSP.json' assert { type: 'json' };
// import mtgJsonSetTSP from '../mtgjson/AllSetFiles/TSP.json' assert { type: 'json' };


// import mtgJsonSetTSB from '../../mtgjson/AllSetFiles/TSB.json';
// import mtgJsonSetPLC from '../mtgjson/AllSetFiles/PLC.json' assert { type: 'json' };
// import mtgJsonSetFUT from '../../mtgjson/AllSetFiles/FUT.json';
// import mtgJsonSetLRW from '../mtgjson/AllSetFiles/LRW.json' assert { type: 'json' };
// import mtgJsonSetMOR from '../mtgjson/AllSetFiles/MOR.json' assert { type: 'json' };
// import mtgJsonSetSHM from '../mtgjson/AllSetFiles/SHM.json' assert { type: 'json' };
// import mtgJsonSetEVE from '../mtgjson/AllSetFiles/EVE.json' assert { type: 'json' };
// import mtgJsonSetALA from '../mtgjson/AllSetFiles/ALA.json' assert { type: 'json' };

// import mtgJsonSetCON from '../mtgjson/AllSetFiles/CON.json' assert { type: 'json' };

// import mtgJsonSetARB from '../mtgjson/AllSetFiles/ARB.json' assert { type: 'json' };
// import mtgJsonSetZEN from '../mtgjson/AllSetFiles/ZEN.json' assert { type: 'json' };
// import mtgJsonSetWWK from '../mtgjson/AllSetFiles/WWK.json' assert { type: 'json' };
// import mtgJsonSetROE from '../mtgjson/AllSetFiles/ROE.json' assert { type: 'json' };
// import mtgJsonSetSOM from '../mtgjson/AllSetFiles/SOM.json' assert { type: 'json' };
// import mtgJsonSetMBS from '../mtgjson/AllSetFiles/MBS.json' assert { type: 'json' };
// import mtgJsonSetNPH from '../mtgjson/AllSetFiles/NPH.json' assert { type: 'json' };
// import mtgJsonSetISD from '../mtgjson/AllSetFiles/ISD.json' assert { type: 'json' };
// import mtgJsonSetDKA from '../mtgjson/AllSetFiles/DKA.json' assert { type: 'json' };
// import mtgJsonSetAVR from '../mtgjson/AllSetFiles/AVR.json' assert { type: 'json' };
// import mtgJsonSetRTR from '../mtgjson/AllSetFiles/RTR.json' assert { type: 'json' };
// import mtgJsonSetGTC from '../mtgjson/AllSetFiles/GTC.json' assert { type: 'json' };
// import mtgJsonSetDGM from '../mtgjson/AllSetFiles/DGM.json' assert { type: 'json' };
// import mtgJsonSetTHS from '../mtgjson/AllSetFiles/THS.json' assert { type: 'json' };
// import mtgJsonSetBNG from '../mtgjson/AllSetFiles/BNG.json' assert { type: 'json' };
// import mtgJsonSetJOU from '../mtgjson/AllSetFiles/JOU.json' assert { type: 'json' };
// import mtgJsonSetKTK from '../mtgjson/AllSetFiles/KTK.json' assert { type: 'json' };
// import mtgJsonSetFRF from '../mtgjson/AllSetFiles/FRF.json' assert { type: 'json' };
// import mtgJsonSetDTK from '../mtgjson/AllSetFiles/DTK.json' assert { type: 'json' };
// import mtgJsonSetBFZ from '../mtgjson/AllSetFiles/BFZ.json' assert { type: 'json' };
// import mtgJsonSetOGW from '../mtgjson/AllSetFiles/OGW.json' assert { type: 'json' };
// import mtgJsonSetSOI from '../mtgjson/AllSetFiles/SOI.json' assert { type: 'json' };
// import mtgJsonSetEMN from '../mtgjson/AllSetFiles/EMN.json' assert { type: 'json' };
// import mtgJsonSetKLD from '../mtgjson/AllSetFiles/KLD.json' assert { type: 'json' };
// import mtgJsonSetAER from '../mtgjson/AllSetFiles/AER.json' assert { type: 'json' };
// import mtgJsonSetAKH from '../mtgjson/AllSetFiles/AKH.json' assert { type: 'json' };
// import mtgJsonSetHOU from '../mtgjson/AllSetFiles/HOU.json' assert { type: 'json' };
// import mtgJsonSetXLN from '../mtgjson/AllSetFiles/XLN.json' assert { type: 'json' };
// import mtgJsonSetRIX from '../mtgjson/AllSetFiles/RIX.json' assert { type: 'json' };
// import mtgJsonSetDOM from '../mtgjson/AllSetFiles/DOM.json' assert { type: 'json' };
// import mtgJsonSetGRN from '../mtgjson/AllSetFiles/GRN.json' assert { type: 'json' };
// import mtgJsonSetRNA from '../mtgjson/AllSetFiles/RNA.json' assert { type: 'json' };
// import mtgJsonSetWAR from '../mtgjson/AllSetFiles/WAR.json' assert { type: 'json' };
// import mtgJsonSetELD from '../mtgjson/AllSetFiles/ELD.json' assert { type: 'json' };
// import mtgJsonSetTHB from '../mtgjson/AllSetFiles/THB.json' assert { type: 'json' };
// import mtgJsonSetIKO from '../mtgjson/AllSetFiles/IKO.json' assert { type: 'json' };
// import mtgJsonSetZNR from '../mtgjson/AllSetFiles/ZNR.json' assert { type: 'json' };
// import mtgJsonSetKHM from '../mtgjson/AllSetFiles/KHM.json' assert { type: 'json' };
// import mtgJsonSetSTX from '../mtgjson/AllSetFiles/STX.json' assert { type: 'json' };
// import mtgJsonSetAFR from '../mtgjson/AllSetFiles/AFR.json' assert { type: 'json' };
// import mtgJsonSetMID from '../mtgjson/AllSetFiles/MID.json' assert { type: 'json' };
// import mtgJsonSetVOW from '../mtgjson/AllSetFiles/VOW.json' assert { type: 'json' };
// import mtgJsonSetNEO from '../mtgjson/AllSetFiles/NEO.json' assert { type: 'json' };
// import mtgJsonSetSNC from '../mtgjson/AllSetFiles/SNC.json' assert { type: 'json' };
// import mtgJsonSetDMU from '../mtgjson/AllSetFiles/DMU.json' assert { type: 'json' };
// import mtgJsonSetBRO from '../mtgjson/AllSetFiles/BRO.json' assert { type: 'json' };
// import mtgJsonSetONE from '../mtgjson/AllSetFiles/ONE.json' assert { type: 'json' };
// import mtgJsonSetMOM from '../mtgjson/AllSetFiles/MOM.json' assert { type: 'json' };
// import mtgJsonSetMAT from '../mtgjson/AllSetFiles/MAT.json' assert { type: 'json' };

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

    console.log('allComputedSetValues: ', allComputedSetValues);

    console.log('writing out to src/data/computed.json');

    fs.writeFileSync('src/data/computed.json', JSON.stringify(allComputedSetValues));

    console.log('finished');
};

runAll();
