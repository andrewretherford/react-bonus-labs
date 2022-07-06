const ControlPanel = ({setFunction}) => {

    return (
        <div id="controlPanel">
            <div id="stopButton" className="button" 
                onClick={() => setFunction.setStop((color) => {
                    if(color === 'black') {
                        color = 'Red'
                        setFunction.setSlow('black')
                        setFunction.setGo('black')
                    } else {
                        color = 'black'
                    }
                    return color                
                })}>Stop</div>

            <div id="slowButton" className="button" 
                onClick={() => setFunction.setSlow((color) => {
                    if(color === 'black') {
                        color = 'yellow'
                        setFunction.setStop('black')
                        setFunction.setGo('black')
                    } else {
                        color = 'black'
                    }
                    return color                
                })}>Slow</div>

            <div id="goButton" className="button" 
                onClick={() => setFunction.setGo((color) => {
                    if(color === 'black') {
                        color = 'green'
                        setFunction.setStop('black')
                        setFunction.setSlow('black')
                    } else {
                        color = 'black'
                    }
                    return color                
                })}>Go</div>
        </div>
    );
};

export default ControlPanel;