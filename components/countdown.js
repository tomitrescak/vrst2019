import React from 'react';

export class CountDown extends React.Component {
  finalDate = new Date(2019, 10, 12, 9, 0);

  state = { offset: {} };

  countDown = () => {
    const d = new Date();
    let b = this.finalDate.getTime() > d.getTime() ? this.finalDate.getTime() - d.getTime() : 1000;
    b = Math.ceil(b / 1000);

    // debugger;

    const offset = {
      seconds: b % 60,
      minutes: Math.floor(b / 60) % 60,
      hours: Math.floor(b / 60 / 60) % 24,
      days: Math.floor(b / 60 / 60 / 24) % 7,
      weeks: Math.floor(b / 60 / 60 / 24 / 7),
      months: Math.floor(b / 60 / 60 / 24 / 30.4368),
      years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
    };

    offset.days = offset.weeks * 7 + offset.days;

    this.setState({ offset });
  };

  componentDidMount() {
    this.countDown();

    setInterval(this.countDown, 1000);
  }

  render() {
    return (
      <div className="countdown flex flex-wrap justify-content-between" data-date="2018/06/06">
        <div className="countdown-holder">
          <div className="dday">{this.state.offset.days}</div>
          <label>Days</label>
        </div>

        <div className="countdown-holder">
          <div className="dhour">{this.state.offset.hours}</div>
          <label>Hours</label>
        </div>

        <div className="countdown-holder">
          <div className="dmin">{this.state.offset.minutes}</div>
          <label>Minutes</label>
        </div>

        <div className="countdown-holder">
          <div className="dsec">{this.state.offset.seconds}</div>
          <label>Seconds</label>
        </div>
      </div>
    );
  }
}
