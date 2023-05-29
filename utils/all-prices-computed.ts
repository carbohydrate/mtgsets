import * as fs from 'fs';
import mtgJsonSetList from '../mtgjson/SetList.json' assert { type: "json" };
import { DateTime } from 'luxon';
import parser from 'stream-json';
import StreamObject from 'stream-json/streamers/StreamObject.js';
import Chain from 'stream-chain';
import Pick from 'stream-json/filters/Pick.js';
import { Set } from '../src/mtgjson-types.ts';

// get array of set code strings from SetList with x.type === 'expansion'
// somehow get and loop each set (manual download AllSetFiles for now) - dynamic import with import()
// do baseSetSize and baseSetOneInstance and get uuid for each card
// AllPrices logic
// create all-prices-computed file { uuid: price }

const run = async () => {
    const path = 'mtgjson/AllPrices.json';
    const expansionCodes = mtgJsonSetList.data.filter(x => x.type === 'expansion').map(x => x.code);

    console.log('expansionCodes: ', expansionCodes);
    console.log('expansionCodes.length: ', expansionCodes.length);

    const allSetUuids = await Promise.all(expansionCodes.map(async (expansionCode) => {
        const code = expansionCode === 'CON' ? 'CON_' : expansionCode;
        const importString = `../mtgjson/AllSetFiles/${code}.json`;
        const fileData = await import(importString, { assert: { type: 'json' } });
        const set: Set = fileData.default.data;

        const baseSetSize = set.baseSetSize;
        const baseSetOneInstance = set.cards.filter(x => parseInt(x.number) <= baseSetSize).filter(x => !x.side || x.side === 'a');
        const setUuids = baseSetOneInstance.map(x => x.uuid);

        return setUuids;
    }));

    const flatAllSetUuids = allSetUuids.flat();

    const uuidFilter = (obj) => {
        const { key } = obj;
        if (flatAllSetUuids.includes(key)) {
            return obj;
        }
    };

    const pipeline = new Chain([
        fs.createReadStream(path),
        parser(),
        new Pick({filter: 'data'}),
        new StreamObject(),
        uuidFilter,
    ]);

    const finalPrices = {};
    for await (const { key, value } of pipeline) {

        const prices = value.paper.tcgplayer?.retail?.normal || value.paper.cardkingdom?.retail?.normal;
        if (prices) {
            const keyDays = Object.keys(prices);
            const dateKeyString = DateTime.fromMillis(Math.max(...keyDays.map(e => DateTime.fromISO(e).toMillis()))).toISODate();
            const price = prices[dateKeyString];

            finalPrices[key] = price;
        } else {
            finalPrices[key] = 0;
        }
    }

    fs.writeFileSync('data/all-prices-computed.json', JSON.stringify(finalPrices));
};

run();
