import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'Topi',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'topi'
                  },
                  {
                    title: 'Jaket',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'Sepatu',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'Wanita',
                    imageUrl: 'http://zalora-media-live-id.s3.amazonaws.com/product/60/85252/1.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'Laki Laki',
                    imageUrl: 'http://zalora-media-live-id.s3.amazonaws.com/product/97/44822/1.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
            ]
        };
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;

