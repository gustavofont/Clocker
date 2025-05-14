export type Option = {
  text: string,
  prefixIcon?: string,
  active?: boolean,
  action: () => void,
}

export type DropdownOption = {
  label: string,
  value: string,
}