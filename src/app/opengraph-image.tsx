import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "kawaii(x,y)";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(64,51,255,0.45), transparent 30%), radial-gradient(circle at 80% 20%, rgba(196,0,247,0.35), transparent 30%), linear-gradient(180deg, #07061A 0%, #100B2E 100%)",
          color: "#F1F0FF"
        }}
      >
        <div style={{ fontSize: 26, opacity: 0.72, letterSpacing: 3 }}>
          kawaii(x,y)
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -4 }}>
            Cute software
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -4 }}>
            that works.
          </div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.78 }}>
          Palermo / Perth / Tokyo - enterprise craft, around the clock.
        </div>
      </div>
    ),
    size
  );
}
