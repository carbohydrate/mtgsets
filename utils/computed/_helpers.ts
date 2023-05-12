import { Set } from '../../src/types.js';

export const setSizeRarity = (set: Set) => {
    const baseSetSize = set.baseSetSize;
    const baseSetOneInstance = set.cards.filter(x => parseInt(x.number) <= baseSetSize).filter(x => !x.side || x.side === 'a');

    const common = baseSetOneInstance.filter(x => x.rarity === 'common');
    const uncommon = baseSetOneInstance.filter(x => x.rarity === 'uncommon');
    const rare = baseSetOneInstance.filter(x => x.rarity === 'rare');
    const mythic = baseSetOneInstance.filter(x => x.rarity === 'mythic');

    return {
        code: set.code,
        c: common.length,
        u: uncommon.length,
        r: rare.length,
        m: mythic.length,
    };
};
