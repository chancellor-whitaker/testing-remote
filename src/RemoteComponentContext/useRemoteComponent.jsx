import { useContext } from "react";

import RemoteComponentContext from ".";

export default function useRemoteComponent() {
  return useContext(RemoteComponentContext);
}
