import React, { useState } from 'react'
import './Gaming.css'
import maskImg from '../../images/Mask Group.png'
import altersky from '../../images/received_961764751107787-modified 1.png'
import Button from '../../components/button/Button'

import charcter1 from '../../images/character1.png'
import charcter2 from '../../images/character2.png'
import charcter3 from '../../images/character3.png'
import charcter4 from '../../images/character4.png'
import banner from '../../images/Mask group (1).png'
import medal from '../../images/3.png'
import { GAMER_LEADERBOARD } from '../../static/SIDEBAR_DATA'

function Gaming() {

  const imgs = [
    { img: charcter1, title: "Black Knight" },
    { img: charcter2, title: "Cecil Harver" },
    { img: charcter3, title: "Grim Reaper" },
    { img: charcter4, title: "Phantom Lancer" },
  ]

  const [activeImg, setActiveImg] = useState(imgs[0].img)
  const filtered = imgs.filter(i => i.img !== activeImg)
  const [hoverTitle, setHoverTitle] = useState("")
  const [curPosition, setCurPosition] = useState({ x: 0, y: 0 })

  return (
    <div className='gaming_wrapper'>

      <div>
        <div className="gaming_right_banner">
          <div className="gaming_first_banner">
            <img src={maskImg} alt="" />
            <section>
              <div>
                <img src={altersky} alt="" />
                <h2>AlterSky</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint architecto deserunt deleniti laborum facilis in, rerum eius at. Cum?</p>
            </section>
          </div>
        </div>

        <div className='gaming_second_banner'>
          <article>

            <div className="party_mood_wrapper">
              <h2>Party Mood</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, velit.</p>
              <div className="party_btns">
                <Button children="Create" width='100px' height='30px' fontWeight="500" color='#fff' />
                <Button children="Join" width='100px' height='30px' fontWeight="500" border="1px solid #7239CE" background='none' color='#7239CE' />
              </div>
            </div>
            <div className="character_wrapper">
              <h2>Character</h2>
              <div className="main_img">
                {
                  <img src={activeImg} alt="" className='activeImg' />
                }
              </div>
              <div className='icons'>
                {
                  filtered.map((img, key) => <img
                    style={{}}
                    key={key}
                    src={img.img}
                    alt=''
                    onClick={() => setActiveImg(img.img)}
                    onMouseEnter={() => setHoverTitle(img.title)}
                    onMouseMove={e => {
                      setCurPosition({ x: e.clientX, y: e.clientY })
                    }}
                    onMouseLeave={() => setHoverTitle("")}
                  />)
                }
                {
                  hoverTitle && (
                    <div className='active_title' style={{ top: curPosition.y, left: curPosition.x }}>{hoverTitle}</div>
                  )
                }
              </div>
            </div>

          </article>
          <article className='nickname_wrapper'>
            <div className="nickname_input_wrapper">
              <input type="text" placeholder='Nickname' />
              <div><Button children="Play" width='80px' height='30px' color='#fff' /></div>
            </div>
            <div className='space_wrapper'>
              <img src={banner} alt="" />
              <article>
                <h1>Space Game Mode</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, possimus praesentium aliquam temporibus blanditiis error corporis ducimus? Laboriosam, vero commodi!</p>
              </article>
            </div>
          </article>
        </div>

      </div>

      <div className="gaming_left_banner">
        <article>
          <section><h4>Gamer Leaderboard</h4> <p>See All</p> </section>
          <div>
            {
              GAMER_LEADERBOARD.map((i, k) => <div className='profile_wrapper'>
                <div className='gaming_one_profile'>
                  <img src={i.img} alt="" />
                  <div>
                    <h4>{i.name}</h4>
                    <span> <img src={medal} alt="" /> {i.srore} </span>
                  </div>
                </div>
                <div className='gamer_medal'>
                  {i.icon}
                </div>

              </div>)
            }
          </div>
        </article>
      </div>

    </div>
  )
}

export default Gaming