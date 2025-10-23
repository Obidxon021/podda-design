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
import { IoEye, IoSend } from "react-icons/io5";
import { GoDotFill } from 'react-icons/go'
import bannerImg from '../../images/bannerImg.jpg'
import ellipse1 from '../../images/Ellipse265.png'
import ellipse2 from '../../images/Ellipse266.png'
import ellipse3 from '../../images/Ellipse267.png'
import reactangle from '../../images/Rectangle6376.png'
import altersky from '../../images/received_961764751107787-modified 1.png'
import profileImg1 from '../../images/Rectangle 6369.png'
import profileImg2 from '../../images/Rectangle 6370.png'
import profileImg3 from '../../images/Rectangle 6371.png'

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
              <BsThreeDots />
            </article>
          </section>
          <section className='img_section'>
            <img src={bannerImg} alt="" />
          </section>
          <section className='icons_section'>
            <div className='icons_wrapper'>
              <article> <FaHeart /> </article>
              <article> <FaCommentDots /> </article>
              <article> <RiTelegram2Line /> </article>
              <article> <PiCoins /> <p>Give Tips</p> </article>
            </div>
            <div className='views_wrapper'>
              <article> <IoEye /> <p>52 Views</p> </article>
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
        <section className='right_banner_first_section'>
          <article>
            <h3>Altersky</h3>
            <div><p>Online</p> <GoDotFill /></div>
          </article>
          <article className='followers'>
            <div>
              <img src={altersky} alt="" />
            </div>
            <div>
              <p>25 Followers</p>
              <hr />
              <p>14 Following</p>
            </div>
          </article>
          <article className='buttons'>
            <div><h3>12,435</h3> <p>Bucoins</p> </div>
            <div className='btns_wrapper'>
              <div> <Button width='80px' height='30px' children="Order" /> </div>
              <div> <Button width='80px' height='30px' children="ProPass" /> </div>
            </div>
          </article>
        </section>

        <section className='right_banner_second_section'>
          <div>
            <h3>Suggested for you</h3>
            <p>See All</p>
          </div>
          <div className='suggesteds_wrapper'>
            <article>
              <section>
                <img src={profileImg1} alt="" />
                <span> <h3>Faraz Tariq</h3> <p>Super Active</p> </span>
              </section>
              <section>
                <Button children="Follow" width='80px' height='30px' />
              </section>
            </article>
            <article>
              <section>
                <img src={profileImg2} alt="" />
                <span> <h3>Tina Tzoo</h3> <p>Super Active</p> </span>
              </section>
              <section>
                <Button children="Follow" width='80px' height='30px' />
              </section>
            </article>
            <article>
              <section>
                <img src={profileImg3} alt="" />
                <span> <h3>MKBHDS</h3> <p>Super Active</p> </span>
              </section>
              <section>
                <Button children="Follow" width='80px' height='30px' />
              </section>
            </article>
          </div>
        </section>

        <section className='right_banner_second_section last_section'>
          <div>
            <h3>Add Gorup</h3>
            <Button width='80px' height='30px' children="Add Group" fontSize='12px' />
          </div>
          <div className='suggesteds_wrapper'>

            <article>
              <section>
                <img src={profileImg1} alt="" />
                <span> <h3>p.Diddy</h3> <p>Lorem, ipsum.</p> </span>
              </section>
              <section>
                <p>2h ago</p>
              </section>
            </article>
            <article>
              <section>
                <img src={profileImg2} alt="" />
                <span> <h3>NoobPlayer</h3> <p>Lorem ipsum dolor sit.</p> </span>
              </section>
              <section>
                <p>3h ago</p>
              </section>
            </article>
            <article>
              <section>
                <img src={profileImg3} alt="" />
                <span> <h3>Mr.Jam</h3> <p>Lorem ipsum dolor</p> </span>
              </section>
              <section>
                <p>1h ago</p>
              </section>
            </article>
            <article>
              <section>
                <img src={profileImg} alt="" />
                <span> <h3>Jacson</h3> <p>Lorem ipsum dolor</p> </span>
              </section>
              <section>
                <p>7h ago</p>
              </section>
            </article>
            <p className='see_All'>See all</p>
            <div className="suggesteds_input_wrapper">
              <input type="text" placeholder='Send Message' />
              <div>
                <IoSend />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home