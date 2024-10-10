function convertBtcToUSD(BTC: number, USD: number): number {
  const USDValue = BTC * USD;
  return Math.round(USDValue * 100) / 100;
}

export default convertBtcToUSD;
