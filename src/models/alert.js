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

export const ALERT_TYPES = {
  GENERAL_AVAILABILITY: 'GENERAL_AVAILABILITY',
  SPECIFIC_TRIP: 'SPECIFIC_TRIP'
};

const AlertSchema = new mongoose.Schema(
  {
    alertType: {
      type: String,
      enum: Object.values(ALERT_TYPES),
      required: true
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
      type: Date
    },
    endDate: {
      type: Date
    },
    nightsOfTheWeekToIncludeInAlert: {
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
