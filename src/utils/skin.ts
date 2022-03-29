function keys<T>(o: T): (keyof T)[]{
    return Object.keys(o)  as (keyof T)[]
}

interface ISkinGroup {
    S1: string;
    S2: string;
    S3: string;
    S4: string;
    S5: string;
}

export const SKIN_GROUP: ISkinGroup = {
    'S1':'lg-skin-s1',
    'S2':'lg-skin-s2',
    'S3':'lg-skin-s3',
    'S4':'lg-skin-s4',
    'S5':'lg-skin-s5',
}

let array: KeysOfISkinGroup[] = keys(SKIN_GROUP)
let current: KeysOfISkinGroup = array[0]

type KeysOfISkinGroup = keyof ISkinGroup;

export function setGlobalSKin(skinName: KeysOfISkinGroup) {
    current = skinName
    document.body.className = SKIN_GROUP[skinName]
}

export function toNextSkin():KeysOfISkinGroup{
    let number = (array.findIndex(item => item === current) + 1) % 5;
    let curSkinName = array[number];
    setGlobalSKin(curSkinName)
    return curSkinName
}

export function getCurrentSkinName():KeysOfISkinGroup{
    return current
}