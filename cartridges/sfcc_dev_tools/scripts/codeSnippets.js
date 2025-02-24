'use strict';

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function parseDate(dateString) {
    return new Date(dateString);
}

module.exports = {
    formatCurrency: formatCurrency,
    parseDate: parseDate
};
