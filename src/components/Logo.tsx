import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <svg
      viewBox="123 142 148 131"
      aria-hidden="true"
      className={clsx(
        'h-8 w-auto',
        invert ? 'fill-white' : 'fill-neutral-950',
      )}
      {...props}
    >
      <path d="M123.385 143.300 C 123.280 143.575,123.241 172.690,123.297 208.000 L 123.400 272.200 131.600 272.200 L 139.800 272.200 139.901 216.802 L 140.003 161.405 168.411 189.802 L 196.819 218.200 212.081 202.800 C 220.476 194.330,237.032 177.676,248.872 165.791 C 260.712 153.907,270.400 143.872,270.400 143.491 C 270.400 142.853,269.550 142.800,259.259 142.800 L 248.118 142.800 222.617 168.600 C 208.592 182.790,196.997 194.400,196.851 194.400 C 196.705 194.400,184.981 182.790,170.797 168.600 L 145.008 142.800 134.292 142.800 C 126.086 142.800,123.530 142.917,123.385 143.300 M261.499 168.300 L 253.606 176.201 253.503 199.800 L 253.400 223.400 240.500 223.506 C 232.594 223.570,227.600 223.465,227.600 223.233 C 227.600 223.025,230.480 219.894,234.000 216.274 L 240.400 209.692 240.400 199.846 C 240.400 194.431,240.282 190.000,240.137 190.000 C 239.993 190.000,232.799 197.155,224.152 205.900 L 208.428 221.800 208.514 230.800 L 208.600 239.800 231.000 240.000 L 253.400 240.200 253.505 256.300 L 253.609 272.400 261.762 272.400 C 268.966 272.400,269.944 272.323,270.167 271.741 C 270.660 270.456,270.160 160.400,269.661 160.400 C 269.513 160.400,265.841 163.955,261.499 168.300" />
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 font-display text-xl font-semibold tracking-tight',
        fillOnHover && 'group/logo',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
      {...props}
    >
      <Logomark invert={invert} filled={filled} />
      <span>MarchForth</span>
    </div>
  )
}