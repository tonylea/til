export function titleCase(title: string): string {
  let transformedTitle = title.toLowerCase().split(" ");
  for (let i = 0; i < transformedTitle.length; i++) {
    transformedTitle[i] =
      transformedTitle[i].charAt(0).toUpperCase() +
      transformedTitle[i].slice(1);
  }
  return transformedTitle.join(" ");
}
