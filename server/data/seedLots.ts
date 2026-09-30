// This is a mock "database" of seed lot / bag codes.
//
// TO GO TO A REAL DATABASE:
// 1. Replace this array with a query, e.g. Postgres via `pg` or Drizzle/Prisma.
// 2. Keep the SeedLot shape below the same, and server/api/verify/[code].ts
//    won't need to change at all.

export interface SeedLot {
  code: string // e.g. DS-WHT-26-001
  crop: string
  variety: string
  lot: string
  seedClass: 'Certified' | 'Registered' | 'Foundation'
  packSize: string
  testingStatus: 'Passed' | 'Pending' | 'Failed'
  packedDate: string
}

export const seedLots: SeedLot[] = [
  {
    code: 'DS-WHT-26-001',
    crop: 'Wheat',
    variety: 'Arooj-2022',
    lot: 'DS-WHT-26-001',
    seedClass: 'Certified',
    packSize: '50 KG',
    testingStatus: 'Passed',
    packedDate: '2026-10-01'
  },
  {
    code: 'DS-RIC-26-014',
    crop: 'Rice',
    variety: 'Punjab Basmati-1',
    lot: 'DS-RIC-26-014',
    seedClass: 'Certified',
    packSize: '20 KG',
    testingStatus: 'Passed',
    packedDate: '2026-09-12'
  }
]
