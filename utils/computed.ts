// const common = momSet.cards.filter(x => x.rarity === 'common');
    // console.log('common.length: ', common.length);

    // const uncommon = momSet.cards.filter(x => x.rarity === 'uncommon');
    // console.log('uncommon.length: ', uncommon.length);

    // const rare = momSet.cards.filter(x => x.rarity === 'rare');
    // console.log('rare.length: ', rare.length);

    // const mythic = momSet.cards.filter(x => x.rarity === 'mythic');
    // console.log('mythic.length: ', mythic.length);

    const filtered = momSet.cards.filter(x => x.side !== 'b')
    const mythic = filtered.filter(x => x.rarity === 'mythic' && !x.isStarter);
    console.log('mythic: ', mythic);

    const baseCards = filtered.filter(x => !x.isStarter);
    console.log('baseCards: ', baseCards.length);

    momSet.cards.map((x) => {
        console.log('x.name: ', x.name, ' ', x.number, ' ', x.rarity, ' ', x.side);
    });

    //wiki = 281 - 291
    //common 116
    //uncommon 80
    //rare 60
    //mythic 20
    //land 15
    // const cardOne = momSet.cards.filter(x => x.number === '1');
    // console.log('cardOne: ', cardOne);

    // const cardTwo = momSet.cards.filter(x => x.number === '2');
    // console.log('cardTwo: ', cardTwo);

    // const thb = setList.find(x => x.code === 'THB');
    // console.log('thb: ', thb);
