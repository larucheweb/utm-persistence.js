document.addEventListener('DOMContentLoaded', function () {
    function getUTMParams() {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
            params[key] = value;
        });
        return params;
    }

    var utmParams = getUTMParams();
    var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    var utmString = Object.keys(utmParams)
        .filter(key => utmKeys.includes(key) && utmParams[key])
        .map(key => `${key}=${utmParams[key]}`)
        .join('&');

    if (utmString) {
        var links = document.querySelectorAll('a');
        links.forEach(link => {
            var url = new URL(link.href, window.location.origin);
            var isInternalLink = url.hostname === window.location.hostname;
            if (!url.href.includes('#')) { // Continue to exclude anchor links
                link.href += (url.href.includes('?') ? '&' : '?') + utmString;
            }
        });
    }
});
