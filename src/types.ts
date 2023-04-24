// export type Set = {
//     baseSetSize: number;
//     block?: string;
//     booster?: object;
//     cards: CardSet[];
//     cardsphereSetId?: number;
//     code: string;
//     codeV3?: string;
//     isForeignOnly?: boolean;
//     isFoilOnly: boolean;
//     isNonFoilOnly?: boolean;
//     isOnlineOnly: boolean;
//     isPaperOnly?: boolean;
//     isPartialPreview?: boolean;
//     keyruneCode: string;
//     languages: string[];
//     mcmId?: number;
//     mcmIdExtras?: number;
//     mcmName?: string;
//     mtgoCode?: string;
//     name: string;
//     parentCode?: string;
//     releaseDate: string;
//     sealedProduct?: SealedProduct;
//     tcgplayerGroupId?: number;
//     //tokens: CardToken[];
//     tokenSetCode?: string;
//     totalSetSize: number;
//     translations: Translations;
//     type: string;
// };

//type SetListType = 'alchemy' | 'archenemy' | 'arsenal' | 'box' | 'commander' | 'core' | 'draft_innovation' | 'duel_deck' | 'expansion' | 'from_the_vault' | 'funny' | 'masterpiece' | 'masters' | 'memorabilia' | 'minigame' | 'planechase' | 'premium_deck' | 'promo' | 'spellbook' | 'starter' | 'token' | 'treasure_chest' | 'vanguard'

export type SetList = {
    baseSetSize: number;
    block?: string;
    code: string;
    codeV3?: string;
    isForeignOnly?: boolean;
    isFoilOnly: boolean;
    isNonFoilOnly?: boolean;
    isOnlineOnly: boolean;
    isPaperOnly?: boolean;
    isPartialPreview?: boolean;
    keyruneCode: string;
    mcmId?: number;
    mcmIdExtras?: number;
    mcmName?: string;
    mtgoCode?: string;
    name: string;
    parentCode?: string;
    releaseDate: string;
    sealedProduct?: SealedProduct[];
    tcgplayerGroupId?: number;
    totalSetSize: number;
    translations: Translations;
    //type: SetListType;
    type: string;
};

export type SealedProduct = {
    category?: string;
    identifiers: Identifiers;
    name: string;
    productSize?: number;
    purchaseUrls: PurchaseUrls;
    releaseDate: string | null;
    subtype?: string;
    uuid: string;
};

export type Identifiers = {
    cardKingdomEtchedId?: string;
    cardKingdomFoilId?: string;
    cardKingdomId?: string;
    cardsphereId?: string;
    mcmId?: string;
    mcmMetaId?: string;
    mtgArenaId?: string;
    mtgjsonFoilVersionId?: string;
    mtgjsonNonFoilVersionId?: string;
    mtgjsonV4Id?: string;
    mtgoFoilId?: string;
    mtgoId?: string;
    multiverseId?: string;
    scryfallId?: string;
    scryfallOracleId?: string;
    scryfallIllustrationId?: string;
    tcgplayerProductId?: string;
    tcgplayerEtchedProductId?: string;
};

export type Translations = {
    "Ancient Greek"?: string;
    Arabic?: string;
    "Chinese Simplified"?: string;
    "Chinese Traditional"?: string;
    French?: string;
    German?: string;
    Hebrew?: string;
    Italian?: string;
    Japanese?: string;
    Korean?: string;
    Latin?: string;
    Phyrexian?: string;
    "Portuguese (Brazil)"?: string;
    Russian?: string;
    Sanskrit?: string;
    Spanish?: string;
};

export type PurchaseUrls = {
    cardKingdom?: string;
    cardKingdomEtched?: string;
    cardKingdomFoil?: string;
    cardmarket?: string;
    tcgplayer?: string;
    tcgplayerEtched?: string;
};
