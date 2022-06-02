import React from 'react'

function Spotify() {
    return (
        <div className="spotify">
              <img 
                    className="me"
                    src="Images/letter.jpeg"
                    alt="me"
                    style={{ width: "48%", border: "5px solid green", borderRadius: "50%" ,  paddingBlock:"3%"}}
                />
            <iframe
                title="musicplayer"
                src="https://open.spotify.com/embed/playlist/0K3JHiuoDSRuXe8M7Ahpwh?utm_source=generator"
                width="55%"
                height="325"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )
}

export default Spotify;
