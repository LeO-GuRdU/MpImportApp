export interface ReporteAnual {
  id:                   number;
  operation_id:         number;
  date:                 string;
  time:                 string;
  description:          string;
  internal_description: string;
  amount:               Amount;
  link?:                 string | undefined;
}

export interface Amount {
  currency_id:         string;
  currencyId:          string;
  symbol:              string;
  symbol_text:         string;
  fraction:            string;
  decimal_separator:   string;
  thousands_separator: string;
  cents:               string;
  cents_text:          string;
  raw:                 number;
}
