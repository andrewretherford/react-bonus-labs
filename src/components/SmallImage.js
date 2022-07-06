const SmallImage = ({src, setCurrentImage}) => {
    return (
        <div id="thumbnails">
            <img className="thumb" onClick={() => setCurrentImage(src)}
                src={src} alt="">
            </img>
        </div>
    );
};

export default SmallImage;