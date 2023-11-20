export function unslugify(slug: string): string {
  return slug.replace(/-/g, " ");
}
