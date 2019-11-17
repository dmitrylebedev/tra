import { get } from 'styled-system'

export const themeGet = (path: string) => (props:any) =>
  get(props.theme, path)
