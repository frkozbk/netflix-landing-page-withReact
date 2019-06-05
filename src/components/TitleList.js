import React, { Component } from 'react'
import './TitleList.scss'
import axios from 'axios'
import { tsStringKeyword } from '@babel/types';
const key ="a83c853c6075d38cb26ff3b1729ef916"
 class TitleList extends Component {
     state={}
     async componentDidMount() {
         
         try{
            const response= await axios.get(`https://api.themoviedb.org/3/${this.props.url}&api_key=${key}`);
            console.log(response)
         
        this.setState({data:response.data.results.slice(0,5)})
        }
         catch(err){
             console.log(err)
         }

     }
     
    render() {
        let title
        if(this.state.data){
            title=this.state.data.map(item => (
                <div className="title" style={{backgroundImage: `url(http://image.tmdb.org/t/p/original${item.poster_path})`}}>
                    <h1>{item.name}</h1>
                    <p>{item.vote_average}/10</p>
                    <p>{item.overview}</p>
                </div>
            ))
        }
        console.log(title)
        return (
            <div className="section">
                <h1 className="section-title" >{this.props.title}</h1>
                <div className="titleList">
                
                {title}
            </div>
        
            </div>
        )
    }
}
export default TitleList