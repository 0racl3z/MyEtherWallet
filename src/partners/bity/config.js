const BityCurrencies = {
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    invalidFrom: ['REP']
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ether'
  },
  REP: {
    symbol: 'REP',
    name: 'Augur'
  },
  CHF: {
    symbol: 'CHF',
    name: 'Swiss Franc',
    invalidFrom: ['EUR', 'REP'],
    invalidTo: ['BTC', 'ETH', 'REP']
  },
  EUR: {
    symbol: 'EUR',
    name: 'Euro',
    invalidFrom: ['CHF', 'REP'],
    invalidTo: ['CHF', 'BTC', 'ETH', 'REP']
  }
};

const bityFiatCurrencies = {
  CHF: {
    symbol: 'CHF',
    name: 'Swiss Franc'
  },
  EUR: {
    symbol: 'EUR',
    name: 'Euro'
  }
};

const bityStatuses = {
  OPEN: 'OPEN',
  RCVE: 'RCVE',
  CONF: 'CONF',
  FILL: 'FILL',
  CANC: 'CANC'
};

const bityMethods = {
  createTransaction: 'createTransaction',
  status: 'getStatus',
  logInWithPhoneNumber: 'logInWithPhoneNumber',
  sendReceivedSmsCode: 'sendReceivedSmsCode',
  buildCyptoToFiatOrderData: 'createExitToFiatTransaction',
  getExitOrderDetails: 'getExitOrderDetails',
  statusFiat: 'getStatusFiat'
};

const BITY_URL = 'https://bity.com';
const BITY_SWAP_RATES = '/api/v1/rate2/';
const BITY_EXIT_RATES =
  '/api/v2/pairs?input_tags=crypto&output_tags=fiat&prices=1';
const bityRateEndpoint = 'https://bity.com/api/v1/rate2/';


const LOCAL_STORAGE_KEY = 'linkedPhone';
const TIME_SWAP_VALID = 600;
const BITY_MIN = 0.01;
const BITY_MAX = 3;
const BITY_DECIMALS = 6;
const PROVIDER_NAME = 'bity';

export {
  bityStatuses,
  BityCurrencies,
  bityRateEndpoint,
  LOCAL_STORAGE_KEY,
  BITY_URL,
  BITY_SWAP_RATES,
  BITY_EXIT_RATES,
  bityMethods,
  bityFiatCurrencies,
  TIME_SWAP_VALID,
  PROVIDER_NAME,
  BITY_MIN,
  BITY_MAX,
  BITY_DECIMALS
};
