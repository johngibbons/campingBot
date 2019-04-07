import mongoose from 'mongoose';

export const DAYS_OF_THE_WEEK = {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

const AlertSchema = new mongoose.Schema(
  {
    alertType: {
      type: String,
      enum: ['SPECIFIC_TRIP', 'GENERAL_AVAILABILITY']
    },
    campgrounds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Campgrounds',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    daysOfTheWeek: {
      type: [String],
      enum: Object.values(DAYS_OF_THE_WEEK)
    },
    minNumNights: {
      type: Number,
      min: 1
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isSendingEmails: {
      type: Boolean,
      default: false
    },
    emailAddresses: [String],
    lastCheckedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

export default mongoose.model('Alerts', AlertSchema);
