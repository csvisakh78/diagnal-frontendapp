import * as React from 'react';
import './Card.css';
interface ComponentProps {
    data: Object;
}
export default class Card extends React.Component<ComponentProps> {
    props:any;
    img:any;
    PUBLIC_URL = process.env.PUBLIC_URL;
    constructor(props: any) {
        super(props);
    }   
    render() {
        return (
            <div className="ml-30 mb-90">
                <img className="w-full" alt='back' src={this.PUBLIC_URL+'/images/'+this.props.data['poster-image']} ref={img => this.img = img} onError={(e)=>this.img.src=this.PUBLIC_URL+'/images/placeholder_for_missing_posters.png'}/>
                <p className="text-left font-light text-white tx-36">{this.props.data.name}</p>
            </div>
        );
    }
}