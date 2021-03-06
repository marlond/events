# events

> An events management single page web app

[![travis build](https://img.shields.io/travis/schiehll/events.svg?style=flat-square)](https://travis-ci.org/schiehll/events)
[![Coveralls branch](https://img.shields.io/coveralls/schiehll/events/master.svg?style=flat-square)](https://coveralls.io/github/schiehll/events?branch=master)

## tecnologies

- Webpack
- Babel (ES6/ES7)
- React
- Redux
- React-Router
- GraphQL
- JWT
- PostCSS
- CSSModules

## ui

- Material-ui

## test

- AVA

## how to login

There are 5 users in the database. Each one has an email that fallows this pattern:

```js
user<i>@email.com
//i starts in 1
```
The password for all of then is `secret`.

So if you wanna login as user2 you should use `user2@email.com` as email and `secret` as password.