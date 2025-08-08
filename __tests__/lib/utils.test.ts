import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('flex', 'items-center')).toBe('flex items-center')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'conditional', false && 'ignored')).toBe('base conditional')
  })

  it('handles empty inputs', () => {
    expect(cn()).toBe('')
  })

  it('removes duplicate classes', () => {
    expect(cn('flex', 'flex', 'items-center')).toBe('flex items-center')
  })
})