import { useMemo , useState } from "react";
import images from "../constant/image";
import { LuLamp, TbLampOff, FaMoon, FaSun } from "../constant/icons";

import LampToggle from "../components/motion1";
import ThemeToggle from "../components/motion2";
// import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

function pickLampImage({ dark, on, set }) {
// set dark / light
  const map = {
    1: { offLight: images.img1Mode1, onLight: images.img1Mode2, offDark: images.img1Mode3, onDark: images.img1Mode4 },
    2: { offLight: images.img2Mode1, onLight: images.img2Mode2, offDark: images.img2Mode3, onDark: images.img2Mode4 },
    3: { offLight: images.img3Mode1, onLight: images.img3Mode2, offDark: images.img3Mode3, onDark: images.img3Mode4 },
    4: { offLight: images.img4Mode1, onLight: images.img4Mode2, offDark: images.img4Mode3, onDark: images.img4Mode4 },
  }

  const s = map[set]
  if (!s) return ""
  if (dark) return on ? s.onDark : s.offDark
  return on ? s.onLight : s.offLight
}

export default function Home() {
  // isLampOn: lamp off/on
  const [isLampOn, setIsLampOn] = useState(false)

  // isDark: theme light/dark
  const [isDark, setIsDark] = useState(false)

  const lamp1 = useMemo(() => pickLampImage({ dark: isDark, on: isLampOn, set: 1 }), [isDark, isLampOn] )
  const lamp2 = useMemo(() => pickLampImage({ dark: isDark, on: isLampOn, set: 2 }), [isDark, isLampOn])
  const lamp3 = useMemo(() => pickLampImage({ dark: isDark, on: isLampOn, set: 3 }), [isDark, isLampOn])
  const lamp4 = useMemo(() => pickLampImage({ dark: isDark, on: isLampOn, set: 4 }), [isDark, isLampOn])

  return (
    <div
      className={[
        "min-h-screen px-115 py-10",

        isDark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900",
      ].join(" ")}
    >
  
      
    

      <div className="relative mx-auto w-full max-w-6xl">
        {/* navbar */}
        <div className="flex flex-col gap-6  pb-6">
          <Link to={{pathname : '/src/pages/Contact.jsx'}} className="text-2xl font-bold " >
            you love lamp©
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Lamp toggle */}
            <div className="flex items-center gap-3">
              <LuLamp  />
              <LampToggle isOn={isLampOn} setIsOn={setIsLampOn} dark={isDark} />
              <TbLampOff  />
            </div>

            {/* Theme toggle */}
            <div className="flex items-center gap-3">
              <FaMoon  />
              <ThemeToggle isOn={isDark} setIsOn={setIsDark} />
              <FaSun />
            </div>
          </div>
        </div>

{/* try grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[lamp1, lamp2, lamp3, lamp4].map((src, i) => (
            <div
              key={i}
              className={[
                "overflow-hidden",
              ].join(" ")}
            >
              <img
                src={src}
                alt={`lamp-${i + 1}`}
                className="  object-cover h-[420px] cursor-pointer duration-500 hover:scale-[1.03]"
        
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

