const ControlPanel = ({setActiveLight}) => {

    return (
        <div id="controlPanel">
            <div id="stopButton" className="button" 
                onClick={() => setActiveLight('stop')}
            >Stop</div>

            <div id="slowButton" className="button" 
                onClick={() => setActiveLight('slow')}
            >Slow</div>

            <div id="goButton" className="button" 
                onClick={() => setActiveLight('go')}
            >Go</div>
        </div>
    );
};

export default ControlPanel;