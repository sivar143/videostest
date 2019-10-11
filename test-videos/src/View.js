import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import getServiceData from './service/APIHelper';

const VIDEOS_PATH = './mock/videos.json';

var flag=0; 
var ad=0;
var timesel=0;
class View extends Component {     
/**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            videoSrc: '',
            addVideoSrc: '',
            mainVideoSrc: ''      
        }
        this.init(); 
             
      }

    /**
     * initialize service call to fetch the existing loans list.
     */ 
    async init() { 
       const getVideosList = await getServiceData(VIDEOS_PATH);
       const {links} = getVideosList;
      this.setState({
          videoSrc: links[0].mainVideo,
          mainVideoSrc: links[0].mainVideo,
          addVideoSrc: links[0].adsVideo
      })       
    }

  
    videoPlayPauseHandler = () => {
        let videoPlayer = ReactDOM.findDOMNode(this.refs.videoplayer);
        if (videoPlayer.pause()) {
            videoPlayer.play()
        } else {
            videoPlayer.pause();
        }
    }
    

	videoupload = () => {
	var file = document.getElementById("video").value;
	const postvideoslist

	playvideo = () => {
	ad = document.getElementById("adtime").value;
	let videoPlayer = ReactDOM.findDOMNode(this.refs.videoplayer);
	videoPlayer.play();	
	}
  
    vidoeTrackClickHandler = (event) => { 

	timesel=document.getElementById("sel").value;
	let videoPlayer = ReactDOM.findDOMNode(this.refs.videoplayer);
	const currentTime = Math.floor(videoPlayer.currentTime);
	const videoDuration = Math.floor(videoPlayer.duration);
	const {mainVideoSrc, addVideoSrc} = this.state;
	ad=Math.floor(ad);
	
		if(timesel === 'seconds')
		{			
		ad=parseInt(ad);
		}
		if(timesel === 'minutes')
		{
		ad=Math.floor(ad*60);
		}
		if(timesel === 'hours')
		{
		ad=Math.floor(ad*3600);
		}
	
       if(currentTime >= ad && flag !== 1)
        {
		
		console.log(ad);
	    	flag=1;
            	videoPlayer.pause();
            	videoPlayer.src=addVideoSrc;
            	videoPlayer.play();
         	  
        }
        if(currentTime >= videoDuration)
        {
		videoPlayer.pause();
		videoPlayer.src=mainVideoSrc;
		videoPlayer.currentTime=ad+1;
		videoPlayer.play();
           
        }                     
       
    }

        
   /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        const {videoSrc} = this.state; 
        return(		
            <div className="mainContainer">
		<center>
			<p>Video Upload</p>
			<input type="file" id="video"/>
			<input type="submit" onClick="videoupload()" value="Upload"/>		
			<p>Ad Upload</p>
			<input type="file" name="ad"/>
			<input type="submit" onClick="adupload()" value="Upload"/>
			<br/>
			<p>Please enter the time ads to be displayed</p>
			<input type="text" id="adtime"/>
			<select id="sel">
			<option value="seconds">Seconds</option>
			<option value="minutes">Minutes</option>
			<option value="hours">Hours</option>
			</select>
			<input type="button" id="play" onClick={this.playvideo} value="Confirm"/>
		</center>
	<div className="videoContainer">
                <video controls  ref="videoplayer" width="60%" height="60%" onClick={this.videoPlayPauseHandler} frameBorder="0" 
                    accelerometer="true" encrypted-media="true" picture-in-picture="true" src={videoSrc}
                    allowFullScreen="true" onTimeUpdate={this.vidoeTrackClickHandler}></video>
             </div>    
              
              <section className="tabs">
                <div className="container">
                    <div id="tab-1" className="tab-item tab-border">
                        <i className="fas fa-door-open fa-3x"></i>
                        <a href="https://www.google.co.in/"><p className="hide-sm"><img src="./assets/img/Google.jpg" alt='google'></img></p></a>
                    </div>
                    <div id="tab-2" className="tab-item">
                        <i className="fas fa-tablet-alt fa-3x"></i>
                        <a href="https://www.facebook.com/"><p className="hide-sm"><img src="./assets/img/Facebook.jpg" alt='facebook'></img></p></a>
                    </div>
                    <div id="tab-3" className="tab-item">
                        <i className="fas fa-tags fa-3x"></i>
                        <a href="https://www.youtube.com/"><p className="hide-sm"><img src="./assets/img/Youtube.jpg" alt='youtube'></img></p></a>
                    </div>
                </div>
                </section>
             </div>
        );
    }
};


export default View;
