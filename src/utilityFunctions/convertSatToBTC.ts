function convertSatToBTC(SATS:number):number {
    const BTC = SATS / 100000000;
    return BTC;
}

export default convertSatToBTC;