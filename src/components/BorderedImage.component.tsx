
interface BorderedImagePropTypes{
    borderType?:"vibrant"|"soft";
    thickness?:string;
    imgURL:string;
    blur?:string;
    width:string;
    height:string;
    borderRadius?:string;
};

function getBorderStyle(borderType:Required<BorderedImagePropTypes["borderType"]>) {
    switch (borderType) {
        case "soft":
            return ({backgroundBlendMode:"hard-light", backgroundColor:"#ffffffaa"});
        case "vibrant":
            return ({backgroundBlendMode:"hard-light", backgroundColor:"#ffffffff"});
        default:
            return ({backgroundColor:"white"});
    }
};

function BorderedImage({borderType="vibrant", thickness="2px", imgURL, blur="0px", height, width, borderRadius="12px"}:BorderedImagePropTypes) {
    
    return(
        <div
            style={{
                padding:thickness,
                height,
                width,
                borderRadius
            }}
            className="relative flex justify-center items-center"
        >
            <div
                style={{
                    ...getBorderStyle(borderType),
                    backgroundImage:`url(${imgURL})`,
                    filter:`blur(${blur})`,
                    borderRadius
                }}
                className="absolute top-0 left-0 bg-transparent w-full h-full bg-cover"
            ></div>

            <img
            src={`${imgURL}`}
            alt={`${imgURL}`}
            style={{
                backdropFilter:`blur(${blur})`,
                borderRadius
            }}
            className="w-full h-full"
            />
        </div>
    )
};

export default BorderedImage;