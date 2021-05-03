{
  /* 1 */
}
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).

import { createContext } from "react";
const SiteContext = createContext(null);
export default SiteContext;
