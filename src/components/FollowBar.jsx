export default function FollowBar() {
     return (
          <div className="div-play-follow">
               <button className="button-play-all filled-icon div-follow-element scale">
                    <span className="material-symbols-outlined">play_arrow</span>
               </button>
               <button className="button-follow div-follow-element scale">Follow</button>
               <button className="album-button-details div-follow-element scale tooltip">
                    <span className="material-symbols-outlined">more_horiz</span>
               </button>
          </div>
     )
}