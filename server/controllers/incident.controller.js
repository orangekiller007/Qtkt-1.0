const mongoose = require('mongoose');
const Incident = mongoose.model('Incident');
const _ = require('lodash');


module.exports.createincident = (req, res, next) => {
    var incident = new Incident();
    incident.ticketid = req.body.ticketid;
    incident.issue = req.body.issue;
    incident.summary = req.body.summary;
    incident.severity = req.body.severity;
    incident.internal = req.body.internal;
    incident.submittedby = req.body.submittedby;
    incident.updated = req.body.updated;
    incident.category = req.body.category;
    incident.subcategory = req.body.subcategory;
    incident.assignedto = req.body.assignedto;
    incident.comments = req.body.comments;
    incident.state = req.body.state;


    incident.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //if (err.code == 11000)
              //  res.status(422).send(['Duplicate email adrress found.']);
            //else
                return next(err);
        }

    });
}


module.exports.showincident = (req, res, next) =>{
    Incident.find(//{ _id: req._id },
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Ticket record not found.' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    );
}

module.exports.deleteincident= (req, res, next) =>{
 /*   Incident.remove({ _id: req.body._id },
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Cannot Delete Incident' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    );*/

    Incident.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
        })

}
























































