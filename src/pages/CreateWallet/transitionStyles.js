export const transitionStyles = {
  default: {
    left: '50%',
    transform: 'translateX(-50%) scale(1)',
    opacity: 1,
    transition: `all 200ms ease-in`
  },
  action: {
    entering: { left: '50%', opacity: 0, transform: 'translateX(-50%) scale(.9)', },
    entered: { left: '50%', opacity: 1, transform: 'translateX(-50%) scale(1)', },
    exiting: { left: '50%', opacity: 0, transform: 'translateX(-50%) scale(.9)', },
    exited: { left: '50%', opacity: 0, transform: 'translateX(-50%) scale(.9)', }
  }
}