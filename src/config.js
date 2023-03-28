const dev = {
  baseURL: "http://localhost:3080/api/",
  landingPageUrl: "http://localhost:3080",
  stripe: {
    free: "price_1Mmep7Iua4JjUGK98RTUn9vO",
    entry: "price_1MmemoIua4JjUGK92Uqx38Lt",
    pro: "price_1MhFaZIua4JjUGK98GAaCdU4",
  },
};

const prod = {
  baseURL: "https://app.nordai.dk/api/",
  landingPageUrl: "https://nordai.dk",
  stripe: {
    free: "price_1MKISQKDl4BWQxUPCjluSykk",
    entry: "price_1MKISQKDl4BWQxUPCjluSykk",
    pro: "price_1MKISQKDl4BWQxUPCjluSykk",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
