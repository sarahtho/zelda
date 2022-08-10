import React from "react";
import Navbar from "./Navbar";
function News()
{
    return(
        <>
        <Navbar/>
        <div id="news">
                <h2 style={{color:'goldenrod'}}> NEWS </h2>
            <p><i>Read the latest news about The Legend of Zelda game series.</i></p>
        </div>
        <div className="card-group">
    <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/ncom/en_US/articles/2021/nintendo-power-podcast-episode-45-available-now/NPPEP45_LOZ_Thumbnaiil_final" className="news-img"/>
            <p> 12/07/2021</p>
            <h4>Nintendo Power Podcast episode 45 available now!</h4>
            <p> Whether your Legend of Zelda journey began with an 8-bit or a modern epic, t...</p>
        </div>
    </div>
    <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/E3/2021/Products/znwxBYWj7Bd3/game-and-watch/header" className="news-img"/>
            <p> 11/12/2021</p>
            <h4>Game & Watch: The Legend of Zelda - Secret Series - Part 3</h4>
            <p> Part 3: Secret Button Commands Part 1: Regional Game Differences Part 2: Saving the Wor...</p>
      </div>
      </div>
    <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/E3/2021/Products/znwxBYWj7Bd3/game-and-watch/header" className="news-img"/>
            <p> 11/05/2021</p>
            <h4>Game & Watch: The Legend of Zelda - Secret Series - Part 2</h4>
            <p>Part 2: Saving the World in 12 Hours? Mysteries of the Playable Clock This year marks t...</p>
      </div>
    </div>
        </div>
        <br/>
        <div className="card-group">
    <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/E3/2021/Products/znwxBYWj7Bd3/game-and-watch/header" className="news-img"/>
            <p> 10/29/2021</p>
            <h4>Game & Watch: The Legend of Zelda - Secret Series - Part 1</h4>
            <p>Part 1: Regional Game Differences Part 2: Saving the...s</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/ncom/en_US/articles/2021/hyrule-warriors-age-of-calamity-wave-2-dlc-is-out-now/1280x720_Switch_News_HWAOC_EN" className="news-img"/>
            <p> 10/29/2021</p>
            <h4>Wave 2 DLC is out now! Expand your heroic quest in Hyrule Warriors: Age of Calamity.</h4>
            <p>In the Hyrule Warriors: Age of Calamity game, you can see Hyrule 100 years before the e...</p>
      </div>
      
      </div>
      <div className="card">
      <div className="card-body">
      <img src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_fit,w_903/ncom/en_US/articles/2021/enter-the-link-loftwing-the-legend-of-zelda-skyward-sword-hd-sweepstakes/loz-sweepstakes-setp-2021" className="news-img"/>
            <p> 09/15/2021</p>
            <h4>Enter the Link & Loftwing - The Legend of Zelda™: Skyward Sword HD Sweepstakes!</h4>
            <p>nter for a chance to win a legendary collection of prizes in the Link & Loftwing - The...</p>
      </div>
      
      </div>
    </div>
    

        </>
    )
}
export default News;