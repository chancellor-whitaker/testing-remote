import {
  createUseRemoteComponent,
  createRequires,
} from "@paciolan/remote-component";
import * as ReactDOM from "react-dom";
import * as React from "react";

import RemoteComponentContext from ".";

export default function RemoteComponentProvider({ children, url }) {
  const [loading, err, Component] = useRemoteComponent(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>;
  }

  return (
    <RemoteComponentContext value={Component}>
      {children}
    </RemoteComponentContext>
  );
}

const useRemoteComponent = createUseRemoteComponent({
  requires: createRequires({ "react-dom": ReactDOM, react: React }),
});
