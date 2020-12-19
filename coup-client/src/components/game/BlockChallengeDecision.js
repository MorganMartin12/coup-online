import React, { Component } from 'react'

export default class BlockChallengeDecision extends Component {

    block = (block, claim = null) => {
        const res = {
            prevAction: this.props.prevAction,
            counterAction: {
                counterAction: block,
                claim: 'contessa',
                source: this.props.name
            },
            blockee: this.props.counterAction.source,
            blocker: this.props.name,
            isBlocking: true
        }
        console.log(res)
        this.props.socket.emit('g-blockDecision', res)
        this.props.doneBlockChallengeVote();
    }
    vote = (isChallenging) => {
        this.props.closeOtherVotes('challenge-block')

        const res = {
            counterAction: this.props.counterAction,
            prevAction: this.props.prevAction,
            isChallenging,
            challengee: this.props.counterAction.source,
            challenger: this.props.name
        }
        console.log(res)
        this.props.socket.emit('g-blockChallengeDecision', res);
        this.props.doneBlockChallengeVote();
    }

    render() {
        if(this.props.counterAction.counterAction==='block_foreign_aid'){
            return (
                <>
                    <p>{this.props.counterAction.source} is trying to block {this.props.prevAction.action} from {this.props.prevAction.source} as {this.props.counterAction.claim}</p>
                    <button onClick={() => this.vote(true)}>Challenge</button>
                    <button onClick={() => this.block('block_block_foreign_aid')}>Block with Contessa</button>
                    {/* <button onClick={() => this.vote(false)}>Pass</button> */}
                </>
            )
        }
        return (
            <>
                <p>{this.props.counterAction.source} is trying to block {this.props.prevAction.action} from {this.props.prevAction.source} as {this.props.counterAction.claim}</p>
                <button onClick={() => this.vote(true)}>Challenge</button>
                {/* <button onClick={() => this.vote(false)}>Pass</button> */}
            </>
        )
    }
}
