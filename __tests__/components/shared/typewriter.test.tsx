import { render, screen } from '@testing-library/react'
import { Typewriter } from '@/components/shared/typewriter'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Typewriter Component', () => {
  const phrases = ['Developer', 'Designer', 'Creator']

  it('renders with initial phrase', () => {
    render(<Typewriter phrases={phrases} />)
    // Component should render something, even if animation is mocked
    const element = screen.getByLabelText('Rotating developer specialties')
    expect(element).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Typewriter phrases={phrases} />)
    const element = screen.getByLabelText('Rotating developer specialties')
    expect(element).toHaveAttribute('aria-live', 'polite')
  })
})