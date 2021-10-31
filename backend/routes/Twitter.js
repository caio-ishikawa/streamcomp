const router        = require('express').Router();
const twitter       = require('twitter');

var client = new twitter({
    consumer_key: 'VhzT7eTQUZEdGtl5FFiMKErwE',
    consumer_secret: '7nQLr8F0JE8t1zyjgaqNa12gHNWbASzWl5dCJOb7xcX1zXvxxC',
    access_token_key: '1054051040658669568-xgDreqCWZSGgEadw4oM3TlHDM0QLqr',
    access_token_secret: 'JbxOVBuKR9Si8iXyI5W2EhuT2RJH8wMxostiY8JKzbQuT',
});

router.get('/get_data', async (req, res) => {
    client.get('search/tweets', {q: "#caioapptest"}, (err, tweets, response) => {
        res.send(tweets);
    });
});

module.exports = router;