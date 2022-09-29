import moment from "moment";

// Calculate the remaining time to endthe fundraising
export const getRemainingTime = (endingDate) => {
    // endingDate = '2022-09-28';
    var timeDiff = moment(endingDate).diff(moment(), 'days');
    if (timeDiff === 0) {
        timeDiff = moment(endingDate).diff(moment(), 'hours');
        if (timeDiff === 0) {
            timeDiff = moment(endingDate).diff(moment(), 'minutes');
            if (timeDiff === 0) {
                timeDiff = moment(endingDate).diff(moment(), 'seconds');
                return timeDiff + ' second(s)';
            }
            return timeDiff + ' minute(s)';
        }
        return timeDiff + ' hour(s)';
    }
    return timeDiff + ' day(s)';

}