const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampsiteFinderSchema = new Schema({
  campgroundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campgrounds"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isWeekendsOnly: {
    type: Boolean,
    default: true
  },
  isSendingEmails: {
    type: Boolean,
    default: false
  },
  emailAddresses: [String],
  datesAvailable: [{}],
  dateOption: {
    type: String,
    enum: ["NEXT_SIX_MONTHS", "SPECIFIC_DATES"],
    default: "NEXT_SIX_MONTHS"
  },
  siteCode: {
    type: String
  },
  startDate: {
    type: Date,
    default: null
  },
  endDate: {
    type: Date,
    default: null
  },
  lastCheckedAt: {
    type: Date
  }
});

CampsiteFinderSchema.pre("findOneAndUpdate", function() {
  this.update({}, { $set: { updatedAt: new Date() } });
});

CampsiteFinderSchema.post("findOneAndUpdate", result => {
  // update scraping settings here
});

CampsiteFinderSchema.post("save", (doc, next) => {
  // start scraping loop here
  next();
});

module.exports = mongoose.model("CampsiteFinders", CampsiteFinderSchema);
