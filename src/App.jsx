import useRemoteComponent from "./RemoteComponentContext/useRemoteComponent";
import { Sidebar1 } from "./examples/sidebars/Sidebar1";
import { Footer1 } from "./examples/footers/Footer1";
import { Header1 } from "./examples/headers/Header1";

export default function App() {
  const Wrapper = useRemoteComponent();

  return (
    <Wrapper
      // header={<Header1></Header1>}
      // footer={<Footer1></Footer1>}
      heading="Dashboard"
      // sidebar={null}
    >
      <div className="card">
        <div className="card-body">Content</div>
      </div>
    </Wrapper>
  );
}
