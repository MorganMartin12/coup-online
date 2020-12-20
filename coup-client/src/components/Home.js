import React, { Component } from 'react'
import { Link } from "react-router-dom";
import chicken from "../assets/Chicken.svg"
import RulesModal from './RulesModal';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="homeContainer">
                <h1>Welcome to Coup</h1>
                <p>A game of deduction and deception</p>
                <p>This game plays with a balanced ruleset that differs from the base game</p>
                <ul style={{textAlign: 'left'}}>
                    <li>Influence cards revealed and discarded are not shuffled back into the play deck and go into a discard pile.</li>
                    <li>Contessa can block a Duke's blocking ability</li>
                    <li>When couped by an opponent, if you are holding and reveal an assassin, the opponent will also be assassinated and must discard an infleunce. Your assassin will be discarded.</li>
                    <li>When revealing an Ambassador aftering being couped, you gain 4 coins.</li>
                </ul>

                <img src={chicken} alt="chicken-leg"/>
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
