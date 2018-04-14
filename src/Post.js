import React from "react";

export class Post extends React.Component {
    render(){
    return (
            <div>
            <div className="ui container">
            <div className="ui card" style={{maxWidth: "100%", minWidth: "100%"}}>
            <div className="content" style={{padding: "0"}}>
                <div className="ui items">
                    <div className="item">
                        <div className="ui medium image">
                            <img src="http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg" />
                        </div>
                        <div className="content" style={{padding: "1rem"}}>
                            <a className="header">Manejo de dependencias en Ruby con Bundler</a>
                            <div className="meta">
                                <span className="cinema">Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.</span>
                            </div>
                            <div className="description">
                                <p></p>
                            </div>
                            <div className="extra">
                                <div className="ui label">42</div>
                                <img src="//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>  
        </div>
        )
    }
}