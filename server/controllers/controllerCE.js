import {dummyEvents} from '../models/dummyEvents';
import {dummyCenters} from '../models/dummyCenters';


export default class Events {

  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  createEvent(info) {
    const id = (dummyEvents[dummyEvents.length - 1].eventId) + 1;
    const newEvent = {
      eventId: id,
      eventType: info.type,
      eventName: info.name,
      Location: info.location,
      guestNo: info.guestNo,
      eventDate: info.eventDate,
      facility: info.facility
    };
    console.log(newEvent);
    dummyEvents.push(newEvent);
    this.res.status(201).json({val: newEvent});
  }

  //this will return all the events in dummy data
  getAllEvents() {
    this.res.status(200).json({val: dummyEvents});
  }
  deleteEvent(id) {
    const matchedIndex = dummyEvents.findIndex(e => e.eventId === parseInt(id, 10));
    dummyEvents.splice(matchedIndex, 1);
    this.res.status(200).json({message: 'Your event has been deleted'});
  }

  //modify an event based on 
  modifyEvent(id, data) {
    //matches an index of the input id
    const matchedIndex = dummyEvents.findIndex(e => e.eventId === parseInt(id, 10));
    dummyEvents[matchedIndex].eventType = data.type;
    dummyEvents[matchedIndex].eventName = data.name;
    dummyEvents[matchedIndex].Location = data.location;
    dummyEvents[matchedIndex].guestNo = data.guestNo;
    dummyEvents[matchedIndex].eventDate = data.date;
    dummyEvents[matchedIndex].facility = data.facility;
    this.res.status(200).json(dummyEvents[matchedIndex]);
  }  

  //get a centers details
  getDetails(id) {
    const matched = dummyEvents.filter(e => e.eventId === parseInt(id, 10));
    console.log(matched);
    this.res.status(200).json({val: matched});
  }
  addCenter(info) {
    const id = (dummyCenters[dummyCenters.length - 1].centerId) + 1;
    const newCenter = {
      centerId: id,
      centerName : info.name,
      Location: info.location,
      capacity: info.capacity,
      facility: info.facility
    };
    console.log(newCenter);
    dummyCenters.push(newCenter);
    this.res.status(201).json({val: newCenter});    
  }
  getAllCenters(){
    this.res.status(200).json({val: dummyCenters});
  }
  modifyCenter(id, info){
    const matchedIndex = dummyCenters.findIndex(c => c.centerId === parseInt(id,10));
    dummyCenters[matchedIndex].centerName = info.name;
    dummyCenters[matchedIndex].Location = info.location;
    dummyCenters[matchedIndex].capacity = info.capacity;
    dummyCenters[matchedIndex].facility = info.facility;
    this.res.status(200).json(dummyCenters[matchedIndex]);
  }
  deleteCenter(id){
    const matchedIndex = dummyCenters.findIndex(c => c.centerId === parseInt(id, 10));
    dummyCenters[matchedIndex].centerName = null;
    dummyCenters[matchedIndex].Location = null;
    dummyCenters[matchedIndex].capacity = null;
    dummyCenters[matchedIndex].facility = null;
  }
}

 