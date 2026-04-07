import { describe, expect, test } from 'bun:test'
import { coreEnvSchema, emailSchema, phoneSchema } from './validation'

describe('emailSchema', () => {
  test('valid emails pass', () => {
    for (const email of ['user@example.com', 'test+tag@sub.domain.com']) {
      expect(emailSchema.safeParse(email).success).toBe(true)
    }
  })

  test('invalid emails fail', () => {
    for (const email of ['', 'not-an-email', '@missing-local.com']) {
      expect(emailSchema.safeParse(email).success).toBe(false)
    }
  })
})

describe('phoneSchema', () => {
  test('valid E.164 numbers pass', () => {
    for (const phone of ['+14155552671', '+442071234567']) {
      expect(phoneSchema.safeParse(phone).success).toBe(true)
    }
  })

  test('invalid phone numbers fail', () => {
    for (const phone of ['abc', '', '+']) {
      expect(phoneSchema.safeParse(phone).success).toBe(false)
    }
  })
})

describe('coreEnvSchema', () => {
  test('valid URL passes', () => {
    expect(
      coreEnvSchema.safeParse({ NEXT_PUBLIC_BASE_URL: 'https://iusim.co' })
        .success
    ).toBe(true)
  })

  test('invalid URL fails', () => {
    expect(
      coreEnvSchema.safeParse({ NEXT_PUBLIC_BASE_URL: 'localhost' }).success
    ).toBe(false)
  })
})
