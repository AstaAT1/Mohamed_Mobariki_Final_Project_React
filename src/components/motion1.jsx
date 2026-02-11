import * as motion from "motion/react-client";

export default function LampToggle({ isOn, setIsOn, dark }) {
  return (
    <button
      onClick={() => setIsOn((s) => !s)}
      role="switch"
      aria-checked={isOn}
      aria-label="Toggle lamp"
      className="select-none"
      style={{
        width: 64,
        height: 30,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        padding: 6,
        cursor: "pointer",
        justifyContent: isOn ? "flex-end" : "flex-start",
        border: dark ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(0,0,0,0.12)",
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: dark ? "#fff" : "#000",
        }}
      />
    </button>
  )
}