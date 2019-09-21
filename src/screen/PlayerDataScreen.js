import React from 'react'
import fortniteAPI from '../api/fortniteAPI'
import '../css/playerdatascreen.css'
import Spinner from '../components/spinner'
import PlayerData from '../components/playerData'


export default class PlayerDataScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerData: null,
            userId: null,
            username: '',
            displaySpinner: false,
            displaySearch: true,
            displayData: false,
            displayUnknown: false
        }

        this.updateStateUsername = this.updateStateUsername.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.backToSearch = this.backToSearch.bind(this);
    }

    updateStateUsername(e) {
        this.setState({ username: e.target.value })
    }

    async getUserData() {


        const { username } = this.state;

        if (username !== '') {
            this.setState({
                displaySpinner: true,
                displaySearch: false
            })
            const userId = await fortniteAPI.getUserId(username);
            console.log(userId);
            if (!userId.hasOwnProperty('success')) {
                const userData = await fortniteAPI.getUserData(userId);
                console.log(userData)
                this.setState({
                    displaySpinner: false,
                    displayData: true,
                    displaySearch: false,
                    displayUnknown: false,
                    playerData: userData
                })
            } else {
                console.log('userId.error', userId.error)
                this.setState({
                    displaySpinner: false,
                    displayData: false,
                    displaySearch: true,
                    displayUnknown: true
                })
            }
        }
    }

    backToSearch() {
        this.setState({
            displaySpinner: false,
            displayData: false,
            displaySearch: true
        })
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.getUserData();
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.displaySearch && <div className="form">
                    <div className="center">
                        <div className="skinImage"><img src="/skin.webp" /></div>
                        {this.state.displayUnknown && <h1 id="lifeWasted">User not found</h1>}
                        <input className="fortniteInput" type="text" placeholder="Insert Username" name="username" value={this.state.username} onChange={this.updateStateUsername} onKeyPress={this.handleKeyPress} />
                        <button className="fortniteButton" onClick={this.getUserData}>Search</button>
                    </div>
                </div>
                }
                <Spinner display={this.state.displaySpinner} />
                <div className="center">
                    <PlayerData display={this.state.displayData} playerData={this.state.playerData} />
                    {this.state.displayData && <button id="errorButton" onClick={this.backToSearch}>Return to serach</button>}
                </div>
            </div>
        )
    }

}