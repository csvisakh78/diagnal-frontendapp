import * as React from 'react';
export default class ListingPage extends React.Component {
    constructor(props: any) {
        super(props);
    }   
    componentWillMount() {
        alert('here in listing page');
    }
    
    render() {
        return (
            <div>
                helooo in listing page
            </div>
        );
    }
}