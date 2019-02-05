This queueing engine is based on [bull](https://github.com/OptimalBits/bull) and relies
on an available redis instance

## Initial setup
1. Pull [Redis docker image](https://hub.docker.com/_/redis)
```
$ docker pull redis
```

1. Start a local redis instance
```
$ docker run --name some-redis -d redis
```

1. Clone [share-red-docker](https://github.com/h-parekh/share-red-docker), build it and start an instance over port 1880

1. Access http://127.0.0.1:1880 and setup a project with [share-red-flows:add-http-nodes](https://github.com/share-research/share-red-flows/tree/add-http-nodes) branch

## Running the engine
```
$ npm start
```

## Expected behavior
* Index.js will add a new job to the bull queue every 10 secs
* It's processor will send the job to share-red-docker instance
* You should see a job completion message
```
Job 16 is done
[ { givenName: 'Samuel', familyName: 'Sharpe' },
  { givenName: 'Joseph', familyName: 'Bonomi' } ]
```
