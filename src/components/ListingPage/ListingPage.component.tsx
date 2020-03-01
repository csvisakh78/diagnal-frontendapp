import * as React from 'react';
import './ListingPage.css';
import Card from '../Card/Card.component';
import { searchDetails as searchDetailsAction } from '../../shared/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
    searchDetailsActionData: state.searchDetails
});

const mapActionsToProps = {
    searchDetailsActionFn: searchDetailsAction
};
class ListingPage extends React.Component {
    state:any;
    props:any;
    constructor(props: any) {
        super(props);
        this.state = {
            enableSearch:false,
            dataLoading:false,
            dataEnd:false,
            content:[]
        }
    }   
    componentWillMount() {
        console.log('here in listing page');
    }
    componentWillReceiveProps(nextProps:any){
        alert('here in next props');
    }
    toggleSearch() {
        let enableSearch = !this.state.enableSearch;
        this.setState({enableSearch:enableSearch});
    }
    inputChange(e:any) {
        if(this.state.content.length === 0 || this.state.dataEnd === false) {
            this.props.searchDetailsActionFn();

        } else {
            this.props.searchDetailsActionFn();
        }
    }
    render() {
        return (
            <div className='container mx-auto'>
                <div className="container mx-auto fixed bg-black header-box">
                    <div className="float-left mt-24 ml-30">
                        <img className="cursor-pointer float-left  h-8" alt='back' src={require('../../static/images/Back.png')} />
                        <span className=' pl-4 leading-8 text-white font-bold'>Romantic Comedy {this.props.searchDetailsActionData}</span>
                    </div>
                    <div className="float-right mt-24 mr-30">
                        {this.state.enableSearch &&
                            <input onKeyUp={(e)=>this.inputChange(e)} className="float-left h-8 w-32" type="text" placeholder='Search...'/>
                        }
                        <img onClick={(e)=>this.toggleSearch()} alt='search' className="cursor-pointer pl-4 float-left h-8" src={require('../../static/images/search.png')} />
                    </div>
                </div>
                <div className='container mx-auto mt-192 mb-30 contentbox min-h-full float-left bg-black'>
                    <div className="grid grid-cols-3 mt-30 pr-30">
                        <Card data='sample'/>
                        <Card  data='sample'/>
                        <Card data='sample'/>
                        <Card data='sample'/>
                        <Card data='sample'/>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapActionsToProps)(ListingPage);