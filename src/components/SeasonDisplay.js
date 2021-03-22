import React from 'react'
const seasonConfig = {
    winter: {
        text: "Winter",
        iconName: "snowflake"
    },
    summer: {
        text: "Summer",
        iconName: "sun"
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }

};
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div>
            <i className={`${iconName} icon`}></i>
            <div>Season Lat {props.lat}</div>
            <div>Weather {season}</div>
            <i className={`${iconName} icon`}></i>
        </div>
    )
};
export default SeasonDisplay