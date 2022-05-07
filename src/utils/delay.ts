export function delay(millisecond: number){
  return new Promise<void>((resolve) => {
    setTimeout(resolve, millisecond)
  })
}