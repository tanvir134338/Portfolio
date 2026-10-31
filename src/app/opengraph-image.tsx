import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "MD Tanvir Ahsan - Full Stack Web Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const imageBuffer = await readFile(
    join(process.cwd(), "public/images/profile.png"),
  );

  const profileImage = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "65px",
        background: "#08080b",
        color: "#ffffff",
        fontFamily: "Arial",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -100,
          width: 550,
          height: 550,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
        }}
      />

      {/* Profile Image */}
      <div
        style={{
          width: 340,
          height: 390,
          borderRadius: 28,
          overflow: "hidden",
          border: "3px solid #a855f7",
          flexShrink: 0,
          display: "flex",
        }}
      >
        <img
          src={profileImage}
          width={340}
          height={390}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Text Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 55,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#c084fc",
            letterSpacing: 5,
            marginBottom: 25,
          }}
        >
          MY PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 53,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          MD Tanvir Ahsan
        </div>

        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            background: "linear-gradient(90deg, #a855f7, #ec4899, #f43f5e)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 25,
          }}
        >
          Full Stack Web Developer
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#a1a1aa",
            lineHeight: 1.6,
          }}
        >
          Next.js · React · TypeScript
        </div>

        <div
          style={{
            fontSize: 19,
            color: "#71717a",
            marginTop: 35,
          }}
        >
          Bangladesh
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
