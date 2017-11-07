var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var path = require('path');
var passport = require('passport');
var mongoose = require('mongoose');
var moment = require('moment-timezone');

var api_key = "insert api here";
var domain = "insert domain here";
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/uploads'),
    filename: function(req, file, cb){
        var extArray = file.mimetype.split('/');
        var extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + Date.now()+ '.' + extension);
    }
})
var upload = multer({storage: storage});

var User = require('../models/user.js');
var Worker = require('../models/worker.js');
var Food = require('../models/food.js');
var Drink = require('../models/drink.js');
var Picture = require('../models/pictures.js');
var BannerPicture = require('../models/bannerpicture.js');
var Texts = require('../models/texts.js');
var Event = require('../models/event.js');
var DesignPicture = require('../models/designPics.js');
var LandingText = require('../models/landingText.js');
var Booking = require('../models/booking.js');
var ClosedTimes = require('../models/closedTimes.js');
//email sending

router.post('/email/feedback', function(req, res){
    if(req.body.lang === "ee"){
        var feedbackToCustomer = {
            from: "Fii restoran<info@fiiresto.ee>",
            to:  req.body.email,
            subject: "Teie tagasiside jõudis meieni!",
            html: '<!DOCTYPE html> \
                    <html>\
                     <head>\
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                      <title>Fii restoran, broneeringu kinnitus</title>\
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                    </head>\
                    <body style="margin: 0; padding: 0;">\
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                           <tr><td style="color:#500050; font-size:24px;">Aitäh, '+req.body.name+'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">Teie tagasiside on jõudnud meieni!</td></tr>\
                           <tr><td><b>Emaili aadress: </b> '+req.body.email+'</td></tr>\
                           <tr><td><b>Sõnumi sisu: </b> '+req.body.message+'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">Vastame Teile esimesel võimalusel.</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Ilusat päeva soovides</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Teie Fii restoran</td></tr>\
                      </table>\
                    </body>\
                    </html>'
        }
    }
    if(req.body.lang === "en"){
        var feedbackToCustomer = {
            from: "Fii restaurant<info@fiiresto.ee>",
            to: req.body.email,
            subject: "We received your feedback!",
            html: '<!DOCTYPE html> \
                    <html>\
                     <head>\
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                      <title>Fii restoran, broneeringu kinnitus</title>\
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                    </head>\
                    <body style="margin: 0; padding: 0;">\
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                           <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name+',</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">We have received your feedback!</td></tr>\
                           <tr><td><b>Email address: </b> '+req.body.email+'</td></tr>\
                           <tr><td><b>Message: </b> '+req.body.message+'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">We will answer you as soon as possible.</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Have a very nice day,</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Your Fii restaurant</td></tr>\
                      </table>\
                    </body>\
                    </html>'
        }
    }
    if(req.body.lang === "fi"){
        var feedbackToCustomer = {
            from: "Fii restaurant<info@fiiresto.ee>",
            to: req.body.email,
            subject: "Olemme saanneet palautteenne!",
            html: '<!DOCTYPE html> \
                    <html>\
                     <head>\
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                      <title>Fii restoran, broneeringu kinnitus</title>\
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                    </head>\
                    <body style="margin: 0; padding: 0;">\
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                           <tr><td style="color:#500050; font-size:24px;">Kiitos, '+req.body.name+'!</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">Olemme saanneet palautteenne!</td></tr>\
                           <tr><td><b>Sähköpostiosoite: </b> '+req.body.email+'</td></tr>\
                           <tr><td><b>Viestisi: </b> '+req.body.message+'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">Vastaamme mahdollisimman pian.</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Ystävällisin terveisin</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Fii ravintolanne</td></tr>\
                      </table>\
                    </body>\
                    </html>'
        }
    }
    if(req.body.lang === "ru"){
        var feedbackToCustomer = {
            from: "Fii restaurant<info@fiiresto.ee>",
            to: req.body.email,
            subject: "We received your feedback!",
            html: '<!DOCTYPE html> \
                    <html>\
                     <head>\
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                      <title>Fii restoran, broneeringu kinnitus</title>\
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                    </head>\
                    <body style="margin: 0; padding: 0;">\
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                           <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name+',</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 20px;">We have received your feedback!</td></tr>\
                           <tr><td><b>Email address: </b> '+req.body.email+'</td></tr>\
                           <tr><td><b>Message: </b> '+req.body.message+'</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;padding-top:20px;padding-bottom: 50px;">We will answer you as soon as possible.</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Have a very nice day,</td></tr>\
                           <tr><td style="color:#500050; font-size:24px;">Your Fii restaurant</td></tr>\
                      </table>\
                    </body>\
                    </html>'
        }
    }



    //
    var feedbackToResto = {
        from: "Tagasiside liides<info@fiiresto.ee>",
        to: "oskarmartinco@gmail.com, wpihor@gmail.com, sophia@tartuhotels.ee, info@fiiresto.ee, annike.tolmats@tartuhotels.ee",
        subject: "Uus tagasiside fiiresto.ee kaudu",
        html: '<!DOCTYPE html> \
                <html>\
                 <head>\
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                  <title>Tagasiside Fii resto kaudu</title>\
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                </head>\
                <body style="margin: 0; padding: 0;">\
                	<table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                		 <tr><td><h3 style="color:#500050">Lisandunud on uus tagasiside</h3></td></tr>\
                		 <tr><td><b>Isiku nimi: </b>'+req.body.name+'</td></tr>\
                		 <tr><td><b>Isiku email: </b>'+req.body.email+'</td></tr>\
                		 <tr><td><b>Tagasiside: </b>'+req.body.message+'</td></tr>\
                	</table>\
                </body>\
                </html>'
    }
    mailgun.messages().send(feedbackToCustomer, function(err, body){
        console.log(body);
    })
    mailgun.messages().send(feedbackToResto, function(err, body){
        console.log(body);
        if(err) {
            res.json({
                msg: "there was error sending mail"
            });
        }else{
            res.json({
                msg: "mail was sent"
            })
        }
    });
})
//Time Closing routes
router.post('/times/delete', function(req, res){
    ClosedTimes.remove({
        _id: req.body.id
    }, function(err){
        if(err)res.send(err);
        res.json({
            msg: "closed time was removed"
        })
    })
})
router.post('/times/add', function(req, res){
    var startDate = moment(req.body.date).format('YYYY-MM-DD');
    console.log(startDate);
    var startTime = moment(req.body.start, 'HH:mm:ss').format('HH:mm:ss');
    var startDateTime = startDate+"T"+startTime;

    var endDate = moment(req.body.date).format('YYYY-MM-DD');
    console.log(endDate);
    var endTime = moment(req.body.end, 'HH:mm:ss').format('HH:mm:ss');
    var endDateTime = endDate+"T"+endTime;

    console.log(moment(startDateTime));
    console.log(moment(endDateTime));

    ClosedTimes.create({
        start:  moment(startDateTime),
        end: moment(endDateTime),
        reason: req.body.reason
    }, function(err, response){
        if(err)res.send(err);
        res.json(response);
    })
})
router.get('/times/get', function(req, res){
    ClosedTimes.find(function(err, times){
        if(err)res.send(err);
        var response = [];
        times.forEach(function(element){
            var temp = {};
            temp._id = element._id;
            temp.start = moment(element.start).utcOffset(moment().tz('Europe/Tallinn').format('Z')).format('HH:mm DD-MM-YYYY');
            temp.end = moment(element.end).format('HH:mm DD-MM-YYYY');
            temp.reason = element.reason;
            response.push(temp);

        })
        res.json(response);
    })
})
router.post('/times/validate', function(req, res){
    var counter = 0;
    var date = moment(req.body.date, 'DD MMMM, YYYY').format('YYYY-MM-DD');
    var time = moment(req.body.time, 'HH:mm').format('HH:mm');
    var dateTime = moment(date+"T"+time);
    console.log(dateTime);

    ClosedTimes.find(function(err, times){
        if(err) res.send(err);
        console.log(times);
        times.forEach(function(element){
            var o = moment().tz('Europe/Tallinn').format('Z');
            if(o.substring(0,1) === "+"){
                var offset = parseInt(o.substring(2,3));
            }else{
                var offset = parseInt(o.substring(2,3));
            }

            var date = moment(dateTime).format('YYYY-MM-DD');
            var closedDate = moment(element.end).format('YYYY-MM-DD');
            //var test = parseInt(moment(element.end).format('HH'))+offset;
            //var test2 = parseInt(moment(element.start).format('HH'))+offset;

            //for server
            var test = parseInt(moment(element.end).format('HH'))+offset;
            var test2 = parseInt(moment(element.start).format('HH'))+offset;

            var bookingTime = new Date();
            bookingTime.setHours(parseInt(moment(dateTime).format('HH')));
            bookingTime.setMinutes(parseInt(moment(dateTime).format('mm')));
            bookingTime.setSeconds(0);

            var closedTimeEnd = new Date();
            closedTimeEnd.setHours(test);
            closedTimeEnd.setMinutes(parseInt(moment(element.end).format('mm')));
            closedTimeEnd.setSeconds(0);

            var closedTimeStart = new Date();
            closedTimeStart.setHours(test2);
            closedTimeStart.setMinutes(parseInt(moment(element.start).format('mm')));
            closedTimeStart.setSeconds(0);

            console.log(date);
            console.log(closedDate);
            console.log(bookingTime);
            console.log(closedTimeEnd);
            console.log(closedTimeStart);

            console.log(bookingTime.getHours().toString() + bookingTime.getMinutes().toString());

            if(moment(date).isSame(closedDate)){
                console.log("sama kuupäev");
                if(bookingTime < closedTimeEnd){
                    if(bookingTime > closedTimeStart || 
                        bookingTime.getHours().toString() + bookingTime.getMinutes().toString() === closedTimeStart.getHours().toString() + closedTimeStart.getMinutes().toString()){
                        console.log("See aeg on restorani sulgemise ajal");
                        counter ++;
                    }else{
                        console.log("Selle ajaga on kõik korras");
                    }
                }else{
                    console.log("aeg on pärast closed end time");
                }
            }
        })
        console.log(counter);
        if(counter > 0){
            res.json({
                error: "this date and time are closed"
            })
        }else{
            res.json({
                msg: "This time is available"
            })
        }
    })
})

// Booking routes --------------------
router.post('/booking/delete', function(req, res){
    Booking.remove({
        _id: req.body.id
    }, function(err){
        if(err)res.send(err);
        res.json({
            msg: "booking was deleted"
        })
    })
})
router.post('/booking/add', function(req, res){
    if(req.body.lang === "ee"){
        var testData = {
              from: 'Fii restoran <info@fiiresto.ee>',
              to: req.body.email,
              subject: 'Broneeringu kinnitus',
              html: '<!DOCTYPE html> \
                      <html>\
                       <head>\
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                        <title>Fii restoran, broneeringu kinnitus</title>\
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                      </head>\
                      <body style="margin: 0; padding: 0;">\
                      	<table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                      		 <tr><td style="color:#500050; font-size:24px;">Tere, '+req.body.name+'</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 50px;">Teie broneering on kinnitatud!</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-bottom: 25px;">Broneeringu andmed:</td></tr>\
                      		 <tr><td><b>Broneeringu kuupäev: </b>'+moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('DD/MM/YYYY')+'</td></tr>\
                      		 <tr><td><b>Broneeringu kellaeg: </b>'+req.body.time+'</td></tr>\
                      		 <tr><td><b>Inimeste arv: </b>'+req.body.people.substring(0,2)+'</td></tr>\
                      		 <tr><td><b>Meiliaadress: </b> '+req.body.email+'</td></tr>\
                      		 <tr><td><b>Telefoninumber: </b> '+req.body.phone+'</td></tr>\
                             <tr><td><b>Lisainfo: </b> '+req.body.info+'</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top:50px;">Ilusat päeva soovib</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;">Teie Fii restoran</td></tr>\
                      	</table>\
                      </body>\
                      </html>'
        }
    }
    if(req.body.lang ==="en"){
        var testData = {
              from: 'Fii restaurant <info@fiiresto.ee>',
              to: req.body.email ,
              subject: 'Booking confirmation',
              html: '<!DOCTYPE html> \
                      <html>\
                       <head>\
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                        <title>Fii restoran, broneeringu kinnitus</title>\
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                      </head>\
                      <body style="margin: 0; padding: 0;">\
                      	<table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                      		 <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name+',</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 50px;">Your booking has been confirmed!</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px; padding-bottom: 25px;">Details:</td></tr>\
                      		 <tr><td><b>Date: </b>'+moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('DD/MM/YYYY')+'</td></tr>\
                      		 <tr><td><b>Time: </b>'+req.body.time+'</td></tr>\
                      		 <tr><td><b>Number of people: </b>'+req.body.people.substring(0,2)+'</td></tr>\
                      		 <tr><td><b>Email address: </b> '+req.body.email+'</td></tr>\
                      		 <tr><td><b>Phone number: </b> '+req.body.phone+'</td></tr>\
                             <tr><td><b>Additional information: </b> '+req.body.info+'</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top:50px;">Have a very nice day,</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;">Your Fii restaurant</td></tr>\
                      	</table>\
                      </body>\
                      </html>'
        }
    }
    if(req.body.lang ==="ru"){
        var testData = {
              from: 'Fii restaurant <info@fiiresto.ee>',
              to: req.body.email ,
              subject: 'Booking confirmation',
              html: '<!DOCTYPE html> \
                      <html>\
                       <head>\
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                        <title>Fii restoran, broneeringu kinnitus</title>\
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                      </head>\
                      <body style="margin: 0; padding: 0;">\
                      	<table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                      		 <tr><td style="color:#500050; font-size:24px;">Hello '+req.body.name+',</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 50px;">Your booking has been confirmed!</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px; padding-bottom: 25px;">Details:</td></tr>\
                      		 <tr><td><b>Date: </b>'+moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('DD/MM/YYYY')+'</td></tr>\
                      		 <tr><td><b>Time: </b>'+req.body.time+'</td></tr>\
                      		 <tr><td><b>Number of people: </b>'+req.body.people.substring(0,2)+'</td></tr>\
                      		 <tr><td><b>Email address: </b> '+req.body.email+'</td></tr>\
                      		 <tr><td><b>Phone number: </b> '+req.body.phone+'</td></tr>\
                             <tr><td><b>Additional information: </b> '+req.body.info+'</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top:50px;">Have a very nice day,</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;">Your Fii restaurant</td></tr>\
                      	</table>\
                      </body>\
                      </html>'
        }
    }
    if(req.body.lang ==="fi"){
        var testData = {
              from: 'Fii restaurant <info@fiiresto.ee>',
              to: req.body.email ,
              subject: 'Varausvahvistus',
              html: '<!DOCTYPE html> \
                      <html>\
                       <head>\
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                        <title>Fii restoran, broneeringu kinnitus</title>\
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                      </head>\
                      <body style="margin: 0; padding: 0;">\
                      	<table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                      		 <tr><td style="color:#500050; font-size:24px;">Hei, '+req.body.name+'!</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top: 50px; padding-bottom: 50px;">Teidän varaus on vahvistettu!</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px; padding-bottom: 25px;">Varaustiedot:</td></tr>\
                      		 <tr><td><b>Varauksen päivämäärä: </b>'+moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('DD/MM/YYYY')+'</td></tr>\
                      		 <tr><td><b>Varauksen kellonaika: </b>'+req.body.time+'</td></tr>\
                      		 <tr><td><b>Henkilöiden lukumäärä: </b>'+req.body.people.substring(0,2)+'</td></tr>\
                      		 <tr><td><b>Sähköpostiosoite: </b> '+req.body.email+'</td></tr>\
                      		 <tr><td><b>Puhelinnumero: </b> '+req.body.phone+'</td></tr>\
                             <tr><td><b>Lisätiedot: </b> '+req.body.info+'</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;padding-top:50px;">Ystävällisin terveisin</td></tr>\
                      		 <tr><td style="color:#500050; font-size:24px;">Fii ravintolanne</td></tr>\
                      	</table>\
                      </body>\
                      </html>'
        }
    }
    //,
    var infoToResto = {
        from: 'Broneeringu liides <info@fiiresto.ee>',
        to: "oskarmartinco@gmail.com,  info@fiiresto.ee, annike.tolmats@tartuhotels.ee, sophia@tartuhotels.ee, wpihor@gmail.com",
        subject: 'Saabunud on uus broneering',
        html: '<!DOCTYPE html> \
                <html>\
                 <head>\
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\
                  <title>Fii restoran, broneeringu kinnitus</title>\
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\
                </head>\
                <body style="margin: 0; padding: 0;">\
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="border:none;">\
                       <tr><td><h3 style="color:#500050">Teie restorani on tehtud uus broneering</h3></td></tr>\
                       <tr><td><h3 style="color:#500050">Broneeringu andmed:</h3></td></tr>\
                       <tr><td><b>Broneeringu kuupäev: </b>'+moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('DD/MM/YYYY')+'</td></tr>\
                       <tr><td><b>Broneeringu kellaeg: </b>'+req.body.time+'</td></tr>\
                       <tr><td><b>Inimeste arv: </b>'+req.body.people.substring(0,2)+'</td></tr>\
                       <tr><td><b>Meiliaadress: </b> '+req.body.email+'</td></tr>\
                       <tr><td><b>Kontaktisiku nimi: </b>'+req.body.name+'</td></tr>\
                       <tr><td><b>Telefoninumber: </b> '+req.body.phone+'</td></tr>\
                       <tr><td><b>Lisainfo: </b> '+req.body.info+'</td></tr>\
                       <tr><td><b>Soov liituda uudiskirjaga: </b> '+req.body.newsletter+'</td></tr>\
                       <tr><td><h3 style="color:#500050">NB! Broneering lisandus ka admini liidesesse</h3></td></tr>\
                  </table>\
                </body>\
                </html>'

    }

    mailgun.messages().send(testData, function (error, body) {
      console.log(body);
    });
    mailgun.messages().send(infoToResto, function(error, body){
        console.log(body);
    })
    var date = moment.tz(req.body.date, 'DD MMMM, YYYY', "Europe/Tallinn").format('YYYY-MM-DD');
    var time = moment.tz(req.body.time, 'HH:mm', "Europe/Tallinn").format('HH:mm:ss');
    var dateTime = date+"T"+time;
    Booking.create({
        people: req.body.people,
        date: moment(dateTime),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        info: req.body.info
    }, function(err, booking){
        if(err) res.send(err);
        res.json(booking);
    })

})
router.get('/booking/getall', function(req, res){
    Booking.find(function(err, bookings){
        if(err)res.send(err);
        var perma = {}
        var response = [];
        bookings.forEach(function(element){
            perma = {};
            perma.id = element._id;
            perma.people = element.people;
            perma.name = element.name;
            perma.date = moment.tz(element.date, "YYYY-MM-DD HH:mm:ssZ", "Europe/Tallinn").format("DD-MM-YYYY HH:mm");
            perma.email = element.email;
            perma.phone = element.phone;
            perma.info = element.info;
            response.push(perma);
        })

        res.send(response.reverse());

    })
})
// Landing text routes ----------------
router.post('/landingtext/add', function(req, res){
    LandingText.count({
        place: req.body.place
    }, function(err, count){
        if(count == 0){
            LandingText.create({
                place: req.body.place,
                text: req.body.text,
                lan: req.body.lan
            }, function(err, newItem){
                if(err) res.send(err);
                res.json(newItem);
            })
        }else{
            LandingText.findOne({
                place: req.body.place,
                lan: req.body.lan
            }, function(err, landingText ){
                if(err) res.send(err);
                landingText.update({
                    text: req.body.text
                }, function(err){
                    if(err) res.send(err);
                    res.json(landingText);
                })
            })
        }
    })
})
router.post('/landingText/get', function(req, res){
    LandingText.count({
        place: req.body.place,
        lan: req.body.lan
    }, function(err, count){
        if(err) res.send(err)
        if(count == 0){
            res.json({
                msg: "There is no item in the DB"
            })
        }else{
            LandingText.findOne({
                place: req.body.place,
                lan: req.body.lan
            }, function(err, text){
                if(err) res.send(err);
                res.json(text);
            })
        }
    })
})
// Design Picture routes --------------
router.post('/design/add', function(req, res){
    DesignPicture.count({
        block: req.body.menuPosition
    }, function(err, count){
        if(err) res.send(err);
        console.log(count);
        if(count === 0){
            DesignPicture.create({
                picturePath: req.body.path,
                block: req.body.menuPosition
            }, function(err){
                if(err) res.send(err);
                res.json({
                    path: req.body.path
                })
            })
        }else{
            DesignPicture.findOne({
                block: req.body.menuPosition
            }, function(err, picture){
                if(err)res.send(err);
                picture.update({
                    picturePath: req.body.path
                }, function(err){
                    if(err)res.send(err);
                    res.json({
                        msg:"Picture was updated"
                    })
                })
            })
        }
    })

})
router.post('/design/get', function(req, res){
    DesignPicture.findOne({
        block: req.body.menuPosition
    }, function(err, picture){
        if(err) res.send(err);
        res.json(picture);
    })
})

// Event page routes ------------------
router.post('/event/add', function(req, res){
    console.log(req.body);
    var date = moment(req.body.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    var time = moment(req.body.time, 'HH:mm:ss').format('HH:mm:ss');
    console.log("This is the moment converted date: " + date);
    console.log("This is the moment converted time: " +time);
    var dateTime = date +"T" + time;
    console.log("This is the datetime: " + dateTime);
    Event.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        date: moment(dateTime),
        descEng: req.body.descEng,
        nameEng: req.body.nameEng,
        imageEng: req.body.imageEng,
        descFin: req.body.descFin,
        nameFin: req.body.nameFin,
        imageFin: req.body.imageFin,
        descRus: req.body.descRus,
        nameRus: req.body.nameRus,
        imageRus: req.body.imageRus
    }, function(err, ev){
        if(err) res.send(err);
        res.json(ev);
    })

})
router.post('/event/update', function(req, res){
    var date = moment(req.body.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    var time = moment(req.body.time, 'HH:mm:ss').format('HH:mm:ss');
    var dateTime = date +"T" + time;
    Event.findOne({
        _id: req.body.id
    }, function(err, response){
        if(err) res.send(err);
        response.update({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            date: dateTime,
            descEng: req.body.descEng,
            nameEng: req.body.nameEng,
            imageEng: req.body.imageEng,
            descFin: req.body.descFin,
            nameFin: req.body.nameFin,
            imageFin: req.body.imageFin,
            descRus: req.body.descRus,
            nameRus: req.body.nameRus,
            imageRus: req.body.imageRus

        }, function(err){
            if(err)res.send(err);
            res.json({
                msg: "event was updated"
            })
        })
    })
})

router.get('/event/delete/:id', function(req, res){
    Event.remove({
        _id:req.params.id
    }, function(err){
        if(err) res.send(err);
        res.json({
            msg: "event was removed"
        })
    })
})
router.post('/event/findbyid', function(req, res){
    Event.findOne({
        _id: req.body.id
    }, function(err, response){
        if(err)res.send(err);
        console.log(response.date);
        var perma = {};
        perma.id = response._id;
        perma.name = response.name;
        perma.description = response.description;
        perma.nameEng = response.nameEng;
        perma.descEng = response.descEng;
        perma.nameFin = response.nameFin;
        perma.descFin = response.descFin;
        perma.nameRus = response.nameRus;
        perma.descRus = response.descRus;
        perma.image = response.image;
        perma.imageEng = response.imageEng;
        perma.imageFin = response.imageFin;
        perma.imageRus = response.imageRus;
        perma.date = moment.tz(response.date, "YYYY-MM-DD HH:mm:ssZ", "Europe/Tallinn").format("YYYY-MM-DD");
        perma.time = moment.tz(response.date, "YYYY-MM-DD HH:mm:ssZ", "Europe/Tallinn").format("YYYY-MM-DDTHH:mm:ss");
        res.json(perma);
    })
})

router.get('/event/get', function(req, res){
    Event.find(function(err, events){
        if(err) res.send(err);
        var perma = {}
        var response = [];
        events.forEach(function(element){
            perma = {};
            perma.id = element._id;
            perma.name = element.name;
            perma.description = element.description;
            perma.date = moment.tz(element.date, "YYYY-MM-DD HH:mm:ssZ", "Europe/Tallinn").format("YYYY-MM-DD");
            perma.nameEng = element.nameEng;
            perma.descEng = element.descEng;
            perma.nameFin = element.nameFin;
            perma.descFin = element.descFin;
            perma.nameRus = element.nameRus;
            perma.descRus = element.descRus;
            response.push(perma);
        })

        res.send(response.reverse());
    })
})
router.get('/event/getnext', function(req, res){
    Event.find(function(err, events){
        if(err) res.send(err);
        var perma = {}
        var response = [];
        events.forEach(function(element){
            perma = {};
            if(moment(element.date).isBetween(moment(), moment().add('7', 'days'))){
                perma.id = element._id;
                perma.name = element.name;
                perma.description = element.description;
                perma.descEng = element.descEng;
                perma.nameEng = element.nameEng;
                perma.nameFin = element.nameFin;
                perma.descFin = element.descFin;
                perma.nameRus = element.nameRus;
                perma.descRus = element.descRus;
                perma.image = element.image;
                perma.imageEng = element.imageEng;
                perma.imageRus = element.imageRus;
                perma.imageFin = element.imageFin;
                perma.date = moment.tz(element.date, "YYYY-MM-DD HH:mm:ssZ", "Europe/Tallinn").format("DD-MM-YYYY HH:mm");
                response.push(perma);
            }else{
                return;
            }
        })
        res.send(response);
    })
})
router.get('/event/delete', function(req, res){
    Event.find(function(err, events){
        if(err) res.send(err);
        var perma = {}
        var response = [];
        events.forEach(function(element){
            perma = {};
            console.log(moment(element.date).isBefore(moment().subtract('7', 'days')));
            if(moment(element.date).isBefore(moment().subtract('7', 'days'))){
                Event.remove({
                    _id: element._id
                }, function(err){
                    if(err) res.send(err);
                    console.log("event was removed");
                    res.json({
                        msg: "event was removed"
                    })
                })
            }else{
                return;
            }
        })
    })
})
// Landing page text routes ------------------------
router.post('/texts/add', function(req, res){
    Texts.create({
        category: req.body.category,
        title: req.body.title,
        text : req.body.text
    }, function(err, text){
        if(err)res.send(err);
        res.json(text);
    })
})
router.post('/texts/update', function(req, res){
    Texts.findOne({
        category: req.body.category
    }, function(err, text){
        if(err) res.send(err);
        text.update({
            title: req.body.title,
            text : req.body.text
        }, function(err){
            if(err)res.send(err);
            res.json({
                msg: req.body.category + ": Category updated"
            })
        })

    })
})
// Picture routes ---------------------
router.post('/picture/add', upload.single('file'),function(req, res){
    var str = req.file.path;
    var correctPath = str.replace(/\/Users\/Oskar\/Desktop\/Projektid\/Fii\/client\//, '../');
    Picture.create({
        picture:correctPath
    }, function(err){
        if(err) res.send(err);
    })
    res.json(correctPath);
})
//Banner picture routes ----------------------------
router.post('/bannerpicture/add', function(req, res){
    BannerPicture.create({
        picturePath: req.body.picturePath
    }, function(err){
        if(err) res.send(err);
    })
    res.json({
        msg: "Banner picture was added"
    })
})
router.get('/bannerpicture/get', function(req, res){
    BannerPicture.find(function(err, pictures){
        if(err) res.send(err);
        res.send(pictures);
    });
})
// Food routes -----------------------
router.get('/food/starters', function(req, res){
    Food.find({
        course: "Eelroog"
    }, function(err, foods){
        if(err) res.send(err);
        res.json(foods);
    })
})
router.post('/food/update', function(req, res){
    Food.findOne({
        _id: req.body.id
    }, function(err, item){
        if(err) res.send(err);
        item.update({
            name: req.body.name,
            course: req.body.course,
            price: req.body.price,
            description: req.body.description,
            nameEng: req.body.nameEng,
            descEng: req.body.descEng,
            nameFin: req.body.nameFin,
            descFin: req.body.descFin,
            nameRus: req.body.nameRus,
            descRus: req.body.descRus
        }, function(err){
            if(err) res.send(err);
            res.json({
                msg: "Food was updated"
            })
        })
    })
})

router.get('/food/byid/:id', function(req, res){
    Food.findOne({
        _id: req.params.id
    }, function(err, food){
        if(err)res.send(err);
        res.json(food);
    })
})
router.get('/food/main', function(req, res){
    Food.find({
        course: "Pearoog"
    }, function(err, foods){
        if(err) res.send(err);
        res.json(foods);
    })
})
router.get('/food/dessert', function(req, res){
    Food.find({
        course: "Magustoit"
    }, function(err, foods){
        if(err) res.send(err);
        res.json(foods);
    })
})
router.post('/food/add', function(req, res){
    Food.create({
        name: req.body.name,
        course: req.body.course,
        description : req.body.description,
        price : req.body.price,
        nameEng: req.body.nameEng,
        descEng: req.body.descEng,
        nameFin: req.body.nameFin,
        descFin: req.body.descFin,
        nameRus: req.body.nameRus,
        descRus: req.body.descRus
    }, function(err, food){
        if(err)res.send(err);
        res.json(food);
    });
})
router.get('/food/all', function(req, res){
    Food.find(function(err, foods){
        if(err)res.send(err);
        res.json(foods);
    }).sort({_id:-1});
})
router.get('/food/remove/:id', function(req, res){
    Food.remove({
        _id: req.params.id
    }, function(err){
        if(err) res.send(err);
        res.json({
            msg: "food was removed"
        })
    })
})
router.get('/food/:id', function(req, res){
    Food.findOne({
        _id: req.params.id
    }, function(err, food){
        if(err)res.send(err);
        res.json(food);
    })
})

// Drink routes ----------------------
router.post('/drink/add', function(req, res){
    Drink.create({
        name: req.body.name,
        type: req.body.type,
        description : req.body.description,
        price : req.body.price,
        nameEng: req.body.nameEng,
        descEng: req.body.descEng,
        subCategory: req.body.sub,
        nameFin: req.body.nameFin,
        descFin: req.body.descFin,
        nameRus: req.body.nameRus,
        descRus: req.body.descRus
    }, function(err, drink){
        if(err)res.send(err);
        res.json(drink);
    });
})
router.post('/drink/update', function(req, res){
    Drink.findOne({
        _id: req.body.id
    }, function(err, item){
        if(err)res.send(err);
        item.update({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            price: req.body.price,
            nameEng: req.body.nameEng,
            descEng: req.body.descEng,
            nameFin: req.body.nameFin,
            descFin: req.body.descFin,
            nameRus: req.body.nameRus,
            descRus: req.body.descRus
        }, function(err){
            if(err)res.send(err);
            res.json({
                msg: "drink was updated"
            })
        })

    })
})

router.post('/drink/byid', function(req, res){
    Drink.findOne({
        _id:req.body.id
    }, function(err, drink){
        if(err)res.send(err);
        res.json(drink);
    })
})

router.get('/drink/all', function(req, res){
    Drink.find(function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    }).sort({_id:-1});
})
router.get('/drink/wine', function(req, res){
    Drink.find({
        type:"Vein ja mull"
    }, function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})
router.get('/drink/beer', function(req, res){
    Drink.find({
        type: "Lahja alkohol"
    }, function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})
router.get('/drink/cocktail', function(req, res){
    Drink.find({
        type:"Kokteilid"
    },function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})
router.get('/drink/nonalco', function(req, res){
    Drink.find({
        type:"Alkoholivabad joogid"
    },function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})
router.get('/drink/hot', function(req, res){
    Drink.find({
        type:"Kuumad joogid"
    },function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})
router.get('/drink/hardalco', function(req, res){
    Drink.find({
        type:"Kange alkohol"
    },function(err, drinks){
        if(err)res.send(err);
        res.json(drinks);
    })
})

router.get('/drink/remove/:id', function(req, res){
    Drink.remove({
        _id: req.params.id
    }, function(err){
        if(err) res.send(err);
        res.json({
            msg:"Drink was removed"
        })
    })
})
router.get('/drink/:id', function(req, res){
    Drink.findOne({
        _id: req.params.id
    }, function(err, drink){
        if(err)res.send(err);
        res.json(drink);
    })
})

// Worker routes ---------------------
router.post('/add', function(req, res){
    Worker.create({
        name: req.body.name,
        position: req.body.occupation,
        information: req.body.info,
        picture: req.body.picture,
        occupationEng: req.body.occupationEng,
        infoEng: req.body.infoEng,
        occupationFin: req.body.occupationFin,
        infoFin: req.body.infoFin,
        occupationRus: req.body.occupationRus,
        infoRus: req.body.infoRus
    }, function(err, worker){
        if(err) res.send(err);
        res.json(worker);
    })
})
router.post('/worker/getbyid', function(req, res){
    Worker.findOne({
        _id: req.body.id
    }, function(err, response){
        if(err)res.send(err);
        res.json(response);
    })
})
router.post('/worker/update', function(req, res){
    Worker.findOne({
        _id: req.body.id
    }, function(err, worker){
        if(err)res.send(err);
        worker.update({
            name: req.body.name,
            position: req.body.position,
            information: req.body.info,
            infoEng: req.body.engInfo,
            occupationEng: req.body.engPosition,
            infoFin: req.body.finInfo,
            occupationFin: req.body.finPosition,
            infoRus: req.body.rusInfo,
            occupationRus: req.body.rusPosition
        }, function(err){
            if(err)res.send(err);
            res.json({
                msg: "worker was updated"
            })
        })
    })
})
router.get('/all', function(req, res){
    Worker.find(function(err, workers){
        if(err)res.send(err);
        res.json(workers);
    })
})
router.get('/worker/remove/:id', function(req, res){
    Worker.remove({
        _id: req.params.id
    }, function(err){
        if(err) res.send(err);
        res.json({
            msg: "Worker was removed"
        })
    })
})

// Login routes ----------------------
router.post('/register', function(req, res) {
    console.log("We are here");
  User.register(new User({ username: req.body.username }),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.get('/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});


module.exports = router;
