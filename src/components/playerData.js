import React from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

export default class PlayerData extends React.Component {

    static propTypes = {
        display: PropTypes.bool,
        playerData: PropTypes.object
    }

    static defaultProps = {
        display: false,
        playerData: {}
    }

    getLifeWasted(solo, duo, squad) {
        const time = (duo.entries[0].stats.minutesplayed + solo.entries[0].stats.minutesplayed + squad.entries[0].stats.minutesplayed) / 60;

        return `${parseFloat(time).toFixed(2)} h`;
    }

    setRedirect() {
        return <Redirect to='/' />
    }

    render() {
        let data = null;
        let isDataGood = false;
        let duo = null;
        let squad = null;
        let solo = null;
        this.props.playerData === null ? data = null : data = this.props.playerData.stats.keyboardmouse;

        if (data !== null) {
            data.forEach(element => {
                switch (element.friendlyName) {
                    case "Duo":
                        duo = element;
                        break;
                    case "Solo":
                        solo = element;
                        break;
                    case "Squad":
                        squad = element;
                        break;
                    default:
                        break;
                }

            });
        }

        if (solo !== null && duo !== null && squad !== null) {
            isDataGood = true;
        }

        return (

            <div className="playerData">
                {this.props.display && isDataGood &&
                    <div className="playerDataContiner">
                        <h1 id="username">{this.props.playerData.username}</h1>
                        <div className="infoBox">
                            <p className="modeName">{solo.friendlyName}</p>
                            <p>Kills <br />{solo.entries[0].stats.kills}</p>
                            <p>Top1s <br />{solo.entries[0].stats.placetop1}</p>
                            <p>Top10s <br />{solo.entries[0].stats.placetop10}</p>
                            <p>Top25s <br />{solo.entries[0].stats.placetop25}</p>
                            <p>#Rounds <br />{solo.entries[0].stats.matchesplayed}</p>
                        </div>
                        <div className="infoBox">
                            <p className="modeName">{duo.friendlyName}</p>
                            <p>Kills <br />{duo.entries[0].stats.kills}</p>
                            <p>Top1s <br />{duo.entries[0].stats.placetop1}</p>
                            <p>Top5s <br />{duo.entries[0].stats.placetop5}</p>
                            <p>Top12s <br />{duo.entries[0].stats.placetop12}</p>
                            <p>#Rounds <br />{duo.entries[0].stats.matchesplayed}</p>
                        </div>
                        <div className="infoBox">
                            <p className="modeName">{squad.friendlyName}</p>
                            <p>Kills <br />{squad.entries[0].stats.kills}</p>
                            <p>Top1s <br />{squad.entries[0].stats.placetop1}</p>
                            <p>Top3s <br />{squad.entries[0].stats.placetop3}</p>
                            <p>Top6s <br />{squad.entries[0].stats.placetop6}</p>
                            <p>#Rounds {squad.entries[0].stats.matchesplayed}</p>
                        </div>
                        <p id="lifeWasted">Time played : {this.getLifeWasted(solo, duo, squad)}</p>
                    </div>
                }
                {this.props.display && !isDataGood &&
                    <div>
                        <h1 id="error"> Not enough data to display</h1>
                    </div>}

            </div>
        )
    }
}