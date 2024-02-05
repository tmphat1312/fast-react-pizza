export function calcMinutesLeft(dateStr: string) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60_000);
}

export function hasAnyKeys(obj: Record<string, unknown>) {
  return Object.keys(obj).length > 0;
}
