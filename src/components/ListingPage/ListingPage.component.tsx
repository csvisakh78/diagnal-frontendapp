import * as React from 'react';
import './ListingPage.css';
import Card from '../Card/Card.component';
import { searchDetails as searchDetailsAction } from '../../shared/actions';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state: any) => ({
    searchDetailsActionData: state.searchDetails
});

const mapActionsToProps = {
    searchDetailsActionFn: searchDetailsAction
};
const limit = 20;
class ListingPage extends React.Component {
    state:any;
    props:any;
    PUBLIC_URL = process.env.PUBLIC_URL;
    searchTimer:any;
    searchKeyword:any;
    constructor(props: any) {
        super(props);
        this.state = {
            enableSearch:false,
            dataLoading:false,
            dataEnd:false,
            content:[]
        }
        this.handleScroll = this.handleScroll.bind(this);
    }   
    componentWillMount() {
        this.fetchData(0,limit);
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillReceiveProps(nextProps:any){
        if(this.searchKeyword) {
            if(nextProps.searchDetailsActionData.length > 0) {
                this.setState({content:nextProps.searchDetailsActionData});
            } else {
                this.initializeParams();
                this.searchContent(this.searchKeyword);
            }
        }
    }
    handleScroll() {
        if(this.searchKeyword && this.searchKeyword!=null) {
            return;
        }
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body         = document.body;
        const html         = document.documentElement;
        var docHeight      = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        docHeight          = docHeight - (0.3*docHeight); 
        if (windowBottom >= docHeight) {
            this.fetchData(this.state.content.length,limit);
        } 
    }
    initializeParams() {
        this.state.dataEnd     = false;
        this.state.dataLoading = false;
        this.setState({dataEnd:this.state.dataEnd,content:[],dataLoading:false});
    }
    fetchData(offset=0,limit=20) {
        if(this.state.dataLoading || this.state.dataEnd === true) {
            return;
        }
        this.state.dataLoading = true;
        this.setState({dataLoading:true});
        axios.post(process.env.REACT_APP_API_HOST+"fetchContents",{offset,limit})
        .then((res) => { 
            this.setState({dataLoading:false});
            if(res && res.data && res.data.length > 0) {
                var content = this.state.content.concat(res.data);
                this.setState({content:content});
            } else {
                this.setState({dataEnd:true});
            }
        }).catch((err)=> {
            console.log('error',err);
        });
    }
    searchContent(keyword:String) {
        if(this.state.dataLoading) {
            return;
        }
        this.state.dataLoading = true;
        this.setState({dataLoading:true,content:[]});
        axios.post(process.env.REACT_APP_API_HOST+"searchContents",{keyword})
        .then((res) => { 
            this.setState({dataLoading:false});
            if(res && res.data && res.data.length > 0) {
                this.setState({content:res.data});
            } else {
                this.setState({dataEnd:true});
            }
        }).catch((err)=> {
            console.log('error',err);
        });
    }
    toggleSearch() {
        let enableSearch = !this.state.enableSearch;
        this.setState({enableSearch:enableSearch});
    }
    inputChange(e:any) {
        this.searchKeyword = e.target.value;
        clearTimeout(this.searchTimer);
        if(!this.searchKeyword || this.searchKeyword === '') {
            this.initializeParams();
            this.fetchData(0,limit);
        } else {
            this.searchTimer = setTimeout(() => {
                this.props.searchDetailsActionFn({keyword:this.searchKeyword,content:this.state.content});
            },300);
        }
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <div className='container mx-auto'>
                <div className="container mx-auto fixed bg-black header-box">
                    <div className="float-left mt-24 ml-30">
                        <img className="cursor-pointer float-left  h-8" alt='back' src={this.PUBLIC_URL+'/images/Back.png'} />
                        <span className=' pl-4 leading-8 text-white font-bold'>Romantic Comedy</span>
                    </div>
                    <div className="float-right mt-24 mr-30">
                        {this.state.enableSearch &&
                            <input onChange={(e)=>this.inputChange(e)} className="float-left h-8 w-32" type="text" placeholder='Search...'/>
                        }
                        <img onClick={(e)=>this.toggleSearch()} alt='search' className="cursor-pointer pl-4 float-left h-8" src={this.PUBLIC_URL+'/images/search.png'} />
                    </div>
                </div>
                <div className='container mx-auto mt-192 mb-30 contentbox float-left bg-black'>
                    {(this.state.content.length > 0 || !this.state.dataLoading) &&
                        <div className="grid grid-cols-3 mt-30 pr-30">
                            {this.state.content.map((value:any, index:any) => {
                                return <Card key={index} data={value}/>;
                            })}
                        </div>
                    }
                    {this.state.content.length === 0 && this.state.dataLoading &&
                        <div className='text-center text-white font-bold'>Loading Contents</div>
                    }
                    {this.state.content.length > 0 && this.state.dataLoading &&
                        <div className='text-center text-white font-bold'>Loading More Contents</div>
                    }
                    {this.state.content.length === 0 && !this.state.dataLoading &&
                        <div className='text-center text-white font-bold'>No Matching Contents Found</div>
                    }
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapActionsToProps)(ListingPage);