import './content.css';
import sear from '../../images/search-normal.png'
import G8 from '../../images/Group.png'
import G9 from '../../images/Icon2.png'
import G10 from '../../images/Vector.png'


function content() {
  return (
    <div className="content">
        <div className="item1">
            <div className="test">
                <div className="ele1">
                       <div className="schear">
                         <img className="lg" src={sear}></img>
                        <input className="in" type="text" placeholder="Search Item, Collection And Account"></input>
                      </div>
                </div>
                <div className="ele2">
                    <div className="ouf">
                        <div className="E1">
                            <p className="dis"> Discover, Create and Sell Your Own NFT.</p>
                            <div className="propal">
                                <button className="btn">Discover</button>
                                <button className="btn2">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Trend"> 
                <div className="TrendTitre">
                       <div className="TrendTop">Trending Auctions</div>
                       <div className="TrendMenu">
                        <div className="Tm">
                            <div className="TmT"> Art</div>
                            </div>
                        <div className="Tm">
                            <div className="TmT" > Music</div>
                             </div>
                        <div className="Tm">
                            <div className="TmT"> Colectible</div>
                             </div>
                        <div className="Tm">
                            <div className="TmT"> Utility</div>
                            </div>
                       </div>
                   </div>
                   <div className="TrendCard"> 
                         <div className="TCard">
                             <div className="CardImage2"></div>
                             <div className="Data">
                                 <div className="D1">
                                        <div className="TrendTop">Ape In Love</div>
                                        <div className="D1P">
                                            <div className="PP1"></div>
                                            <div className="PR1">@Jordan_</div>
                                        </div>
                                        <div className="D2">
                                            <div className="D2P"> Current Bid</div>
                                        </div>
                                 </div>
                                 <div className="D2">
                                     <div className="Like">21,5K Likes</div>
                                     <div className="Like1">9.12 ETH</div>

                                 </div>
                             </div>
                         </div>
                         <div className="TCard">
                            <div className="CardImage"></div>
                             <div className="Data">
                                 <div className="D1">
                                        <div className="TrendTop">Smilling Ape</div>
                                        <div className="D1P">
                                            <div className="PP1"></div>
                                            <div className="PR1">@e_lipse</div>
                                        </div>
                                        <div className="D2">
                                            <div className="D2P"> Current Bid</div>
                                        </div>
                                 </div>
                                 <div className="D2">
                                     <div className="Like">21,5K Likes</div>
                                     <div className="Like1">6.12 ETH</div>

                                 </div>
                             </div>
                         </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="item2">
        <div className="ele1">
                       <div className="temp">
                      </div>
                      <div className="walletContent">
                            <div className="wallet1">
                                <div className="crypto1">
                                    <div className="R1">Revenu</div>
                                    <div className="R2">
                                                <img src={G8} className="R2lo">
                                                </img>
                                            <div className="ETH">5.00 ETH</div>
                                       </div>
                                    <div className="court">
                                        <img src={G9} className="courtlo"></img>
                                            <div className="UP">  12.3%</div>
                                        </div>

                                </div>
                                <div className="crypto1">
                                <div className="R1">Revenu</div>
                                    <div className="R2">
                                                <img src={G8} className="R2lo">
                                                </img>
                                            <div className="ETH">2.00 ETH</div>
                                       </div>
                                    <div className="court">
                                        <img src={G9} className="courtlo"></img>
                                            <div className="UP">  8.1%</div>
                                        </div>

                                    
                                </div>
                            </div>
                            <div className="wallet2">
                                <div className="crypto2">
                                <div className="R1">Revenu</div>
                                    <div className="R2">
                                                <img src={G8} className="R2lo">
                                                </img>
                                            <div className="ETH">14.02 ETH</div>
                                       </div>
                                    <div className="court">
                                        <img src={G10} className="courtloD"></img>
                                            <div className="UP">  5.1%</div>
                                        </div>


                                </div>
                                <div className="crypto2">
                                <div className="R1">Revenu</div>
                                    <div className="R2">
                                                <img src={G8} className="R2lo">
                                                </img>
                                            <div className="ETH">7.00 ETH</div>
                                       </div>
                                    <div className="court">
                                        <img src={G9} className="courtlo"></img>
                                            <div className="UP">  3.2%</div>
                                        </div>

                                    
                                </div>
                            </div>
                      </div>
                <div className="Friend">
                   <div className="FriendT">
                       <div className="Top">Top Creator</div>
                       <div className="All">See All</div>
                   </div>
                   <div className="FriendData">
                       <div className="Profile">
                           <div className="number">1.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                       </div>
                       <div className="Profile">
                       <div className="number">2.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                       </div>
                       <div className="Profile">
                           <div className="number">3.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                           </div>
                       <div className="Profile">
                       <div className="number">4.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                       </div>
                       <div className="Profile">
                       <div className="number">5.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                       </div>
                       <div className="Profile">
                       <div className="number">6.</div>
                           <div className="PP">
                           </div>
                           <div className="Name">
                               <div className="Pname">Michael Jordan</div>
                               <div className="Sname">@jordan_</div>
                           </div>
                           <div className="Follow">
                                <p className="PFollow">Follow</p>
                           </div>
                       </div>

                   </div>
                </div>
                </div>

        </div>
        
    </div>
  );
}

export default content;
