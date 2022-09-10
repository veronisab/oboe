import React from 'react';
import Bgm from './bg-m.jpg';
import Bgd from './bg-d.jpg';


const Head = () => {
    return (
        <div>
            <picture>
                <source media="(max-width: 764px)" srcset={Bgm} />
                <source media="(min-width: 765px)" srcset={Bgd} />
                <img src={Bgd} alt="Oboist Veronica Ulrikkeholm" />
            </picture>
        </div>
    );
}

export default Head;