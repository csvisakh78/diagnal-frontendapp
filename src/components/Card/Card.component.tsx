import * as React from 'react';
import './Card.css';
interface ComponentProps {
    data: Object;
}
export default class Card extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
        console.log(this.props.data);
    }   
    componentWillMount() {
        console.log('here in card page');
    }
    
    render() {
        return (
            <div className="ml-30 mb-90">
                <img className="w-full" alt='back' src={require('../../static/images/poster3.jpg')} />
                <p className="text-left font-light text-white tx-36">Sample name</p>
            </div>
        );
    }
}