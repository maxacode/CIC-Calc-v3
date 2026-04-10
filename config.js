// ─────────────────────────────────────────────────────────────────────────────
//  CIC Calculator — Configuration
//  Edit this file to update the calculator. Changes take effect on next page load.
// ─────────────────────────────────────────────────────────────────────────────

window.CIC_CONFIG = {

  // ── Revenue Share ────────────────────────────────────────────────────────
  revShare: {
    // Dollar amount paid per sale at each tier (Tier 1 through Tier 7)
    tierPayments: [100, 50, 25, 25, 20, 25, 50],

    // Minimum number of personally-sponsored (Tier 1) associates required
    // to unlock each tier's revenue share
    anqThresholds: [1, 2, 3, 5, 7, 10, 15],
  },

  // ── Commission Comparison ─────────────────────────────────────────────────
  commission: {
    // CIC annual membership fee ($) used in the Traditional vs CIC comparison
    cicAnnualFee: 1443,
  },

  // ── Default Input Values ──────────────────────────────────────────────────
  // These pre-fill the calculator fields on page load.
  defaults: {
    // Revenue Share tab
    tier1:       5,       // Personally Sponsored (Tier 1)
    tier2:       20,      // Tier 2 Associates
    tier3:       30,      // Tier 3 Associates
    tier4:       40,      // Tier 4 Associates
    tier5:       50,      // Tier 5 Associates
    tier6:       60,      // Tier 6 Associates
    tier7:       100,     // Tier 7 Associates
    salesPerYear: 6,      // No. of sales per Associate per Year

    // Commission tab
    totalVolume:           5200000,  // Total Volume ($)
    transactionCount:      24,       // Transaction Count
    avgSalePrice:          375000,   // Avg. Sale Price ($)
    avgCommission:         2.95,     // Avg Commission (%)
    commissionSplit:       20,       // Commission Split (%)
    transactionFee:        499,      // Transaction Fee ($)
    monthlyFee:            200,      // Monthly Fee ($)
    annualFee:             299,      // Annual Fee ($)
    otherRecurring:        0,        // Other Recurring (monthly, $)
    otherTransactionFee:   0,        // Other Transaction Fee ($)
    markupOnTransactionFee: 0,       // Markup on Transaction Fee ($)
  },

};
