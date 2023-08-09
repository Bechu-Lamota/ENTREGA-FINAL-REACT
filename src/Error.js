import React from "react";
import Crash from './Img/404.jpeg';

const Error = () => {
    return (
        <div className="box404">
            <div className="bikeCrash">
                <img className="crash404" src={Crash} alt="crash404"/>
            </div>
            <div>
                <h2 className="pageNotFound"> PAGE NOT FOUND </h2>
            </div>

        </div>
    )
}

export default Error;