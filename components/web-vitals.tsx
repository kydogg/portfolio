'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/analytics'

export function WebVitals() {
  useEffect(() => {
    reportWebVitals()
  }, [])

  return null
}