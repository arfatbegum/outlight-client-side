import React, { useEffect, useState } from 'react';
import Light from './Light';

const Tools = () => {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tools")
            .then(response => response.json())
            .then(data => setLights(data))
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-10 py-24 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Lamps</h2>
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">  Our Best Selling Lamps</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        lights?.slice(-8).map(light => <Light
                            key={light._id}
                            light={light}
                        ></Light>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;