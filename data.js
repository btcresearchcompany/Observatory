// ============================================================
// TBRC Bitcoin Adoption Observatory — data layer
// Edit this file to update the map. No other code changes needed.
//
// Field guide:
//   name      display name
//   cat       Miners | Treasury | Exchanges | Custody | Payments | Infrastructure
//   maturity  0 = Bitcoin-native, 1 = Operational, 2 = Holding, 3 = Exploring
//   sector    "public" | "private"
//   region    "Americas" | "Europe" | "Asia-Pacific" | "MEA"
//   btc       approximate BTC held (0 if none / unknown)
//   score     TBRC adoption score, 0–100 (your proprietary metric)
//   scale     company scale 1–5 (headcount / market cap band)
//   site      website URL
//   note      one-paragraph research summary
//   asOf      date this entry was last verified (YYYY-MM-DD)
//
// NOTE: This is illustrative seed data. Verify all figures against
// primary sources before publishing.
// ============================================================

window.TBRC_DATA = [
  { name: "Strategy (MicroStrategy)", cat: "Treasury", maturity: 0, sector: "public", region: "Americas", btc: 600000, score: 98, scale: 5, site: "https://www.strategy.com", note: "The largest corporate bitcoin treasury and the originator of the BTC-on-balance-sheet playbook. Effectively converted itself into a bitcoin operating company with recurring capital-markets issuance to accumulate.", asOf: "2026-07-01" },
  { name: "Metaplanet", cat: "Treasury", maturity: 0, sector: "public", region: "Asia-Pacific", btc: 20000, score: 92, scale: 3, site: "https://metaplanet.jp", note: "Tokyo-listed firm executing an aggressive bitcoin treasury strategy, often called 'Asia's MicroStrategy.' A key case study for treasury adoption outside the US.", asOf: "2026-07-01" },
  { name: "Semler Scientific", cat: "Treasury", maturity: 1, sector: "public", region: "Americas", btc: 5000, score: 78, scale: 2, site: "https://www.semlerscientific.com", note: "Medical device company that adopted bitcoin as its primary treasury reserve asset — a template for mid-cap adoption.", asOf: "2026-07-01" },
  { name: "Tesla", cat: "Treasury", maturity: 2, sector: "public", region: "Americas", btc: 11500, score: 55, scale: 5, site: "https://www.tesla.com", note: "Holds bitcoin on the balance sheet and briefly accepted BTC payments. A high-profile holder without an active accumulation strategy.", asOf: "2026-07-01" },
  { name: "BlackRock", cat: "Treasury", maturity: 3, sector: "public", region: "Americas", btc: 0, score: 48, scale: 5, site: "https://www.blackrock.com", note: "IBIT spot ETF issuer. Not a balance-sheet holder itself, but the largest institutional on-ramp and a bellwether for allocator sentiment.", asOf: "2026-07-01" },

  { name: "Block", cat: "Payments", maturity: 1, sector: "public", region: "Americas", btc: 8500, score: 85, scale: 4, site: "https://block.xyz", note: "Cash App bitcoin trading, the Bitkey self-custody wallet, and Proto mining hardware. One of the few large public companies building across the full bitcoin stack.", asOf: "2026-07-01" },
  { name: "Strike", cat: "Payments", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 90, scale: 3, site: "https://strike.me", note: "Lightning-powered global payments and remittances. A leading example of bitcoin as a settlement network rather than only a reserve asset.", asOf: "2026-07-01" },
  { name: "Fold", cat: "Payments", maturity: 0, sector: "public", region: "Americas", btc: 1000, score: 80, scale: 2, site: "https://foldapp.com", note: "Bitcoin rewards debit card and savings app; went public via SPAC and holds BTC in treasury.", asOf: "2026-07-01" },
  { name: "Ferrari", cat: "Payments", maturity: 3, sector: "public", region: "Europe", btc: 0, score: 30, scale: 4, site: "https://www.ferrari.com", note: "Accepts crypto payments for vehicles in select markets — a luxury-brand signal of payment-rail experimentation.", asOf: "2026-07-01" },

  { name: "River", cat: "Exchanges", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 88, scale: 2, site: "https://river.com", note: "Bitcoin-only brokerage with white-glove service for HNW clients and businesses. Publishes widely cited adoption research.", asOf: "2026-07-01" },
  { name: "Swan", cat: "Exchanges", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 85, scale: 2, site: "https://www.swanbitcoin.com", note: "Bitcoin-only savings platform with private client and business desks, plus a strong education arm.", asOf: "2026-07-01" },
  { name: "Coinbase", cat: "Exchanges", maturity: 1, sector: "public", region: "Americas", btc: 9000, score: 72, scale: 5, site: "https://www.coinbase.com", note: "Largest US exchange with institutional prime brokerage and custody. Multi-asset, but the default institutional gateway to bitcoin.", asOf: "2026-07-01" },
  { name: "Kraken", cat: "Exchanges", maturity: 1, sector: "private", region: "Americas", btc: 0, score: 68, scale: 4, site: "https://www.kraken.com", note: "Global exchange with OTC desk and institutional services; long-standing bitcoin-forward culture.", asOf: "2026-07-01" },

  { name: "MARA", cat: "Miners", maturity: 0, sector: "public", region: "Americas", btc: 50000, score: 90, scale: 4, site: "https://www.mara.com", note: "One of the largest publicly traded miners, with a full-HODL policy on mined bitcoin and expanding energy-tech ambitions.", asOf: "2026-07-01" },
  { name: "Riot Platforms", cat: "Miners", maturity: 0, sector: "public", region: "Americas", btc: 19000, score: 86, scale: 4, site: "https://www.riotplatforms.com", note: "Large-scale Texas mining operations with a distinctive power-strategy and demand-response model.", asOf: "2026-07-01" },
  { name: "CleanSpark", cat: "Miners", maturity: 0, sector: "public", region: "Americas", btc: 12000, score: 84, scale: 3, site: "https://www.cleanspark.com", note: "Efficiency-focused miner expanding across the US Southeast; disciplined treasury management of mined coins.", asOf: "2026-07-01" },

  { name: "Unchained", cat: "Custody", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 87, scale: 2, site: "https://unchained.com", note: "Collaborative multisig custody, loans, and inheritance for bitcoin holders — the reference model for shared-key custody.", asOf: "2026-07-01" },
  { name: "Casa", cat: "Custody", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 82, scale: 2, site: "https://casa.io", note: "Self-custody security for individuals and businesses, focused on key management UX.", asOf: "2026-07-01" },
  { name: "BitGo", cat: "Custody", maturity: 1, sector: "private", region: "Americas", btc: 0, score: 70, scale: 3, site: "https://www.bitgo.com", note: "Qualified custodian serving institutions. Multi-asset today but with deep bitcoin roots and significant BTC under custody.", asOf: "2026-07-01" },
  { name: "Fidelity Digital Assets", cat: "Custody", maturity: 2, sector: "private", region: "Americas", btc: 0, score: 65, scale: 5, site: "https://www.fidelitydigitalassets.com", note: "Wall Street incumbent offering bitcoin custody and execution to institutions; mining research dates to 2014.", asOf: "2026-07-01" },

  { name: "Blockstream", cat: "Infrastructure", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 89, scale: 3, site: "https://blockstream.com", note: "Core protocol development, the Liquid sidechain, mining services, and satellite infrastructure.", asOf: "2026-07-01" },
  { name: "Lightning Labs", cat: "Infrastructure", maturity: 0, sector: "private", region: "Americas", btc: 0, score: 88, scale: 2, site: "https://lightning.engineering", note: "Builds LND, the most widely deployed Lightning implementation, plus Taproot Assets protocol tooling.", asOf: "2026-07-01" },
  { name: "NYDIG", cat: "Infrastructure", maturity: 1, sector: "private", region: "Americas", btc: 0, score: 75, scale: 3, site: "https://nydig.com", note: "Institutional bitcoin platform spanning custody, financing, and mining — a bridge between Wall Street and bitcoin-native finance.", asOf: "2026-07-01" },
  { name: "Galaxy Digital", cat: "Infrastructure", maturity: 1, sector: "public", region: "Americas", btc: 4000, score: 71, scale: 4, site: "https://www.galaxy.com", note: "Institutional trading, asset management, and mining/data-center services; increasingly an AI-compute crossover story.", asOf: "2026-07-01" }
];
