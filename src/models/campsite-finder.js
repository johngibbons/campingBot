import mongoose from 'mongoose';

const CampsiteFinderSchema = new mongoose.Schema(
  {
    campgroundId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campgrounds',
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
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
      enum: ['NEXT_SIX_MONTHS', 'SPECIFIC_DATES'],
      default: 'NEXT_SIX_MONTHS'
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
  },
  { timestamps: true }
);

export default mongoose.model('CampsiteFinders', CampsiteFinderSchema);
