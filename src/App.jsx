import { useState } from "react";

import useRemoteComponent from "./RemoteComponentContext/useRemoteComponent";
import { Sidebar1 } from "./examples/sidebars/Sidebar1";
import { Sidebar2 } from "./examples/sidebars/Sidebar2";
import { Footer1 } from "./examples/footers/Footer1";
import { Footer2 } from "./examples/footers/Footer2";
import { Header1 } from "./examples/headers/Header1";
import { Header2 } from "./examples/headers/Header2";

const options = [
  { value: "default", label: "Default" },
  { label: "Example 1", value: "example1" },
  { label: "Example 2", value: "example2" },
  { value: "none", label: "None" },
];

export default function App() {
  const Wrapper = useRemoteComponent();

  const [headerOption, setHeaderOption] = useState("default");

  const [footerOption, setFooterOption] = useState("default");

  const [sidebarOption, setSidebarOption] = useState("default");

  const optionalWrapperProps = {};

  if (headerOption !== "default") {
    optionalWrapperProps.header =
      headerOption === "example1" ? (
        <Header1 />
      ) : headerOption === "example2" ? (
        <Header2 />
      ) : null;
  }

  if (footerOption !== "default") {
    optionalWrapperProps.footer =
      footerOption === "example1" ? (
        <Footer1 />
      ) : footerOption === "example2" ? (
        <Footer2 />
      ) : null;
  }

  if (sidebarOption !== "default") {
    optionalWrapperProps.sidebar =
      sidebarOption === "example1" ? (
        <Sidebar1 />
      ) : sidebarOption === "example2" ? (
        <Sidebar2 />
      ) : null;
  }

  return (
    <>
      <div className="container-fluid py-3 border-bottom bg-body-tertiary">
        <div className="d-flex flex-wrap gap-3">
          <OptionGroup
            onChange={setHeaderOption}
            value={headerOption}
            label="Header"
          />
          <OptionGroup
            onChange={setFooterOption}
            value={footerOption}
            label="Footer"
          />
          <OptionGroup
            onChange={setSidebarOption}
            value={sidebarOption}
            label="Sidebar"
          />
        </div>
      </div>

      <Wrapper heading="Dashboard" {...optionalWrapperProps}>
        <div className="card">
          <div className="card-body">Content</div>
        </div>
      </Wrapper>
    </>
  );
}

function OptionGroup({ onChange, label, value }) {
  return (
    <div>
      <div className="small fw-semibold mb-1">{label}</div>

      <div className="btn-group btn-group-sm" aria-label={label} role="group">
        {options.map((option) => (
          <button
            className={`btn ${
              value === option.value ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
            key={option.value}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
