const addDays = require('date-fns/addDays');

function createPeriod(daysCount) {
    let begin = new Date();
    begin.setHours(0, 0, 0, 0);
    begin = addDays(begin, -daysCount + 1);

    const end = new Date();
    end.setHours(23, 59, 59, 0);

    const period = {
        begin,
        end,
    };

    return period;
}

module.exports = { createPeriod };
