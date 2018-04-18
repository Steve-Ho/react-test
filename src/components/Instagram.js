import React from 'react';
import request from 'superagent';
import './Instagram.css';

class Instagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        this.fetchPhotos();
    }

    fetchPhotos() {
        request
            .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7487432591.1677ed0.d773a92d47b544abaa162c47512b38b0')
            .then((res) => {
                this.setState({
                    photos: res.body.data
                })
            }
        )
    }

    render() {
        const imgStyle = {
            width:'100%',
            height: 'auto'
        }
        return (
            <div className="gallery">
                {console.log(this.state.photos)}
                {this.state.photos.map((photo, key) => {
                    return (
                        <div key={photo.id}>
                            <img src={photo.images.standard_resolution.url} alt={photo.caption} style={imgStyle}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Instagram;