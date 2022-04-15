type DateSimboolType = "/" | "-";

const utils = {
  formatBR: (date: Date, simbool: DateSimboolType) => {
    return `${date.getDate()}${simbool}${date.getMonth()}${simbool}${date.getFullYear()}`;
  },
  formatUSA: (date: Date, simbool: DateSimboolType) => {
    return `${date.getMonth()}${simbool}${date.getDate()}${simbool}${date.getFullYear()}`;
  }
};

const dateAdapter = {
  formatBarBR: (date: Date) => {
    return utils.formatBR(date, "/");
  },
  formatHypenBR: (date: Date) => {
    return utils.formatBR(date, "-");
  },
  formatBarUSA: (date: Date) => {
    return utils.formatUSA(date, "/");
  },
  formatHypenUSA: (date: Date) => {
    return utils.formatUSA(date, "-");
  }
};

export { dateAdapter };
