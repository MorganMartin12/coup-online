import React, { Component } from 'react'
import { Link } from "react-router-dom";
import chicken from "../assets/Chicken.svg"
import RulesModal from './RulesModal';
import logo from '../assets/Coup-removebg-preview.png'
import '../index.css'
export default class Home extends Component {
    render() {
        return (
            <>
            <div className="homeContainer">
                 <img style={{ width:"20%",
  height: "auto"}}src={logo} alt="chicken-leg"/>
                <p>A game of deduction and deception</p>
                <div className="input-group-btn">
                    <Link className="home" to="/create" >Create Game</Link>
                </div>
                <div className="input-group-btn">
                    <Link className="home" to="/join" >Join Game</Link>
                </div>
                <div>
                    <div className="homeModalContainer">
                    <RulesModal home={true}/> 
                    </div>
                </div>
                

                
            </div>
            <p className="version-number">Beta v0.82</p>
            <div className="footer">
                <p>Originally created by <a className="website-link" href="https://github.com/cheneth" target="_blank" rel="noopener noreferrer">Ethan Chen</a></p>
                
                {`\n`}

                <p>Modified by
                    <a className="website-link" href="https://github.com/MorganMartin12" target="_blank" rel="noopener noreferrer">Morgan Martin</a>
                    <a className="website-link" href="https://github.com/soggysogan" target="_blank" rel="noopener noreferrer">Jason Sogan</a>
                    and <a className="website-link" href="https://github.com/RobWheaton13" target="_blank" rel="noopener noreferrer">Robert Wheaton</a>
                </p>
            </div>
            </>
        )
    }
}
