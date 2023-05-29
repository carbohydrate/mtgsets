import * as fs from 'fs';
import mtgJsonSetMOM from '../mtgjson/AllSetFiles/MOM.json' assert { type: 'json' };
// import mtgJsonAllPrices from '../mtgjson/AllPrices.json' assert { type: "json" };
// import { SetListComputed } from '../src/types.ts'
import computedAllPricesData from '../data/all-prices-computed.json' assert { type: 'json' };
import { DateTime } from 'luxon';

import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

import parser from 'stream-json';
import StreamObject from 'stream-json/streamers/StreamObject.js';
import Chain from 'stream-chain';
// import Pick from 'stream-json/filters/Pick.js'
// const {pick} = require('stream-json/filters/Pick');
import Pick from 'stream-json/filters/Pick.js';

const baseSetSize = mtgJsonSetMOM.data.baseSetSize;
const baseSetOneInstance = mtgJsonSetMOM.data.cards.filter(x => parseInt(x.number) <= baseSetSize).filter(x => !x.side || x.side === 'a');
const cardUuids = baseSetOneInstance.map(x => x.uuid);

let counter = 0;

const run = async () => {
    const path = 'mtgjson/AllPrices.json';
    // const setListComputed: SetListComputed[] = [];
    const allPricesComputed = [];

    const testTest = (obj) => {
        const { key, value } = obj;
        if (cardUuids.includes(key)) {
            ++counter
            console.log('value.paper.tcgplayer: ', value.paper.tcgplayer);
            return obj;
            // setListComputed.push(condensedSet);
            // allPricesComputed.push(obj);
        }
    }

    console.log('cardUuids: ', cardUuids);
    console.log('cardUuids: ', cardUuids.length);

    const pipeline = new Chain([
        fs.createReadStream(path),
        parser(),
        new Pick({filter: 'data'}),
        new StreamObject(),
        testTest,
        // fs.writeFileSync('data/all-prices-computed.json', JSON.stringify(allPricesComputed)),
        // fs.createWriteStream('archive.json')
    ]);

    // const picked = pipeline.pipe(pick({filter: 'data'}));

    // the input is not an array, but would like the output to be an array
    for await (const obj of pipeline) {
        const { key, value } = obj;
        allPricesComputed.push(obj);

        // await doSomethingWith(value);  // the JSON array element
        // console.log('obj: ', obj);
        // console.log('value: ', value);
    }

    console.log('counter: ', counter);
    fs.writeFileSync('data/all-prices-computed.json', JSON.stringify(allPricesComputed));
};

const run1 = () => {
    console.log('computedAllPricesData: ', computedAllPricesData);

    let newCounter = 0;

    const newPrices = computedAllPricesData.map(x => {
        const tcgplayerTest = x.value.paper.tcgplayer.retail.normal;
        const keyDays = Object.keys(tcgplayerTest);

        // const old = new Date(Math.max(...keyDays.map(e => new Date(e))));
        // console.log('old: ', old);
        // const test = new Date(Math.max(...keyDays.map(e => DateTime.fromISO(e))));

        const dateKeyString = DateTime.fromMillis(Math.max(...keyDays.map(e => DateTime.fromISO(e)))).toISODate();
        // console.log('dateKeyString: ', dateKeyString);
        const price = tcgplayerTest[dateKeyString];
        // console.log('price: ', price);

        // console.log('typeof(test): ', typeof(test));

        // console.log('test: ', test);
        // console.log('tcgplayerTest: ', tcgplayerTest);

        // console.log('keyDays: ', keyDays);

        return {
            key: x.key,
            price: price,
        }
    });

    console.log('newPrices: ', newPrices);
    console.log('newPrices: ', newPrices.length);
    fs.writeFileSync('data/all-prices-computed-cond.json', JSON.stringify(newPrices));
};

// run();

run1();
