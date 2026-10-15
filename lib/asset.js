export function asset(path) {
  if (typeof path !== "string" || path.length === 0) return path;
  if (/^(?:https?:|data:|blob:|\/\/)/.test(path)) return path;

  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base || normalized === base || normalized.startsWith(`${base}/`)) return normalized;
  return `${base}${normalized}`;
}
