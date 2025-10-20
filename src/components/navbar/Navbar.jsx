import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

function Navbar() {

    const [isActive, setIsActive] = useState(false)
    const boxRef = useRef(null)
    const bellRef = useRef(null)

    const notificationBoxActive = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        const handleCloseBox = (e) => {
            if (boxRef.current?.contains(e.target) || bellRef.current?.contains(e.target)) {
                return;
            }
            setIsActive(false)
        }

        if (isActive) {
            document.addEventListener("mousedown", handleCloseBox)
        } else {
            document.removeEventListener("mousedown", handleCloseBox)
        }

        return () => {
            document.removeEventListener("mousedown", handleCloseBox)
        }

    }, [isActive])


    return (
        <div className='navbar_wrapper'>
            <section className='navbar_input_wrapper'>
                <CiSearch />
                <input type="text" placeholder='Search' />
            </section>
            <section className='navbar_icons_wrapper'>
                <article className='notification_wrapper' ref={bellRef} onClick={notificationBoxActive}>
                    <FaBell />
                    <div ref={boxRef} className={isActive ? "notifications_box box_active" : "notifications_box"}>
                        <p>No Notifications</p>
                    </div>
                </article>
                <article>
                    <AiFillMessage />
                </article>
                <article>
                    <FaUser />
                </article>
            </section>
        </div>
    )
}

export default Navbar