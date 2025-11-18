/**
 * Generate the registry url of the component.
 * @param componentName Name of the component listed in registry.
 * @param isLocal If true, Base url is localhost.
 * @returns Component registry url.
 */
function componentUrl(componentName: string, isLocal: boolean) {
  const baseUrl = isLocal
    ? "http://localhost:3000/"
    : "https://choto-bricks.vercel.app/";

  return `${baseUrl}/r/${componentName}.json`;
}

export { componentUrl };
