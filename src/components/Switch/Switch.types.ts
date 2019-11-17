import { ChangeEvent } from 'react'

export type SwitchProps = {
  checked: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
