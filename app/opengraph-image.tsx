import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#050505",
        color: "#ffffff",
        position: "relative",
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: -200,
          background:
            "radial-gradient(circle at 20% 30%, rgba(224,16,32,0.45), transparent 55%), radial-gradient(circle at 80% 70%, rgba(196,146,42,0.30), transparent 55%)",
          filter: "blur(30px)",
        }}
      />

      {/* top scan line */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 80,
          right: 80,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 18,
          }}
        >
          Premium Transport
        </div>

        <div
          style={{
            fontSize: 74,
            lineHeight: 1.05,
            fontWeight: 600,
            marginBottom: 18,
          }}
        >
          Transport Ouhaddou
        </div>

        <div
          style={{
            fontSize: 28,
            lineHeight: 1.3,
            maxWidth: 900,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Excursions, fleet, and seamless group travel across Morocco.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 44,
          }}
        >
          <div
            style={{
              width: 86,
              height: 4,
              borderRadius: 6,
              background:
                "linear-gradient(90deg, transparent, #E01020, #FF6B35, #C4922A, #E01020, transparent)",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#E01020",
              boxShadow: "0 0 14px rgba(224,16,32,0.7)",
            }}
          />
          <div
            style={{
              fontSize: 16,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Morocco
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  )
}
