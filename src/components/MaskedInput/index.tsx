import React, { forwardRef, InputHTMLAttributes, useCallback } from 'react'

interface CustomMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  value: string
  className?: string
  name?: string // Optional, but needed for Formik compatibility
  id?: string // Optional, but needed for Formik compatibility
}

// Custom masked input implementation without external dependencies
const MaskedInput = forwardRef<HTMLInputElement, CustomMaskProps>(
  ({ mask, onChange, onBlur, value, className, name, id, ...props }, ref) => {
    // Format value according to mask pattern
    const formatValue = useCallback(
      (value: string): string => {
        const digits = value.replace(/\D/g, '')

        let result = ''
        let digitIndex = 0

        // Apply mask pattern
        for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
          if (mask[i] === '9') {
            // Digit placeholder
            result += digits[digitIndex++]
          } else {
            // Static character in mask
            result += mask[i]
          }
        }

        return result
      },
      [mask]
    )

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      const formattedValue = formatValue(inputValue)

      // Create a synthetic event with the masked value
      // Important: preserve the name and id for Formik
      const newTarget = {
        ...e.target,
        value: formattedValue
      }

      // Only add name and id if they are defined
      if (name) newTarget.name = name
      if (id) newTarget.id = id

      const syntheticEvent = {
        ...e,
        target: newTarget
      } as React.ChangeEvent<HTMLInputElement>

      onChange(syntheticEvent)
    }

    return (
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={className}
        name={name} // Explicitly pass name
        id={id} // Explicitly pass id
        {...props}
      />
    )
  }
)

MaskedInput.displayName = 'MaskedInput'

export default MaskedInput
