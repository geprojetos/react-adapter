type CurrencyFormatType = "pt-BR" | "en-US";
type CurrencyType = "BRL" | "USD";

const utils = {
  formatOptions: (
    currencyFormatType: CurrencyFormatType,
    currencyType: CurrencyType
  ) => {
    return new Intl.NumberFormat(currencyFormatType, {
      style: "currency",
      currency: currencyType
    });
  }
};

const currencyAdapter = {
  formatBR: (currency: number) => {
    return utils.formatOptions("pt-BR", "BRL").format(currency);
  },
  formatUSA: (currency: number) => {
    return utils.formatOptions("en-US", "USD").format(currency);
  }
};

export { currencyAdapter };
