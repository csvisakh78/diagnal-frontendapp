import * as React from 'react';
export default class NotFound extends React.Component {
    constructor(props: any) {
        super(props);
    }   
    componentWillMount() {
        alert('404 page');
    }
    
    render() {
        return (
            <div>
                404 page
            </div>
        );
    }
}