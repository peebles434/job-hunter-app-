//   Takes date ad was posted, manipulates into date(), compares with current date().
export const findDaysAgo = (job) => {
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const isMonthInt = (element) => {
    return element == job.job.created_at.substring(4, 7);
  };

  let day = parseInt(job.job.created_at.substring(8, 10));
  let month = monthArr.findIndex(isMonthInt);
  let year = parseInt(job.job.created_at.substring(24, 28));

  let postedDate = new Date(year, month, day).getTime();
  let today = new Date().getTime();
  let difference = today - postedDate;
  let daysAgo = Math.floor(difference / 1000 / 60 / 60 / 24);
  if (daysAgo === 0) {
    return 'Posted Today!';
  } else if (daysAgo === 1) {
    return 'Posted Yesterday';
  } else {
    return `Posted ${daysAgo} days ago`;
  }
};

//   Takes company_url string from github jobs and returns only the url
export const linkify = (job) => {
  if (job.job.company_url) {
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return job.job.company_url.replace(urlRegex, function (url) {
      return url;
    });
  }
};
