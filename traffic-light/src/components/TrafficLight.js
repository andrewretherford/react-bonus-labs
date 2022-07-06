const TrafficLight = ({lights}) => {

    return (
        <div id="traffic-light">
            <div id="stopLight" className="bulb" style={{background: lights.stop}}></div>
            <div id="slowLight" className="bulb" style={{background: lights.slow}}></div>
            <div id="goLight" className="bulb" style={{background: lights.go}}></div>
        </div>
    );
};

export default TrafficLight;