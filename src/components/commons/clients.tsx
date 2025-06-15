import React from "react";

const clientSvgs = [
  { name: "LURETECH"},
  { name: "AAHRBITX"},
  { name: "OPENMINDS"},
  { name: "CHENAI" },
  { name: "LURETECH"},
  { name: "AAHRBITX"},
  { name: "OPENMINDS"},
  { name: "CHENAI"},

];

export default function Clients() {
  const logos = clientSvgs.concat(clientSvgs);

  return (
    <div className="relative z-10 h-[170px] flex justify-center items-center overflow-hidden bg-gradient-to-r from-black/0 via-black/80 to-black/0">
      <div className="absolute inset-0 pointer-events-none z-20 fade-mask" />
      <div className="px-10 py-8 max-w-[1500px] mx-auto overflow-hidden w-ful fade-mask">
        <div className="w-full relative">
          <div
            className="flex flex-nowrap items-center gap-14 animate-slide"
            style={{
              animation: "slide 30s linear infinite",
              width: "max-content",
            }}
          >
            {logos.map((client, i) => (
              <div
                key={client.name + i}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200 flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 180,
                  height: 96,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{
                    width: "100%",
                    height: "100%",
                    // objectFit: "contain",
                    // filter: "brightness(0) invert(1)",
                    display: "block",
                  }}
                  className="mx-auto text-2xl font-bold text-gray-500"
                  draggable={false}
                >{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .fade-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 10%,
            #000 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 10%,
            #000 90%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  );
}