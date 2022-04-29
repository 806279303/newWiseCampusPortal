import {Argument, Mapping, Value} from "classnames"

const valueArray = ["string", "number", "boolean"]

export function isValue(value: any): Value | null {
  return valueArray.includes(typeof value) ? value : null
}

export function isMapping(value: any): Mapping | null {
  return Object.prototype.toString.call(value) === '[object Object]' ? value : null
}

export function isArguments(value: any): Argument[] | null {
  return Array.isArray(value) ? value : null
}

export function paddingPrefix(prefix: string, args: Argument[]): Argument[] {
  if (args.length <= 0) {
    return []
  }

  return args.map(item => {
    if (isValue(item)) {
      return typeof item === "string" ? `${prefix}-${item}` : item
    }
    if (isMapping(item)) {
      const newItem: Mapping = {}
      Object.keys(item as Mapping).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          newItem[`${prefix}-${key}`] = (item as Mapping)[key]
        }
      })
      return newItem
    }
    if(isArguments(item)){
      return paddingPrefix(prefix, item as Argument[])
    }
    return null
  })
}