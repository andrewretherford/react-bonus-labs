const TrafficLight = ({activeLight}) => {
let stopColor, slowColor, goColor

    switch(activeLight) {
        
        case 'stop':
            stopColor = 'red'
            slowColor = 'black'
            goColor = 'black'
            break

        case 'slow':
            stopColor = 'black'
            slowColor = 'yellow'
            goColor = 'black'
            break

        case 'go':
            stopColor = 'black'
            slowColor = 'black'
            goColor = 'green'
            break

        default:
            
    }

    return (
        <div id="traffic-light">
            <div id="stopLight" className="bulb" style={{background: stopColor}}></div>
            <div id="slowLight" className="bulb" style={{background: slowColor}}></div>
            <div id="goLight" className="bulb" style={{background: goColor}}></div>
        </div>
    )
};

export default TrafficLight;