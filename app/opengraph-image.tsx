import { ImageResponse } from "next/og";

export const alt = "SHUBHIII Creator Learning Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "linear-gradient(125deg, #0d2345, #2457a7)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, color: "#b9d3fb" }}>CREATOR LEARNING STUDIO</div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 35 }}>SHUBHIII.</div>
        <div style={{ fontSize: 42, marginTop: 22, maxWidth: 900, lineHeight: 1.2 }}>
          Learn YouTube strategy. Build original content. Grow your skills.
        </div>
      </div>
    ),
    size
  );
}
