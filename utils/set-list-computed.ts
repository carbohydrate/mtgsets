import * as fs from 'fs';
import mtgJsonSetList from '../mtgjson/SetList.json' assert { type: "json" };
import { SetListComputed } from '../src/types.ts'

// https://mtgjson.com/api/v5/SetList.json

const run = () => {
    const setListComputed: SetListComputed[] = [];
    const filteredExpansionSets = mtgJsonSetList.data.filter(x => x.type === 'expansion');

    filteredExpansionSets.map(set => {
        const condensedSet = {
            baseSetSize: set.baseSetSize,
            code: set.code,
            keyruneCode: set.keyruneCode,
            name: set.name,
            releaseDate: set.releaseDate,
            totalSetSize: set.totalSetSize,
        }

        setListComputed.push(condensedSet);
    });

    console.log('writing out to data/set-list-computed.json');

    fs.writeFileSync('data/set-list-computed.json', JSON.stringify(setListComputed));

    console.log('finished');
};

run();
