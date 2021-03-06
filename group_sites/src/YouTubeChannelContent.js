import React, {Component} from 'react';
import YouTubeRecommendedChannels from './YouTubeRecommendedChannels'
import './YouTube.css'

class YouTubeChannelContent extends Component {
    render() {
        return (
            <main className="channel-content">

                <div className="container">

                    {/*<!-- Channel videos -->*/}
                    <section className="channel-videos">

                        <div className="featured-video">

                            <div className="video-thumbnail">
                                <img
                                    src="https://placeimg.com/200/200/animals"
                                    alt="a picture of a cat"/>
                            </div>

                            <div className="video-info">
                                <h3 className="video-title">I Bet You Can't Watch Without Laughing</h3>
                                <ul className="video-meta-data">
                                    <li className="video-creator">
                                        <i className="fas fa-check-circle"></i>
                                    </li>
                                    <li className="video-views">14,378 Views</li>
                                    <li className="video-upload-date">07/24/1992</li>
                                </ul>
                                <p className="video-description">Some of the most hilarious videos</p>
                            </div>

                        </div>

                        <div className="vlogs-playlist playlist">

                            <h2 className="playlist-title">Lo-Fi Hip Hop</h2>

                            <div className="playlist-videos">

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://placeimg.com/170/120/arch"
                                            alt="Architecture"/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title">2 Hours of Jazz Vibes</h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                Dylan Spitts
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views">304K views</li>
                                            <li className="video-upload-date">2 years ago</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title">Burning Bush Live Concert 07/07</h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                JP Develops
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views">345K views</li>
                                            <li className="video-upload-date">2 weeks ago</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://placeimg.com/170/120/any"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title">13hirteen Reasons Why Cancelled?</h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                               Cody Pace
                                            </li>
                                            <li className="video-views">2.1m views</li>
                                            <li className="video-upload-date">1 month ago</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1481241857164-e8483bce922d?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title">New Jedi's Coming</h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                Didja Cat
                                            </li>
                                            <li className="video-views">234 views</li>
                                            <li className="video-upload-date">1 week ago</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1496317556649-f930d733eea3?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1515164084382-4ac60f929e06?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1455657255576-9f8594457f6b?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title">R</h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="collabs-playlist playlist">

                            <h2 className="playlist-title"></h2>

                            <div className="playlist-videos">

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1468109320504-a5e48f17cfb7?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src=""
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src=""
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1512271126385-b02e1b530dca?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1511854027438-1549025c5eff?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="likes-playlist playlist">

                            <h2 className="playlist-title"></h2>

                            <div className="playlist-videos">

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src=""
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1464666495445-5a33228a808e?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src=""
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views">1</li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="playlist-video" tabIndex="0">

                                    <div className="video-thumbnail">
                                        <img
                                            src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=210&h=118&fit=crop"
                                            alt=""/>
                                    </div>

                                    <div className="video-info">
                                        <h3 className="video-title"></h3>
                                        <ul className="video-meta-data">
                                            <li className="video-creator">
                                                <i className="fas fa-check-circle"></i>
                                            </li>
                                            <li className="video-views"></li>
                                            <li className="video-upload-date"></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/*<!-- Recommended channels -->*/}
                    <YouTubeRecommendedChannels />
                    {/*<!-- End of recommended channels section -->*/}

                </div>

            </main>
        )
    }
}

export default YouTubeChannelContent;