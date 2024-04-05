document.addEventListener('DOMContentLoaded', function () {
    // Function to get UTM parameters from the URL
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

    // If there are UTM parameters present, append them to all internal links
    if (utmString) {
        var links = document.querySelectorAll('a');
        links.forEach(link => {
            var isInternalLink = link.href && link.hostname === window.location.hostname;
            if (isInternalLink && !link.href.includes('#')) { // Exclude anchor links
                link.href += (link.href.includes('?') ? '&' : '?') + utmString;
            }
        });
    }
});
