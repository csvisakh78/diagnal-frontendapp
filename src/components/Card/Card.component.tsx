import * as React from 'react';
export default class Card extends React.Component {
    constructor(props: any) {
        super(props);
    }   
    componentWillMount() {
        alert('here in card page');
    }
    
    render() {
        return (
            <div>
                helooo in card page
            </div>
        );
    }
}