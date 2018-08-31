import React, {Component} from 'react';
import './YouTube.css'

class YouTubeChannelInfo extends Component {
    render() {
        return (
            <div>
                <section className="channel-info">

                    <div className="container">

                        <div className="channel-icon">

                            <img src=""
                                 alt=""/>

                        </div>

                        <div className="channel-title">

                            <h1><i className="">ReallyCoolVlogs</i></h1>

                            <div className="channel-subscriber-count">2,126,438</div>

                        </div>

                        <div className="channel-subscribe">

                            <button className="subscribe-btn btn">SUBSCRIBED 2.1M</button>

                            <button className="notification-btn btn" aria-label="Enable Notifications"><i
                                class="fas fa-bell" aria-hidden="true"></i></button>

                        </div>

                    </div>

                </section>
                {/*<!-- End of channel info section -->*/}

                {/*<!-- Channel navigation -->*/}
                <nav className="channel-nav">

                    <div className="container">

                        <ul>

                            <li className="nav-item">
                                <a href="#" className="current">HOME</a>
                            </li>

                            <li className="nav-item">
                                <a href="#">VIDEOS</a>
                            </li>

                            <li className="nav-item">
                                <a href="#">PLAYLISTS</a>
                            </li>

                            <li className="nav-item">
                                <a href="#">COMMUNITY</a>
                            </li>

                            <li className="nav-item">
                                <a href="#">CHANNELS</a>
                            </li>

                            <li className="nav-item">
                                <a href="#">ABOUT</a>
                            </li>

                        </ul>

                    </div>

                </nav>
            </div>
        )
    }
}

export default YouTubeChannelInfo;