import React from "react";
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
        <Navbar/>
            <div id="title-theme">
  <h3> - Offical home of - </h3>
  <img src="https://www.zelda.com/assets/img/common/logo-loz.svg" height="300" width="500"/>
  </div>
  <br/>
  <div id="ss-trailer">
  <img src="https://www.zelda.com/assets/img/home/skyward-sword.jpg" height="500" width="950"></img>
  <br/>
  <p> Take to the skies, draw your sword, and experience the earliest story in the Legend of Zelda series. </p>
  <button id="ss-learn"> Learn more </button>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <div id="featured-products">
    <h3 id="product-title"> - Featured products - </h3>
    <br/>
    <br/>
    <div className="product-image">
    <div><img src="https://www.zelda.com/assets/img/home/game-and-watch.jpg" height="200"/>
    <br/>
    <p> Game & Watch </p>
    </div>
    <div><img src="https://www.zelda.com/assets/img/home/skyward-sword.jpg" height="200"/>
    <br/>
    <p> Nintendo Switch </p>
    </div>
    <div><img src="https://www.zelda.com/assets/img/home/games/aoc.jpg" height="200"/>
    <br/>
    <p>Nintendo Switch</p>
    </div>
    </div>
  </div>
  <br/>
  <br/>
  <div className="product-image2">
    <div><img src="https://www.zelda.com/assets/img/home/games/354x198_LA_GameStoreQuarter_v01.jpg"/>
    <br/>
    <p>Nintendo Switch</p>
    </div>
    <div><img src="https://www.zelda.com/assets/img/home/games/354x198_ZeldaBreathofWild_v01.jpg"/>
    <br/>
    <p>Nintendo Switch</p>
    </div>
  </div>
  <br/>
  <p id="p1"> <i> More games at Nintendo.com: </i> <b> Nintendo Switch / Nintendo 3DS / Wii U / Retro </b></p>
  <br/>
  <br/>
  <br/>
  <div id="featured-amiibo">
  <h3> - Featured amiibo - </h3>
  <div id="amiibo">
    <div><img src="https://www.zelda.com/assets/img/home/amiibo/amiibo_urbosa.png" className="champions"/></div>
    <div><img src="https://www.zelda.com/assets/img/home/amiibo/amiibo_ravali.png" className="champions"/></div>
    <div><img src="https://www.zelda.com/assets/img/home/amiibo/amiibo_mipha.png" className="champions"/></div>
    <div><img src="https://www.zelda.com/assets/img/home/amiibo/amiibo_daruk.png" className="champions"/></div>
  </div>
  <br/>
  <button id="view-amiibo"> View more amiibo </button>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <div id="ads">
  <h3> - Link and his friends on Play Nintendo - </h3>
  <div className="card-group">
    <div className="card text-center">
      <div className="card-body" style={{backgroundColor: "#193c38"}}>
        <img src="https://www.zeldadungeon.net/wiki/images/c/ce/Wolf-Link-Midna-Art.png" style={{height: "200px", width: "150px;"}}/>
      </div>
    </div>
    <div className="card text-center">
      <div className="card-body" style={{backgroundColor: "#193c38"}}>
        <img src="https://pbs.twimg.com/media/Ck7vah_WgAAJ9TA.png:large" style={{height: "200px", width: "150px;"}}/>
      </div>
    </div>
  </div>
  <div className="card-group">
    <div className="card text-center">
      <div className="card-body" style={{backgroundColor: "#193c38"}}>
        <img src="https://ssb.wiki.gallery/images/thumb/f/f7/LinkBetweenWorldsZelda.png/1200px-LinkBetweenWorldsZelda.png" style={{height: "200px", width: "150px;"}}/>
      </div>
    </div>
    <div className="card text-center">
      <div className="card-body" style={{backgroundColor: "#193c38"}}>
        <img src="https://www.seekpng.com/png/full/46-461263_image-result-for-ganon-legend-of-zelda-legend.png" style={{height: "200px", width: "150px;"}}/>
      </div>
    </div>
  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <div id="facebook-follow">
  <div className="card-group">
    <div className="card text-center">
      <div className="card-body" style={{backgroundColor: "#1b2e40"}}>
        <img src="https://www.zelda.com/assets/img/home/link_not_roach.png" style={{height: "200px", width: "150px;"}}/>
      </div>
    </div>
    <div className="card">
      <div className="card-body" style={{backgroundColor: "#1b2e40"}}>
        <h3 style={{marginTop:"80px"}}> - Follow The Legend of Zelda on Facebook -</h3>
      </div>
    </div>
  </div>
  </div>
        
        </>
    )
}
export default Home;