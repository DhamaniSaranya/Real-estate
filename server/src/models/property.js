const mongoose = require('mongoose');
const sequencing = require('./sequencing');

const propertySchema = new mongoose.Schema({
  // first
  property: {
    type: String,
  },
  negotable: {
    type: String,
  },
  price: {
    type: Number,
  },
  ownership: {
    type: String,
  },
  property_age: {
    type: String,
  },
  property_approved: {
    type: String,
  },
  property_description: {
    type: String,
  },
  bank_loan: {
    type: String,
  },
  
  // Second 
  length: {
    type: Number,
  },
  breadth: {
    type: String,
  },
  total_area: {
    type: Number,
  },
  area_unit: {
    type: String,
  },
  no_of_bhk: {
    type: Number,
  },
  no_of_floor: {
    type: Number,
  },
  attached: {
    type: String,
  },
  western_tiolet: {
    type: String,
  },
  furnished: {
    type: String,
  },
  car_parking: {
    type: String,
  },
  lift: {
    type: String,
  },
  car_parking: {
    type: String,
  },
  lift: {
    type: String,
  },
  electricity: {
    type: String,
  },
  facing: {
    type: String,
  },

  // Third
  name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  posted_by: {
    type: String,
  },
  sale_type: {
    type: String,
  },
  featured_package: {
    type: String,
  },
  ppd_package: {
    type: String,
  },

  // Fourth
  email: {
    type: String,
    required:true,
  },
  city: {
    type: String,
  },
  area: {
    type: Number,
  },
  pincode: {
    type: Number,
  },
  address: {
    type: String,
  },
  landmark: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  _id: Number
});

propertySchema.pre('save', function(next) {
  let doc = this;
  sequencing.getSequenceNextValue('property_id').
  then(counter => {
    // console.log("asdasd", counter);
    if(!counter) {
      sequencing.insertCounter('property_id')
      .then(counter => {
        doc._id = counter;
        // console.log(doc);
        next();
      })
      .catch(error => next(error))
    } else {
      doc._id = counter;
      next();
    }
  })
  .catch(error => next(error))
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;