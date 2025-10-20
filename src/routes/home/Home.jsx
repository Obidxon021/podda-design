import React from 'react'
import './Home.css'
import { PiSmileyMeh } from 'react-icons/pi'
import { TfiGallery } from 'react-icons/tfi'
import profileImg from '../../images/profile.png'
import Button from '../../components/button/Button'
import { BsThreeDots } from "react-icons/bs"
import { FaCommentDots, FaHeart } from 'react-icons/fa6'
import { RiTelegram2Line } from "react-icons/ri";
import { PiCoins } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { GoDotFill } from 'react-icons/go'
import bannerImg from '../../images/bannerImg.jpg'
import ellipse1 from '../../images/Ellipse265.png'
import ellipse2 from '../../images/Ellipse266.png'
import ellipse3 from '../../images/Ellipse267.png'
import reactangle from '../../images/Rectangle6376.png'

function Home() {
  return (
    <div className='home_wrapper'>

      <div className="main_banner">
        <div className="first_banner">
          <section>
            <h4>Newsfeed</h4>
            <h1>Check What Your Friends Up To!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos saepe aliquid molestiae at officiis. Expedita deleniti nemo earum illum.</p>
          </section>
          <div className="input_items">
            <input type="text" placeholder="Whats's on your mind" />
            <section>
              <TfiGallery />
              <PiSmileyMeh />
              <button>Create</button>
            </section>
          </div>
        </div>
        <div className="second_banner">
          <section className='profile_section'>
            <article>
              <img src={profileImg} alt="" />
              <div>
                <h4>Picachuu</h4>
                <p>Public</p>
              </div>
            </article>
            <article>
              <Button width='100px' height='30px'>Follow</Button>
              <BsThreeDots/>
            </article>
          </section>
          <section className='img_section'>
            <img src={bannerImg} alt="" />
          </section>
          <section className='icons_section'>
            <div className='icons_wrapper'>
              <article> <FaHeart /> </article>
              <article> <FaCommentDots/> </article>
              <article> <RiTelegram2Line/> </article>
              <article> <PiCoins/> <p>Give Tips</p> </article>
            </div>
            <div className='views_wrapper'>
              <article> <IoEye/> <p>52 Views</p> </article>
            </div>
          </section>
          <section className='likes_section'>
            <section>
              <img src={ellipse1} alt="" />
              <img src={ellipse2} alt="" />
              <img src={ellipse3} alt="" />
            </section>
            <section>Liked by mr.beast and 34 others</section>
          </section>
          <section className='desc_section'>
            <p>What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator.</p>
          </section>
          <section className='post_section'>
            <div>
              <img src={reactangle} alt="" />
            </div>
            <div>
              <input type="text" name="" placeholder='Post a Comment...' id="" />
              <article>
                <Button children="Post" width='100px' height='30px' />
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="right_banner">
        <section>
          <article>
            <h5>Altersky</h5>
            <p>Online <GoDotFill/></p>
          </article>
        </section>
        <section></section>
        <section></section>
      </div>

    </div>
  )
}

export default Home