require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/name', function (req, res) {
  res.send('<h2>siddharth singh</h2>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT} `);
});

const githubdata = {
  login: 'sid1552',
  id: 115172501,
  node_id: 'U_kgDOBt1klQ',
  avatar_url: 'https://avatars.githubusercontent.com/u/115172501?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/sid1552',
  html_url: 'https://github.com/sid1552',
  followers_url: 'https://api.github.com/users/sid1552/followers',
  following_url: 'https://api.github.com/users/sid1552/following{/other_user}',
  gists_url: 'https://api.github.com/users/sid1552/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/sid1552/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/sid1552/subscriptions',
  organizations_url: 'https://api.github.com/users/sid1552/orgs',
  repos_url: 'https://api.github.com/users/sid1552/repos',
  events_url: 'https://api.github.com/users/sid1552/events{/privacy}',
  received_events_url: 'https://api.github.com/users/sid1552/received_events',
  type: 'User',
  site_admin: false,
  name: 'Siddharth Singh',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 17,
  public_gists: 0,
  followers: 1,
  following: 7,
  created_at: '2022-10-06T15:27:27Z',
  updated_at: '2023-12-14T03:56:42Z',
};

app.get('/github', function (req, res) {
  res.json(githubdata);
});
