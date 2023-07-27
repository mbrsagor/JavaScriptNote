function absoluteUrl(url) {
    if (!url) return url;
    const protocol = url.toLowerCase().split(':')[0];
    if (['http', 'https', 'file', 'data'].indexOf(protocol) >= 0) return url;

    if (url.indexOf('//') === 0) {
      return location.protocol + url;
    } else if (url[0] === '/') {
      return `${location.protocol}//${location.host}${url}`;
    } else {
      return `${baseUrl()}/${url}`;
    }
  }

