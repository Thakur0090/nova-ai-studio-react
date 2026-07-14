const KEYS={history:'nova_history_v1',theme:'nova_theme_v1'};
export function readStorage(key,fallback){try{const v=localStorage.getItem(KEYS[key]??key);return v?JSON.parse(v):fallback}catch{return fallback}}
export function writeStorage(key,value){localStorage.setItem(KEYS[key]??key,JSON.stringify(value))}
