import React from 'react'

function Spotify() {
    return (
        <div className="spotify">
            <iframe
                title="musicplayer"
                src="https://open.spotify.com/embed/playlist/0K3JHiuoDSRuXe8M7Ahpwh?utm_source=generator"
                width="48%"
                height="380"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    )
}

export default Spotify;