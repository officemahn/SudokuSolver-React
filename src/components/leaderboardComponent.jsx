import React, { Component } from 'react';


class LeaderBoard extends Component {

    getLeaderboardFromDB(){
        return []
    }
    arrayOfObjects = [
        { coffee: "Americano", size: "Medium" },
        { coffee: "Espresso", size: "Single" },
    ];
    render() {
        return <div>
                <div>
                    <table border="2"
                            summary="leaderboard">
                    <tbody>
                        <tr><td>hello, this is the leaderboard</td></tr>
                        {/* {this.arrayOfObjects.map(({name, score}) => (
                            <tr key={name}><td key={name}>{name}</td><td key={name}>{score}</td></tr>
                        ))} */}
                    </tbody>
                    </table>
                </div>
        </div>
    }
}

export default LeaderBoard;