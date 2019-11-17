import React, { FC } from 'react'
import { SVGProps } from '../Icon.types'

const Search: FC<SVGProps> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.8315 14.0773L15.482 14.5906L19.9393 19.0479L19.0479 19.9393L14.5906 15.482L14.0773 15.8315C12.99 16.5717 11.7068 16.9734 10.3617 16.9734C6.71017 16.9734 3.75 14.0133 3.75 10.3617C3.75 6.71017 6.71017 3.75 10.3617 3.75C14.0133 3.75 16.9734 6.71017 16.9734 10.3617C16.9734 11.7068 16.5717 12.99 15.8315 14.0773ZM5.01064 10.3617C5.01064 13.317 7.4064 15.7128 10.3617 15.7128C13.317 15.7128 15.7128 13.317 15.7128 10.3617C15.7128 7.4064 13.317 5.01064 10.3617 5.01064C7.4064 5.01064 5.01064 7.4064 5.01064 10.3617Z"/>
    </svg>
)
}

export default Search
