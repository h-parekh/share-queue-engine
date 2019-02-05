var Queue = require('bull');
const got = require('got');

var crossrefFlowQueue = new Queue('Process harvest-flows', 'redis://127.0.0.1:6379');

crossrefFlowQueue.process(function(job, done){
  got(job.data.inject_url, { json: true }).then(response => {
    console.log("Job", job.id, "is done");
    console.log(response.body.creators);
  }).catch(error => {
    console.log(error.response.body);
  });
  done();
});

function newJob (){
 crossrefFlowQueue.add({inject_url: 'http://127.0.0.1:1880/crossref-flow'});
}

setInterval(newJob, 10000);
