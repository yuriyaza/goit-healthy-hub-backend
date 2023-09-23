const format = require('date-fns/format');

function createGraphLabels(beginDate, endDate) {
    const beginMonthLong = format(beginDate, 'MMMM');
    const endMonthLong = format(endDate, 'MMMM');
    const displayMonthLong = beginMonthLong === endMonthLong ? beginMonthLong : `${beginMonthLong}-${endMonthLong}`;

    const beginMonthShort = format(beginDate, 'MMM');
    const endMonthShort = format(endDate, 'MMM');
    const displayMonthShort = beginMonthShort === endMonthShort ? beginMonthShort : `${beginMonthShort}-${endMonthShort}`;

    const beginYear = format(beginDate, 'yyyy');
    const endYear = format(endDate, 'yyyy');
    const displayYear = beginYear === endYear ? beginYear : `${beginYear}-${endYear}`;

    const labels = {
        monthLong: displayMonthLong,
        monthShort: displayMonthShort,
        year: displayYear,
    };

    return labels;
}

module.exports = { createGraphLabels };
