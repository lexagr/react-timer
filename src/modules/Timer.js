import React, {Component} from 'react';
import Button from '../modules/Button';

class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            timer: {
                time: 0,
                start: 0,
                id: -1,
            }
        };

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
    }

    start(){
        if(this.state.timer.id !== -1) return; //clearInterval(this.state.timer.id);

        this.setState({
            timer: {
                time: this.state.timer.time,
                start: Date.now() - this.state.timer.time,
            }
        });
        
        let timer_id = setInterval(() => {
            this.setState({
                timer: {
                    start: this.state.timer.start,
                    end: this.state.timer.end,
                    time: Date.now() - this.state.timer.start,
                    id: timer_id,
                }
            });
        }, 500); // 500ms for timer(seconds) precision
    }

    pause(){
        if(this.state.timer.id !== -1){
            clearInterval(this.state.timer.id);
            this.setState({
                timer: {
                    start: this.state.timer.start,
                    time: Date.now() - this.state.timer.start,
                    id: -1,
                }
            });
        }
    }

    render(){
        // zero lead
        let minutes = (Math.floor(this.state.timer.time/1000/60)) < 10 ? `0${Math.floor(this.state.timer.time/1000/60)}` : Math.floor(this.state.timer.time/1000/60);
        let seconds = (Math.floor(this.state.timer.time/1000%60)) < 10 ? `0${Math.floor(this.state.timer.time/1000%60)}` : Math.floor(this.state.timer.time/1000%60);

        return (<div>
            <p>Time: {minutes}:{seconds}</p>
            <Button text="Start" action={this.start} />
            <Button text="Pause" action={this.pause} />
        </div>);
    }
}

export default Timer;
