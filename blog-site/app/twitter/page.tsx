import { CytoscapeGraph } from "../components/CytoscapeGraph/CytoscapeGraph";

export default function VerifyPage() {
  return (
    <>
      <h1>X page</h1>
      <CytoscapeGraph></CytoscapeGraph>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
    </>
  );
}
