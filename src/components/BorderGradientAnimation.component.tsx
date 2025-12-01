
interface BorderGradientAnimationPropTypes{
    width?:string;
    height?:string;
    thickness?:string;
    borderRadius?:string;
    blur?:string;
    backgroundColor?:string;
    gradient?:string[];

};

function BorderGradientAnimation({height="100%", width="100%", thickness="1px", borderRadius="12px", blur="0px", backgroundColor="black", gradient=["#ff006e", "#8338ec", "#3b82f6", "#06ffa5", "#ffbe0b", "#ff006e"]}:BorderGradientAnimationPropTypes) {

    return (
        <div className="relative"
            style={{
                width, height, padding:thickness, borderRadius
            }}
        >

            <div
                className="absolute inset-0"
                style={{
                    borderRadius,
                    filter:`blur(${blur})`,
                    background: `conic-gradient(from var(--gradient-angle), ${gradient})`,
                    animation: 'rotation 2s linear infinite',
                }}
            />

            <div className="relative h-full w-full flex flex-col justify-center items-center"
                style={{
                    borderRadius,
                    backgroundColor
                }}
            >
                <div className="w-20 h-20 bg-linear-to-br from-pink-500 to-violet-600 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center mb-6">
                <span className="text-3xl">Star</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Glowing Card</h2>
                <p className="text-gray-400 mt-2">Smooth animated border using @property</p>
                <button className="mt-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition">
                Explore
                </button>
            </div>

            <style>
                {`
                @property --gradient-angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                }

                @keyframes rotation {
                    from { --gradient-angle: 0deg; }
                    to   { --gradient-angle: 360deg; }
                }
                `}
            </style>
        </div>

    );
}

export default BorderGradientAnimation;